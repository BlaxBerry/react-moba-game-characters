import React, { useEffect, useState, useMemo } from 'react'
import { useLocation } from 'react-router'
import { heroDetail } from '../../api/index'
import { Toast, Divider, Image, Tag, Space, Tabs, Badge } from 'antd-mobile'
import { Loading } from '../../components/common/index'
import DetailsSkills from './DetailsSkills'
import DetailsTips from './DetailsTips'
import DetailsSkins from './DetailsSkins'

type skillsType = {
    name: any,
    abilityIconPath: any,
    description: any,
    cooldown: any,
    cost: any,
}
type skinsType = {
    name: any,
    description: any,
    emblemsName: any,
    iconImg: any,
    loadingImg: any,
    mainImg: any,
    sourceImg: any
}


const HeroDetails = () => {

    const { state } = useLocation()
    const [dataSource, setDataSource] = useState<any>({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        const getHeroDetails = async () => {
            try {
                if (state) {
                    const { data } = await heroDetail(state.id)
                    setDataSource(data.data)
                    setLoading(false)
                }
            } catch (error) {
                Toast.show({
                    icon: 'fail',
                    content: '网络连接失败，请稍后刷新',
                })
            }
        }
        getHeroDetails()
    }, [state])

    // 英雄信息
    const hero = useMemo(() => {
        const hero: any = dataSource.hero
        if (dataSource.hero) {
            const { name, alias, title, shortBio, roles, enemytips, allytips } = hero
            return ({
                nameEN: alias,
                nameCN: title,
                nickName: name,
                description: shortBio,
                type: roles.map((item: string) => {
                    switch (item) {
                        case "tank": return "坦克";
                        case "mage": return "法师";
                        case "assassin": return "刺客";
                        case "fighter": return "战士";
                        case "support": return "辅助";
                        case "marksman": return "射手";
                        default: return item;
                    }
                }),
                extraInfo1: enemytips,
                extraInfo2: allytips
            })
        } else {
            return {}
        }
    }, [dataSource])


    // 技能
    const skills = useMemo(() => {
        return dataSource?.spells?.map((item: skillsType) => {
            const { name, abilityIconPath, description, cooldown, cost } = item
            return ({
                pic: abilityIconPath,
                name,
                description,
                cooldown,
                cost
            })
        }) || []
    }, [dataSource])

    // 皮肤
    const skins = useMemo(() => {
        return dataSource?.skins?.map((item: skinsType) => {
            const { name, description, emblemsName, iconImg, loadingImg, mainImg, sourceImg } = item
            return ({
                name,
                description,
                emblemsName, // 皮肤级别
                iconImg,
                mainImg,
                loadingImg, // 竖长图
                sourceImg, // 横长图
            })
        }) || []
    }, [dataSource])


    return (
        <>
            {
                loading
                    ? <Loading />
                    : (
                        <>
                            {/* 1. top pic */}
                            <Image src={skins[0]?.sourceImg} style={{ minWidth: "100%" }} />
                            {/* 2. title */}
                            <Divider style={{ textAlign: "center" }}>
                                <h2 style={{ margin: 0 }}>{hero?.nameCN}</h2>
                                <h4 style={{ margin: 0 }}>{hero?.nickName}</h4>
                            </Divider>

                            {/* 3. tags */}
                            <div className="tags" style={{ textAlign: "center" }}>
                                <Space >
                                    {
                                        hero?.type?.map((item: string, index: number) => (
                                            <Tag color='teal' key={index}>{item}</Tag>
                                        ))
                                    }
                                </Space>
                            </div>

                            {/* 4. background story*/}
                            <div className="decription">
                                <p style={{ textIndent: "26px", padding: "0 1rem" }}>
                                    {hero?.description}
                                </p>
                            </div>

                            {/* 5. tabs  */}
                            <Tabs defaultActiveKey="skills">
                                {/* tips */}
                                <Tabs.Tab title='注意技巧' key='tips'>
                                    <DetailsTips hero={hero} />
                                </Tabs.Tab>

                                {/* skills */}
                                <Tabs.Tab title='技能介绍' key='skills'>
                                    <DetailsSkills skills={skills} />
                                </Tabs.Tab>

                                {/* skins */}
                                <Tabs.Tab title={<Badge content={skins.length || 0}>皮肤展示</Badge>} key='skins'>
                                    <DetailsSkins skins={skins} />
                                </Tabs.Tab>
                            </Tabs>
                        </ >
                    )
            }
        </>
    )
}

export default HeroDetails