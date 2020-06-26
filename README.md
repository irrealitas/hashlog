# Hashlog

*Hashlog* is a weird blog engine powered by Git. It is an experiment with paratext content.

It is based on Git log and commit messages. It inverts the posting process with all the contents in the Git commentaries.

## Dependencies

* [Bash](https://www.gnu.org/software/bash/)
* [Git](https://git-scm.com)

*Hashlog* uses these JavaScript libraries:

* [CommonMark.js](https://github.com/commonmark/commonmark.js) to render markdown in commit messages
* [Baffle](https://github.com/camwiegert/baffle) for the menu effect

## Variables

In the file `hashlog.sh`, you have some Bash variables to manage this blog engine:

* `MEXT`: file extension (in the directory `text`)
* `USER`: username for SSH (only for `make ssh`)
* `SRC`: the files for the final webpage
* `NAME`: the name of the final webpage (by default: the name of the current directory)
* `HOST`: the remote host for SSH (only for `make ssh`)
* `DIR`: the remote directory for SSH (only for `make ssh`)


## Modifications

git tag

To modify an old commit message

If you want to modify the template and if you use Gulp, you can work with the files in the folder `src`; everything will be compressed (images and code).

If you're not working with Gulp, you can work directly with the files in `template`. The CSS (the same for JS) is compressed in `template`, so you should copy and paste the files of `template/src/css/import/` in `racines.css` and modify the code as you wish.

## GitLab Pages or GitHub Pages

You can host this *Racines* page on Gitlab Pages or GitHub Pages with the power of GitLab CI (see [.gitlab-ci.yml](.gitlab-ci.yml)) or GitHub Actions (see [main.yml](.github/workflows/main.yml)) ; it will run Pandoc automatically. You can consenquently edit your *Racines* page directly on GitLab or GitHub by modifying the files in the `text` folder.

## Examples

* or with [GitHub Pages](https://irrealitas.github.io/racines/)
* the *Racines* of our friends [Abrüpt](https://abrupt.ch/www)

## License

MIT License - see [LICENSE.md](LICENSE.md).
