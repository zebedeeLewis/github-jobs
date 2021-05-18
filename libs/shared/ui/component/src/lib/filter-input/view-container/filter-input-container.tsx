import React from 'react'
import { FilterInputComponent } from '../view-component'
import * as filterJobs from '@libs/use-case/filter-jobs'

export type UpdateFilters = (f: Partial<filterJobs.JobFilter>) => void

export type Props = {
  applyFilters: () => void
  updateFilters: (f: Partial<filterJobs.JobFilter>) => void
}

export const FilterInputContainer = ({
  applyFilters,
  updateFilters,
}: Props) => {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false)

  const props = {
    isDialogOpen,
    updateFilters,

    openDialog() {
      setIsDialogOpen(true)
    },

    closeDialog() {
      setIsDialogOpen(false)
    },

    handleSearchButtonClick() {
      applyFilters()
      setIsDialogOpen(false)
    },

    handleSearchTermChange(e: React.ChangeEvent) {
      updateFilters({
        searchTerm: (e.target as HTMLInputElement).value,
      })
    },
  }

  return <FilterInputComponent {...props} />
}
