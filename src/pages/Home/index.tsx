import React from 'react'
import { useState, useEffect } from 'react'
import { Toast } from 'antd-mobile'
import { SearchBar } from '../../components/common/index'
import { getRandomImg as getData } from '../../api'
import logo from '../../assets/logo.png'

const Home = () => {
    const [randomImg, setRandomImg] = useState(logo)

    const getRandomImg = async () => {
        try {
            const { data } = await getData()
            setRandomImg(data.url)
        } catch (error) {
            Toast.show({
                icon: 'fail',
                content: '网络连接失败，请稍后刷新',
            })
            console.log('Home Random Image', error);
        }
    }

    useEffect(() => {
        getRandomImg()
    }, [])


    return (
        <>
            {/* search bar*/}
            <SearchBar />

            {/* random background img */}
            <img src={randomImg} alt="随机图片" style={{ width: "100%" }} />
        </>
    )
}

export default Home