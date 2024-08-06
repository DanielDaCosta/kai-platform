import React, { useEffect, useState } from 'react';

import { Grid, Typography } from '@mui/material';

import { useRouter } from 'next/router';

import { SuccessNotification } from '@/components/Notification';
import ToolsListingContainer from '@/components/ToolsListingContainer';

import styles from './styles';

import store, { auth } from '@/redux/store';

const HomePage = (props) => {
  const { data, loading } = props;
  const [notificationOpen, setNotificationOpen] = useState(false); // Set to true initially to show the notification
  const router = useRouter();

  useEffect(() => {
    const { query } = router;
    if (query.from === 'login') {
      setNotificationOpen(true);
      const cleanUrl = router.pathname;
      router.replace(cleanUrl, undefined, { shallow: true });
    }
  }, []);

  const handleClose = () => {
    setNotificationOpen(false);
  };
  const renderTitle = () => {
    console.log(auth);

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
  const messageParts = [
    {
      text: 'Log In Successful! ',
      style: {
        color: '#5614F3',
        fontFamily: 'Satoshi Bold, sans-serif',
        fontWeight: '700',
      },
    },
    {
      text: `👋 Welcome back to KAI! ${auth.currentUser.displayName}`,
      style: {
        color: '#000000',
        fontWeight: '500',
        fontFamily: 'Satoshi Medium, sans-serif',
      },
    },
  ];

  return (
    <Grid {...styles.mainGridProps}>
      {renderTitle()}
      <ToolsListingContainer
        data={data}
        loading={loading}
        category="All Tools"
      />
      <SuccessNotification
        message={messageParts}
        open={notificationOpen}
        onClose={handleClose}
      />
    </Grid>
  );
};
export default HomePage;
