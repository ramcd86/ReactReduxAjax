import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {fetchWeather} from "../actions";

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            term: ''
        };
        this._onInputChange = this._onInputChange.bind(this);
        this._onFormSubmit = this._onFormSubmit.bind(this);
    }

    _onInputChange(event) {
        this.setState({
            term: event.target.value
        })
    };

    _onFormSubmit(event) {
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({
            term: ''
        })
    }

    render() {
        return (
            <div>
                <form
                    onSubmit={this._onFormSubmit}
                    className={"input-group"}>
                    <input
                        placeholder={"Get a 5 day forecast in your city..."}
                        className={"form-control"}
                        value={this.state.term}
                        onChange={this._onInputChange}
                    />
                    <span className={"input-group-btn"}>
                        <button type="submit" className={"btn btn-secondary"}>Submit</button>
                    </span>
                </form>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchWeather
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)