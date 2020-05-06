import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styled from "styled-components";
import CountUp from "react-countup";

const Container = styled.div`
    margin: 50px 0px;
`;

const InfectedGrid = styled(Grid)`
    border-bottom: 10px solid rgba(0,0,255,0.5);
    margin: 2% !important;
    @media(max-width: 770px) {
        margin: 2% 0 !important;
    }
`;

const RecoveredGrid = styled(Grid)`
    border-bottom: 10px solid rgba(0,255,0,0.5);
    margin: 2% !important;
    @media(max-width: 770px) {
        margin: 2% 0 !important;
    }
`;

const DeathsGrid = styled(Grid)`
    border-bottom: 10px solid rgba(255,0,0,0.5);
    margin: 2% !important;
    @media(max-width: 770px) {
        margin: 2% 0 !important;
    }
`;

const Cards = ({ data: {confirmed, recovered, deaths, lastUpdate} }) => {

    console.log(confirmed);

    if(!confirmed){
        return 'Loading';
    }
    return (
        <Container>
            <Grid container spacing={3} justify="center">
                <InfectedGrid item xs={12} md={3} component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={confirmed.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2"> Number of active cases of COVID-19 </Typography>
                    </CardContent>
                </InfectedGrid>
                <RecoveredGrid xs={12} md={3} item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={recovered.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2"> Number of recoveries from COVID-19 </Typography>
                    </CardContent>
                </RecoveredGrid>
                <DeathsGrid xs={12} md={3} item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom> Deaths </Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={deaths.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2"> Number of deaths from COVID-19 </Typography>
                    </CardContent>
                </DeathsGrid>
            </Grid>
        </Container>
    )
}

export default Cards;