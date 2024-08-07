import * as React from "react";
import { Card, Link, Description, Title, CardHeader } from "./styles";
import { BsStarFill } from "react-icons/bs";
import { SkeletonText } from "./global.styles";

export interface IRepository {
  id?: number;
  description: string;
  name: string;
  stargazers_count: number;
  html_url: string;
  language: string;
  topics: Array<string>;
  backgroundColor?: string;
}

const RepositoryCard = ({
  description,
  name,
  stargazers_count,
  html_url,
  language,
  topics,
  backgroundColor,
}: IRepository) => {
  return (
    <Card data-type="repository">
      <Link href={html_url} target="_blank">
        <CardHeader backgroundColor={backgroundColor}>
          <Title>{name}</Title>
          <strong>
            <BsStarFill /> {stargazers_count}
          </strong>
        </CardHeader>
        <Description>{description}</Description>
        <p style={{ fontSize: "0.8em" }}>
          {language ? `#${language} ` : ""}
          {topics && topics.map((topic) => `#${topic} `)}
        </p>
      </Link>
    </Card>
  );
};

export const RepositoryCardSkeleton = () => {
  return (
    <Card data-type="repository">
      <CardHeader backgroundColor={"#e6e6e6"}>
        <SkeletonText />
      </CardHeader>
      <SkeletonText />
      <SkeletonText />
      <SkeletonText />
    </Card>
  );
};

export default RepositoryCard;
