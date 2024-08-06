import React from 'react';

import CloseIcon from '@mui/icons-material/Close';
import { Alert, IconButton, Snackbar, Typography } from '@mui/material';

import styles from './styles';

const SuccessNotification = ({ message, open, onClose }) => (
  <Snackbar
    open={open}
    autoHideDuration={6000}
    anchorOrigin={styles.SuccessNotification.anchorOrigin}
    sx={styles.SuccessNotification.sx}
    onClose={onClose}
  >
    <Alert
      severity="success"
      sx={styles.AlertNotification.sx}
      icon={false}
      action={
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          sx={{ color: '#000000', paddingLeft: '3.6rem' }}
          onClick={onClose}
        >
          <CloseIcon fontSize="medium" />
        </IconButton>
      }
    >
      <Typography
        component="div"
        sx={{ fontFamily: 'Satoshi Regular, sans-serif' }}
      >
        {message.map((part, index) => (
          <div key={index} style={part.style}>
            {part.text}
          </div>
        ))}
      </Typography>
    </Alert>
  </Snackbar>
);

const ErrorNotification = ({ message, open, onClose }) => {
  const closeButton = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={onClose}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  );

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      anchorOrigin={styles.ErrorNotification.anchorOrigin}
      sx={styles.ErrorNotification.sx}
      onClose={onClose}
    >
      <Alert
        severity="error"
        action={closeButton}
        sx={styles.AlertNotification.sx}
      >
        <Typography
          component="div"
          sx={{ fontFamily: 'Satoshi Regular, sans-serif' }}
        >
          {message.map((part, index) => (
            <div key={index} style={part.style}>
              {part.text}
            </div>
          ))}
        </Typography>
      </Alert>
    </Snackbar>
  );
};

export { SuccessNotification, ErrorNotification };
