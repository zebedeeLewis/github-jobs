import { FormGroup, Typography, Grid, Switch } from '@material-ui/core'
import { WbSunny, Brightness3 } from '@material-ui/icons'

export type Props = {
  isToggledOn: boolean
  onClick: () => void
}

export const ThemeSwitchComponent = ({
  isToggledOn,
  onClick,
}: Props) => (
  <FormGroup row>
    <Typography component="div">
      <Grid component="label" container alignItems="center" spacing={1}>
        <Grid item>
          <WbSunny />
        </Grid>
        <Grid item>
          <Switch
            checked={isToggledOn}
            onChange={onClick}
            name="themeSwitch"
          />
        </Grid>
        <Grid item>
          <Brightness3 />
        </Grid>
      </Grid>
    </Typography>
  </FormGroup>
)
