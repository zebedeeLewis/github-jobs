import { ThemeSwitchComponent } from '../view-component'

export type Props = {
  toggled?: boolean
  onClick: () => void
}

export const ThemeSwitchContainer = ({
  toggled = true,
  onClick,
}: Props) => {
  return <ThemeSwitchComponent onClick={onClick} toggled={toggled} />
}
