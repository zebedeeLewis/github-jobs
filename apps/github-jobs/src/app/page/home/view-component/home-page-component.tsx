import { Grid, Box } from '@material-ui/core'
import { LoadButton } from '@shared/ui/component'
import * as Job from '../../../job'

import { FilterInput } from '@shared/ui/component'

import { useStyles } from './home-page-component.style'

export type Props = {
  jobs: Array<Job.State.Model>
  isLoadingJobs: boolean
  loadNextPage: () => void
  applyFilters: () => void
  updateFilters: FilterInput.UpdateFilters
}

export const HomePageComponent = ({
  jobs,
  isLoadingJobs,
  loadNextPage,
  updateFilters,
  applyFilters,
}: Props) => {
  const classes = useStyles()
  const filterProps = {
    updateFilters,
    applyFilters,
  }

  return (
    <div className={classes.root}>
      <Grid className={classes.filter} item>
        <FilterInput.View {...filterProps} />
      </Grid>
      <Grid
        container
        spacing={2}
        justify="flex-start"
        className={classes.jobsContainer}
      >
        {jobs.map(job => (
          <Job.View key={job.id} {...job} />
        ))}
      </Grid>
      <Box pt={4}>
        <LoadButton.View
          loading={isLoadingJobs}
          loadNextPage={loadNextPage}
        />
      </Box>
    </div>
  )
}
