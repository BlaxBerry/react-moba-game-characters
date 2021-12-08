import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { searchHero } from '../../api/index'
import { SearchBar as BaseSearchBar, Toast } from 'antd-mobile'

type searchProps = {
    placeholder: string,
    style?: {},
}

export const SearchBar = (props: searchProps) => {

    const [keyWord, setKeyword] = useState("")
    const navigation = useNavigate()

    const onSearch = (value: string) => {
        setKeyword(value)
        // Toast.show(`你搜索了：${value}`)
        Toast.show({
            icon: 'loading',
            content: '加载中…',
        })
    }

    const getHero = async () => {
        const { data } = await searchHero(keyWord)
        console.log(data);

        if (!data.data) {
            Toast.show({
                icon: 'fail',
                content: data.msg,
            })
        } else {
            const id = data.data[0].heroId
            navigation('/detail', {
                state: { id }
            })
        }
    }

    useEffect(() => {
        if (keyWord) {
            getHero()
        }
    }, [keyWord])

    return (
        <BaseSearchBar
            placeholder={props.placeholder}
            style={{
                borderRadius: '100px',
                backgroundColor: '#ffffff',
                margin: "10px",
                height: "40px"
            }}
            onSearch={onSearch}
        />
    )
}
