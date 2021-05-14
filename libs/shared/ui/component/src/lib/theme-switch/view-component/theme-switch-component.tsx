import { FormGroup, Typography, Grid, Switch } from '@material-ui/core'
import * as theme from '@shared/ui/theme'

export const ThemeSwitchComponent = () => (
  <FormGroup row>
    <Typography component="div">
      <Grid component="label" container alignItems="center" spacing={1}>
        <Grid item>Off</Grid>
        <Grid item>
          <Switch checked name="checkedC" />
        </Grid>
        <Grid item>On</Grid>
      </Grid>
    </Typography>
  </FormGroup>
)