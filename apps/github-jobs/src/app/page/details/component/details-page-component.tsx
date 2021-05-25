import {
  Paper,
  Card,
  Grid,
  CardContent,
  Typography,
  Avatar,
  Box,
  Container,
  Button,
} from '@material-ui/core'
import * as Job from '@libs/domain/job'

import { useStyles } from './details-page-component.style'

export const DetailsPageComponent = (job: Job.Model) => {
  const classes = useStyles()

  return (
    <Container>
      <Box mt={-5} pb={2}>
        <Card className={classes.introCard}>
          <Box>
            <Grid container>
              <Grid
                item
                xs={12}
                sm="auto"
                className={classes.avatarGrid}
              >
                <Box
                  className={classes.avatarWrapper}
                  display="flex"
                  justifyContent="center"
                >
                  <Avatar
                    className={classes.avatar}
                    src={Job.getAvatarSrc(job)}
                    variant="rounded"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box className={classes.titleWrapper}>
                  <Typography color="textPrimary" variant="h6">
                    {Job.getTitle(job)}
                  </Typography>
                </Box>
                <Box className={classes.companyWrapper} pb={4}>
                  <Typography variant="body2" color="textSecondary">
                    {Job.getCompany(job)}
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                sm="auto"
                className={classes.companyUrlGrid}
              >
                <Box pb={2} className={classes.companyUrlWrapper}>
                  <Button
                    variant="contained"
                    color="primary"
                    href={Job.getCompanyUrl(job)}
                  >
                    Company Site
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Card>
      </Box>
      <Box py={2}>
        <Paper>
          <Box p={2}>
            <Typography variant="body1" component="span">
              <span
                dangerouslySetInnerHTML={{
                  __html: Job.getDescription(job),
                }}
              />
            </Typography>
          </Box>
        </Paper>
      </Box>
      <Box py={2}>
        <Card>
          <CardContent>
            <Typography component="span">
							<span
								dangerouslySetInnerHTML={{
                  __html: Job.getApplicationInstructions(job),
                }}
              />
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Box pt={2}>
        <Paper>
          <Button variant="contained" color="primary">
            Apply Now
          </Button>
        </Paper>
      </Box>
    </Container>
  )
}
