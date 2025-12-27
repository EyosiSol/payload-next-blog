import { seedAdmin } from './seeders/admin.seeder'

async function main() {
  try {
    await seedAdmin()
    process.exit(0)
  } catch (err) {
    console.error(err)
  }
}

void main()
