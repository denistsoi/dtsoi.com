#!/bin/bash
vuepress build docs
cd .vuepress/dist

rm .DS_Store
git init
git add .
git commit -m "Deploy"  
git push -f git@github.com:denistsoi/dtsoi.com master:master