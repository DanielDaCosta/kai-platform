import { Snackbar, Button } from '@mui/material';

const ALERT_COLORS = {
  INFO: 'info',
  SUCCESS: 'uccess',
  ERROR: 'error',
};

const SuccessNotification = ({ message, open, onClose }) => (
    <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={onClose}
        message={message}
    />
);

const ErrorNotification = ({ message, open, onClose }) => (
    <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={onClose}
        message={message}
        action={
            <Button color="secondary" size="small" onClick={onClose}>
                Dismiss
            </Button>
        }
    />
);
export { SuccessNotification, ErrorNotification, ALERT_COLORS };
