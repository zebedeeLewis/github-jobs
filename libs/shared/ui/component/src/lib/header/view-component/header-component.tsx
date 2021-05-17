import { AppBar, Grid, Container } from '@material-ui/core'
import { useStyles } from './header-component.style'
import { View as Logo } from '../../logo'
import { View as ThemeSwitch } from '../../theme-switch'

export type Props = {
  src: string
  alt: string
  isDarkModeOn?: boolean
  toggleDarkMode: () => void
}

export const HeaderComponent = ({
  src,
  alt,
  isDarkModeOn,
  toggleDarkMode,
}: Props) => {
  const classes = useStyles()

  return (
    <AppBar className={classes.root}>
      <Container>
        <Grid container justify="space-between" direction="row">
          <Grid item>
            <Logo imgSrc={src} alt={alt} />
          </Grid>
          <Grid item>
            <ThemeSwitch
              onClick={toggleDarkMode}
              isToggledOn={isDarkModeOn}
            />
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  )
}
