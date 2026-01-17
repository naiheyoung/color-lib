import { it, expect } from 'vitest'
import { hexToRgb } from '../src/index.js'

it('color', () => {
  expect(hexToRgb('#646cff')).toMatchInlineSnapshot(`"100 108 255"`)
})
