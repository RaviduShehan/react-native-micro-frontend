import React from 'react';
import { render } from '@testing-library/react-native';
import { BasicMyFeature } from './my-feature.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicMyFeature />);
  const rendered = getByText('hello from MyFeature');
  expect(rendered).toBeTruthy();
});
