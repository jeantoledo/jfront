# Modern Javascript Frontend Application
[![Build Status](https://travis-ci.org/jeantoledo/jfront.svg?branch=master)](https://travis-ci.org/jeantoledo/jfront)

## Stack:

- Babel (env preset)
- Webpack 3+
- Yarn 1+
- Webpack Dev Server
- ESLint (airbnb)
- Bulma (UI Framework)
## Decisions

- Not use HMR with Webpack Dev Server
  - Why? I think that HMR isn't a requirement, despite the productivity improvement. HMR have some side effects that require some code to work properly (like old events attached in dom nodes and append elements logic).

