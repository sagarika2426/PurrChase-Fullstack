import { useState } from "react";
import { TextField, Button } from "@mui/material";
import axios from "axios";

function AddressForm({ userId}) {
  const [firstName, setFirstName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pinCode, setPinCode] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const addressData = { userId, firstName, address, city, state, pinCode };
      const result = await axios.post("https://purrchase-fullstack.onrender.com/save_address", addressData);
      console.log(result);
      
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="w-full mx-auto p-6 text-center shadow-xl shadow-gray-400 block mt-6 bg-white lg:w-1/3 rounded-md border border-gray-300">
      <h1 className="text-center text-xl font-bold">Shipping Address</h1>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <TextField id="firstName" label="First Name" variant="outlined" required value={firstName} onChange={(e) => setFirstName(e.target.value)} size="small" />
        <TextField id="address" label="Address" variant="outlined" required value={address} onChange={(e) => setAddress(e.target.value)} size="small" />
        <TextField id="city" label="City" variant="outlined" required value={city} onChange={(e) => setCity(e.target.value)} size="small" />
        <TextField id="state" label="State" variant="outlined" required value={state} onChange={(e) => setState(e.target.value)} size="small" />
        <TextField id="pinCode" label="PIN code" variant="outlined" required value={pinCode} onChange={(e) => setPinCode(e.target.value)} size="small" />
        <Button variant="contained" type="submit">Save Address</Button>
      </form>
    </div>
  );
}

export default AddressForm;
