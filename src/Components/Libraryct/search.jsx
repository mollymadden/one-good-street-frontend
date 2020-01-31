import React, { Component } from 'react';
import axios from 'axios'
import Librarycard from './Card';


class Search extends Component {
    state = {
        items: '',
        results: [],
        filteredResults: []
    }

    componentDidMount() {
        axios.get(process.env.REACT_APP_BACKEND_URL + "/items")
            .then(({ data }) => {
                this.setState({
                    results: data,
                    filteredResults: data
                })
            })
    }

    getInfo = () => {
        axios.get(process.env.REACT_APP_BACKEND_URL + "/items")
            .then(({ data }) => {
                this.setState({
                    results: data
                })
            })
    }

    handleInputProductNameChange = (e) => {
        this.setState({
            filteredResults: this.state.results.filter((result) => {
                const item = result.itemName.toLowerCase()
                if (result.itemName) {
                    return item.includes(e.target.value)
                } else { }

            })
        })
    }

    handleInputPostcodeChange = (e) => {
        this.setState({
            filteredResults: this.state.results.filter((result) => {
                return result.postcode.includes(e.target.value)
            })
        })
    }

    render() {
        const { results, filteredResults } = this.state
        console.log(filteredResults)
        return results ? (
            <form>
                <input className="search"
                    placeholder="Search by product name"
                    ref={input => this.search = input}
                    onChange={this.handleInputProductNameChange}
                /><br />

                <input className="search"
                    placeholder="Search by postcode"
                    ref={input => this.search = input}
                    onChange={this.handleInputPostcodeChange}
                />

                {/* <input className="search"
                    placeholder="Search"
                    ref={input => this.search = input}
                    onChange={this.handleInputChange}
                /> */}

                <Librarycard results={this.state.filteredResults} />
            </form>
        ) : null
    }
}

export default Search