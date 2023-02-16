import React, { FC } from 'react'
import cnBind from 'classnames/bind'

import classes from './H1.module.scss'

interface H1Props {
	children?: String
	className?: string
}

type Props = H1Props

const cn = cnBind.bind(classes)

const H1: FC<Props> = ({ children, className }) => {
	return (
		<h1
			className={cn('h1', 'izi-fz-32', {
				[String(className)]: className,
			})}
		>
			{children}
		</h1>
	)
}

export default H1
