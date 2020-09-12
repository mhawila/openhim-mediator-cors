'use strict'

export const SERVER_PORT = process.env.SERVER_PORT || 4321
export const LOG_LEVEL = process.env.LOG_LEVEL || 'info'

// OpenHIM
export const OPENHIM_URL = process.env.OPENHIM_URL || 'https://openhim-core:8080'
export const OPENHIM_USERNAME =
  process.env.OPENHIM_USERNAME || 'root@openhim.org'
export const OPENHIM_PASSWORD =
  process.env.OPENHIM_PASSWORD || 'fei2013'
// export const TRUST_SELF_SIGNED = process.env.TRUST_SELF_SIGNED === 'true'
export const TRUST_SELF_SIGNED = true

export const NHIF_API_BASE_URL = 'http://196.13.105.15'
