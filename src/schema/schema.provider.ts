import { Connection } from 'mongoose';
import { ClientSchema } from './client.schema';
import { LogSchema } from './log.schema';
import { ENUM } from 'src/common/enum';

export const schemaProviders = [
  {
    provide: 'CLIENT_MODEL',
    useFactory: (connection: Connection) => connection.model(ENUM.COLLECTIONS.CLIENT, ClientSchema),
    inject: ['DATABASE_CONNECTION'],
  },
  {
    provide: 'LOG_MODEL',
    useFactory: (connection: Connection) => connection.model(ENUM.COLLECTIONS.LOG, LogSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
