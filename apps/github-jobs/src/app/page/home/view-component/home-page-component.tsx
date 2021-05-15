import { Paper } from '@material-ui/core'

import * as Job from '../../../job'
import { useStyles } from './home-page-component.style'

export type Props = {
  jobs: Array<Job.State.Model>
}

export const HomePageComponent = ({ jobs }: Props) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      {jobs.map((job) => (
        <Job.View key={job.id} {...job} />
      ))}
    </div>
  )
}
