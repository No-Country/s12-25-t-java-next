"use client"
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  const route = useRouter()
  return (
    <section className='bg-white'>
      <header>
        <div className='flex justify-start gap-3 bg-primary-100 px-4 py-5'>
        <button
          type="button"
          className="cursor-pointer"
          onClick={() => route.back()}
        >
<ArrowLeftIcon className='w-6 text-white' />

        </button>
          <h1 className='text-white font-semibold text-[22px]'>
            Califica tu experiencia
          </h1>
        </div>
      </header>
      <main>{children}</main>
    </section>
  )
}
