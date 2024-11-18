import { Layout } from 'antd';
import React, { memo } from 'react';

const {Footer } = Layout;

const FooterLayout = memo(() => {
    return (
            <Footer className="footer">
                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-around', alignItems: 'center' }}>
                    <div className="logo">My App</div>
                    <div>End</div>
                </div>
            </Footer>
    );
});
export default FooterLayout;
