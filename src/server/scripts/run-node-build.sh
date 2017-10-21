#!/bin/bash

# Working dir to project root
cd /home/node/app
rm -r ./public/*
git fetch
git reset --hard origin/master
yarn install --frozen-lockfile --production=false
yarn build:production
