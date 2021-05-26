import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: theme.spacing(54),
    marginLeft: 'auto',
    marginRight: 'auto',

    [theme.breakpoints.up('sm')]: {
      maxWidth: 'initial',
    },

    [theme.breakpoints.up('md')]: {
      maxWidth: theme.spacing(138),
      marginRight: 'auto',
      marginLeft: 'auto',
    },
  },

  filter: {
    width: '100%',
    transform: `translateY(-${theme.spacing(5)}px)`,
    boxShadow: theme.shadows[3],

    [theme.breakpoints.up('sm')]: {
      transform: `translateY(-${theme.spacing(6)}px)`,
    },
  },

  jobsContainer: {},
}))
