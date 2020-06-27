#!/bin/bash

MENULEFT="My log of (h)ashes"
MENURIGHT="`cat content/surface.md`"
TAGS="log.*"
REPO="https://github.com/irrealitas/hashlog"

for arg in "$@"; do
  shift
  case "$arg" in

    "html")

      echo '
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>Hashlog</title>
    <link rel="icon" type="image/png" href="img/favicon.png">
    <link rel="apple-touch-icon" href="img/favicon.png">
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/style.css">
  </head>
  <body>
    <main class="container">
    <div class="text text--menu">
      <button class="btn hash">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
      <div class="menu text__container text__container--left">
        <div class="text__subject menu--left" style="display: none;">
          <p class="markdown">'${MENULEFT}'</p>
        </div>
      </div>
      <div class="menu text__container text__container--right">
        <div class="text__body menu--right" style="display: none;">
          <p class="markdown">'${MENURIGHT}'</p>
          <p><a href="'${REPO}'" target="_blank">(sources)</a></p>
        </div>
      </div>
    </div>' > dist/index.html

      git log --no-walk --tags="${TAGS}" --pretty=tformat:'
    <div class="text text--list" id="text-%h">
        <button class="btn hash">%h</button>
        <div class="text__container text__container--left">
          <div class="text__subject" style="display: none;">
            <p class="markdown text__title">%s</p>
            <p class="text__link">%cs</p>
            <p class="text__link"><a href="'${REPO}'/commit/%H" target="_blank">Git Time</a></p>
          </div>
        </div>
        <div class="text__container text__container--right">
          <div class="text__body" style="display: none;">
            <p class="markdown">%b</p>
          </div>
        </div>
    </div>' >> dist/index.html

    echo '
    <script src="js/commonmark.min.js"></script>
    <script src="js/baffle.min.js"></script>
    <script src="js/scripts.js"></script>
    </main>
  </body>
</html>' >> dist/index.html

    # if [[ "$OSTYPE" == "linux-gnu"* ]]; then
    #   xdg-open dist/index.html &
    # elif [[ "$OSTYPE" == "freebsd"* ]]; then
    #   xdg-open dist/index.html &
    # elif [[ "$OSTYPE" == "darwin"* ]]; then
    #   open dist/index.html &
    # elif [[ "$OSTYPE" == "cygwin" ]]; then
    #   cygstart dist/index.html
    # elif [[ "$OSTYPE" == "msys" ]]; then
    #   dist\index.html
    # fi
    ;;

    *)
      echo ''
      echo 'The void is watching you.'
      echo ''
      exit 1
    ;;

  esac
done
