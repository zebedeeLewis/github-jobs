import React from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  Divider,
  FormControl,
  Input,
  InputAdornment,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core'
import { LocationOn } from '@material-ui/icons'

import { useStyles } from './filter-dialog-component.style'

export type Props = {
  isOpen: boolean
  location: string
  fullTimeOnly: boolean

  handleDialogClose: (
    event: Record<string, unknown>,
    reason: string
  ) => void

  handleLocationChange: React.ChangeEventHandler<HTMLInputElement>
  handleFullTimeChange: React.ChangeEventHandler<HTMLInputElement>
  handleSearchButtonClick: () => void
}

export const FilterDialogComponent = ({
  isOpen,
  location,
  fullTimeOnly,
  handleDialogClose,
  handleLocationChange,
  handleFullTimeChange,
  handleSearchButtonClick,
}: Props) => {
  const classes = useStyles()

  return (
    <Dialog
      fullWidth
      open={isOpen}
      onClose={handleDialogClose}
      aria-labelledby="form-dialog-title"
    >
      <FormControl className={classes.filterField}>
        <Input
          disableUnderline
          placeholder="Filter by location"
          value={location}
          onChange={handleLocationChange}
          startAdornment={
            <InputAdornment position="start">
              <LocationOn color="primary" />
            </InputAdornment>
          }
        />
      </FormControl>
      <Divider />
      <FormControl className={classes.filterField}>
        <FormControlLabel
          checked={fullTimeOnly}
          control={
            <Checkbox
              checked={fullTimeOnly}
              color="primary"
              onChange={handleFullTimeChange}
            />
          }
          label="Full Time Only"
        />
      </FormControl>
      <DialogActions>
        <Button
          fullWidth
          onClick={handleSearchButtonClick}
          color="primary"
          variant="contained"
        >
          Search
        </Button>
      </DialogActions>
    </Dialog>
  )
}
