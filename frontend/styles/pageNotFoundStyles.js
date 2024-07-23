import { fontWeight } from '@mui/system';

const pageNotFoundStyles = {
  mainGridProps: {
    position: 'relative',
    container: true,
    item: true,
    mobileSmall: 12,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    overflow: 'hidden',
    maxWidth: { laptop: '1450px' },
    sx: {
      borderRadius: '22px',
    },
  },
  mainContentGridProps: {
    position: 'relative',
    container: true,
    item: true,
    mobileSmall: 10,
    desktop: 8,
    desktopExtraLarge: 5,
    justifyContent: 'center',
    rowGap: 1,
  },
  contentGridProps: {
    position: 'relative',
    container: true,
    item: true,
    justifyContent: 'center',
    alignItems: 'center',
    height: 'auto',
    rowGap: 2,
  },
  radialBg1Props: {
    position: 'absolute',
    left: 0,
    width: '810px',
    height: '810px',
    sx: {
      opacity: 0.5,
      borderRadius: '655px',
      transform: 'translate(-25%, 0px)',
    },
  },
  radialBg2Props: {
    position: 'absolute',
    left: 0,
    width: '400px',
    height: '400px',
    sx: {
      opacity: 0.5,
      borderRadius: '655px',
      transform: 'translate(25%, -35%)',
    },
  },
  radialBg3Props: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: '600px',
    height: '600px',
    sx: {
      opacity: 0.5,
      borderRadius: '655px',
      transform: 'translate(35%, 10%)',
    },
  },
  sectionGridProps: {
    container: true,
    item: true,
    mobileSmall: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconsGridProps: {
    container: true,
    columnGap: { mobileSmall: 0, desktop: 10 },
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleGridProps: {
    container: true,
    item: true,
    mobileSmall: 12,
    justifyContent: 'center',
  },
  subtitleProps: {
    color: 'black',
    textAlign: 'center',
    fontFamily: 'Satoshi Medium',
    fontSize: { laptop: '40px', desktop: '40px', desktopMedium: '50px' },
    lineHeight: '54px',
    fontWeight: '700',
    letter: '-2%',
  },
  bodyGridProps: {
    container: true,
    item: true,
    mobileSmall: 9,
    desktopMedium: 8,
    justifyContent: 'center',
    mb: 3,
  },
  bodyProps: {
    color: 'black',
    textAlign: 'center',
    fontFamily: 'Satoshi Regular',
    fontSize: '18px',
    lineHeight: '30px',
    fontWeight: '400',
    letter: '-2%',
  },
  buttonGridProps: {
    position: 'relative',
    container: true,
    item: true,
    mobileSmall: 12,
    justifyContent: 'center',
  },
  buttonProps: {
    variant: 'contained',
    sx: {
      px: 5,
      py: '26px',
      borderRadius: '100px',
      textTransform: 'capitalize',
      fontSize: '18px',
      fontFamily: 'Satoshi Bold',
      lineHeight: '20px',
      bgcolor: '#1D1A2E',
      ':hover': {
        bgcolor: '#242038',
      },
    },
  },
  titleProps: {
    fontSize: { laptop: '80px', desktop: '100px', desktopMedium: '140px' },
    fontFamily: 'Ethnocentric Regular Italics',
    letterSpacing: { laptop: '10px', desktop: '12px', desktopMedium: '15px' },
    sx: {
      textShadow: '0px 4px 30px rgba(26, 214, 161, 0.24)',
      background: (theme) => theme.palette.primary.main,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
  },
  submitButtonProps: {
    color: 'purple',
    inverted: true,
    extraProps: {
      padding: '2px',
      height: { laptop: '54px', desktopMedium: '60px' },
      width: 'auto',
    },
    extraButtonProps: {
      fontFamily: 'Satoshi Bold',
      fontSize: '16px',
      px: 4,
    },
  },
  yellowStarProps: {
    position: 'absolute',
    top: '-5%',
    left: '30%',
    width: { laptop: '60px', dekstop: '64px', dekstopMedium: '90px' },
  },
  planetProps: {
    position: 'absolute',
    bottom: 0,
    right: '20%',
    width: { laptop: '60px', dekstop: '64px', dekstopMedium: '90px' },
  },
  rocketProps: {
    position: 'absolute',
    top: '35%',
    left: { laptop: '10%', desktop: '15%', desktopMedium: '18%' },
    width: { laptop: '60px', dekstop: '64px', dekstopMedium: '90px' },
  },
  star1Props: {
    position: 'absolute',
    top: '25%',
    left: '25%',
    width: 36,
  },
  star2Props: {
    position: 'absolute',
    bottom: '10%',
    left: '30%',
    width: 36,
  },
  logoGridProps: {
    item: true,
    container: true,
    width: 'auto',
    justifyContent: 'flex-start',
    alignItems: 'center',
    sx: {
      '&:hover': {
        cursor: 'pointer',
      },
    },
  },
  star3Props: {
    position: 'absolute',
    top: 0,
    right: '18%',
    width: 42,
  },
};

export default pageNotFoundStyles;
