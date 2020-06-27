# Hashlog

*Hashlog* is a blog engine powered by Git and its commit messages.

It inverts the posting process. All the contents are in the Git commentaries (e.g. the commit message subject or body). It is based on the options of the `git log` command to display the commit messages in a web page.

This tool is the result of a [literary experiment](https://www.cyberpoetique.org/gitterature/) with paratext.

## Use

*Hashlog* uses:

* [Bash](https://www.gnu.org/software/bash/)
* [Git](https://git-scm.com)

It also uses these JavaScript libraries:

* [CommonMark.js](https://github.com/commonmark/commonmark.js) to render the Markdown syntax of the commit messages
* [Baffle](https://github.com/camwiegert/baffle) for the menu effect

---

You can write the commit messages with Markdown and use the CommonMark's syntax, like `**bold**`, `*italic*` or `![image](src)`, that will be rendered by CommonMark.js parser.

The displayed posts are the commit messages which are tagged (with a specific tag defined in the variables of the file [hashlog.sh](hashlog.sh)).

To tag an old commit you can use the GitHub interface or the terminal command: `git tag -a TAGNAME.VESIONNUMBER ABBREVIATEDHASH` (e.g. `git tag -a log.2020.06.23 6bfcc13`). To discover the abbreviated commit hash (with the date and the subject of the commit) you can also use this command `git log --pretty=format'%h %cd %s'`.

To explore the tagging possibilities, there is the [Git tagging](https://git-scm.com/book/en/v2/Git-Basics-Tagging) page of the Git documentation.

## Variables

In the file `hashlog.sh`, you have some Bash variables to manage this blog engine:

* `MENULEFT`: the text that will be displayed in the left part of the menu (in bold).
* `MENURIGHT`: the text that will be displayed in the right part of the menu (in italic); it is by default the command `cat content/surface.md` that displays the content of this file (in our example, we change the sentence in this file at each commit).
* `TAGS`: the name of the tags that will be used to choose which commit messages to display (by default `log.*` for tags like `log.42` or `log.2020.06.23`)
* `REPO`: the URL of the Git repository (useful for the posts links)

## Modifications

You can also modify an old post by [rewriting Git history](https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History).

If you want to modify the template and if you use Gulp, you can work with the files in the folder `src`. If you're not working with Gulp, you can work directly with the files in `dist`.

## Deployment

The command `./hashlog.sh html` will render the blog with all its posts.

The `gulp` command will also render the blog and a live server.

Everything can work locally, and you can copy the `dist` folder to a web server. It's also possible to clone this repository and work directly with the GitHub interface.

You can also work with GitLab pages with something like this in a `.gitlab-ci.yml` file:

```
image: alpine:latest

pages:
  script:
  - apk update
  - apk add git curl alpine-sdk autoconf automake bash build-base
  - mkdir public
  - cp -r dist/{css,fonts,img,js} public/
  - ./hashlog.sh html
  - cp -r dist/index.html public/index.html
  artifacts:
    paths:
    - public
  only:
  - master
```

## Examples

Examples of *hashlog*:

* with [GitHub Pages](https://irrealitas.github.io/hashlog/)
* [La Gittérature](https://antilivre.gitlab.io/gitterature/), a literary experiment for [Abrüpt](https://abrupt.ch/)

## License

MIT License - see [LICENSE.md](LICENSE.md).
