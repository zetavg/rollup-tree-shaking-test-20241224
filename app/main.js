import { hello } from './t1.js';
import { m1 } from 'm1';
import { m2 } from 'm2-cjs-only';
import { ReactScan } from 'react-scan/native'

console.log('hi')

if (false) {
  hello()
}

if (false) {
  // ESM modules seems to always be tree-shaken if possible (if no side effects are detected), even if moduleSideEffects returns true for it
  m1()
}

if (false) {
  // CJS only modules seems to rely on moduleSideEffects or package.json sideEffects
  m2()
}

if (false) {
  console.log(ReactScan)
}
