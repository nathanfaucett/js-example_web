example
=======
example front-end


## Structure

app/
  - css/ - less files using [comn_css](https://github.com/nathanfaucett/comn_css) and [less](https://github.com/less/less.js/) to compile
  - fonts/
  - img/
  - js/
    - components/ - all virt components
      - App.js main component, handles switching views
    - routes/ - routes and middleware using [layers_browser](https://github.com/nathanfaucett/layers_browser)
    - stores/ - flux Stores [apt](https://github.com/nathanfaucett/apt)
    - utils/ - utility functions
    - app.js - inits app state
    - index.js - calls the app init when dom done loading

config/
  - locale/ - json translation files
  - paths/ - paths for different envs
  - settings/ - build settings for different envs
  - tasks/ - all tasks used for build
  - application.js - app config
  - utils.js - utils to get app build config loaded

##.envrc

these ENV variables are used in the config and need to be defined
I use [http://direnv.net/](http://direnv.net/)

```bash
export NODE_ENV="development" # "development""production""staging""test"
export PORT=4000
export LIVERELOAD_PORT=35729
```

## Building/Running
all commands are done with [task](https://github.com/nathanfaucett/task), use "$ task --help" for full list
install task cli [/task-cli](https://github.com/nathanfaucett//task-cli)

```bash
$ npm i @nathanfaucett/task-cli -g
```

### run
builds and watches project for reloads, in current env set in .envrc
```bash
$ task run
```

### build
builds project, in current env set in .envrc
```bash
$ task build
```

### clean
removes all build files
```bash
$ task clean
```
