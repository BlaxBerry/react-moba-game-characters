import React from 'react'
import { useState, useEffect } from 'react'
import { Input, message } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { getRandomImg as getData } from '../../api'
import logo from '../../assets/logo.png'

const Home = () => {
    const [randomImg, setRandomImg] = useState(logo)

    const getRandomImg = async () => {
        try {
            const { data } = await getData()
            setRandomImg(data.url)
        } catch (error) {
            message.error('Request Timeout.')
            console.log('Home Random Image', error);
        }
    }

    useEffect(() => {
        getRandomImg()
    
    }, [])


    return (
        <>
            {/* search */}
            <div>
                <Input placeholder="Search the Character" size="large" prefix={<SearchOutlined />} />
            </div>

            {/* img */}
            <img src={randomImg} alt="LOL"
                style={{
                    width: "100%"
                }}
            />
        </>
    )
}

export default Home