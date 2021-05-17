import { Button, CircularProgress } from '@material-ui/core'

import { useStyles } from './load-button-component.style'

export type Props = {
  loading: boolean
  loadNextPage: () => void
}

export const LoadButtonComponent = ({
  loading,
  loadNextPage,
}: Props) => {
  const classes = useStyles()

  return (
    <div className={classes.wrapper}>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        disabled={loading}
        onClick={loadNextPage}
      >
        Load More
      </Button>
      {loading && (
        <CircularProgress
          size={24}
          thickness={5}
          className={classes.progress}
        />
      )}
    </div>
  )
}
