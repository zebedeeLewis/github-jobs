import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(4),
    flexGrow: 1,
    minHeight: theme.spacing(17),
  },
}))
