import React, { useState, useEffect } from "react";
import { Form, Input, Button, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
// REDUX
import { startLogin } from "../redux/auth/auth.actions";
import { selectError, selectSuccess } from "../redux/auth/auth.selector";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

// MESSAGES
const messageSuccess = (text) => {
  message.success(text);
};

const messageError = (text) => {
  message.error(text);
};

const NormalLoginForm = ({ login, error, success }) => {
  const [loading, setloading] = useState(false);
  const history = useHistory();

  const onFinish = (values) => {
    setloading(true);
    console.log("Received values of form: ", values);
    login(values);
  };

  useEffect(() => {
    if (error) {
      messageError("User not found");
      setloading(false);
    }

    if (success) {
      messageSuccess("Successfully logged in!");
      setloading(false);
    }
  }, [error, success]);

  return (
    <div className="login_form_wrapper">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        style={{ width: "300px" }}
      >
        {success && <Redirect to="/tickets" />}
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button
            loading={loading}
            style={{ width: "100%" }}
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  login: (data) => dispatch(startLogin(data)),
});

const mapStateToProps = createStructuredSelector({
  error: selectError,
  success: selectSuccess,
});

export default connect(mapStateToProps, mapDispatchToProps)(NormalLoginForm);
