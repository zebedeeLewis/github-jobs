import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(4),
    flexGrow: 1,
    minHeight: theme.spacing(17),

    [theme.breakpoints.up('sm')]: {
      minHeight: theme.spacing(20),
      borderBottomLeftRadius: '100px',
    },
  },

  gridContainer: {
    maxWidth: theme.spacing(54),
    marginRight: 'auto',
    marginLeft: 'auto',

    [theme.breakpoints.up('sm')]: {
      maxWidth: 'initial',
    },

    [theme.breakpoints.up('md')]: {
      maxWidth: theme.spacing(138),
    },
  },

  filter: {
    width: '100%',
    transform: `translateY(${theme.spacing(3)}px)`,
    boxShadow: theme.shadows[3],

    [theme.breakpoints.up('sm')]: {
      transform: `translateY(${theme.spacing(6)}px)`,
    },
  },
}))
