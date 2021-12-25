import React, { useState } from 'react'
import { Image, Grid, ImageViewer } from 'antd-mobile'

export default function DetailsSkins(props: any) {
    const { skins } = props

    const [viewerImage, setViewerImage] = useState("")
    const [viewerShow, setViewerShow] = useState(false)
    return (
        <div className="skins">
            <Grid columns={3}>
                {
                    skins?.map((item: any, index: number) => (
                        !item.mainImg
                            ? null
                            : (
                                <Grid.Item key={index}>
                                    <Image
                                        src={item.loadingImg}
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                        }}
                                        onClick={() => {
                                            setViewerImage(item.mainImg)
                                            setViewerShow(true)
                                        }}
                                    />
                                </Grid.Item>
                            )

                    ))
                }
            </Grid>
            <ImageViewer
                image={viewerImage}
                visible={viewerShow}
                onClose={() => setViewerShow(false)}
            />
        </div>
    )
}
