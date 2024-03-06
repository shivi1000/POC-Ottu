import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PaymentService } from './payment.service';
import { EntityModule } from 'src/entity/entity.module';
import { GuardModule } from 'src/guards/guards.module';
import { GuardService } from 'src/guards/guards.service';
import { HttpResponse } from 'src/common/httpResponse';
import { PaymentController } from './payment.controller';
import { OttuPaymentGateway } from './ottuPaymentGateway';

@Module({
  imports: [ConfigModule.forRoot(),EntityModule, GuardModule],
  controllers: [PaymentController],
  providers: [PaymentService,GuardService, HttpResponse, OttuPaymentGateway],
})
export class PaymentModule {}
