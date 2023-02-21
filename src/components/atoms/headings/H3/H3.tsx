import { FC } from 'react'
import cnBind from 'classnames/bind'

import classes from './H3.module.scss'

interface H3Props {
	children?: string
	className?: string
}

type Props = H3Props

const cn = cnBind.bind(classes)

const H3: FC<Props> = ({ children, className }) => {
	return (
		<h3
			className={cn('h3', 'izi-fz-18', {
				[String(className)]: className,
			})}
		>
			{children}
		</h3>
	)
}

export default H3
