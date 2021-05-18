import React from 'react'
import { Grid, Input, IconButton, Button } from '@material-ui/core'
import { FilterList, Search } from '@material-ui/icons'

import { useStyles } from './filter-input-component.style'
import {
  View as FilterDialog,
  UpdateFilters,
} from '../../filter-dialog'

export type Props = {
  isDialogOpen: boolean
  updateFilters: UpdateFilters
  openDialog: () => void
  closeDialog: () => void
  handleSearchButtonClick: () => void
  handleSearchTermChange: React.ChangeEventHandler<HTMLInputElement>
}

export const FilterInputComponent = ({
  isDialogOpen,
  updateFilters,
  openDialog,
  closeDialog,
  handleSearchButtonClick,
  handleSearchTermChange,
}: Props) => {
  const classes = useStyles()
  const dialogProps = {
    closeDialog,
    updateFilters,
    handleSearchButtonClick,
    isOpen: isDialogOpen,
  }

  return (
    <>
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
            onChange={handleSearchTermChange}
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
          <IconButton onClick={openDialog} component="span">
            <FilterList />
          </IconButton>
          <Button
            onClick={handleSearchButtonClick}
            size="small"
            color="primary"
            variant="contained"
          >
            <Search />
          </Button>
        </Grid>
      </Grid>
      <FilterDialog {...dialogProps} />
    </>
  )
}
