import { Transition } from '@headlessui/react'
import clsx from 'clsx'
import { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
  show: boolean
  title: string
  onCancel: () => void
  onConfirm: () => void
  cancelText: string
  confirmText: string
  color: 'primary' | 'secondary'
}

export const Popup: FC<Props> = ({
  children,
  show,
  title,
  onCancel,
  onConfirm,
  cancelText,
  confirmText,
  color,
}) => {
  return (
    <Transition
      show={show}
      className='transition fixed bottom-0 inset-x-0 w-full px-4 font-sans'
      enter='duration-500'
      enterFrom='opacity-0 translate-y-full'
      enterTo='opacity-100 translate-y-0'
      leave='duration-500'
      leaveFrom='opacity-100 translate-y-0'
      leaveTo='opacity-0 translate-y-full'
    >
      <div className='bg-white h-44 w-full rounded-3xl shadow-2xl'>
        <h3 className='text-xl font-bold pl-7 pt-3 pb-1'>{title}</h3>
        <div className='border border-grey/30 w-full' />
        <div className='pt-3 pb-6 px-6'>
          <div className='pb-2'>{children}</div>
          <div className='flex items-center justify-between'>
            <button
              type='button'
              onClick={onCancel}
              className={clsx(
                'w-28 rounded-3xl py-2 text-center font-medium shadow-xl',
                {
                  'text-secondary-100 border border-secondary-100':
                    color === 'secondary',
                  'text-primary-100 border border-primary-100':
                    color === 'primary',
                },
              )}
            >
              {cancelText}
            </button>
            <button
              type='button'
              onClick={onConfirm}
              className={clsx(
                'w-28 rounded-3xl py-2 text-center font-medium shadow-xl',
                {
                  'text-white bg-secondary-100': color === 'secondary',
                  'text-white bg-primary-100': color === 'primary',
                },
              )}
            >
              {confirmText}
            </button>
          </div>
        </div>
      </div>
    </Transition>
  )
}
