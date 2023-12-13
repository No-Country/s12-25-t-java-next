'use client'
import { useSelectedItem } from '@/store/FilterSelected/filterSelected'
import { CloseIcon } from './icons'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export default function FilterSelected() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()
  const selectItems = useSelectedItem(state => state.selectedItems)
  const removeItem = useSelectedItem(state => state.removeSelectedItem)
  useEffect(() => {
    if (selectItems.length > 0) {
      const params = new URLSearchParams(searchParams)
      const itemsString = selectItems.join(',')
      if (itemsString) {
        params.set('sort', itemsString)
      } else {
        params.delete('sort')
      }
      replace(`${pathname}?${params.toString()}`)
    }
  }, [selectItems, pathname, replace, searchParams])

  const handleRemoveItem = (item: string) => {
    removeItem(item)
    const params = new URLSearchParams(searchParams)
    params.delete('sort')
    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <section className='px-4 flex flex-row gap-x-2'>
      {selectItems.map(item => (
        <div
          key={item}
          className='h-6 pl-3 pr-2 py-1 bg-[#E0E0E0] rounded-[100px] justify-start items-center gap-2 inline-flex'
        >
          <div className="w-full text-zinc-600 text-[11px] text-darkgrey font-normal font-['Roboto'] leading-tight tracking-tight">
            {item}
          </div>
          <span
            onClick={() => handleRemoveItem(item)}
            className='cursor-pointer'
          >
            <CloseIcon />
          </span>
        </div>
      ))}
    </section>
  )
}
