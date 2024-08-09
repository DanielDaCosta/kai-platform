const styles = {
  mainGridProps: {
    container: true,
    item: true,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    rowGap: 5,
    px: { laptop: 4, desktop: 5, desktopMedium: 6 },
    py: { laptop: 1, desktop: 1.5, desktopMedium: 2 },
  },
  titleGridProps: {
    container: true,
    item: true,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  titleProps: {
    fontFamily: 'Satoshi Bold',
    fontSize: '36px',
  },
  subtitleProps: {
    fontFamily: 'Satoshi Regular',
    fontSize: '18px',
  },
  highlightTextProps: {
    component: 'span',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    color: (theme) => theme.palette.primary.main,
  },
  successNotificationProps: {
    container: true,
    item: true,
    flexDirection: 'column',
    alignItems: 'flex-end',
    // anchorOrigin: { vertical: 'top', horizontal: 'right' },
    sx: {
      position: 'absolute',
      top: '5%',
      left: '65%',
      height: '80px',
      // transform: 'translate(-50%, -50%)',
      width: '324px', // Adjust the max-width as needed
    },
  },
};

export default styles;
