import React, { useState, useEffect } from 'react';
import Layout from '@lekoarts/gatsby-theme-minimal-blog/src/components/layout';
import ReposityCard, { IRepository } from '../components/RepositoryCard';
import { Section, Title, PageDivided } from '../global.styles';
import { BsGithub } from 'react-icons/bs';

const Repositories = () => {
  const [repositories, setRepositories] = useState<IRepository[]>([]);

  useEffect(() => {
    const fetchRepos = async (): Promise<IRepository[]> => {
      const gitRepos = await fetch(
        `${process.env.GATSBY_API_GITHUB}/users/vinicinbgs/repos`
      );
      return await gitRepos.json();
    };

    fetchRepos().then((repos) => {
      setRepositories(repos);
    });
  }, []);

  return (
    <Layout>
      <Section>
        <Title id="repositories">
          <BsGithub /> Repositories
        </Title>
        <PageDivided>
          {repositories.map((repo) => (
            <ReposityCard key={repo.id} {...repo} />
          ))}
        </PageDivided>
      </Section>
    </Layout>
  );
};

export default Repositories;
