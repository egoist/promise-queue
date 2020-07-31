# @egoist/promise-queue

[![NPM version](https://badgen.net/npm/v/@egoist/promise-queue)](https://npmjs.com/package/@egoist/promise-queue) [![NPM downloads](https://badgen.net/npm/dm/@egoist/promise-queue)](https://npmjs.com/package/@egoist/promise-queue) [![CircleCI](https://badgen.net/circleci/github/egoist/promise-queue/master)](https://circleci.com/gh/egoist/promise-queue/tree/master) [![donate](https://badgen.net/badge/support%20me/donate/ff69b4)](https://github.com/sponsors/egoist)

## Install

For Node.js / Yarn:

```bash
yarn add @egoist/promise-queue
```

For Node.js / NPM:

```bash
npm i @egoist/promise-queue
```

For Deno:

```ts
import { PromiseQueue } from 'https://unpkg.com/@egoist/promise-queue/mod.ts'
```

## Usage

Example using Node.js CommonJS `require`:

```js
const { PromiseQueue } = require('@egoist/promise-queue')

const processor = async (jobId, resolution, format) => {
  // run job
}

const queue = new PromiseQueue(processor)

// Add a job
// First argument is an unique job id
queue.add('process-video-id-xxxx', '720p', 'mp4')

// Run added jobs
// Resolves a Set of processed job ids
await queue.run()
```

## TypeDoc

https://doc.deno.land/https/raw.githubusercontent.com/egoist/promise-queue/master/src/index.ts

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

**@egoist/promise-queue** © [EGOIST](https://github.com/egoist), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by EGOIST with help from contributors ([list](https://github.com/egoist/@egoist/promise-queue/contributors)).

> [github.com/egoist](https://github.com/egoist) · GitHub [@EGOIST](https://github.com/egoist) · Twitter [@\_egoistlily](https://twitter.com/_egoistlily)
