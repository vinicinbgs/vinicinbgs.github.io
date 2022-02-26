#!bin/sh

echo git fetch && \
git checkout main && \
git pull && \
rm -Rf public && \
yarn build && \
cd public && \
git init && \
git remote add origin https://github.com/vinicinbgs/vinicinbgs.github.io.git && \
git checkout -b gh-pages && \
git fetch && \
git add . &&\
git commit -m "deploy" && \
git push -u origin gh-pages -f && \
cd .. && \
git checkout develop