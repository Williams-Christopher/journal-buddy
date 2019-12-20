import React from 'react';
import {withRouter} from 'react-router-dom';

import ApiServices from '../../services/api-services';
import { getLongFormattedEntryTitle, getStringForFeelingValue, getStringForPrivacyValue, getStringForUTCDate } from '../../helpers/Helpers';
import './ViewEntry.css';

class ViewEntry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            entry: {
                id: null,
                user_id: null,
                entry_id: null,
                feeling: null,
                title: null,
                body: null, 
                privacy: null,
                cerated: null,
            },
        };
    };

    componentDidMount() {
        ApiServices.getEntry(this.props.match.params.entry_id)
            .then(result => this.setState({entry: result}))
            .catch(error => this.setState({error: error.message}));
    };

    handleCopyButton = () => {
        const permalinkUrl = `https://journal-buddy.cwilliams.now.sh/share/${this.state.entry.entry_id}`;
        navigator.clipboard.writeText(permalinkUrl);
    };

    handleBackButton = () => {
        this.props.history.push('/MyEntries');
    };

    entryFound() {
        return (
            <article className='view_entry'>
                <h2>
                    View Journal Entry
                </h2>
                <div className='common_button_container'>
                    <button className='common_button' disabled={this.state.entry.privacy === 0 ? true : false} onClick={() => this.handleCopyButton()}>Copy permalink to entry</button>
                    <button className='common_button' onClick={() => this.handleBackButton()}>Back to list</button>
                </div>
                <h2>{this.state.entry.title}</h2>
                <p className='view_entry_date'>
                    Date: {getStringForUTCDate(this.state.entry.created)}
                    {/* { getLongFormattedEntryTitle(this.state.entry.title, this.state.entry.created) } */}
                </p>
                <p className='view_entry_feeling'>
                    Feeling: { getStringForFeelingValue(this.state.entry.feeling) }
                </p>
                <p>
                    Privacy: { getStringForPrivacyValue(this.state.entry.privacy) }
                </p>
                <p className='view_entry_body'>
                    { this.state.entry.body }
                </p>
            </article>
        );
    };

    entryNotFound() {
        return (
            <section className='view_entry'>
                <h2>
                    <p>No matching entry found or you are not signed in</p>
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

export default withRouter(ViewEntry);
