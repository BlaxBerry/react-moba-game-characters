import React from 'react'
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'
import { NavBar as BaseNavBar } from 'antd-mobile'

export const NavBar = (props: any) => {
    const [pageName, setPageName] = useState('')
    const navigation = useNavigate()
    const { pathname } = useLocation()

    useEffect(() => {
        const pathStr = pathname?.slice(1)
        const currentPathName = pathStr
            ? pathStr.replace(pathStr[0], pathStr[0].toUpperCase())
            : 'Home'
        setPageName(currentPathName)
    }, [pathname])

    const goBack = () => navigation(-1)

    return (
        <BaseNavBar
            back={null}
            style={{
                position: "fixed",
                top: 0,
                width: "100%",
                height: "50px",
                backgroundColor: "#fff"
            }}
        >
            {pageName}
        </BaseNavBar>
    )
}
