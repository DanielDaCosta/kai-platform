const styles = {
  submitButtonProps: {
    color: 'purple4',
    inverted: true,
    extraProps: {
      padding: '2px',
      height: { laptop: '54px', desktopMedium: '60px' },
      width: '60%',
    },
    extraButtonProps: {
      fontFamily: 'Satoshi Bold',
      fontSize: '16px',
      px: 4,
    },
  },
  errorNotificationProps: {
    anchorOrigin: { vertical: 'top', horizontal: 'center' },
    sx: {
      position: 'absolute',
      top: '7%',
      left: '50%',
      height: '24px',
      transform: 'translate(-50%, -50%)',
      width: '60%',
    },
  },
};

export default styles;
