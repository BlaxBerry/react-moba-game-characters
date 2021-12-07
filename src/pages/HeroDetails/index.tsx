import React, { useEffect, useState, useMemo } from 'react'
import { useLocation } from 'react-router'
import { heroDetail } from '../../api/index'
import { Toast, Divider, Image, List, Tag, Space, Grid, ImageViewer } from 'antd-mobile'
import { Loading } from '../../components/common/index'

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
    const [viewerImage, setViewerImage] = useState("")
    const [viewerShow, setViewerShow] = useState(false)
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
            const { alias, title, shortBio, roles, enemytips, allytips } = hero
            return ({
                nameEN: alias,
                nameCN: title,
                description: shortBio,
                type: roles,
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


    const tipsLayout = (array: []) => (
        array?.map((item: string, index: number) => (
            <p key={index}
                style={{
                    padding: "0 1rem 0",
                    margin: 0,
                    fontSize: "13px"
                }}
            >
                {item}
            </p>
        ))
    )

    return (
        <>
            {
                loading
                    ? <Loading />
                    : (
                        <>
                            <Image src={skins[0]?.sourceImg} />

                            <Divider style={{ textAlign: "center" }}>
                                <h2 style={{ margin: 0 }}>{hero?.nameCN}</h2>
                                <h4 style={{ margin: 0 }}>{hero?.nameEN}</h4>
                            </Divider>


                            <div className="tags" style={{ textAlign: "center" }}>
                                <Space >
                                    {
                                        hero?.type?.map((item: string, index: number) => (
                                            <Tag color='teal' key={index}>{item}</Tag>
                                        ))
                                    }
                                </Space>
                            </div>


                            <div className="decription">
                                <p style={{ textIndent: "26px" }}>
                                    {hero?.description}
                                </p>
                            </div>


                            <div className="skills">
                                <Divider>
                                    <h3 style={{ margin: 0 }}>技能介绍</h3>
                                </Divider>
                                <List>
                                    {skills?.map((item: any, index: number) => (
                                        <List.Item
                                            key={index}
                                            prefix={
                                                <Image
                                                    src={item.pic}
                                                    style={{ borderRadius: 10 }}
                                                    fit='cover'
                                                    width={50}
                                                    height={50}
                                                />
                                            }
                                            description={
                                                <p style={{ fontSize: "13px" }}>{item.description}</p>
                                            }
                                        >
                                            <b>{item.name}</b>
                                        </List.Item>
                                    ))}
                                </List>
                            </div>


                            <div className="tips">
                                <Divider>
                                    <h3 style={{ margin: 0 }}>注意技巧</h3>
                                </Divider>

                                <Divider contentPosition='left'>
                                    我方 {hero?.nameCN}
                                </Divider>
                                {tipsLayout(hero?.extraInfo2)}


                                <Divider contentPosition='left'>
                                    敌方 {hero?.nameCN}
                                </Divider>
                                {tipsLayout(hero?.extraInfo1)}
                            </div>


                            <div className="skins">
                                <Divider>
                                    <h3 style={{ margin: 0 }}>皮肤展示</h3>
                                </Divider>
                                <Grid columns={3}>
                                    {
                                        skins?.map((item: any, index: number) => (
                                            !item.mainImg
                                                ? null
                                                : (
                                                    <Grid.Item key={index}>
                                                        <Image
                                                            src={item.loadingImg}
                                                            style={{
                                                                width: "100%",
                                                                height: "100%",
                                                            }}
                                                            onClick={() => {
                                                                setViewerImage(item.mainImg)
                                                                setViewerShow(true)
                                                            }}
                                                        />
                                                    </Grid.Item>
                                                )

                                        ))
                                    }
                                </Grid>
                                <ImageViewer
                                    image={viewerImage}
                                    visible={viewerShow}
                                    onClose={() => setViewerShow(false)}
                                />
                            </div>
                        </ >
                    )
            }
        </>
    )
}

export default HeroDetails