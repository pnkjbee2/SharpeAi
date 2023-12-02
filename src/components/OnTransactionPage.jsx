import React, { useState } from 'react';
import { Typography, TextField, Button, Box } from '@mui/material';

const OnTransactionPage = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [walletAddressError, setWalletAddressError] = useState('');
  const [amountError, setAmountError] = useState('');

  const validateForm = (event) => {
    event.preventDefault();

    // Reset previous errors
    setWalletAddressError('');
    setAmountError('');

    // Wallet address validation
    if (!walletAddress.trim()) {
      setWalletAddressError('Wallet address cannot be empty.');
      return;
    } else if (!/^0x[a-fA-F0-9]{40}$/.test(walletAddress)) {
      setWalletAddressError('Invalid Ethereum address format.');
      return;
    }

    // Amount validation
    const amountValue = parseFloat(amount);
    if (isNaN(amountValue) || amountValue < 0 || amountValue > 10000) {
      setAmountError('Invalid amount. Please enter a number between 0 and 10,000.');
      return;
    }

    // If all validations pass, you can proceed with the transaction
    alert('Transaction submitted successfully!');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#e5e3d9',
      }}
    >
    <Box
      component="form"
      onSubmit={validateForm}
      sx={{
        backgroundColor: '#fff',
        padding: '20px',
        width: '500px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Typography variant="h6" gutterBottom>
        Wallet Address:
      </Typography>
      <TextField
        type="text"
        id="walletAddress"
        name="walletAddress"
        placeholder="Enter your Ethereum wallet address"
        fullWidth
        value={walletAddress}
        onChange={(e) => setWalletAddress(e.target.value)}
        error={!!walletAddressError}
        helperText={walletAddressError}
      />

      <Typography variant="h6" gutterBottom>
        Amount:
      </Typography>
      <TextField
        type="text"
        id="amount"
        name="amount"
        placeholder="Enter the amount"
        fullWidth
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        error={!!amountError}
        helperText={amountError}
      />

      <Button type="submit" variant="contained" sx={{ backgroundColor: '#4caf50', color: '#fff', marginTop: '16px' }}>
        Submit Transaction
      </Button>
    </Box>
    </Box>
  );
};

export default OnTransactionPage;
