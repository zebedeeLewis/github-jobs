import React from 'react'
import { FilterDialogComponent } from '../view-component'

export type UpdateFilters = ({
  location: string,
  fullTimeOnly: boolean,
}) => void

export type Props = {
  isOpen: boolean
  closeDialog: () => void
  updateFilters: UpdateFilters
  handleSearchButtonClick: () => void
}

export const FilterDialogContainer = ({
  isOpen,
  closeDialog,
  updateFilters,
}: Props) => {
  const [location, setLocation] = React.useState('')
  const [fullTimeOnly, setFullTimeOnly] = React.useState(false)

  const props = {
    isOpen,
    location,
    fullTimeOnly,
    handleSearchButtonClick() {
      updateFilters({ location, fullTimeOnly })
      closeDialog()
    },

    handleLocationChange(e: React.ChangeEvent<HTMLInputElement>) {
      setLocation((e.target as HTMLInputElement).value)
    },
    handleFullTimeChange(e: React.ChangeEvent<HTMLInputElement>) {
      setFullTimeOnly((e.target as HTMLInputElement).checked)
    },

    handleDialogClose(event: Record<string, unknown>, reason: string) {
      updateFilters({ location, fullTimeOnly })
      closeDialog()
    },
  }

  return <FilterDialogComponent {...props} />
}
