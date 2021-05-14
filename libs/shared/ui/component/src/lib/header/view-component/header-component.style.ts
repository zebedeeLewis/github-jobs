import { makeStyles } from '@material-ui/core/styles'

const HEADER_HEIGHT_PX = 136
const HEADER_TOP_PADDING_PX = 32

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minHeight: `${HEADER_HEIGHT_PX}px`,
  },
}))
