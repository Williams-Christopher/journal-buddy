import React from 'react';

import './Reports.css';

class Reports extends React.Component {
    render() {
        return (
            <section className='journal_reports'>
                <h2>
                    Journal Reports
                </h2>
                <p>#Small chart with a count of journal entries by month#</p>
                <p>#Small charqt with a count of journal entries by day of week#</p>
                <p>#Small chart with a count of journal entries by feeling#</p>
                <p>#Can we chart the trend feeling metric over the last 30 or 60 days?#</p>
                <p><br />Return to previous page</p>
            </section>
        );
    };
};

export default Reports;
