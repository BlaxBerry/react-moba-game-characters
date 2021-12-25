import React from 'react'
import { ToolOutlined } from '@ant-design/icons'
// import { useState, useEffect, useMemo } from 'react'
// import { getWeaponList } from "../../api/index"
const Weapon = () => {

    // const getDataSource = async () => {
    //     const { data } = await getWeaponList()
    //     console.log(data.data);
    // }


    return (
        <>
            <div style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)"
            }}>
                <h2>
                    <ToolOutlined /> 开发中...
                </h2>
            </div>
        </>
    )
}

export default Weapon
