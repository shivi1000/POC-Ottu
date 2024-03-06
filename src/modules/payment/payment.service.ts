import { Injectable } from '@nestjs/common';
import { RESPONSE_DATA } from 'src/common/responses';
import { ConfigService } from '@nestjs/config';
import { CheckoutDto } from './dto/payment.dto';
import { OttuPaymentGateway } from './ottuPaymentGateway';

@Injectable()
export class PaymentService {
  constructor(private config: ConfigService, private readonly ottuPaymentGateway: OttuPaymentGateway) {
  }

  async processPayment(checkoutDto: CheckoutDto): Promise<{ transactionId: string }> {
    // Assuming you have a method in your OttuPaymentGateway to process the payment
    const transactionId = await this.ottuPaymentGateway.processPayment(checkoutDto);
    return { transactionId };
  }
}
