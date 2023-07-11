import connect, {sql} from '@databases/sqlite'

export const db = connect()
export { sql } from '@databases/sqlite'

await db.query(sql`CRETAE TABLE users IF NOT EXISTS (id INTEGER PRIMARY KEY, name TEXT)`);
