import axios from 'axios'

const URL = 'https://covid19.mathdro.id/api'

export const fetchData = async (country) => {
  let modifiedURL = URL
  if(country){
    modifiedURL= `${URL}/countries/${country}`

  }
  try {
    const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(modifiedURL)
    return { confirmed, recovered, deaths, lastUpdate }
  } catch (error) {

  }
}

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${URL}/daily`)
    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      reportDate: dailyData.reportDate
    }))
    return modifiedData
  } catch (error) {

  }
}

export const fetchCountries = async () => {
  try {
    const {data: {countries}} = await axios.get(`${URL}/countries`)
    return countries

  } catch (error) {

  }

}