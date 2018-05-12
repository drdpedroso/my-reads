import React from 'react'
import {DebounceInput} from 'react-debounce-input';

export default class Search extends React.Component {
    constructor() {
        super()

        this.state = {
            value: ''
        }
    }

    setSearchValue(e) {
        const {value} = e.target
        this.setState({value})}
    }

    searchBook(e) {
        const {value} = e.target
    }


    render () {
        return (
        <React.Fragment>
                    <DebounceInput
          minLength={2}
          debounceTimeout={300}
          onChange={event =>  />

            <p>Value: {this.state.value}</p>
        </React.Fragment>
        )
    }
}
