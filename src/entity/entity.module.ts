import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/providers/database/db.module';
import { schemaProviders } from 'src/schema/schema.provider';
import { ClientEntity } from './client.entity';
import { LogEntity} from './log.entity';

@Module({
  imports: [DatabaseModule],
  providers: [...schemaProviders, ClientEntity,LogEntity],
  exports: [ClientEntity,LogEntity],
})
export class EntityModule {}
