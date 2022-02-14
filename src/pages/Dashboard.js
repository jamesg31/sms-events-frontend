import React from 'react';
import { Segment, Grid, Statistic, Container, Button } from 'semantic-ui-react';

import Overview from '../components/Overview';

export default class SidebarMenu extends React.Component {
    render() {
        return (
            <Container>
                <Grid textAlign='center' stackable>
                    <Grid.Row columns={1} only='mobile'>
                        <Grid.Column>
                            <Button onClick={this.toggleMenu}>Menu</Button>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row columns={4}>
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