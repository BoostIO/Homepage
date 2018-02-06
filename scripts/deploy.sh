cd out
rm -Rf .git
git init
git add -A
git commit -a -m "Deployed at $(date)"
git remote add origin git@github.com:BoostIO/boostio.github.io.git
git push -f origin master
