import {
  Box,
  Avatar,
  Typography,
  Card,
  CardContent,
} from '@material-ui/core'
import { Link } from 'react-router-dom'

import { useStyles } from './job-component.style'

export type Props = {
  link: string
  postTime: string
  jobType: string
  title: string
  company: string
  location: string
  avatarSrc: string
}

export const JobComponent = ({
  link,
  postTime,
  jobType,
  title,
  company,
  location,
  avatarSrc,
}: Props) => {
  const classes = useStyles()
  return (
    <Link className={classes.link} to={link}>
      <Card className={classes.card}>
        <CardContent>
          <Avatar
            className={classes.cardAvatar}
            src={avatarSrc}
            variant="rounded"
          />
          <Box className={classes.timeLine}>
            <Typography color="textSecondary" component="p">
              {postTime}
              <Box className={classes.dot} component="span">
                &bull;
              </Box>
              {jobType}
            </Typography>
          </Box>
          <Box className={classes.titleLine}>
            <Typography variant="h6" component="p">
              {title}
            </Typography>
          </Box>
          <Box className={classes.companyLine}>
            <Typography color="textSecondary" component="p">
              {company}
            </Typography>
          </Box>
          <Box className={classes.locationLine}>
            <Typography
              color="primary"
              className={classes.locationText}
              component="p"
            >
              {location}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Link>
  )
}
