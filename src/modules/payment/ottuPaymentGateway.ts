import { Injectable } from '@nestjs/common';
import { CheckoutDto } from './dto/payment.dto';

@Injectable()
export class OttuPaymentGateway {
  async processPayment(checkoutDto: CheckoutDto): Promise<string> {
    // Logic to interact with Ottu payment gateway goes here
    // This might involve making HTTP requests to Ottu's API or using their SDK
    const transactionId = 'mock-transaction-id';
    return transactionId;
  }
}