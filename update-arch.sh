#!/bin/sh

sudo pacman -Syy
sudo pacman -Sy nodejs npm
sudo npm install
echo "done"
pause
