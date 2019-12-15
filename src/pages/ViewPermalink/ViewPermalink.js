import React from 'react';
import {withRouter} from 'react-router-dom';

import ApiServices from '../../services/api-services';
import {getLongFormattedEntryTitle} from '../../helpers/Helpers';
import './ViewPermalink.css';

class ViewPermalink extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            entry: {
                user: null,
                title: null,
                body: null, 
                created: null,
            },
        };
    };

    componentDidMount() {
        ApiServices.getSharedEntry(this.props.match.params.entry_id)
            .then(result => this.setState({entry: result}))
            .catch(error => this.setState({error: error.error}));
    };

    entryFound() {
        return (
            <section className='view_entry'>
                <h2>
                    View Shared Journal Entry by {this.state.entry.user}
                </h2>
                <p className='view_entry_date'>
                    { getLongFormattedEntryTitle(this.state.entry.title, this.state.entry.created) }
                </p>
                <article className='view_entry_body'>
                    { this.state.entry.body }
                </article>
            </section>
        );
    };

    entryNotFound() {
        return (
            <section className='view_entry'>
                <h2>
                    <p>The requested shared entry could not be found or is private.</p>
                </h2>
            </section>
        );
    };

    render() {
        if (this.state.error) {
            return (this.entryNotFound())
        } else {
            return (this.entryFound())
        }
    };
};

export default withRouter(ViewPermalink);
