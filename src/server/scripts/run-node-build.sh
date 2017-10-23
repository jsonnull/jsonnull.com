#!/bin/bash

# Working dir to project root
cd /home/node/app
git fetch
git reset --hard origin/master
yarn install --frozen-lockfile --production=false
yarn build:production
