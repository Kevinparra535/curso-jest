/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
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

describe('Footer Snapshot', () => {
  test('Comprobar la UI del componentn Footer', () => {
    const footer = create(<Footer />);

    expect(footer.toJSON()).toMatchSnapshot();
  });
});
