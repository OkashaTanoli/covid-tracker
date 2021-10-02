import React, { useContext, useEffect, useState } from 'react';
import Header from './header/header';
import GlobalBox from './globalBoxData/globalbox'
import DonutChart from './globalChartData/globalchart'
import { ContextApi } from './GlobalState/contextApi'
import LineChart from './globalLineChart/globalLineChart'

function MainComponent() {
    const [Fdata, setFdata] = useState([])
    const { context } = useContext(ContextApi)
    const [BlocksData, setBlockData] = useState({})
    const [Loading, setLoading] = useState(true)


    useEffect(() => {
        async function CountryNameApi() {
            await fetch('https://disease.sh/v3/covid-19/countries')
                .then((response) => response.json())
                .then((data) => {
                    setFdata(data)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
        
        CountryNameApi()
    }, [])


    useEffect(() => {
        async function FetchApi() {

            if (context.country === 'Global') {
                fetch('https://disease.sh/v3/covid-19/all')
                    .then((response) => response.json())
                    .then((data) => {
                        setBlockData({ cases: data.cases, recovered: data.recovered, deaths: data.deaths, today: data.todayCases })
                        setLoading(false)


                    })
                setLoading(true)
                // .catch((err) => {
                //     console.log(err)
                // })
            }
            else {
                fetch(`https://disease.sh/v3/covid-19/countries/${context.country}`)
                    .then((response) => response.json())
                    .then((data) => {
                        setBlockData({ cases: data.cases, recovered: data.recovered, deaths: data.deaths, today: data.todayCases })
                        setBlockData({ cases: data.cases, recovered: data.recovered, deaths: data.deaths, today: data.todayCases })
                        setLoading(false)

                    })
                setLoading(true)
            }

        }
        FetchApi()
    }, [context.country])
    return (
        <div>
            <Header allCountriesList={Fdata} />
            <GlobalBox loading={Loading} Data={BlocksData} />
            <DonutChart loading={Loading} Data={BlocksData} />
            <LineChart />
            <p style={{textAlign:'center',fontSize:'16p',color:'whitesmoke',marginTop:'70px'}}>OKASHA_TANOLI copyright &#169;	 2021 </p>
        </div>
    )
}

export default MainComponent;