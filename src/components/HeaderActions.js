import React, { useState } from "react";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import GModal from "./GModal";
import CreateUserForm from "./CreateUserForm";

// Redux
import { selectUser } from "../redux/auth/auth.selector.js";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

const HeaderActions = ({ user }) => {
    const [visible, setvisible] = useState(false)

    const handleCreateUser = () => {
        setvisible(true)
    };

    return (
        <div>
            {user?.rolesUser === "admin,accountant" && (
                <Button
                    onClick={handleCreateUser}
                    icon={<PlusOutlined />}
                    type='primary'
                >
                    Create user
                </Button>
            )}

            <GModal visible={visible} setVisible={setvisible} width={300}>
                <CreateUserForm />
            </GModal>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    user: selectUser,
});

export default connect(mapStateToProps)(HeaderActions);
