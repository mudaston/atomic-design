import { FC } from 'react'
import cnBind from 'classnames/bind'

import classes from './H6.module.scss'

interface H6Props {
	children?: string
	className?: string
}

type Props = H6Props

const cn = cnBind.bind(classes)

const H6: FC<Props> = ({ children, className }) => {
	return (
		<h6
			className={cn('h6', 'izi-fz-10', {
				[String(className)]: className,
			})}
		>
			{children}
		</h6>
	)
}

export default H6
