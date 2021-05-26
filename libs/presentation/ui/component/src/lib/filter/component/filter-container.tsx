import * as _ from 'underscore'
import * as React from 'react'
import {FilterComponent} from './filter-component'
import * as State from '../state'

export type Props = {
  handleSearchButtonClick: () => void
}

export const FilterContainer = ({
	handleSearchButtonClick
}: Props) => {
  const [state, setState] = React.useState(State.create({}))

  const props = {
		handleSearchButtonClick,

    isDialogOpen: State.getDialogToggle(state),
    location: State.getLocation(state),
    fullTimeOnly: State.getFullTimeOnly(state),
    searchTerm: State.getSearchTerm(state),
    handleDialogClose: () => setState(
      State.setDialogToggle(State.DIALOG_CLOSED)(state)
    ),

		handleLocationChange: (e: React.ChangeEvent<HTMLInputElement>) =>
		  setState( State.setLocation(e.target.value)(state) ),

		handleFullTimeOnlyChange: (e: React.ChangeEvent<HTMLInputElement>) =>
		  setState( State.setFullTimeOnly(e.target.checked)(state) ),

		handleFilterButtonClick: () =>
		  setState( State.setDialogToggle(State.DIALOG_OPEN)(state) ),

		handleSearchTermChange: (e: React.ChangeEvent<HTMLInputElement>) =>
		  setState( State.setSearchTerm(e.target.value)(state) ),
  }

  return <FilterComponent {...props} />
}
