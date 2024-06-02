import { useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Button, FormControl, FormControlLabel, Radio, RadioGroup, Typography, TextField } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const PaymentAccordion = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    nameOnCard: '',
    expiryDate: '',
    cvv: ''
  });
  const [upiId, setUpiId] = useState('');

  const handlePaymentMethodChange = (event) => {
    // console.log(event.target.value)
    setPaymentMethod(event.target.value);
    // Clear previously entered details
    setCardDetails({
      cardNumber: '',
      nameOnCard: '',
      expiryDate: '',
      cvv: ''
    });
    setUpiId('');
  };

  const handleCardDetailsChange = (event) => {
    const { name, value } = event.target;
    // Ensure only numbers are entered for the card number
    if (name === 'cardNumber' && !/^\d*$/.test(value)) {
      return; // Do nothing if input is not numeric
    }
    setCardDetails({ ...cardDetails, [name]: value });
  };

  const handleUpiIdChange = (event) => {
    setUpiId(event.target.value);
  };

  return (
    <div className="lg:m-auto lg:w-1/2">
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="payment-panel-content"
          id="payment-panel-header"
        >
          <Typography sx={{ fontWeight: "bold", fontSize: "1.15rem" }}>
            Choose Payment Method
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl component="fieldset">
            <RadioGroup value={paymentMethod} onChange={handlePaymentMethodChange}>
              <FormControlLabel
                value="credit_card"
                control={<Radio />}
                label="Credit Card"
              />
              <FormControlLabel value="UPI" control={<Radio />} label="UPI" />
            </RadioGroup>
          </FormControl>
        </AccordionDetails>
        {paymentMethod === 'credit_card' && (
          <AccordionDetails>
            <div className="flex flex-col space-y-2">
              <TextField
                label="Card Number"
                variant="outlined"
                name="cardNumber"
                value={cardDetails.cardNumber}
                onChange={handleCardDetailsChange}
                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                required
              />
              <TextField
                label="Name on Card"
                variant="outlined"
                name="nameOnCard"
                value={cardDetails.nameOnCard}
                onChange={handleCardDetailsChange}
                required
              />
              <TextField
                label="Expiry Date (MM/YYYY)"
                variant="outlined"
                name="expiryDate"
                value={cardDetails.expiryDate}
                onChange={handleCardDetailsChange}/>
                
              <TextField
                label="CVV"
                variant="outlined"
                name="cvv"
                value={cardDetails.cvv}
                onChange={handleCardDetailsChange}
              />
            </div>
          </AccordionDetails>
        )}
        {paymentMethod === 'UPI' && (
          <AccordionDetails>
            <TextField
              label="UPI ID"
              variant="outlined"
              value={upiId}
              onChange={handleUpiIdChange}
            />
          </AccordionDetails>
        )}
        <AccordionDetails>
          <Button variant="contained">
            Proceed to Payment
          </Button>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default PaymentAccordion;
