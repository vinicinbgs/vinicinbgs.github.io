#!bin/sh

echo "install node_modules"
yarn

echo "copy env"
cp .env.example .env

echo "start"
yarn start