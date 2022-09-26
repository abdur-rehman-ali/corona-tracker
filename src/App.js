import React, { Component } from 'react'
import { Report, Cards, CountryPicker } from './components'
import styles from './App.module.css'
import { fetchData } from './api'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: {},
      country: ''
    }
  }
  async componentDidMount() {
    const fetchedData = await fetchData()
    this.setState({
      data: fetchedData
    })
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country)
    this.setState({
      data: fetchedData,
      country: country
    })

  }

  render() {
    const { data, country } = this.state
    return (
      <div className={styles.container}>
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Cards data={data} />
        <Report data={data} country={country} />
      </div>
    )
  }
}
