
import replace from 'rollup-plugin-replace'
import resolve from 'rollup-plugin-node-resolve'

export default {
  plugins: [
    replace({
      ENV_DATE: Date.now(),
      ENV_DEVELOPMENT: process.env.NODE_ENV === 'development',
      ENV_PRODUCTION: process.env.NODE_ENV === 'production',
      S3_URL: 'assets/products/',
      STORAGE_KEY: 'quiver.netlify'
    }),
    resolve()
  ]
}
