import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
    borderRadius: '4px',
    marginBotton: theme.spacing(3),
  },
  titleFilter: {
    width: '100%',
  },
}))
