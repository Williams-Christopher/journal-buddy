import React from 'react';

import { Bar } from 'react-chartjs-2';

import ApiServices from '../../services/api-services';

import './Reports.css';

class Reports extends React.Component {
    constructor(props) {
        super(props);
        this.graphDataKeys = ['total_by_day', 'total_by_feeling', 'total_by_month'];
        this.chartOptions = {
            scales: {
                yAxes: [{
                    ticks: {
                        autoSkip: true,
                    },
                }],
            },
        };
        this.state = {
            error: null,
            requestComplete: false,
            data: {},
        };
    };

    componentDidMount() {
        this.setState({
            error: null,
        });

        ApiServices.getMetrics()
            .then(result =>
                this.setState({
                    data: { ...result },
                    requestComplete: true,
                }, () => this.prepareDataSets())
            )
            .catch(error => this.setState({ error: error.error }));
    };

    prepareDataSets = () => {
        for (const key of this.graphDataKeys) {
            this.prepareDataSet(key);
        };
    };

    prepareDataSet = (key) => {
        const chartData = Object.values(this.state.data[key]);
        let chartLabels;
        if (key === 'total_by_feeling') {
            chartLabels = ['Very Down', 'Down', 'Normal/Even', 'Happy', 'Very Happy'];
        } else {
            chartLabels = Object.keys(this.state.data[key]);
        };

        const dataObject = {
            labels: chartLabels,
            datasets: [{
                label: this.createTitleCaseHeadingFromKey(key),
                data: chartData,
            }],
        };

        this.setState({
            [key]: dataObject,
        });
    };

    createBarGraph = (key) => {
        return (
            <div className='metrics-graph'>
                <Bar data={this.state[key]} options={this.chartOptions} />
            </div>
        )
    };

    createTitleCaseHeadingFromKey = (key) => {
        const words = key.split('_').map(word => word[0].toUpperCase() + word.slice(1, word.length));
        return words.join(' ');
    };

    render() {
        if (this.state.requestComplete) {
            return (
                <section className='journal_reports'>
                    <h2>
                        Journal Reports
                </h2>

                    <section className='metrics-containter'>
                        <section className='metrics-tiles-container'>
                            <div className='metrics-tile'>
                                <p>Total Entries</p>
                                <p>{this.state.data.total_entries}</p>
                            </div>
                            <div className='metrics-tile'>
                                <p>Private Entries</p>
                                <p>{this.state.data.private_entries}</p>
                            </div>
                            <div className='metrics-tile'>
                                <p>Public Entries</p>
                                <p>{this.state.data.public_entries}</p>
                            </div>
                        </section>
                        <section className='metrics-graphs-container'>
                            {this.graphDataKeys.map(key => this.createBarGraph(key))}
                        </section>
                    </section>
                    <p><br />Return to previous page</p>
                </section>
            )
        } else {
            return <p>Preparing...</p>
        };
    };
};

export default Reports;
