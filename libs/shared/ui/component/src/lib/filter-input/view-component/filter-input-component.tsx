import React from 'react'
import {
  Hidden,
  Grid,
  Input,
  IconButton,
  Button,
  InputAdornment,
  Checkbox,
  FormControlLabel,
  FormControl,
  Divider,
} from '@material-ui/core'
import { LocationOn, FilterList, Search } from '@material-ui/icons'

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
          xs="auto"
          sm={3}
          className={classes.inputFieldWrapper}
        >
          <Input
            disableUnderline
            onChange={handleSearchTermChange}
            className={classes.inputField}
            placeholder="Filter by title..."
            startAdornment={
              <InputAdornment position="start">
                <Hidden xsDown>
                  <Search color="primary" />
                </Hidden>
              </InputAdornment>
            }
          />
        </Grid>
        <Hidden xsDown>
          <Divider flexItem orientation="vertical" />
          <Grid
            item
            container
            alignItems="center"
            xs="auto"
            sm={4}
            className={classes.inputFieldWrapper}
          >
            <Input
              disableUnderline
              placeholder="Filter by location"
              className={classes.inputField}
              startAdornment={
                <InputAdornment position="start">
                  <LocationOn color="primary" />
                </InputAdornment>
              }
            />
          </Grid>
          <Divider flexItem orientation="vertical" />
          <Grid
            item
            alignItems="center"
            xs="auto"
            sm={3}
            className={classes.inputFieldWrapper}
          >
            <FormControl>
              <FormControlLabel
                checked
                classes={{ label: classes.inputField }}
                control={<Checkbox color="primary" />}
                label="Full time only"
              />
            </FormControl>
          </Grid>
        </Hidden>
        <Grid
          container
          item
          xs={4}
          sm={2}
          md={1}
          justify="flex-end"
          alignItems="center"
          wrap="nowrap"
          direction="row"
        >
          <Hidden smUp>
            <IconButton onClick={openDialog} component="span">
              <FilterList />
            </IconButton>
          </Hidden>
          <Button
            onClick={handleSearchButtonClick}
            size="small"
            color="primary"
            variant="contained"
          >
            <Hidden smUp>
              <Search />
            </Hidden>
            <Hidden xsDown>
              <div>Search</div>
            </Hidden>
          </Button>
        </Grid>
      </Grid>
      <FilterDialog {...dialogProps} />
    </>
  )
}
