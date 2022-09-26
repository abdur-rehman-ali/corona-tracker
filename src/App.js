import React, { Component } from 'react'
import { Chart, Cards, CountryPicker } from './components'
import styles from './App.module.css'
import { fetchData } from './api'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: []
    }
  }
  async componentDidMount() {
    const fetchedData = await fetchData()
    this.setState({
      data: fetchedData
    })
  }
  render() {
    const { data } = this.state
    return (
      <div className={styles.container}>
        <Cards data={data} />
        <Chart />
        <CountryPicker />
      </div>
    )
  }
}
