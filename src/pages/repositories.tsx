import React, { useState, useEffect } from "react";
import Layout from "@theme/Layout";
import RepositoryCard, {
  IRepository,
  RepositoryCardSkeleton,
} from "../components/RepositoryCard";
import {
  Section,
  Title,
  PageDivided,
} from "../components/RepositoryCard/global.styles";
import {
  BsGithub,
  BsArrowRightCircle,
  BsArrowLeftCircle,
} from "react-icons/bs";

import styles from "./repositories.module.css";

const Repositories = () => {
  const [repositories, setRepositories] = useState<IRepository[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchRepos = async (actualPage: number = 1) => {
    setLoading(true);

    const gitRepos = await fetch(
      `https://api.github.com/users/vinicinbgs/repos?page=${actualPage}&per_page=30`,
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
    if (repositories.length <= 0) return;
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
      <div className="container">
        <Section>
          <Title id="repositories">
            <BsGithub /> Repositories
          </Title>
          <div className={styles.toolbar}>
            <button
              className={`${styles.button} ${styles.previousButton}`}
              onClick={previousPage}
            >
              <BsArrowLeftCircle />
              &nbsp; Previous
            </button>
            <button
              className={`${styles.button} ${styles.nextButton}`}
              onClick={nextPage}
            >
              Next &nbsp;
              <BsArrowRightCircle />
            </button>
          </div>
          <PageDivided>
            {repositories.length == 0 && !loading && (
              <>
                <p className="not-found-repositories">
                  😓 Sorry... Not found repositories here, return to previous
                  pages
                </p>
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
      </div>
    </Layout>
  );
};

const randomBackgroundColor = (): string => {
  return "#3e31b0";
};

export default Repositories;
