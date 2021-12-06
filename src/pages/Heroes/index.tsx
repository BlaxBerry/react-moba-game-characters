import React, { useState, useEffect, useMemo } from 'react'
// import { useState, useEffect } from 'react'
import { getHeroList as getData } from '../../api'


const Heroes = () => {
    const [data, setData] = useState([])
    const [type, setType] = useState('mega')
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
        <div>
            Heros {data.length}
        </div>
    )
}

export default Heroes