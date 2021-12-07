import React, { useState, useEffect, useMemo } from 'react'
// import { useState, useEffect } from 'react'
import { getHeroList as getData } from '../../api'
import { SideBar, Toast } from 'antd-mobile'
import Cards from '../../components/Cards/Cards'
import { Loading } from '../../components/common/index'


const DEFAULT_SILDE_TABS = [
    {
        key: 'all',
        title: '全部',
        badge: "99+",
    },
    {
        key: 'mage',
        title: '法师',
    },
    {
        key: 'marksman',
        title: '射手',
    },
    {
        key: 'assassin',
        title: '刺客',
    },
    {
        key: 'fighter',
        title: '战士',
    },
    {
        key: 'tank',
        title: '坦克',
    }, {
        key: 'support',
        title: '辅助',
    },
]

const Heroes = () => {
    const [data, setData] = useState([])
    const [heroType, setHeroType] = useState('all')
    const [loading, setLoading] = useState(true)

    const getHeroList = async () => {
        try {
            const { data: res } = await getData()
            const all = res.data || []
            // console.log(all);
            setData(all)
            setLoading(false)
        } catch (error) {
            Toast.show({
                icon: 'fail',
                content: '网络连接失败，请稍后刷新',
            })
        }
    }

    const list = useMemo(() => {
        const dataSource = data?.filter((item: any) => {
            const roles: [string] = item.roles
            if (heroType !== "all") {
                return roles.includes(heroType)
            } else {
                return item
            }
        })
        return dataSource.map(item => {
            const { heroId, alias, title, icon, roles, keywords } = item
            return ({
                id: heroId,
                nameEN: alias,
                nameCN: title,
                pic: icon,
                roles,
                keywords,
            })
        })
    }, [data, heroType])
    // console.log(list)


    useEffect(() => {
        getHeroList()
    }, [])

    return (
        <div>
            {/* left side bar */}
            <SideBar
                activeKey={heroType}
                onChange={setHeroType}
                style={{
                    position: "fixed",
                    left: "5px",
                    height: "100%",
                    width: '60px'
                }}
            >
                {DEFAULT_SILDE_TABS.map(item => (
                    <SideBar.Item
                        key={item.key}
                        title={item.title}
                        badge={item.badge}
                        style={{
                            justifyContent: "center",
                            padding: 0
                        }}
                    />
                ))}
            </SideBar>

            {/* right content */}
            <div style={{ paddingLeft: "65px" }}>
                {
                    loading
                        ? (<Loading />)
                        : (
                            <>
                                {
                                    DEFAULT_SILDE_TABS.map(item => (
                                        <div
                                            key={item.key}
                                            hidden={heroType !== item.key}
                                        >
                                            {/* amount */}
                                            <h4 style={{ textAlign: "right", margin: "0 5px 0" }}>
                                                <strong>{item.title}</strong> 共计 <strong>{list.length}</strong>
                                            </h4>

                                            {/* cards list */}
                                            <Cards list={list} />
                                        </div>
                                    ))
                                }
                            </>
                        )
                }
            </div>
        </div>
    )
}

export default Heroes