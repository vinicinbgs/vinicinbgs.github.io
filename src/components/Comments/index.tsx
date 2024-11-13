import React, { useEffect } from "react";
import { useColorMode } from "@docusaurus/theme-common";

interface Props {
  path: string;
}

const Comments = ({ path }: Props) => {
  const { colorMode } = useColorMode();

  useEffect(() => {
    const oldElements = document.getElementsByClassName("utterances");

    if (oldElements.length > 0) {
      Array.from(oldElements).map((el) => {
        el.remove();
      });
    }

    const script = document.createElement("script");

    script.id = "utterances";
    script.src = "https://utteranc.es/client.js";
    script.defer = true;
    script.setAttribute("repo", "vinicinbgs/vinicinbgs.github.io");
    script.setAttribute("label", "comment");
    script.setAttribute("theme", `github-${colorMode}`);
    script.setAttribute("crossorigin", "anonymous");
    script.setAttribute("issue-term", path ?? "/homepage");

    document.getElementById("comments")?.appendChild(script);
  }, [colorMode]);

  return <div id="comments"></div>;
};

export default Comments;
