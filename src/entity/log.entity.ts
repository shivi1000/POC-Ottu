import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { Dao } from 'src/providers/database/dao.provider';
import { ILog } from 'src/schema/log.schema';

@Injectable()
export class LogEntity extends Dao {
  constructor(@Inject('LOG_MODEL') private logModel: Model<ILog>) {
    super(logModel);
  }
 
}
