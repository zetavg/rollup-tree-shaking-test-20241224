import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'app/main.js',
  output: {
    // file: 'bundle.js',
    dir: 'dist',
    format: 'cjs',
    preserveModules: true,
  },
  plugins: [
    commonjs(),
    nodeResolve(),
  ],
  treeshake: {
    annotations: true,
    correctVarValueBeforeDeclaration: false,
    propertyReadSideEffects: false,
    tryCatchDeoptimization: false,
    unknownGlobalSideEffects: false,

    moduleSideEffects: (id, external) => { // Seems to need `annotations: true` to work!
      if (id.endsWith('node_modules/react-scan/dist/native.js')) {
        return false
      }

      return true
    }
  },
};
