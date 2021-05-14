import { Container, AppBar } from '@material-ui/core'
import { useStyles } from './header-component.style'
import { View as Logo } from '../../logo'
import { View as ThemeSwitch } from '../../theme-switch'

export type Props = {
  src: string
  alt: string
}

export const HeaderComponent = ({src, alt}: Props) => {
	const classes = useStyles()

	return (
		<AppBar className={classes.root} >
			<Container>
				<Logo imgSrc={src} alt={alt} />
				<ThemeSwitch />
			</Container>
		</AppBar>
	)
}
