import { getPayload } from 'payload'
import config from '@/payload.config'
import { isDuplicateError } from '../../lib/is-payload-error'
import { env } from '@/lib/env'
export async function seedAdmin() {
  const payload = await getPayload({
    config,
  })

  try {
    const response = await payload.create({
      collection: 'users',
      data: {
        email: env.CMS_ADMIN_EMAIL || '',
        password: env.CMS_ADMIN_PASSWORD || '',
      },
    })
    console.log('Admin Created:', response)
  } catch (err) {
    if (isDuplicateError(err, 'email')) {
      console.log('Admin user already exists.')
      return
    } else {
      console.error(JSON.stringify(err, null, 2))
    }
  }
}
