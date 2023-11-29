import Image from 'next/image'
import DishesPage from './[slug]/page'


export default function Home() {
  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-between overflow-hidden">
      <DishesPage />
    </main>
  )
}
