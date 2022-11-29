import { expect, test } from 'vitest'
import { readFileSync } from 'fs'

test('an error must be of instance Error', () => {
  try {
    readFileSync('non-existent-file')
  } catch (err) {
    expect(err).toBeInstanceOf(Error)
  }
})
