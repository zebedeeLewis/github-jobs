import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: theme.spacing(54),
    marginTop: theme.spacing(31),
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
  jobsContainer: {},
}))
