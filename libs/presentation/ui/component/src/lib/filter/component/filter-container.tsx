import _ from 'underscore'
import * as React from 'react'
import {FilterComponent} from './filter-component'
import * as State from '../state'
import * as Job from '@domain/entity/job'

export type Props = {
  handleSearchButtonClick: (f: Job.DAO.Filters) => void
}

export const FilterContainer = ({
  handleSearchButtonClick
}: Props) => {
  const [state, setState] = React.useState(State.create({}))

  const handleDialogClose = () => setState(
    State.setDialogToggle(State.DIALOG_CLOSED)(state)
  )

  const props = {
    handleDialogClose,

    isDialogOpen: State.getDialogToggle(state),
    location: State.getLocation(state),
    fullTimeOnly: State.getFullTimeOnly(state),
    searchTerm: State.getSearchTerm(state),

    handleSearchButtonClick() {
      handleSearchButtonClick({
        title: State.getSearchTerm(state),
        jobType:
          State.getFullTimeOnly(state) 
            ? Job.JobType.FULL_TIME
            : '',
        location: State.getLocation(state)
      })
    },

    handleLocationChange: (e: React.ChangeEvent<HTMLInputElement>) =>
      setState( State.setLocation(e.target.value)(state) ),

    handleFullTimeOnlyChange: (e: React.ChangeEvent<HTMLInputElement>) =>
      setState( State.setFullTimeOnly(e.target.checked)(state) ),

    handleFilterButtonClick: () => {
      setState( State.setDialogToggle(State.DIALOG_OPEN)(state) )
      handleDialogClose()
    },

    handleSearchTermChange: (e: React.ChangeEvent<HTMLInputElement>) =>
      setState( State.setSearchTerm(e.target.value)(state) ),
  }

  return <FilterComponent {...props} />
}
