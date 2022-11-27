import React, {useEffect, useState} from 'react'
import {
    Container, 
    Detail
} from './cartStyledComp.js';

export const RenderSubtotal = props => {

    const { subtotal, totalItems } = props;

    return (
        <Container>
            <Detail><b>Total items:</b> {totalItems}</Detail>
            <Detail><b>Subtotal before shipping and tax:</b> ${subtotal.toFixed(2)}</Detail>
        </Container>
    )
}


