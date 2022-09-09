import Head from 'next/head'
import Image from 'next/image'
import About from '../Components/sections/About'
import Hero from '../Components/sections/Hero'
import Work from '../Components/sections/Work'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='' >
      <Hero/>
      <About/>
      <Work/>
    </div>
  )
}
