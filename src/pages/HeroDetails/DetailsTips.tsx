import React from 'react'
import { Divider } from 'antd-mobile'

export default function DetailsTips(props: any) {
    const { hero } = props
    

    const tipsLayout = (array: []) => (
        array?.map((item: string, index: number) => (
            <p key={index}
                style={{
                    padding: "0 1rem 0",
                    margin: 0,
                    fontSize: "13px"
                }}
            >
                {item}
            </p>
        ))
    )

    return (
        <div className="tips">
            <Divider contentPosition='left' className="front-color-dark">
                <b>我方 {hero?.nameCN}</b>
            </Divider>
            {tipsLayout(hero?.extraInfo2)}


            <Divider contentPosition='left' className="front-color-dark">
                <b>敌方 {hero?.nameCN}</b>
            </Divider>
            {tipsLayout(hero?.extraInfo1)}
        </div>
    )
}
