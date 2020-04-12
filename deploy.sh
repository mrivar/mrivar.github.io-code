#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run generate

# navigate into the build output directory
cd dist

# create 404.html out of 200.html
if [ -f "200.html" ] && [ ! -f "404.html" ]; then
  cp 200.html 404.html
fi

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:mrivar/mrivar.github.io.git master:master

cd -
