ssh-add ~/.ssh/id_rsa

git push -u nodekpHUB master
git push -u nodekpLAB master

git config --global core.editor "code --wait"
git config --global -e