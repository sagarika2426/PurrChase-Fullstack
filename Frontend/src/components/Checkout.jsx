import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button, FormControl, FormControlLabel, IconButton, Radio, RadioGroup, TextField } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";


export default function AccordionExpandDefault() {
    const navigate = useNavigate();
    const handleNavigate = () => {
      navigate("/cart");
    };
  

  return (
    <div>
          <IconButton onClick={handleNavigate} className="!text-orange-900">
          <ArrowBackIcon />
        </IconButton>
        {/* Shipping Address */}
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography sx={{ fontWeight: 'bold', fontSize: '1.15rem' }}> Shipping address</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="flex gap-2 flex-col">
              <TextField
                id="filled-basic"
                label="Fist Name"
                variant="outlined"
                size="small"
              />
              <TextField
                id="filled-basic"
                label="Last Name"
                variant="outlined"
                size="small"
              />
            </div>
            <div className="my-2">
              <TextField
                id="filled-basic"
                label="Address"
                variant="outlined"
                size="small"
                fullWidth
              />
            </div>
            <div className="my-2">
              <TextField
                id="filled-basic"
                label="City"
                variant="outlined"
                size="small"
                fullWidth
              />
            </div>
            <div className="my-2">
              <TextField
                id="filled-basic"
                label="State"
                variant="outlined"
                size="small"
                fullWidth
              />
            </div>
            <div className="my-2">
              <TextField
                id="filled-basic"
                label="PIN code"
                variant="outlined"
                size="small"
                fullWidth
              />
            </div>

            <Button variant="contained">Save</Button>
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Payment */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="payment-panel-content"
          id="payment-panel-header"
        >
             <Typography sx={{ fontWeight: 'bold', fontSize: '1.15rem' }}>Choose Payment Method</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl component="fieldset">
            <RadioGroup>
              <FormControlLabel value="credit_card" control={<Radio />} label="Credit Card" />
              <FormControlLabel value="UPI" control={<Radio />} label="UPI" />
              <FormControlLabel value="cash_on_delivery" control={<Radio />} label="Cash on Delivery" />
            </RadioGroup>
            </FormControl>
        </AccordionDetails>
        <AccordionDetails>
          <Button variant="contained">Proceed to Payment</Button>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
