import {
  Box,
  Avatar,
  Typography,
  Card,
  CardContent,
} from '@material-ui/core'
import { Link } from 'react-router-dom'

import { useStyles } from './job-component.style'
import logo from '../../logo.svg'

export const JobComponent = () => {
  const classes = useStyles()
  return (
    <Link className={classes.link} to="/details/random-id">
      <Card className={classes.card}>
        <CardContent>
          <Avatar
            className={classes.cardAvatar}
            src={logo}
            variant="rounded"
          />
          <Box className={classes.timeLine}>
            <Typography color="textSecondary" component="p">
              5h ago
              <Box className={classes.dot} component="span">
                &bull;
              </Box>
              Full Time
            </Typography>
          </Box>
          <Box className={classes.titleLine}>
            <Typography variant="h6" component="p">
              Senior Software Engineer
            </Typography>
          </Box>
          <Box className={classes.companyLine}>
            <Typography color="textSecondary" component="p">
              So Digital Inc.
            </Typography>
          </Box>
          <Box className={classes.locationLine}>
            <Typography
              color="primary"
              className={classes.locationText}
              component="p"
            >
              Remote, Seoul, Tokyo, Mountain View, San Fransisco
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Link>
  )
}
