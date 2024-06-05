import { useState } from "react";
import AddressForm from "./AddressForm"; // Adjust the import path as necessary

function ParentComponent() {
  const [setSavedAddress] = useState(null);
  const userId = '123'; // You would get this value from your authentication system or wherever it's available

  const handleSaveSuccess = (addressData) => {
    setSavedAddress(addressData);
  };

  return (
    <div>
      <h2>Address Form</h2>
      <AddressForm userId={userId} onSaveSuccess={handleSaveSuccess} />
    </div>
  );
}

export default ParentComponent;
