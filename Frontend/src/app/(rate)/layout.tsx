import { ArrowLeftIcon } from '@heroicons/react/24/outline'

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <section className='bg-white'>
      <header>
        <div className='flex justify-start gap-3 bg-primary-100 px-4 py-5'>
          <ArrowLeftIcon className='w-6 text-white' />
          <h1 className='text-white font-semibold text-[22px]'>
            Califica tu experiencia
          </h1>
        </div>
      </header>
      <main>{children}</main>
    </section>
  )
}
