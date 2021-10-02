import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import './globalchart.css'


function DoughnutChart({ Data, loading }) {
    const data = {
        labels: ['Cases', 'Deaths', 'Recovered'],
        datasets: [
            {
                label: '# of Votes',
                data: !loading ? [Data.cases, Data.deaths, Data.recovered] : [0, 0, 0],
                backgroundColor: [
                    'rgba(252, 199, 5,0.9)',
                    'rgba(227, 20, 0,0.9)',
                    'rgba(0, 186, 0,0.9)',

                ],
                borderColor: [
                    'rgba(255, 99, 132, 0)',
                    'rgba(54, 162, 235, 0)',
                    'rgba(255, 206, 86, 0)',
                ],
                borderWidth: 1,
                spacing: '2',
                borderRadius: '0',
                circumference: '360',
                cutout: '40%'

            },
        ],
    };

    return (
        <div className='donutChartMainDiv'>
            <div className='donutChart' style={{ width: '400px' }}>
                {
                    loading ?
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center',height:'100%' }}>
                            <div className="newLoader"></div>
                        </div>
                        :
                        <Doughnut data={data} />
                }
            </div>
            <div className='covidPreCau'>Coronavirus disease (COVID-19) is an infectious disease caused by the
                SARS-CoV-2 virus. Most people who fall sick with COVID-19 will experience mild to moderate symptoms
                and recover without special treatment. However, some will become seriously ill and require medical
                attention.
            </div>

        </div>
    )
}

export default DoughnutChart;