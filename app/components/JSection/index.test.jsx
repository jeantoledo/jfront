import React from 'react';
import renderer from 'react-test-renderer';
import JSection from './index';

test('JSection render title and subtitle props', () => {
  const component = renderer.create(
    <JSection title="JFront" subtitle="Javascript Single Page Application" />,
  );

  expect(component).toMatchSnapshot();
});
