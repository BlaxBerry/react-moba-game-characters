import React from 'react'
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'
import { PageHeader as BaseHeader } from 'antd';

export const PageHeader = () => {
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

    const goBack = () => {
        navigation(-1)

    }

    return (

        <BaseHeader
            className="site-page-header"
            onBack={goBack}
            title={pageName}
        />

    )
}
