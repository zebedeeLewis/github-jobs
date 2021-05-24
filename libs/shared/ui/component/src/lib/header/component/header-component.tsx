import { AppBar, Grid, Container } from '@material-ui/core'
import { Link } from 'react-router-dom'
import Logo from '../../logo'
import ThemeSwitch from '../../theme-switch'
import { useStyles } from './header-component.style'

export type Props = {
  logoSrc: string
  logoAlt: string
  isDarkModeOn?: boolean
  toggleDarkMode: () => void
}

export const HeaderComponent = ({
  logoSrc,
  logoAlt,
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
            <Link to="/">
              <Logo imgSrc={logoSrc} alt={logoAlt} />
            </Link>
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
