import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import {
    Container,
    TextBlock,
    ListItem,
    UnorderedList,
    Header3,
} from './sectionStyle.js';

const CustomerSection = () => {
    const navigate = useNavigate();
    const goPrivacy = useCallback(() => navigate('/privacy_policy', {}), [navigate])
    const goOrder = useCallback(() => navigate('/orders', {}), [navigate])
    const goRefund = useCallback(() => navigate('/return_and_refund_policy', {}), [navigate])
    const goTerms = useCallback(() => navigate('/terms_and_condition', {}), [navigate])

    return (
        <Container>
            <Header3>Customer Service</Header3>
            <ListItem onClick={goRefund}>Refund and Return Policy </ListItem>
            <ListItem onClick={goPrivacy}>Privacy Policy</ListItem>
            <ListItem onClick={goTerms}>Terms of Service </ListItem>
            <ListItem onClick={goOrder}>Order History</ListItem>
        </Container>
    )
}

export default CustomerSection; 