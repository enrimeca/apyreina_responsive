import React from 'react';
import Product from './index';

export default {
  title: 'Element/Product',
  component: Product
};

const Template = (args) => <Product {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: 'Miel',
  image: '/images/miel.jpg',
  description: 'La miel es una excelente fuente de energía, pues contiene azúcares sencillos (glucosa y fructosa) utilizables rápidamente por el organismo.'
};
