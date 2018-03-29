## Install

```
$ yarn add -D prettier
$ yarn add -D eslint prettier-eslint prettier-eslint-cli
$ yarn add -D stylelint prettier-stylelint
$ prettier-eslint --write index.js
```


## Usage

```
$ prettier-eslint --write src/test.js
```
`.prettierrc` と `.eslintrc` が両方ある場合、prettier-eslintは`.eslintrc`の方を見てる

```
$ prettier-stylelint --write src/test.css
```

CLIでは動作するものの、Vimでは失敗する。
おそらく以下のエラーを吐いているから。
`{ "parser": "postcss" }` is deprecated. Prettier now treats it as `{ "parser": "css" }`.

https://github.com/hugomrdias/prettier-stylelint/issues/3
https://github.com/hugomrdias/prettier-stylelint/issues/9

## Vim Setup

dein.vimを使っている場合

```dein.toml
[[plugins]]
repo = 'sbdchd/neoformat.git'
hook_add = '''
    let g:neoformat_javascript_prettiereslint = {
        \ 'exe': './node_modules/.bin/prettier-eslint',
        \ 'args': ['--stdin'],
        \ 'stdin': 1,
        \ }
    augroup fmt
        autocmd!
        autocmd BufWritePre * Neoformat
    augroup END
    let g:neoformat_enabled_javascript = ['prettiereslint']
'''
