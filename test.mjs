const rollupOptions = (await import('./rollup.config.mjs')).default;

const { rollup } = await import('rollup');
const bundle = await rollup(rollupOptions);

const res = await bundle.generate({
  format: 'cjs',
  preserveModules: true,
})

console.log('res', JSON.stringify(res))
