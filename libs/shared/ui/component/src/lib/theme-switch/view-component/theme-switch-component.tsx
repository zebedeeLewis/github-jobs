import { FormGroup, Typography, Grid, Switch } from '@material-ui/core'
import { WbSunny, Brightness3 } from '@material-ui/icons'

export type Props = {
  toggled: boolean
  toggleThemeScheme: () => void
}

export const ThemeSwitchComponent = ({
  toggled,
  toggleThemeScheme,
}: Props) => (
  <FormGroup row>
    <Typography component="div">
      <Grid component="label" container alignItems="center" spacing={1}>
        <Grid item>
          <WbSunny />
        </Grid>
        <Grid item>
          <Switch
            checked={toggled}
            onClick={toggleThemeScheme}
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
