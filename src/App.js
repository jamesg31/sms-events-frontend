import React from 'react';
import { Segment, Grid, Menu, Icon } from 'semantic-ui-react';
import './App.css';

import SidebarMenu from './components/SidebarMenu';

import Dashboard from './pages/Dashboard';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuVisible: false
        };
    }

    toggleMenu = () => {
        this.setState({ menuVisible: !this.state.menuVisible });
    }

    render() {
        return (
            <SidebarMenu toggleMenu={this.toggleMenu} visible={this.state.menuVisible}>
                <div style={{ minHeight: '100vh' }}>
                    <Grid columns={2} relaxed>
                        <Grid.Column width={1} only='tablet computer'>
                            <Segment vertical inverted compact style={{ minHeight: '100vh' }}>
                                <Menu icon='labeled' vertical inverted>
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
                                </Menu>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column mobile={16} tablet={15} computer={15}>
                            <Dashboard />
                        </Grid.Column>
                    </Grid>
                </div>
            </SidebarMenu>
        );
    }
}

export default App;