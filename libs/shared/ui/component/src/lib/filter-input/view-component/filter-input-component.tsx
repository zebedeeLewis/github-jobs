import { Grid, Input, IconButton, Button } from '@material-ui/core'
import { FilterList, Search } from '@material-ui/icons'
import { useStyles } from './filter-input-component.style'

export const FilterInputComponent = () => {
  const classes = useStyles()

  return (
    <Grid
      container
      direction="row"
      wrap="nowrap"
      className={classes.root}
    >
      <Grid
        item
        container
        alignItems="center"
        className={classes.titleFilter}
      >
        <Input
          disableUnderline
          className={classes.titleFilter}
          placeholder="Filter by title..."
        />
      </Grid>
      <Grid
        container
        item
        justify="flex-end"
        alignItems="center"
        wrap="nowrap"
        direction="row"
      >
        <IconButton component="span">
          <FilterList />
        </IconButton>
        <Button size="small" color="primary" variant="contained">
          <Search />
        </Button>
      </Grid>
    </Grid>
  )
}
