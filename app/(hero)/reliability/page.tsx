import React from 'react'
import reliabilitySrc from '../../../public/image-3.png'
import Hero from '../../../components/hero'
// import {Metadata} from 'next';

// const metadata: Metadata = {
//   title: 'Reliability',
// }

export default function page() {
  return (
    <Hero imgUrl={reliabilitySrc} altText='Reliability' content='We Searve High Reliability Applications'/>
  )
}
