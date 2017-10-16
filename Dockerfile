FROM node:latest

# Fix dependencies required for chrome headless
# See https://github.com/Quramy/puppeteer-example
# See https://github.com/GoogleChrome/puppeteer/issues/290
RUN apt-get update \
  && apt-get install -yq gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 \
    libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 \
    libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 \
    libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 \
    ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget

# Build from the project root
CMD cd /home/node/app \
  && rm -r ./public/* \
  && yarn install --frozen-lockfile --production=false \
  && yarn build:production
