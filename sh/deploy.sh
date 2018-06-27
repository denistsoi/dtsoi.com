vuepress build pages
cd pages/.vuepress/dist

git init
git add .
git commit -m "Deploy"  
git push -f git@github.com:denistsoi/rg master:gh-pages