import React from 'react';
import renderer from 'react-test-renderer';
import JSection from './jsection';

test('JSection render title and subtitle props', () => {
  const component = <JSection title="JFront" subtitle="Javascript Single Page Application" />;
  expect(renderer.create(component)).toMatchSnapshot();
});
