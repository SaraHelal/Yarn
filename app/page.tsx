import Image from 'next/image'
import Header from './components/header/Header'
import NavBar from'./components/NavBar'
export default function Home() {
  return (
    <main className="flex flex-col">
      {/* <NavBar /> */}
      <Header />
    </main>
  )
}
