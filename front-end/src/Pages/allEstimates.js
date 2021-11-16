import React from "react";
import Navigation from "../Components/nav";

import { Layout, Menu, Breadcrumb } from 'antd';
import { DatePicker } from "antd";
const { Header, Content, Footer } = Layout;



const AllEstimates = () => {

    return (
        <div className="allEstimates">

            <Layout className="layout">
                <Navigation />
                <Content style={{ padding: '0 50px' }}>
                    {/* <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb> */}
                    <div className="site-layout-content" style={{ margin: '100px'}}>Content</div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>

        </div>
    )
}

export default AllEstimates;