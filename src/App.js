import React from "react";
import styled from "styled-components";
import { Cards, Chart, CountryPicker } from "./components"
import { fetchData } from "./api";
import coronaImage from './images/image.png'


const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
     @media(max-width: 770px) {
        margin: 0 10%;
    }
`;

const StyledImage = styled.img`
    width: 370px;
    margin: 10px 0px;
    @media(max-width: 770px) {
        width: 100%;
    }
`;

class App extends React.Component {

    state = {
        data: {},
        country: '',
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({ data: fetchedData, country: country})
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData})
    }

    render() {
        const { data, country } = this.state;

        return (
            <Container>
                <StyledImage alt="COVID-19" src={coronaImage}></StyledImage>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country}/>
            </Container>
        )
    }
}
export default App;