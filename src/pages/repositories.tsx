import React, { useState, useEffect } from 'react';
import Layout from '@lekoarts/gatsby-theme-minimal-blog/src/components/layout';
import RepositoryCard, {
  IRepository,
  RepositoryCardSkeleton
} from '../components/RepositoryCard';
import { Section, Title, PageDivided } from '../global.styles';
import {
  BsGithub,
  BsArrowRightCircle,
  BsArrowLeftCircle
} from 'react-icons/bs';
import {
  Toolbar,
  PreviousButton,
  NextButton,
  NotFoundRepositories
} from '../repositories.styles';

const Repositories = () => {
  const [repositories, setRepositories] = useState<IRepository[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchRepos = async (actualPage: number = 1) => {
    setLoading(true);

    const gitRepos = await fetch(
      `https://api.github.com/users/vinicinbgs/repos?page=${actualPage}&per_page=30`
    );

    const repos = await gitRepos.json();

    const orderRepoByStarsDesc = repos.sort((a, b) => {
      return b.stargazers_count - a.stargazers_count;
    });

    setTimeout(() => {
      setRepositories(orderRepoByStarsDesc);
      setLoading(false);
    }, 200);
  };

  const nextPage = async () => {
    let next = page + 1;
    setPage(next);
    await fetchRepos(next);
  };

  const previousPage = async () => {
    let previous = page <= 1 ? 1 : page - 1;
    setPage(previous);
    await fetchRepos(previous);
  };

  useEffect(() => {
    const repositoriesFetch = async () => await fetchRepos();

    repositoriesFetch();
  }, []);

  return (
    <Layout>
      <Section>
        <Title id="repositories">
          <BsGithub /> Repositories
        </Title>
        <Toolbar>
          <PreviousButton onClick={previousPage}>
            <BsArrowLeftCircle />
            &nbsp; Previous
          </PreviousButton>
          <NextButton onClick={nextPage}>
            Next &nbsp;
            <BsArrowRightCircle />
          </NextButton>
        </Toolbar>
        <PageDivided>
          {repositories.length == 0 && !loading && (
            <>
              <NotFoundRepositories>
                😓 Sorry... Not found repositories here, return to previous
                pages
              </NotFoundRepositories>
            </>
          )}
          {loading
            ? [...Array(9)].map((_, idx) => {
                return <RepositoryCardSkeleton key={idx} />;
              })
            : repositories.map((repo) => (
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
