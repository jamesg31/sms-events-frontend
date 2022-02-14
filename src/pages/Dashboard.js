import React from 'react';
import { Segment, Grid, Statistic, Container, Icon, Header } from 'semantic-ui-react';
import './Pages.css';

import Overview from '../components/Overview';

export default class SidebarMenu extends React.Component {
    render() {
        return (
            <Container>
                <Grid className='header'>
                    <Grid.Row columns={2}>
                        <Grid.Column only='mobile'>
                            <Icon name='bars' onClick={this.props.toggleMenu} />
                        </Grid.Column>
                        <Grid.Column floated='right' textAlign='right'>
                            <Header as='h1'>SMS Events</Header>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Grid stackable>
                    <Grid.Row columns={4} textAlign='center'>
                        <Grid.Column stretched>
                            <Segment>
                                <Statistic>
                                    <Statistic.Value>5,550</Statistic.Value>
                                    <Statistic.Label>Downloads</Statistic.Label>
                                </Statistic>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column stretched>
                            <Segment>
                                <Statistic>
                                    <Statistic.Value>5,550</Statistic.Value>
                                    <Statistic.Label>Downloads</Statistic.Label>
                                </Statistic>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column stretched>
                            <Segment>
                                <Statistic>
                                    <Statistic.Value>5,550</Statistic.Value>
                                    <Statistic.Label>Downloads</Statistic.Label>
                                </Statistic>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column stretched>
                            <Segment>
                                <Statistic>
                                    <Statistic.Value>5,550</Statistic.Value>
                                    <Statistic.Label>Downloads</Statistic.Label>
                                </Statistic>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={1}>
                        <Grid.Column stretched>
                            <Segment>
                                <Overview />
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>

        );
    }
}