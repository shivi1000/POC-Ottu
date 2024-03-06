import { Body, Controller, Post, Res, UseGuards } from '@nestjs/common';
import {ApiBasicAuth,ApiBearerAuth,ApiOperation,ApiTags} from '@nestjs/swagger';
import { HttpResponse } from 'src/common/httpResponse';
import { PaymentService } from './payment.service';
import { AuthGuard } from '@nestjs/passport';
import { CheckoutDto, CheckoutResponseDto } from './dto/payment.dto';


@ApiTags('Payment')
@Controller('/')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService,private readonly httpResponse: HttpResponse) {}

  @Post()
  async checkout(@Body() checkoutDto: CheckoutDto): Promise<CheckoutResponseDto> {
    try {
      const paymentResult = await this.paymentService.processPayment(checkoutDto);
      return {
        success: true,
        message: 'Payment processed successfully',
        transactionId: paymentResult.transactionId,
      };
    } catch (error) {
      return {
        success: false,
        message: 'Payment processing failed',
        error: error.message,
      };
    }
  }
}
