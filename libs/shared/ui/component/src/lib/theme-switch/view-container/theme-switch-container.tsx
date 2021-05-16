import { ThemeSwitchComponent } from '../view-component'

export type Props = {
  isToggledOn?: boolean
  onClick: () => void
}

export const ThemeSwitchContainer = ({
  isToggledOn = true,
  onClick,
}: Props) => {
  return (
    <ThemeSwitchComponent onClick={onClick} isToggledOn={isToggledOn} />
  )
}
