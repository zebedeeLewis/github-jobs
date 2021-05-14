import { FormGroup, Typography, Grid, Switch } from '@material-ui/core'
import { WbSunny, Brightness3 } from '@material-ui/icons'

import * as theme from '@shared/ui/theme'

export const ThemeSwitchComponent = () => (
  <FormGroup row>
    <Typography component="div">
      <Grid component="label" container alignItems="center" spacing={1}>
        <Grid item>
          <WbSunny />
        </Grid>
        <Grid item>
          <Switch checked name="checkedC" />
        </Grid>
        <Grid item>
          <Brightness3 />
        </Grid>
      </Grid>
    </Typography>
  </FormGroup>
)
