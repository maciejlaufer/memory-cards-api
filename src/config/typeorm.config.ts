import { ConnectionOptions } from 'typeorm';
import { join } from 'path';

const config: ConnectionOptions = {
  type: 'postgres',
  port: parseInt(process.env.TYPEORM_PORT),
  host: process.env.TYPEORM_HOST,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  synchronize: process.env.TYPEORM_SYNC === 'true',
  logging: process.env.TYPEORM_LOGGING === 'true',
  migrationsRun: process.env.TYPEORM_MIGRATIONS_RUN === 'true',
  entities: [join(__dirname, './../**/**.entity{.ts,.js}')],
  migrations: [join(__dirname, './../migrations/{.ts,*.js}')],
  cli: {
    migrationsDir: 'src/migrations',
  },
};

export default config;
