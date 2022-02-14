import React from 'react';
import { render } from '@testing-library/react';
import RepositoryCard, { IRepository } from './index';

const mockProps: IRepository = {
  description: 'Description Test',
  name: 'Name Test',
  html_url: 'HTML Url Test',
  language: 'test lang',
  stargazers_count: 100,
  id: 123,
  topics: ['test', 'unit']
};

const createMockComponent = (replaceProps = {}) => {
  return render(<RepositoryCard {...{ ...mockProps, ...replaceProps }} />);
};

describe('Repository Card Component', () => {
  it('correctly prop values render', () => {
    const { queryByText } = createMockComponent();

    expect(queryByText(/Description Test/i)).toBeTruthy();
    expect(queryByText(/Name Test/i)).toBeTruthy();
    expect(queryByText(/#test lang/i)).toBeTruthy();
  });

  it('repository without language info', () => {
    const { queryByText } = createMockComponent({
      language: null
    });

    expect(queryByText(/Description Test/i)).toBeTruthy();
    expect(queryByText(/Name Test/i)).toBeTruthy();
    expect(queryByText(/#test lang/i)).toBeFalsy();
  });
});
