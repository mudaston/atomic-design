import { FC } from 'react'
import cnBind from 'classnames/bind'

import classes from './H4.module.scss'

interface H4Props {
	children?: string
	className?: string
}

type Props = H4Props

const cn = cnBind.bind(classes)

const H4: FC<Props> = ({ children, className }) => {
	return (
		<h4
			className={cn('h4', 'izi-fz-16', {
				[String(className)]: className,
			})}
		>
			{children}
		</h4>
	)
}

export default H4
