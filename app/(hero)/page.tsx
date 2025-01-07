import React from 'react';
import homeSrc from '../../public/image.png';
import Hero from '../../components/hero';
import {Metadata} from 'next';

const metadata: Metadata = {
  title: 'Home',
}

export default function page() {
  return (
    <Hero imgUrl={homeSrc} altText='Home' content='Welcome to my website'/>
  )
}
