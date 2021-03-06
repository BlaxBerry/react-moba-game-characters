import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { TabBar as BaseTabBar, Badge } from 'antd-mobile'
import {
    TeamOutline,
    AppstoreOutline,
    SearchOutline,
} from 'antd-mobile-icons'

const DEFAULT_TABS = [
    {
        key: '/heroes',
        title: '英雄',
        icon: <TeamOutline />,
        badge: "99+",
    },
    {
        key: '/search',
        title: '查找',
        icon: <SearchOutline />,
        badge: null,
    },
    {
        key: '/weapons',
        title: '装备',
        icon: <AppstoreOutline />,
        badge: Badge.dot,
    },
]

export const TabBar = () => {
    const [activeKey, setActiveKey] = useState('/heroes')

    const Navigation = useNavigate()

    const setRouteActive = (value: string) => {
        setActiveKey(value)
        Navigation(value)
    }

    return (
        <BaseTabBar
            activeKey={activeKey}
            onChange={value => setRouteActive(value)}
            style={{
                position: "fixed",
                bottom: 0,
                width: "100%",
                backgroundColor: "teal",
                color: "#fff"
            }}
        >
            {DEFAULT_TABS.map(item => (
                <BaseTabBar.Item
                    key={item.key}
                    icon={item.icon}
                    title={item.title}
                    badge={item.badge}
                />
            ))}
        </BaseTabBar>
    )
}
