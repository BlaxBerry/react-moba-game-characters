import React from 'react'
import { Image, List, } from 'antd-mobile'

export default function DetailsSkills(props: any) {
    const { skills } = props
    return (
        <div className='skills'>
            <List>
                {skills?.map((item: any, index: number) => (
                    <List.Item
                        key={index}
                        prefix={
                            <Image
                                src={item.pic}
                                style={{ borderRadius: 10 }}
                                fit='cover'
                                width={50}
                                height={50}
                            />
                        }
                        description={
                            <p style={{ fontSize: "13px" }}>{item.description}</p>
                        }
                    >
                        <b className="front-color-dark">{item.name}</b>
                    </List.Item>
                ))}
            </List>
        </div>
    )
}
