import React from 'react'
import { SearchBar as BaseSearchBar, Toast } from 'antd-mobile'

export const SearchBar = () => {

    const onSearch = (value: string) => {
        // Toast.show(`你搜索了：${value}`)
        Toast.show({
            icon: 'loading',
            content: '加载中…',
        })
    }

    return (
        <BaseSearchBar
            placeholder='请输入内容'
            showCancelButton
            style={{
                borderRadius: '100px',
                backgroundColor: '#ffffff',
            }}
            onSearch={onSearch}
        />
    )
}
