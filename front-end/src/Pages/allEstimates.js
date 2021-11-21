import React, { useEffect, useState } from "react";
import Navigation from "../Components/nav";
import axios from "axios";
import config from "../Services/config";

import { Layout, Card } from 'antd';
const { Content } = Layout;



const AllEstimates = () => {

    let data = null;

    const [allDevis, setAllDevis] = useState(null);

    useEffect(() => {

        axios.get(config.url)
            .then((res) => {
                data = res.data;

                console.log(data.features)

                setAllDevis(data.map((devis) => (

                    <div className="card">
                        <Card title="hello" bordered={false} style={{ width: 300 }}>
                            <p>{devis.features.dev}</p>
                            <p>Card content</p>
                            <p>Card content</p>
                        </Card>
                    </div>
                )) )
                
            })
            .catch((err) => console.log('Erreur récupération axios ' + err));
    }, []);



    return (
        <div className="allEstimates">

            <Layout className="layout">
                <Navigation />
                <Content style={{ padding: '0 50px' }} className="content">

                    <div className="cards">
                        {allDevis}
                    </div>

                    <div className="site-layout-content" style={{ margin: '100px' }}>Content</div>
                </Content>
            </Layout>

        </div>
    )
}

export default AllEstimates;