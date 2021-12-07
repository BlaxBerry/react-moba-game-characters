import React from 'react'
import { Grid, Image } from 'antd-mobile'

export default function Cards(props: any) {
    return (
        <Grid columns={4} style={{ padding: "2px" }}>
            {
                props.list.map((item: any) => (
                    <Grid.Item key={item.id}>
                        <Image src={item.pic} fit='fill' />
                    </Grid.Item>
                ))
            }
        </Grid>
    )
}
