import React, { FC } from 'react'
import cnBind from 'classnames/bind'

import useClassName from '@/hooks/useClassName'

import classes from './H1.module.scss'

interface H1Props {
	children?: String
	className?: string
}

type Props = H1Props

const cn = cnBind.bind(classes)

const H1: FC<Props> = ({ children, className }) => {
	// const classname = useClassName()

	// useClasses(className, ['izi-fz-32px', 'h1'])

	// classname(cn('h1', 'izi-fz-32px'), String(className))

	/* console.log(
		cn(classes['h1'], 'izi-fz-32px', {
			[String(className)]: className,
		})
	) */

	return (
		<h1
			className={cn(classes['h1'], 'izi-fz-32', {
				[String(className)]: className,
			})}
		>
			{children}
		</h1>
	)
}

export default H1
