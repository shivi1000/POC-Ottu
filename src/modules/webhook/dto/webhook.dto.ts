import { ApiProperty } from '@nestjs/swagger';

export class WebhookDto {
  @ApiProperty()
  eventId: string;

  @ApiProperty()
  eventType: string;

  // Add any other properties specific to your webhook payload
}
