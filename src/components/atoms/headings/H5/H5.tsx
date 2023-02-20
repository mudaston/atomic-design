import { FC } from 'react'
import cnBind from 'classnames/bind'

import classes from './H5.module.scss'

interface H5Props {
	children?: string
	className?: string
}

type Props = H5Props

const cn = cnBind.bind(classes)

const H5: FC<Props> = ({ children, className }) => {
	return (
		<h5
			className={cn('h5', 'izi-fz-13', {
				[String(className)]: className,
			})}
		>
			{children}
		</h5>
	)
}

export default H5
