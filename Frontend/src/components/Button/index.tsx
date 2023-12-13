import clsx from 'clsx'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  variant: 'primary' | 'secondary'
}

const BUTTON_VARIANTS = {
  primary: 'bg-primary-100 text-white',
  secondary: 'bg-secondary-100 text-white',
}

export default function Button({ text, variant, ...props }: Props) {
  return (
    <button
      type='button'
      className={clsx(
        BUTTON_VARIANTS[variant],
        'w-44 h-10 px-4 py-2 md:py-5 md:px-6 rounded-3xl shadow-2xl font-medium',
      )}
      {...props}
    >
      {text}
    </button>
  )
}
