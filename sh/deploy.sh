#!/bin/bash
vuepress build docs
cd docs/.vuepress/dist

git init
git add .
git commit -m "Deploy"  
git push -f git@github.com:denistsoi/denistsoi.github.io master:master