import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(4),
    flexGrow: 1,
    minHeight: theme.spacing(17),
  },
  filter: {
    width: '100%',
    transform: `translateY(${theme.spacing(3)}px)`,
    boxShadow: theme.shadows[3],
  },
}))
