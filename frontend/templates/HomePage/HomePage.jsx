import { useEffect, useState } from 'react';

import { Grid, Typography } from '@mui/material';

import { onAuthStateChanged } from 'firebase/auth';
import moment from 'moment';

import { SuccessNotification } from '@/components/Notifications';
import ToolsListingContainer from '@/components/ToolsListingContainer';

import styles from './styles';

import { auth } from '@/redux/store';

const HomePage = (props) => {
  const { data, loading } = props;
  const [notificationOpen, setNotificationOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Convert the timestamp of the last user information refresh to a formatted date string.
        const refreshDate = moment(user.reloadUserInfo.lastRefreshAt).format(
          'YYYY-MM-DD HH:mm:ss'
        );
        // Convert the timestamp of the user creation time to a formatted date string.
        const creationDate = moment(user.metadata.creationTime).format(
          'YYYY-MM-DD HH:mm:ss'
        );
        // Convert the timestamp of the last user sign in  to a formatted date string.
        const lastSignInDate = moment(user.metadata.lastSignInTime).format(
          'YYYY-MM-DD HH:mm:ss'
        );
        // Check if the creation date, last sign-in date, and last refresh date are the same.
        // This indicates that the user is signing in for the first time and should see the sign-up notification.
        if (refreshDate === creationDate && creationDate === lastSignInDate) {
          setNotificationOpen(true); // Open the sign-up notification if conditions are met.
        }
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const handleClose = () => {
    setNotificationOpen(false);
  };

  // Function to render a sign-up success notification
  const renderSignUpNotification = () => {
    // Define the content of the notification message
    const messagePart = (
      <>
        <Typography
          sx={{
            fontWeight: 'bold',
            color: '#5614F3',
            margin: 0,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          Sign Up Successful!
        </Typography>
        <Typography
          sx={{
            color: '#000',
            margin: 0,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          👋 Welcome to KAI! {auth.currentUser.displayName}
        </Typography>
      </>
    );

    // Return the SuccessNotification component with the configured props
    return (
      <SuccessNotification
        open={notificationOpen}
        message={messagePart}
        onClose={handleClose}
        {...styles.successNotificationProps}
      />
    );
  };

  const renderTitle = () => {
    return (
      <Grid {...styles.titleGridProps}>
        <Typography {...styles.titleProps}>
          Welcome to{' '}
          <Typography {...styles.highlightTextProps}>Kai Tools</Typography> 👋
        </Typography>
        <Typography {...styles.subtitleProps}>
          Made for{' '}
          <Typography {...styles.highlightTextProps}>educators</Typography>
        </Typography>
      </Grid>
    );
  };

  return (
    <Grid {...styles.mainGridProps}>
      {renderTitle()}
      {renderSignUpNotification()}
      <ToolsListingContainer
        data={data}
        loading={loading}
        category="All Tools"
      />
    </Grid>
  );
};
export default HomePage;
