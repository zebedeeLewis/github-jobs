import { Button, CircularProgress } from '@material-ui/core'

import { useStyles } from './load-button-component.style'

export type Props = {
  loading: boolean
  loadMoreJobs: () => void
}

export const LoadButtonComponent = ({
  loading,
  loadMoreJobs,
}: Props) => {
  const classes = useStyles()

  return (
    <div className={classes.wrapper}>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        disabled={loading}
        onClick={loadMoreJobs}
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
