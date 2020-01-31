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

    handleCategoryChange = (e) => {
        this.setState({
            filteredResults: this.state.results.filter((result) => {
                return result.category.includes(e.target.value)
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
                /><br />

                <label htmlFor="filter">Filter by category:</label>
                <select value={this.state.value} onChange={this.handleCategoryChange}>
                    <option value="">Show All</option>
                    <option value="Bedroom">Bedroom</option>
                    <option value="Braces and support">Braces and Support</option>
                    <option value="Dressing and Grooming">Dressing and Grooming</option>
                    <option value="Orthotics and Footcare">Exercise and therapy</option>
                    <option value="Furniture">Furniture</option>
                    <option value="Household Aid">Household Aid</option>
                    <option value="Kitchen">Kitchen</option>
                    <option value="Mobility">Mobility</option>
                    <option value="Orthotics and footcare">Orthotics and Footcare</option>
                    <option value="Toileting">Toileting</option>
                    <option value="Other">Other</option>
                </select>


                <Librarycard results={this.state.filteredResults} />
            </form>
        ) : null
    }
}

export default Search