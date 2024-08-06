const styles = {
  AlertNotification: {
    sx: {
      backgroundColor: '#E6DBFF',
      color: '#FE6167', // Text color
      padding: '4px 14px',
      borderRadius: '8px',
      fontSize: '16px',
      fontFamily: 'Satoshi, sans-serif', // Using Satoshi for the main message
      boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.35)', // Adjust blur and transparency here
      border: '1px solid #5614F3',
    },
  },
  ErrorNotification: {
    anchorOrigin: { vertical: 'top', horizontal: 'center' },
    sx: {
      top: '7%',
      left: '50%',
      transform: 'translate(-50%, 0)',
      width: '50%', // Adjust the max-width as needed
    },
  },
  SuccessNotification: {
    anchorOrigin: { vertical: 'top', horizontal: 'right' },
    sx: {
      top: '7%',
      // right: '30%',
      transform: 'translate(80%, 0)',
      width: '50%', // Adjust the max-width as needed
    },
  },
};

export default styles;
