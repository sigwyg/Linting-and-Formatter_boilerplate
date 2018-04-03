# Linting-and-Formatter_boilerplate

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)

LinterとFormatterの個人的なboilerplateっぽいの

## Feature

- Prettier -> ESLint
- [eslint-config-standard](https://github.com/standard/eslint-config-standard)
- Stylelint
- [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard)

Formatterはコードの整形はするが警告出してくれないので、人間が考える必要のないミスだけ修正させる方法が良い。

## To Do

- Pre-commit Hook
- [Pre-commit Hook](https://prettier.io/docs/en/precommit.html)

## Install

```
$ yarn install
```

OR

```
$ yarn add -D prettier
$ yarn add -D eslint eslint-plugin-prettier eslint-config-prettier
$ yarn add -D eslint-config-standard eslint-plugin-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node
$ yarn add -D stylelint stylelint-order stylelint-config-standard
```

## Usage

```
$ eslint --fix src/**/*.js
$ stylelint  --fix src/**/*.css
```

## Note: ESLintと併用する場合

PrettierとESLintと併用する場合、2つの方法がある

1. `eslint-plugin-prettier` 
    - ESLintのworkflowで処理する
    - Prettierの出力が維持される
    - .eslintrcにprettierが明記されるので判りやすい
    - `eslint-config-prettier` を使えば、ESLintのPrettierと重複してるルールを無効化してくれる
    - `eslint --fix` だけで、PrettierとESLintの自動修正を同時に行ってくれる
    - [Integrating with ESLint](https://prettier.io/docs/en/eslint.html)
2. `prettier-eslint`
    - Prettierしてから`eslint --fix`に渡す
    - Prettierのオプションは`.prettierrc`で管理する
    - `prettier-eslint --write`で`eslint --fix`もしてる

ESLintがPrettierを実行するか、PrettierがESLintに渡すか。
ほとんど変わらないが、後者だと`--fix`なし実行ができないので、前者を採用する。
あと、`prettier-eslint` の作者は[もう使ってない](https://twitter.com/kentcdodds/status/913760103118991361)とのこと。

## Note: CSSの場合

`stylelint --fix`を用いて整形まで行う。

[stylelint-order](https://github.com/hudochenkov/stylelint-order)を入れれば、プロパティのソートが可能になる。
postcss-srtingの内部で使われていて、今回の場合は`stylelint-idiomatic-order`に含まれている。

stylefmtて良いツールがあったけど、stylelintが`--fix`に対応したので開発が止まってる。
prettier使うか、`stylelint --fix`しろって感じらしい。

- [Stylistic issues](https://stylelint.io/VISION/#stylistic-issues)
- [Prettier + Stylelint: Writing Very Clean CSS (Or, Keeping Clean Code is a Two-Tool Game)](https://css-tricks.com/prettier-stylelint-writing-clean-css-keeping-clean-code-two-tool-game/)
- [Prettier for CSS](https://github.com/stylelint/stylelint/issues/2532)

## Note: prettier-stylelint(error!)

```
$ yarn add -D stylelint prettier-stylelint
$ yarn add -D stylelint-config-standard stylelint-config-idiomatic-order
$ yarn add -D stylefmt
$ prettier-stylelint --write src/test.css
```

prettier-eslintから着想を得たらしい、prettier-stylelintがあるが、
2018-03-30時点ではCLIでは整形されるものの、エラー終了しているのでVimプラグインでは失敗した。
おそらく以下のエラーを吐いているから。

```
`{ "parser": "postcss" }` is deprecated. Prettier now treats it as `{ "parser": "css" }`.
```

- [Warning: `parser` with value "postcss" is deprecated. Use "css", "less" or "scss" instead.](https://github.com/hugomrdias/prettier-stylelint/issues/3)
- [Cannot set property 'singleQuote' of null](https://github.com/hugomrdias/prettier-stylelint/issues/9)


## Vim Setup

公式でいくつかのエディタに対応している旨が紹介されている。
[Editor Integration](https://prettier.io/docs/en/editors.html)

Vimの場合はNeoformatがシンプルで良さそうだったが、`stylelint --fix`だと、
標準出力の受け渡しまわりが巧くできなかったのでALEにした。

いちおう両方とも紹介する。以下はdein.vimを使っている場合

### ALE

```dein.toml
[[plugins]]
repo = 'w0rp/ale'
hook_add = '''
    let g:ale_fixers = {
    \    'javascript': ['prettier-eslint'],
    \    'css': ['stylelint'],
    \    'scss': ['stylelint'],
    \}

    " if you want to fix files automatically on save.
    let g:ale_fix_on_save = 1
'''
```

### Neoformat

```dein.toml
[[plugins]]
repo = 'sbdchd/neoformat.git'
hook_add = '''
    "let g:neoformat_verbose = 1 " only affects the verbosity of Neoformat

    " Enable tab to spaces conversion
    let g:neoformat_basic_format_retab = 1

    " Enable trimmming of trailing whitespace
    let g:neoformat_basic_format_trim = 1

    " js
    let g:neoformat_javascript_prettiereslint = {
        \ 'exe': './node_modules/.bin/prettier-eslint',
        \ 'args': ['--stdin'],
        \ 'stdin': 1,
        \ }
    let g:neoformat_enabled_javascript = ['prettiereslint']

    " css
    let g:neoformat_css_stylelint = {
        \ 'exe': './node_modules/.bin/stylelint',
        \ 'args': ['--stdin', '--fix'],
        \ 'stdin': 1,
        \ }
    let g:neoformat_enabled_css = ['stylelint']

    augroup fmt
        autocmd!
        autocmd BufWritePre *.js Neoformat
        autocmd BufWritePre *.css Neoformat
        autocmd BufWritePre *.scss Neoformat
    augroup END
'''

## 参考

[Related Projects - Prettier](https://prettier.io/docs/en/related-projects.html#eslint-integrations)
