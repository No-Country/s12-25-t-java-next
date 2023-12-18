import clsx from 'clsx'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  variant: 'primary' | 'secondary' | 'outline'
  cn?: string
}

const BUTTON_VARIANTS = {
  primary: 'bg-primary-100 text-white disabled:opacity-70',
  secondary: 'bg-secondary-100 text-white disabled:opacity-70',
  outline:
    'bg-transparent text-primary-100 border border-primary-100 disabled:opacity-70',
}

export default function Button({ text, variant, cn, ...props }: Props) {
  return (
    <button
      type='button'
      className={clsx(
        BUTTON_VARIANTS[variant],
        cn,
        'w-44 h-10 px-4 py-2 md:py-5 md:px-6 rounded-3xl shadow-2xl font-medium',
      )}
      {...props}
    >
      {text}
    </button>
  )
}
