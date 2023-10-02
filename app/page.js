import Image from 'next/image'
import HomePage from '../components/home'
import TechStack from '@/components/techStack'

export default function Home() {
  return (
    <div>
      <HomePage />
      <TechStack />
    </div>
  )
}
