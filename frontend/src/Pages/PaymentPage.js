import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import {
  TextField,
  MenuItem,
  Button,
  Grid,
  Typography,
  Paper,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
import "./PaymentPage.css";

const PaymentPage = () => {
  const location = useLocation();
  const amount = location.state?.amount || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    paymentMethod: "creditCard",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    upiId: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the payment data based on the selected payment method
    const paymentData = {
      name: formData.name,
      email: formData.email,
      amount: parseFloat(amount.replace(/[^0-9.]/g, "")),
      paymentMethod: formData.paymentMethod,
    };

    // Include additional fields based on the payment method
    if (formData.paymentMethod === "creditCard") {
      paymentData.cardNumber = formData.cardNumber;
      paymentData.expiryDate = formData.expiryDate;
      paymentData.cvv = formData.cvv;
    } else if (
      formData.paymentMethod === "googlePay" ||
      formData.paymentMethod === "phonePe"
    ) {
      paymentData.upiId = formData.upiId;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/payment/create",
        paymentData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Payment successful:", response.data);
      alert("Payment successful!");

      // Reset form data after successful payment
      setFormData({
        name: "",
        email: "",
        paymentMethod: "creditCard",
        cardNumber: "",
        expiryDate: "",
        cvv: "",
        upiId: "",
      });
    } catch (error) {
      console.error(
        "There was an error processing the payment:",
        error.response || error.message
      );
      alert("There was an error processing your payment. Please try again.");
    }
  };

  return (
    <div className="page-wrapper">
      <Paper elevation={3} className="custom-paper">
        <Typography variant="h4" className="form-title">
          Payment Information
        </Typography>
        <Typography variant="h6" gutterBottom>
          Amount to be Paid: <span className="amount-text">{amount}</span>
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                variant="outlined"
                required
                className="custom-text-field"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                variant="outlined"
                required
                className="custom-text-field"
              />
            </Grid>

            <Grid item xs={12}>
              <FormControl fullWidth className="custom-select">
                <InputLabel>Payment Method</InputLabel>
                <Select
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleChange}
                  variant="outlined"
                >
                  <MenuItem value="creditCard">Credit Card</MenuItem>
                  <MenuItem value="googlePay">Google Pay</MenuItem>
                  <MenuItem value="phonePe">PhonePe</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {formData.paymentMethod === "creditCard" && (
              <>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Card Number"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    variant="outlined"
                    className="custom-text-field"
                    required
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="Expiry Date (MM/YY)"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleChange}
                    variant="outlined"
                    className="custom-text-field"
                    required
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="CVV"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleChange}
                    variant="outlined"
                    className="custom-text-field"
                    required
                  />
                </Grid>
              </>
            )}

            {(formData.paymentMethod === "googlePay" ||
              formData.paymentMethod === "phonePe") && (
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="UPI ID"
                  name="upiId"
                  value={formData.upiId}
                  onChange={handleChange}
                  variant="outlined"
                  className="custom-text-field"
                  required
                />
              </Grid>
            )}

            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                className="custom-button"
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </div>
  );
};

export default PaymentPage;
