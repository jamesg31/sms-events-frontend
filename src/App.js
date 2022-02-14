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
                                    <Menu.Item>
                                        <Icon name='home' />
                                        Dashboard
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Icon name='tasks' />
                                        Tasks
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Icon name='phone' />
                                        Users
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Icon name='settings' />
                                        Setup
                                    </Menu.Item>
                                </Menu>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column mobile={16} tablet={15} computer={15}>
                            <Dashboard toggleMenu={this.toggleMenu} />
                        </Grid.Column>
                    </Grid>
                </div>
            </SidebarMenu>
        );
    }
}

export default App;