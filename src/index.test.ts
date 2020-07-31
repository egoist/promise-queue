import test from 'ava'
import { PromiseQueue } from '.'

test('main', async (t) => {
  const queue = new PromiseQueue((job) => {
    if (job === '2') {
      queue.add('3')
    }
  })
  queue.add('1')
  queue.add('2')
  const result = await queue.run()
  t.deepEqual(result, new Set(['1', '3', '2']))
})
