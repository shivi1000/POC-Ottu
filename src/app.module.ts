import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RouterModule, Routes } from '@nestjs/core';
import { ScheduleModule } from '@nestjs/schedule';
import configuration from 'config/configuration';
import { LoggerModule } from './logger/logger.module';
import { DatabaseModule } from './providers/database/db.module';
import { schemaProviders } from './schema/schema.provider';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from 'src/filters/exceptionFilter';
import { ClientOnBoardingModule } from './modules/client/on-boarding/on-boarding.module';
import { PaymentModule } from './modules/payment/payment.module';
import { WebhookModule } from './modules/webhook/webhook.module';


//for routing app path
const routes: Routes = [
  {
    path: '/client',
    children: [
      {
        path: '/onboarding',
        module: ClientOnBoardingModule,
      },
    ],
  },
  {
    path: '/payment',
    children: [
      {
        path: '/',
        module: PaymentModule,
      },
    ],
  },

  {
    path: '/webhook',
    children: [
      {
        path: '/',
        module: WebhookModule,
      },
    ],
  },
  
];
@Module({
  imports: [
    ConfigModule.forRoot({ load: [configuration], isGlobal: true }),
    ScheduleModule.forRoot(),
    DatabaseModule,
    LoggerModule,
    RouterModule.register(routes),
    ClientOnBoardingModule,
    PaymentModule,
    WebhookModule
  ],
  providers: [
    ...schemaProviders,
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
    
    
  ],
})
export class AppModule {}
