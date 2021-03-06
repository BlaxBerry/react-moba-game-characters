import React, { useState, useEffect } from 'react'
import { Toast, Image, Divider } from 'antd-mobile'
import { GithubOutlined, GlobalOutlined, QqOutlined } from '@ant-design/icons';
import { SearchBar } from '../../components/common/index'
import { getRandomImg as getData } from '../../api'

const Search = () => {
    const [randomImg, setRandomImg] = useState('')

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
            <SearchBar placeholder="请输入 英雄名称 / 称号" />

            {/* info */}
            <div style={{ padding: "0 1rem" }}>
                <Divider style={{ marginTop: 5 }}>游戏简介</Divider>
                <p style={{
                    fontSize: "10px",
                    textIndent: "20px",
                    marginBottom: "1rem"
                }}>
                    英雄联盟（League of Legends）是由美国Riot Games开发，腾讯游戏运营的全新英雄对战网游。英雄联盟的主创团队由各著名游戏公司的核心美术、策划、程序人员组成，他们打造了游戏中风格特色各异的英雄，加入更加丰富的物品合成系统、地图玩法、天梯匹配机制，以及独创的“召唤师”技能、符文、天赋组合，让玩家感受不一样的英雄对战网游。
                    在游戏中，玩家将扮演一位召唤者，并选择你所信任的联盟国进入这个游戏的正义领域，为了控制瓦罗然的权利而奋战。
                </p>

                {/* random background img */}
                <Image src={randomImg} fit='cover' style={{ minWidth: "100%" }} />

                {/* links */}
                <Divider>相关链接</Divider>
                <p><GlobalOutlined /> <a href="https://www.riotgames.com/">ROIT GAME</a></p>
                <p><QqOutlined /> <a href="https://lol.qq.com/">LOL TECNET</a></p>
                <p><GithubOutlined /> <a href="https://github.com/BlaxBerry/react-moba-game-characters">GITHUB</a></p>
            </div>
        </>
    )
}

export default Search