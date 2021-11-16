import React from "react";
import { NavLink } from "react-router-dom";

import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;



const Navigation = () => {

    return(
        <>
            <Header>
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        
                        <NavLink exact to="/newEstimate">
                            <Menu.Item key={1}>{`Nouveau devis`}</Menu.Item>
                        </NavLink>
                        <NavLink exact to="/">
                            <Menu.Item key={2}>{`Tous les devis`}</Menu.Item>
                        </NavLink>
                    </Menu>
                </Header>
        </>
    )
}

export default Navigation;