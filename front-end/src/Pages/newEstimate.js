import React, { useState } from "react";
import Navigation from "../Components/nav";
import axios from "axios";
import config from "../Services/config";

import { Form, Input, Button, Space } from 'antd';
import { InputNumber } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';



const NewEstimate = () => {

    const [project, setProject] = useState(null);

    const onFinish = values => {

        if(project === null || project === "" || values.features === undefined) {
            
            alert('Veuillez saisir un nom de projet avec au moins une feature');

        } else {

            axios.post(config.url, {
                project,
                features: values
            })
        }
    }

    return (
        <div className="newEstimate">
            <Navigation />

            <div className="project_name">
                <h1>Nom du projet</h1>
                <Input placeholder="Basic usage" value={ project } onChange={ (e) => { setProject( e.target.value )} }/>
            </div>

            <div className="features">

                <Form name="dynamic_form_nest_item" onFinish={ onFinish } autoComplete="off">
                    <Form.List name="features">
                        {(fields, { add, remove }) => (
                            <>
                                {fields.map(({ key, name, fieldKey, ...restField }) => (
                                    <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">

                                        <Form.Item
                                            {...restField}
                                            name={[name, 'feature']}
                                            fieldKey={[fieldKey, 'feature']}
                                            rules={[{ required: true, message: 'Missing feature name' }]}
                                        >
                                            <div className="inputs_container">
                                                <label for="feature"> Nom de la feature</label>
                                                <Input placeholder="Nom de la feature" id="feature" />
                                            </div>
                                        </Form.Item>

                                        <Form.Item className="inputs_container"
                                            {...restField}
                                            name={[name, 'dev']}
                                            fieldKey={[fieldKey, 'dev']}
                                            rules={[{ required: true, message: 'Missing gp' }]}
                                        >
                                            <div className="inputs_container">
                                                <label for="dev">Temps de développement (en J)</label>
                                                <InputNumber
                                                    style={{ width: 80 }}
                                                    id="dev"
                                                    defaultValue="1"
                                                    min="0"
                                                    max="10"
                                                    step="0.01"
                                                    stringMode
                                                />
                                            </div>
                                        </Form.Item>

                                        <Form.Item
                                            {...restField}
                                            name={[name, 'gp']}
                                            fieldKey={[fieldKey, 'gp']}
                                            rules={[{ required: true, message: 'Missing gp' }]}
                                        >
                                            <div className="inputs_container">
                                                <label for="gp">Temps de développement (en J)</label>
                                                <InputNumber
                                                    style={{ width: 80 }}
                                                    id="gp"
                                                    defaultValue="1"
                                                    min="0"
                                                    max="10"
                                                    step="0.01"
                                                    stringMode
                                                />
                                            </div>
                                        </Form.Item>

                                        <Form.Item
                                            {...restField}
                                            name={[name, 'concep']}
                                            fieldKey={[fieldKey, 'concep']}
                                            rules={[{ required: true, message: 'Missing concep' }]}
                                        >
                                            <div className="inputs_container">
                                                <label for="concep">Temps de développement (en J)</label>
                                                <InputNumber
                                                    style={{ width: 80 }}
                                                    id="concep"
                                                    defaultValue="1"
                                                    min="0"
                                                    max="10"
                                                    step="0.01"
                                                    stringMode
                                                />
                                            </div>
                                        </Form.Item>

                                        <MinusCircleOutlined onClick={() => remove(name)} />
                                    </Space>
                                ))}
                                <Form.Item>
                                    <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                        Add field
                                    </Button>
                                </Form.Item>
                            </>
                        )}
                    </Form.List>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>

            </div>

        </div>
    )
}

export default NewEstimate;