import React from "react";
// import { Button } from 'reactstrap'

const Card = ({ amount, img, checkoutHandler }) => {
  return <button onClick={() => checkoutHandler(amount)}>pay Now</button>;
};

export default Card;
