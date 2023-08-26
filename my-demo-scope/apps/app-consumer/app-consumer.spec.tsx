import React from 'react';
import { render } from '@testing-library/react-native';
import { BasicAppConsumer } from './app-consumer.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicAppConsumer />);
  const rendered = getByText('hello from AppConsumer');
  expect(rendered).toBeTruthy();
});
