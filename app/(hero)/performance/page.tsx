import React from 'react'
import performanceSrc from '../../../public/image-2.png'
import Hero from '../../../components/hero'
// import {Metadata} from 'next';

// const metadata: Metadata = {
//   title: 'Performance',
// }

export default function page() {
  return (
    <Hero imgUrl={performanceSrc} altText='Performance' content='Performance'/>
  )
}