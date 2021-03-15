import React from 'react';
import Hero from '../../elements/Hero';
import ProductList from '../../components/ProductList';
import Contact from '../../components/Contact';
import { title, company, resume } from '../../data/organization.json';
import { products } from '../../data/products.json'

const Main = () => {
  return (
    <main>
      <Hero title={title} company={company} resume={resume}/>
      <ProductList products={products}/>
      <Contact />
    </main>
  )
}

export default Main
