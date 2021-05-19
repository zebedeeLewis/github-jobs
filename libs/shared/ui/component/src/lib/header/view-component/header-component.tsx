import { AppBar, Grid, Container } from '@material-ui/core'

import { View as Logo } from '../../logo'
import { View as ThemeSwitch } from '../../theme-switch'

import { useStyles } from './header-component.style'

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
    <AppBar position="static" className={classes.root}>
      <Container>
        <Grid
          container
          className={classes.gridContainer}
          justify="space-between"
          direction="row"
        >
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
