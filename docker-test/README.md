# docker-test

test of building a development environment with docker

## How to use

build & start container

```
$ docker-compose up --build
```

check which container is running

```
$ docker ps
```

enter the particular container

```
$ docker exec -it ${CONTAINER_ID} bash
```

inspect whether TypeScript environment is in place.

```
# tsc -v
```

compile .ts file to .js

```
# tsc hello.ts
```

execute .js file

```
# node hello.js
# => hello, TypeScript!
```