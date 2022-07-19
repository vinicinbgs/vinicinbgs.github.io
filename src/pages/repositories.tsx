import React, { useState, useEffect } from 'react';
import Layout from '@lekoarts/gatsby-theme-minimal-blog/src/components/layout';
import RepositoryCard, {
  IRepository,
  RepositoryCardSkeleton
} from '../components/RepositoryCard';
import { Section, Title, PageDivided } from '../global.styles';
import { BsGithub } from 'react-icons/bs';

const Repositories = () => {
  const [repositories, setRepositories] = useState<IRepository[]>([]);

  const fetchRepos = async (): Promise<IRepository[]> => {
    const gitRepos = await fetch(
      `${process.env.GATSBY_API_GITHUB}/users/vinicinbgs/repos`
    );
    return await gitRepos.json();
  };

  useEffect(() => {
    fetchRepos().then((repos) => {
      const orderRepoByStarsDesc = repos.sort((a, b) => {
        return b.stargazers_count - a.stargazers_count;
      });

      setTimeout(() => setRepositories(orderRepoByStarsDesc), 200);
    });
  }, []);

  if (repositories.length == 0) {
    return (
      <Layout>
        <Section>
          <Title id="repositories">
            <BsGithub /> Repositories
          </Title>
          <PageDivided>
            {[...Array(9)].map((_, idx) => {
              return <RepositoryCardSkeleton key={idx} />;
            })}
          </PageDivided>
        </Section>
      </Layout>
    );
  }

  return (
    <Layout>
      <Section>
        <Title id="repositories">
          <BsGithub /> Repositories
        </Title>
        <PageDivided>
          {repositories.map((repo) => (
            <RepositoryCard
              key={repo.id}
              {...repo}
              backgroundColor={randomBackgroundColor()}
            />
          ))}
        </PageDivided>
      </Section>
    </Layout>
  );
};

const randomBackgroundColor = (): string => {
  return '#3e31b0';
};

export default Repositories;
