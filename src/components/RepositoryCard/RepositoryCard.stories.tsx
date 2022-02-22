import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import RepositoryCard from '.';

import { ThemeProvider } from 'theme-ui';

import theme from '@lekoarts/gatsby-theme-minimal-blog/src/gatsby-plugin-theme-ui/index.js';

export default {
  title: 'RepositoryCard',
  component: RepositoryCard
} as ComponentMeta<typeof RepositoryCard>;

const Template: ComponentStory<typeof RepositoryCard> = (args) => {
  return (
    <ThemeProvider theme={theme}>
      <RepositoryCard {...args} />
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.decorators = [
  (Story) => {
    return (
      <>
        <Story />
      </>
    );
  }
];

Default.args = {
  description: 'Repository Description',
  name: 'Repository/Name',
  stargazers_count: '10000',
  html_url: '',
  language: 'Language',
  topics: ['topics']
};
