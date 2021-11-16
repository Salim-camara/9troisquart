import React from "react";
import Navigation from "../Components/nav";

import { Form, Input, Button, Space } from 'antd';
import { InputNumber } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';



const NewEstimate = () => {

    const onFinish = values => {
        console.log('Received values of form:', values); }

    return (
        <div className="newEstimate">
            <Navigation />

            <div className="clientName" style={{ width: '60%' }}>
                <h1>Nom du client</h1>
                <Input placeholder="Basic usage" />
            </div>

            <div className="features">

                <Form name="dynamic_form_nest_item" onFinish={ onFinish } autoComplete="off">
                    <Form.List name="users">
                        {(fields, { add, remove }) => (
                            <>
                                {fields.map(({ key, name, fieldKey, ...restField }) => (
                                    <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'first']}
                                            fieldKey={[fieldKey, 'first']}
                                            rules={[{ required: true, message: 'Missing first name' }]}
                                        >
                                            <Input placeholder="First Name" />
                                        </Form.Item>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'last']}
                                            fieldKey={[fieldKey, 'last']}
                                            rules={[{ required: true, message: 'Missing last name' }]}
                                        >
                                            <Input placeholder="Last Name" />
                                        </Form.Item>

                                        <Form.Item
                                            {...restField}
                                            name={[name, 'dv']}
                                            fieldKey={[fieldKey, 'dv']}
                                            rules={[{ required: true, message: 'Missing dv' }]}
                                        >
                                            <label for="dv">Temps de développement (en J)</label>
                                            <InputNumber
                                                style={{ width: 200 }}
                                                id="dv"
                                                defaultValue="1"
                                                min="0"
                                                max="10"
                                                step="0.01"
                                                stringMode
                                            />
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