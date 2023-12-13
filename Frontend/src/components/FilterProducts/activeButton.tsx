'use client'

import { useSelectedItem } from '@/store/FilterSelected/filterSelected'
import Link from 'next/link'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'

export default function ActiveButton({
  slug,
  children,
}: {
  slug: string
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isActive = pathname === slug
  const { replace } = useRouter()
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)
  const removeAllItem = useSelectedItem(state => state.removeAllItems)

  const handleRouteChange = () => {
    if (isActive) return
    params.delete('sort')
    replace(`${pathname}`)
    removeAllItem()
  }

  return (
    <Link
      onClick={handleRouteChange}
      href={slug}
      className={`rounded-[32px] text-xs w-[88px] h-10 border border-primary-100 
      ${
        isActive
          ? ' bg-primary-300 rounded-[32px] '
          : 'bg-zinc-100 text-zinc-600'
      }`}
    >
      {children}
    </Link>
  )
}
