#!/usr/bin/env sh

# aborts on errors
set -e

# build
npm run build

# navigate into the build output directory
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:185driver/vp2-min-pwa.git master:gh-pages

cd -
