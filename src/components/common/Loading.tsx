import React from 'react'
import { Loading as BaseLoading, Mask } from 'antd-mobile'

export const Loading = (props: any) => {
    return (
        <>
            <Mask
                color='white'
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",

                }}
            >
                <div style={{ fontSize: "4rem" }}>
                    <BaseLoading />
                </div>
            </Mask>
        </>
    )
}
