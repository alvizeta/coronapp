import React, { useState, useEffect} from "react";
import { fetchDailyData } from "../api";
import { Line, Bar } from "react-chartjs-2"

import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 55% !important;
    
    @media(max-width: 770px) {
        width: 100% !important;
    }
`;

const Chart = ({ data: { confirmed, recovered, deaths}, country}) => {
    const [ dailyData, setDailyData ] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            setDailyData(await fetchDailyData());
        }

        fetchApi();
    }, [])

    const lineChart = (
        dailyData.length ? (
            <Line data={{ labels: dailyData.map(({ date }) => date), datasets:[{
                    data: dailyData.map(({ confirmed}) => confirmed),
                    label: 'Infected',
                    borderColor: '#3333ff',
                    fill: true
                },{
                    data: dailyData.map(({ deaths}) => deaths),
                    label: 'Deaths',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255, 0, 0, 0.5)',
                    fill: true
                }]}} />
        ) : null
    );

    const barChart = (
        confirmed ? (
            <Bar data={{
                labels: ['infected', 'recovered', 'deaths'],
                datasets: [{
                    label: 'People',
                    backgroundColor: [
                        'rgba(0,0,255,0.5)',
                        'rgba(0,255,0,0.5)',
                        'rgba(255,0,0,0.5)',
                    ],
                    data: [ confirmed.value, recovered.value, deaths.value]
                }]
            }}
            options={{
                legend: { display: false },
                title: { display: true, text: `Current state in ${country}`}
            }}/>
        ) : null
    )

    return (
        <Container>
            {country ? barChart : lineChart }
        </Container>
    )
}

export default Chart;