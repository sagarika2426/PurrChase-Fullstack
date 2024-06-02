import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button, IconButton, TextField } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import axios from "axios"

export default function AccordionExpandDefault() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pinCode, setPinCode] = useState("");
  
  const handleNavigate = () => {
    navigate("/cart");
  };

  const handleSave = () => {
    console.log("First Name:", firstName);
    console.log("Address:", address);
    console.log("City:", city);
    console.log("State:", state);
    console.log("PIN code:", pinCode);
    if (firstName === "" || address === "" || city === "" || state === "" || pinCode === "") {
      alert("Please fill out all fields.");
    } else {
      const addressData = {
        firstName,
        address,
        city,
        state,
        pinCode
    }
  


  axios.post("http://localhost:3000/save_address/", addressData)
        .then(response => {
          console.log("Address saved successfully:", response.data);
        })
        .catch(error => {
          console.error("Error:", error);
        });
      }
    }

  return (
    <div>

   
    <div>
      <IconButton onClick={handleNavigate} className="!text-orange-900">
        <ArrowBackIcon />
      </IconButton>

      <div className="flex flex-col lg:flex-row gap-4 lg:p-4 ">
        {/* Shipping Address */}
        <div className="l:m-auto lg:w-1/2">
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography sx={{ fontWeight: "bold", fontSize: "1.15rem" }}>
                Shipping address
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <div className="flex gap-2 flex-col">
                  <TextField
                    id="filled-basic"
                    label="First Name"
                    variant="outlined"
                    size="small"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />

                </div>
                <div className="my-2">
                  <TextField
                    id="filled-basic"
                    label="Address"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                </div>
                <div className="my-2">
                  <TextField
                    id="filled-basic"
                    label="City"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                  />
                </div>
                <div className="my-2">
                  <TextField
                    id="filled-basic"
                    label="State"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    required
                  />
                </div>
                <div className="my-2">
                  <TextField
                    id="filled-basic"
                    label="PIN code"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={pinCode}
                    onChange={(e) => setPinCode(e.target.value)}
                    required
                  />
                </div>

                <Button variant="contained" onClick={handleSave}>
                  Save
                </Button>
              </Typography>
            </AccordionDetails>
          </Accordion>
    </div>
    </div>

    </div>
    </div>
  )
  }