import React from 'react';
import 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import { Container } from 'semantic-ui-react';

export default class Overvew extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            labels: ['None', 'Task 1', 'Task 2',
                'Task 3', 'Task 4'],
            datasets: [
                {
                    data: [45, 34, 80, 72, 38],
                    backgroundColor: [
                        'rgb(68,194,253)',
                        'rgb(67,182,244)',
                        'rgb(65,170,235)',
                        'rgb(64,158,226)',
                        'rgb(63,145,217)',
                        'rgb(61,133,208)',
                        'rgb(60,121,199)',
                        'rgb(59,109,189)',
                        'rgb(57,97,180)',
                        'rgb(56,84,171)',
                        'rgb(55,72,162)',
                        'rgb(53,60,153)',
                        'rgb(53,60,153)'
                    ]
                }
            ]
        }
    }

    render() {
        return (
            <Container>
                <h1>Event Overview:</h1>
                <Line data={this.state}></Line>
            </Container >
        );
    }
}