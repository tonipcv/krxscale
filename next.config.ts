// Delegate configuration to next.config.js to keep a single source of truth
// This prevents conflicting redirects/headers between TS and JS configs.
import type { NextConfig } from 'next'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const jsConfig = require('./next.config.js') as NextConfig

const config: NextConfig = jsConfig

export default config
