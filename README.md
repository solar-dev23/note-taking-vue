# Note-taking application using VueJS

Note-taking application using VueJS

## Prerequisites

Make sure you have installed Quasar cli on your machine.

https://quasar.dev/start/quasar-cli#installation-project-scaffolding

```bash
$ yarn global add @quasar/cli
# or
$ npm install -g @quasar/cli

If you are using Yarn, make sure that the Yarn global install location is in your PATH:

# in ~/.bashrc or equivalent
export PATH="$(yarn global bin):$PATH"

# for fish-shell:
set -U fish_user_paths (yarn global bin) $fish_user_paths

```

## Install the dependencies

```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev
```

### Unit Testing

```bash
yarn test:unit
```

### e2e Testing

```bash
yarn test:e2e:ci
```

### Build the app for production

```bash
quasar build
```
