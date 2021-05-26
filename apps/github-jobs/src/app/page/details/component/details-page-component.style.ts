import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  container: {},
  introCard: {
    overflow: 'visible',

    [theme.breakpoints.up('sm')]: {
      maxHeight: theme.spacing(20),
    },
  },

  titleWrapper: {
    paddingBottom: theme.spacing(1),
    textAlign: 'center',

    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(2),
      textAlign: 'left',
    },
  },

  companyWrapper: {
    textAlign: 'center',

    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(2),
      paddingTop: 0,
      textAlign: 'left',
    },
  },

  avatarGrid: {
    [theme.breakpoints.up('sm')]: {
      marginLeft: 0,
    },
  },

  avatarWrapper: {
    marginTop: theme.spacing(-4),
    paddingBottom: theme.spacing(2),

    [theme.breakpoints.up('sm')]: {
      marginTop: 0,
      paddingBottom: 0,
    },
  },

  companyUrlGrid: {
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      marginLeft: 'auto',
    },
  },

  companyUrlWrapper: {
    display: 'flex',
    justifyContent: 'center',

    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(2),
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
    },
  },

  jobDesc: {},
  avatar: {
    width: theme.spacing(8),
    height: theme.spacing(8),

    [theme.breakpoints.up('sm')]: {
      maxWidth: theme.spacing(20),
      width: '100%',
      height: 'auto',
    },
  },
}))
