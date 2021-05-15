import { AppBar, Grid } from '@material-ui/core'
import { useStyles } from './header-component.style'
import { View as Logo } from '../../logo'
import { View as ThemeSwitch } from '../../theme-switch'

export type Props = {
  src: string
  alt: string
  themeSwitchToggled?: boolean
  toggleThemeScheme: () => void
}

export const HeaderComponent = ({
  src,
  alt,
  themeSwitchToggled,
  toggleThemeScheme,
}: Props) => {
  const classes = useStyles()

  return (
    <AppBar className={classes.root}>
      <Grid container justify="space-between" direction="row">
        <Grid item>
          <Logo imgSrc={src} alt={alt} />
        </Grid>
        <Grid item>
          <ThemeSwitch
            toggleThemeScheme={toggleThemeScheme}
            toggled={themeSwitchToggled}
          />
        </Grid>
      </Grid>
    </AppBar>
  )
}
