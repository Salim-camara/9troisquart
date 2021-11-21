import React, { createElement, useEffect, useState } from "react";
import Navigation from "../Components/nav";
import axios from "axios";
import config from "../Services/config";

import { Layout, Card } from 'antd';
const { Content } = Layout;



const AllEstimates = () => {

    let data = null;

    useEffect(() => {

        axios.get(config.url)
            .then((res) => {
                data = res.data;

                for (const devis of data) {

                    const title = devis.name;
                    const id = devis.id;

                    const newCard = document.createElement("div");
                    newCard.className = `card${id} card`;
                    newCard.innerHTML = `
                        <h2>${title}</h2>
                    `
                    const testDiv = document.createElement("div");
                    testDiv.className = `test${id} containerfeatures`;
                    newCard.appendChild(testDiv);
                    const cards = document.querySelector('.cards');
                    cards.appendChild(newCard);
                    const card = document.querySelector(`.card${id}`);

                    let allDevisPrice = 0;
                    const testPrice = document.createElement("h3");
                    testPrice.className = `price${id} price`;
                    newCard.appendChild(testPrice);

                    
                    for (const feature in devis.features) {
                        
                        
                        const cardFeatures = document.querySelector(`.test${id}`);
                        
                        const devisElement = devis.features[feature];
                        const prixConcep = devisElement.concep * config.concep;
                        const prixGp = devisElement.gp * config.gp;
                        const prixDev = devisElement.dev * config.dev;
                        const prixTotal = prixGp + prixDev + prixConcep;
                        allDevisPrice = allDevisPrice + prixTotal;
                        const featureName = devisElement.feature;
                        
                        const newName = document.createElement("p");
                        newName.innerHTML = `Nom de la fonctionnalité: <strong>${featureName}</strong>`;
                        cardFeatures.appendChild(newName);

                        const newConcep = document.createElement("p");
                        newConcep.innerHTML = `Temps de conception: <strong>${devisElement.concep} jour(s)</strong> soit <strong>${prixConcep} €</strong>`;
                        cardFeatures.appendChild(newConcep);

                        const newGp = document.createElement("p");
                        newGp.innerHTML = `Temps Gp: <strong>${devisElement.gp} jour(s)</strong> soit <strong>${prixGp} €</strong>`;
                        cardFeatures.appendChild(newGp);

                        const newDev = document.createElement("p");
                        newDev.innerHTML = `Temps de dev: <strong>${devisElement.dev} jour(s)</strong> soit <strong>${prixDev} €`;
                        cardFeatures.appendChild(newDev);

                        const newPrice = document.createElement("h4");
                        newPrice.className = "bottom";
                        newPrice.innerHTML = `Prix de la fonctionnalité: <strong>${prixTotal} €</strong>`;
                        cardFeatures.appendChild(newPrice);

                    }

                    testPrice.innerHTML = `Prix total: ${allDevisPrice} €`;



                }

                // setAllDevis(data.map((devis, ) => (

                <div className="cards">
                    <Card title="hello" bordered={false} style={{ width: 300 }}>
                        {/* <p>{devis.features.dev}</p> */}
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                </div>
                // )) )

            })
            .catch((err) => console.log('Erreur récupération axios ' + err));
    }, []);



    return (
        <div className="allEstimates">

            <Layout className="layout">
                <Navigation />
                <Content style={{ padding: '0 50px' }} className="content">

                    <div className="cards">
                        {/* {allDevis} */}
                    </div>

                    <div className="site-layout-content" style={{ margin: '100px' }}>Content</div>
                </Content>
            </Layout>

        </div>
    )
}

export default AllEstimates;