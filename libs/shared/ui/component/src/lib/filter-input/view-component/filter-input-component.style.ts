import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    borderRadius: '4px',
    marginBotton: theme.spacing(3),
  },

  inputFieldWrapper: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    color: theme.palette.text.primary,
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },

  inputField: {
    [theme.breakpoints.up('sm')]: {
      fontSize: '13px',
    },
  },
}))
