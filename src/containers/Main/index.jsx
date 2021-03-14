import React from 'react';
import Hero from '../../elements/Hero';
import { title, company, resume } from '../../data/organization.json';

const Main = () => {
  return (
    <main>
      <Hero title={title} company={company} resume={resume}/>
    </main>
  )
}

export default Main
