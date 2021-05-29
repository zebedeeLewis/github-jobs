import { Box } from '@material-ui/core'
import FilterInput from '../../filter-input'
import FilterDialog from '../../filter-dialog'

export type Props = {
  isDialogOpen: boolean
  location: string
  fullTimeOnly: boolean
  searchTerm: string
  handleDialogClose: (
    event: Record<string, unknown>,
    reason: string
  ) => void
  handleLocationChange: React.ChangeEventHandler<HTMLInputElement>
  handleSearchButtonClick: () => void
  handleFilterButtonClick: () => void
  handleSearchTermChange: React.ChangeEventHandler<HTMLInputElement>
  handleFullTimeOnlyChange: React.ChangeEventHandler<HTMLInputElement>
}

export const FilterComponent = ({
  isDialogOpen,
  location,
  fullTimeOnly,
  searchTerm,
  handleDialogClose,
  handleLocationChange,
  handleSearchButtonClick,
  handleFilterButtonClick,
  handleSearchTermChange,
  handleFullTimeOnlyChange,
}: Props) => {
  const inputProps = {
    searchTerm,
    location,
    fullTimeOnly,
    handleFilterButtonClick,
    handleSearchButtonClick,
    handleSearchTermChange,
    handleLocationChange,
    handleFullTimeOnlyChange,
  }

  const dialogProps = {
    isOpen: isDialogOpen,
    location,
    fullTimeOnly,
    handleDialogClose,
    handleLocationChange,
    handleFullTimeOnlyChange,
    handleSearchButtonClick,
  }

  return (
    <>
      <Box>
        <FilterInput {...inputProps} />
      </Box>
      <Box>
        <FilterDialog {...dialogProps} />
      </Box>
    </>
  )
}
