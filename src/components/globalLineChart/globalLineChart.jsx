import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import './globalLineChart.css'


const LineChart = () => {


    const [objVal, setObjVal] = useState([])
    const [objCases, setObjCases] = useState([])
    const [objDeaths, setObjDeaths] = useState([])
    // const [objRecovered,setObjRecovered] = useState([])

    useEffect(() => {
        async function FetchApi() {
            await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=365')
                .then((response) => response.json())
                .then((data) => {
                    setObjVal(Object.keys(data.cases))
                    setObjCases(Object.values(data.cases))
                    setObjDeaths(Object.values(data.deaths))
                    // setObjRecovered(Object.values(data.recovered))
                    // let array=[];
                    // for(var i=0;i<Object.values(data.cases).length;i++){
                    //     array.push(Object.values(data.cases)[i]-Object.values(data.cases)[i-1 ])
                    //     console.log(Object.values(data.cases)[i]-Object.values(data.cases)[i])
                    // }
                    // array.splice(0,1)
                    // array[0] = Object.values(data.cases)[0]

                    // setObjCases(array)

                })
                .catch(() => {
                    console.log('no data')
                })
        }
        FetchApi()
    }, [])

    const data = {
        labels: objVal,
        datasets: [
            {
                label: 'Deaths',
                data: objDeaths,
                fill: true,
                backgroundColor: 'rgba(227, 20, 0,0.8)',
                borderColor: 'rgba(227, 20, 0,1)',
                // borderWidth:'20px'
                // tension: 0.5

            },
            {
                label: 'Cases',
                data: objCases,
                fill: true,
                backgroundColor: 'rgba(252, 199, 5,0.5)',
                borderColor: 'rgba(252, 199, 5,0.9)',

                // tension: 0.5
            },
            // {
            //     label: 'Recovered',
            //     data: objRecovered,
            //     fill: false,
            //     backgroundColor: 'rgba(0, 186, 0,0.9)',
            //     borderColor: 'rgba(0, 186, 0,0.9)',
            //     tension: 0.5

            // },
        ],
    };

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    };
    return (
        <div>
            <div className='lineChartHeadDiv'>
                <div className='totalDataHead'>LAST YEAR GLOBAL DATA:</div>
                <div className='extraDivForHead'></div>
            </div>
            <div className='lineChartDiv'>
                <Line data={data} options={options} />
            </div>
        </div>
    )
}


export default LineChart;