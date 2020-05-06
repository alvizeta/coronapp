import React, { useEffect, useState } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styled from "styled-components";
import { fetchCountries } from "../api";

const StyledFormControl = styled(FormControl)`
    width: 30%;
    margin-bottom: 30px !important;
`;

const CountryPicker = ({ handleCountryChange }) => {

    const [ fetchedCountries, setFetchedCountries ] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            setFetchedCountries(await fetchCountries())
        }

        fetchApi();
    }, [setFetchedCountries])

    return (
        <StyledFormControl>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                { fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </StyledFormControl>
    )
}

export default CountryPicker;