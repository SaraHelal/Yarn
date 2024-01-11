import Image from 'next/image'
import Header from './components/header/Header'
import NavBar from'./components/NabBar'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <NavBar />
      <Header />
    </main>
  )
}
