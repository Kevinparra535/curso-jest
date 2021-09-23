import 'jsdom-global/register';
import React from 'react';
import { mount } from 'enzyme';
import Footer from '../../components/Footer';

describe('Footer', () => {
  const footer = mount(<Footer />);

  test('should render Footer component correctly', () => {
    expect(footer.length).toEqual(1);
  });

  test('Render del titulo', () => {
    expect(footer.find('.Footer-title').text()).toEqual('Platzi Store');
  });
});