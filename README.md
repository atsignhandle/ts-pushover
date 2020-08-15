![Badge](https://img.shields.io/badge/procrastination-i%20made%20this%20badge%20instead%20of%20programming-orange)

### Epic Project Name

## Epic Purpose

## Build

`yarn && yarn build && yarn dev`

## TODO

- [ ] Stop procrastinating

## Included Scripts

- `yarn dev`. Runs the project in dev mode, which means that it won't check types and will restart with every change you make.
- `yarn build`. Compiles the project to the `./dist` folder.
- `yarn typecheck`. Checks the typings of the project. Gets executed before trying to create a new commit but you can also run it manually.
- `yarn start`. Runs the compiled program. Remember to execute `yarn build` before attempting to launch the program.
- `yarn lint`. Runs ESLint. You can append `--fix` in order to fix autofixable issues.
- `yarn save`. Runs `git add . && echo Enter commit message && read && git commit -m \":octocat: ${REPLY}\" && git push`

