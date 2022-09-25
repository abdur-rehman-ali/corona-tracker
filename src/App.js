import React, { Component } from 'react'
import {Chart, Cards, CountryPicker} from './components'
import styles from './App.module.css'

export default class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Chart/>
        <Cards/>
        <CountryPicker/>
      </div>
    )
  }
}
