import { AppBar, Grid, Container } from '@material-ui/core'

import { View as Logo } from '../../logo'
import { View as FilterInput } from '../../filter-input'
import { View as ThemeSwitch } from '../../theme-switch'

import { useStyles } from './header-component.style'

import type { UpdateFilters } from '../../filter-input'

export type Props = {
  src: string
  alt: string
  isDarkModeOn?: boolean
  toggleDarkMode: () => void
  applyFilters: () => void
  updateFilters: UpdateFilters
}

export const HeaderComponent = ({
  src,
  alt,
  isDarkModeOn,
  toggleDarkMode,
  applyFilters,
  updateFilters,
}: Props) => {
  const classes = useStyles()
  const filterProps = {
    updateFilters,
    applyFilters,
  }

  return (
    <AppBar className={classes.root}>
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
          <Grid className={classes.filter} item>
            <FilterInput {...filterProps} />
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  )
}
