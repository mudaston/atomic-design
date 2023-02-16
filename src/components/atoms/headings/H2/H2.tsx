import { FC } from 'react'
import cnBind from 'classnames/bind'

import classes from './H2.module.scss'

interface H2Props {
	children?: String
	className?: string
}

type Props = H2Props

const cn = cnBind.bind(classes)

const H2: FC<Props> = ({ children, className }) => {
	return (
		<h2
			className={cn('h2', 'izi-fz-24', {
				[String(className)]: className,
			})}
		>
			{children}
		</h2>
	)
}

export default H2
