import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";

export default function NavBar(){
    return (
        <Menu inverted fixed='top'>
            <Container fluid>
                <Menu.Item>
                    <img src="/assets/logo.png" alt="logo"style={{marginRight: '10px'}} />
                    Reactor
                </Menu.Item>
                <Menu.Item name="Activities" />
                <Menu.Item>
                    <Button positive content="Create Activity"/>
                </Menu.Item>
            </Container>
        </Menu>
    )
};