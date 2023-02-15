import classnames from '@/scss/foundation/_classnames.module.scss'

type useClassNameReturn = (
	innerClassNames: string,
	externalClassNames: string
) => string

const useClassName = (): useClassNameReturn => {
	// for (const className in classnames) {
	// 	console.log(className)
	// }

	const compare: useClassNameReturn = (innerClassNames, externalClassNames) => {
		return ''
	}

	return compare
}

export default useClassName

// разбивать классы на слова, а затем разбивать по тире и сравнивать совпадение слов
