import React, { useState, useContext, useEffect, useCallback } from 'react'
import {
    Container,
    Title, 
    Subtitle, 
    InputField,
    Input,
    SubCont, 
    Select, 
} from '../screens/shipping/shippingStyledcomp.js';
import { DarkGreenButton } from '../style/styledButton.js';  
import { countryListAlpha2 } from './components/variousCountryListFormats.js'
import uuid from 'react-uuid'

const us = ['AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY'];

const RenderStateSelect = props => {
    const { state, setState} = props; 
    return (
        <Select value={state} onChange={setState} name = "state">
            {
                us.map(st => {
                    return <option value={st} key={uuid()}>{st}</option>
                })
            }
        </Select> 
        )
}

const RenderStateSelect = () => {

    const [data, setData] = useState({
        address1: '', 
        address2: '', 
        city: '',
        state: '', 
        zipcode: '', 
        country: '', 
    })
    const handleStateChange = event => {
        setData({
            ...data,
            state: event.target.value, 
        })
    }
    const changeHandler = event => {
        var val = event.target.value; 
        setData({
            ...data, 
            [event.target.name]: val
        })
    }


    return (
        <Container>
            <Title>Shipping Address</Title> 
            <InputField>
                <Subtitle>Address Line 1</Subtitle> 
                <Input value={data.address1} type = 'text' name='address1' onChange={changeHandler} />
            </InputField>
            <InputField>
                <Subtitle>Address Line 2</Subtitle>
                <Input value={data.address2} type='text' name='address2' onChange={changeHandler} />
            </InputField>
            <SubCont>
            <InputField>
                <Subtitle>City</Subtitle>
                <Input value={data.city} type='text' name='city' onChange={changeHandler} />
            </InputField>
            <InputField id ="stateContainer">
                <Subtitle>State</Subtitle>
                <RenderStateSelect state={data.state} setState={handleStateChange}/>
                {/* <Input value={data.state} type='text' name='state' onChange={changeHandler} /> */}
            </InputField>
            <InputField>
                <Subtitle>Zipcode</Subtitle>
                <Input value={data.zipcode} type='text' name='zipcode' onChange={changeHandler} />
                </InputField>
            </SubCont>
            <InputField>
                <Subtitle>Country</Subtitle>
                <Input value={data.country} type='text' name='country' onChange={changeHandler} />
            </InputField>
            <DarkGreenButton id = "ShippingSubmit">Submit</DarkGreenButton>
        </Container>
        )

}

export default RenderStateSelect; 