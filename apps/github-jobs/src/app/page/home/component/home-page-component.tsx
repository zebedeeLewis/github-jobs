import { Grid, Box } from '@material-ui/core'
import { LoadButton, JobCard, Filter } from '@shared/ui/component'
import * as Job from '@libs/domain/job'

import { useStyles } from './home-page-component.style'

export type Props = {
  jobs: Array<Job.Model>
  isLoadingJobs: boolean
  loadMoreJobs: () => void
  handleSearchButtonClick: () => void
}

export const HomePageComponent = ({
  jobs,
  isLoadingJobs,
  loadMoreJobs,
	handleSearchButtonClick,
}: Props) => {
  const classes = useStyles()
  const filterProps = { handleSearchButtonClick }

  return (
    <div className={classes.root}>
      <Grid className={classes.filter} item>
        <Filter {...filterProps} />
      </Grid>
      <Grid
        container
        spacing={2}
        justify="flex-start"
        className={classes.jobsContainer}
      >
        {jobs.map(job => (
          <JobCard key={job.id} {...job} />
        ))}
      </Grid>
      <Box pt={4}>
        <LoadButton
          loading={isLoadingJobs}
          loadMoreJobs={loadMoreJobs}
        />
      </Box>
    </div>
  )
}
