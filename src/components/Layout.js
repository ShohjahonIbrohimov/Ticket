import React from "react";
import { Layout, Menu, Button } from "antd";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";
import HeaderActions from "./HeaderActions";
import { authLogout } from "../redux/auth/auth.actions";
import { persistor } from "../redux/store";

const { Header, Sider, Content } = Layout;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  logoutAuth = () => {
    // localStorage.clear()
    this.props.authLogout();
    // persistor.purge();
  };

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              Ticket
            </Menu.Item>
            <Menu.Item
              key="3"
              icon={<PoweroffOutlined />}
              onClick={() => this.logoutAuth()}
            >
              Logout
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              background: "#fff",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {React.createElement(
              this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: this.toggle,
              }
            )}
            <HeaderActions />
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

const AppRoute = connect(null, { authLogout })(SiderDemo);
export default withRouter(AppRoute);
