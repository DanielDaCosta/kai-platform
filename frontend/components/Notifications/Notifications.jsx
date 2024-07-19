import SnackBar from '../SnackBar';

const SuccessNotification = ({ message, open, onClose }) => (
  <SnackBar
    open={open}
    autoHideDuration={6000}
    onClose={onClose}
    message={message}
  />
);

const ErrorNotification = ({ message, open, onClose }) => (
  <SnackBar
    open={open}
    autoHideDuration={10000}
    onClose={onClose}
    message={message}
    sx={{
      width: '20%',
      left: '50%',
      transform: 'translateX(-50%)',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    }}
    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
  />
);
export { SuccessNotification, ErrorNotification };
