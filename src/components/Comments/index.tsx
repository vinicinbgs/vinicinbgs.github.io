import React, { useEffect } from 'react';

interface Props {
  path: string;
}

const Comments = ({ path }: Props) => {
  useEffect(() => {
    const oldElements = document.getElementsByClassName('utterances');

    if (oldElements.length > 0) {
      Array.from(oldElements).map((el) => {
        el.remove();
      });
    }

    const script = document.createElement('script');

    script.id = 'utterances';
    script.src = 'https://utteranc.es/client.js';
    script.defer = true;
    script.setAttribute('repo', 'vinicinbgs/vinicinbgs.github.io');
    script.setAttribute('label', 'comment');
    script.setAttribute('theme', 'github-light');
    script.setAttribute('crossorigin', 'anonymous');
    script.setAttribute('issue-term', path ?? '/homepage');

    document.getElementById('comments')?.appendChild(script);
  });

  return <div id="comments"></div>;
};

export default Comments;
