import { createBuilder } from 'vite'

const { plugins, ...restRollupOptions } = (await import('./rollup.config.mjs')).default;

const viteConfig = {
  build: {
    rollupOptions: restRollupOptions,
  },
  environments: {
    custom: {}
  }
}

const builder = await createBuilder(viteConfig)
const environment = builder.environments.custom
const buildOutput = await builder.build(environment)

console.log('modules included:', buildOutput.output.map(m => m.facadeModuleId))

console.log('\nentry file code:\n')
console.log(buildOutput.output.find(m => m.isEntry).code)

// console.log(JSON.stringify(buildOutput))
