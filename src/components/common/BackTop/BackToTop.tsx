import React from 'react';
import { BackTop } from 'antd';
import { UpOutlined } from '@ant-design/icons';

export const BackToTop: React.FC = () => (
    <BackTop>
        <div style={{
            height: 40,
            width: 50,
            lineHeight: '40px',
            borderRadius: 4,
            backgroundColor: '#1088e9',
            color: '#fff',
            textAlign: 'center',
            fontSize: 14,
        }}>
            <UpOutlined />
        </div>
    </BackTop>

);