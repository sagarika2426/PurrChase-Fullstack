import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const ContactUs = () => {
  const initialFormData = {
    name: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  };

  const [formData, setFormData] = useState({ ...initialFormData });
  const [showNotification, setShowNotification] = useState(false);

  const handleChange = (e) => {
    const { name, email, phoneNumber, subject, message, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
      [email]: value,
      [phoneNumber]: value,
      [subject]: value,
      [message]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Show notification
    setShowNotification(true);
    // Reset form data
    setFormData({ ...initialFormData });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Get in Touch</h1>
      <div className="grid grid-cols-2 gap-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Form fields */}
        <div className="space-y-2">
          <TextField
            id="name"
            name="name"
            label="Name"
            variant="outlined"
            size="small"
            required
            value={formData.name}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            id="email"
            name="email"
            label="Email"
            variant="outlined"
            size="small"
            required
            value={formData.email}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            id="phoneNumber"
            name="phoneNumber"
            label="Phone Number"
            variant="outlined"
            size="small"
            required
            value={formData.phoneNumber}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            id="subject"
            name="subject"
            label="Subject"
            variant="outlined"
            size="small"
            required
            value={formData.subject}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            id="message"
            name="message"
            label="Your message"
            variant="outlined"
            size="small"
            multiline
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
            fullWidth
          />
          {/* Other fields */}
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </div>
      </form>
      {/* Notification */}
      {showNotification && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mt-4">
          Thank you for reaching out. {"We'll"} be in touch with you shortly.
        </div>
      )}
      {/* Company contact information */}
      <div className="mt-8 m-auto">
        <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
        <p className="mb-2">
          Email Address: purrchase@gmail.com

        </p>
        <p className="mb-2">
          Phone Number: +91 0000000000
        </p>
    
      </div>

      </div>
      
    </div>
  );
};

export default ContactUs;
