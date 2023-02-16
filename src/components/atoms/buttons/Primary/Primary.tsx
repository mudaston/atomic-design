import React, { FC } from 'react'
import cnBind from 'classnames/bind'

import classes from './Primary.module.scss'

interface PrimaryProps {
	children?: string
	className?: string
}

type Props = PrimaryProps

const cn = cnBind.bind(classes)

const Primary: FC<Props> = ({ children, className }) => {
	return (
		<button
			className={cn('btn-primary', 'izi-fz-16 izi-fw-500', {
				[String(className)]: className,
			})}
		>
			<span>{children}</span>
		</button>
	)
}

export default Primary
