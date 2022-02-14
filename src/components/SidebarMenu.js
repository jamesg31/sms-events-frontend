import React from 'react';
import { Sidebar, Icon, Segment, Menu } from 'semantic-ui-react';

export default class SidebarMenu extends React.Component {
    render() {
        return (
            <Sidebar.Pushable as={Segment}>
                <Sidebar
                    as={Menu}
                    animation='overlay'
                    icon='labeled'
                    inverted
                    onHide={this.props.toggleMenu}
                    vertical
                    visible={this.props.visible}
                    width='thin'
                >
                    <Menu.Item as='a'>
                        <Icon name='home' />
                        Home
                    </Menu.Item>
                    <Menu.Item as='a'>
                        <Icon name='gamepad' />
                        Games
                    </Menu.Item>
                    <Menu.Item as='a'>
                        <Icon name='camera' />
                        Channels
                    </Menu.Item>
                </Sidebar>

                <Sidebar.Pusher dimmed={this.props.visible}>
                    {this.props.children}
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        );
    }
}