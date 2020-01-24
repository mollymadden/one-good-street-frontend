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

    handleInputChange = (e) => {
        // this.setState({
        //     items: this.search.value
        // }, () => {
        //     if (this.state.items && this.state.items.length > 1) {
        //         if (this.state.items.length % 2 === 0) {
        //             this.getInfo()
        //         }
        //     } else if (!this.state.items) {
        //     }
        // })
        // console.log(e.target.value)
        this.setState({
            filteredResults: this.state.results.filter((result) => {
                const item = result.itemName.toLowerCase()
                if (result.itemName) {
                    return item.includes(e.target.value)
                }
            })
        })
    }

    render() {
        const { results, filteredResults } = this.state
        console.log(filteredResults)
        return results ? (
            <form>
                <input
                    placeholder="Search"
                    ref={input => this.search = input}
                    onChange={this.handleInputChange}
                />
                <Librarycard results={this.state.filteredResults} />
            </form>
        ) : null
    }
}

export default Search