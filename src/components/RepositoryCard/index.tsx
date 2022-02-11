import * as React from "react"
import { Card, Link } from "./styles"
import { BsStarFill } from "react-icons/bs"

export interface IRepository {
  id?: number;
  description: string;
  name: string;
  stargazers_count: number;
  html_url: string;
  language: string;
  topics: string[];
}

const RepositoryCard = ({ description, name, stargazers_count, html_url, language, topics }: IRepository) => {
  return (
    <Card>
      <Link href={html_url} target="_blank">
        <h4>{name}</h4>
        <p>{description}</p>
        <strong><BsStarFill /> {stargazers_count}</strong>
        <p>
            {language ? `#${language} `: ""}
            {topics.map((topic) => `#${topic} `)}
          </p>
        </Link>
    </Card>
  )
}
export default RepositoryCard