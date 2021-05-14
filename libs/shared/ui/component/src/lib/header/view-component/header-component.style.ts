import { makeStyles } from '@material-ui/core/styles'

const HEADER_HEIGHT_PX = 136
const HEADER_TOP_PADDING_PX = 32

export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    paddingTop: theme.spacing(4),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    flexGrow: 1,
    minHeight: `${HEADER_HEIGHT_PX}px`,
  },
}))
