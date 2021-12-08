import React from 'react'
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import { NavBar as BaseNavBar } from 'antd-mobile'

export const NavBar = (props: any) => {
    const [pageName, setPageName] = useState('')
    const { pathname } = useLocation()

    useEffect(() => {
        switch (pathname) {
            case "/heroes": return setPageName("英雄列表")
            case "/search": return setPageName("查询角色")
            case "/weapons": return setPageName("装备列表")
            case "/detail": return setPageName("角色详情")
            default: return setPageName("英雄联盟信息")
        }
    }, [pathname])


    return (
        <BaseNavBar
            back={null}
            style={{
                position: "fixed",
                top: 0,
                width: "100%",
                height: "50px",
                backgroundColor: "teal",
                color: "#fff"
            }}
        >
            {pageName}
        </BaseNavBar>
    )
}
