import React from 'react'
import { Grid, Image } from 'antd-mobile'
import { useNavigate } from 'react-router'

export default function Cards(props: any) {

    const navigation = useNavigate()

    return (
        <Grid columns={4} style={{ padding: "2px" }}>
            {
                props.list.map((item: any) => (
                    <Grid.Item
                        key={item.id}
                        onClick={() => navigation('/detail', {
                            state: { id: item.id }
                        })}
                    >
                        <Image src={item.pic} fit='fill'
                            style={{
                                width: "100%",
                                height: "100%",
                            }}
                        />
                    </Grid.Item>
                ))
            }
        </Grid>
    )
}
