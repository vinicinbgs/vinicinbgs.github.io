#!bin/sh

echo "Update main branch local"
git fetch && git checkout main && git pull

echo "Remove Public folder"
rm -Rf public

echo "Building..."
yarn build
cd public

echo "Initialize git in public folder"
git init && git remote add origin https://github.com/vinicinbgs/vinicinbgs.github.io.git
git checkout -b gh-pages
git fetch
git add .
git commit -m "deploy"

echo "Push to gh-pages branch"
git push -u origin gh-pages -f