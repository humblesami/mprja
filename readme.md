sudo apt install curl
sudo apt install -y npm
---------------------------------------------------------------------------
Check node
node -v
If you have version lower than 14 then do following two, otherwise skip to next section
sudo apt purge nodejs
sudo npm cache clean -f
sudo apt autoremove
---------------------------------------------------------------------------
If you already have version 14 skip this step
curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash
source ~/.profile
nvm install node
nvm install 14.17.6
---------------------------------------------------------------------------
npm install -g gatsby-cli
gatsby develop
---------------------------------------------------------------------------
For build
https://www.gatsbyjs.com/docs/porting-an-html-site-to-gatsby/
