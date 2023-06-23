import React from 'react'
import { Button } from 'reactstrap'

const Card = ({ amount, img, checkoutHandler }) => {
    return (
        <Button onClick={() => checkoutHandler(amount)}>Pay Now</Button>
       
    )
}

export default Card