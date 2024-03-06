import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsNotEmpty, IsCreditCard, IsInt, Min, Max } from 'class-validator';

export class CheckoutDto {
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  currency: string;

  @ApiProperty()
  @IsCreditCard()
  @IsNotEmpty()
  cardNumber: string;

  @ApiProperty()
  @IsInt()
  @Min(1)
  @Max(12)
  expiryMonth: number;

  @ApiProperty()
  @IsInt()
  @Min(new Date().getFullYear())
  expiryYear: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  cvv: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  customerName: string;
}

export class CheckoutResponseDto {
  @ApiProperty()
  success: boolean;

  @ApiProperty()
  message: string;

  @ApiProperty({ required: false })
  transactionId?: string;

  @ApiProperty({ required: false })
  error?: string;
}


