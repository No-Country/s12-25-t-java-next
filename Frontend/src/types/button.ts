type type = 'submit' | 'button'

type style = 'outline' | 'solid'

export interface ButtonProps {
	type: type
	style: style
	text: string
}
