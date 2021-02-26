import React, { useState } from "react";
import { message } from "antd";
import { Form, Input, Button } from "antd";
// REDUX
import {
    startCreateUser
} from "../redux/auth/auth.actions";
import { connect } from "react-redux";


// MESSAGES
const messageSuccess = (text) => {
    message.success(text);
};

const messageError = (text) => {
    message.error(text);
};

const CeateUserForm = ({ createUser }) => {
    const [loading, setloading] = useState(false);
    const onFinish = (values) => {
        setloading(true);
        console.log("Received values of form: ", values);

        createUser({ values, messageSuccess, messageError, setloading });
    };


    return (
        <div>
            <Form
                name='normal_login'
                className='login-form'
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                size='large'
                layout="vertical"
            >
                <Form.Item
                    label='Username'
                    name='username'
                    rules={[
                        {
                            required: true,
                            message: "Please input username!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="email"
                    label='Email'
                    rules={[{ type: "email" }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label='Password'
                    name='password'
                    rules={[
                        {
                            required: true,
                            message: "Please input your password!",
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    label='Phone'
                    name='phone'
                    rules={[
                        {
                            required: true,
                            message: "Please input phone number!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item>
                    <Button
                        loading={loading}
                        style={{ width: "100%" }}
                        type='primary'
                        htmlType='submit'
                        className='login-form-button'
                    >
                        Create
          </Button>
                </Form.Item>
            </Form>
        </div >
    );
};


const mapDispatchToProps = (dispatch) => ({
    createUser: (data) => dispatch(startCreateUser(data)),
});

export default connect(undefined, mapDispatchToProps)(CeateUserForm);
