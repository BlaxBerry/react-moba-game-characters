import React, { useState, useEffect } from 'react'
// import { useState, useEffect } from 'react'
import { getHeroList as getData } from '../../api'


const Heroes = () => {
    const [data, setData] = useState([])
    // const [type, setType] = useState('mega')
    // 'mage','marksman','assassin','fighter','tank','support'

    const getHeroList = async () => {
        const { data: res } = await getData()
        const allHeroes = res.data || []
        setData(allHeroes)
    }


    useEffect(() => {
        getHeroList()
    }, [])

    return (
        <>
            Heros {data.length}
        </>
    )
}

export default Heroes