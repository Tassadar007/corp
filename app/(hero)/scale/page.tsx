import React from 'react'
import scaleSrc from '../../../public/image-4.png'
import Hero from '../../../components/hero'
import {Metadata} from 'next';

const metadata: Metadata = {
  title: 'Scale',
}

export default function page() {
  return (
    <Hero imgUrl={scaleSrc} altText='Scale' content='Scale'/>
  )
}
