import React from 'react'
import { Grid, Image, Toast } from 'antd-mobile'
import { useNavigate } from 'react-router'

export default function Cards(props: any) {

    const navigation = useNavigate()

    const goDetail = (id: string) => {
        navigation('/detail', {
            state: { id }
        })
        Toast.show({
            icon: 'loading',
            content: '加载中…',
        })
    }

    return (
        <Grid columns={4} style={{ padding: "2px" }}>
            {
                props.list.map((item: any) => (
                    <Grid.Item
                        key={item.id}
                        style={{ minWidth: "75.5px" }}
                        onClick={() => goDetail(item.id)}
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
