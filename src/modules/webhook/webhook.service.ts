import { Injectable } from '@nestjs/common';
import { WebhookDto } from './dto/webhook.dto';

@Injectable()
export class WebhookService {
  async processWebhook(webhookDto: WebhookDto): Promise<void> {
    // Add logic to handle webhook events
    // You can trigger specific actions based on the event type
    switch (webhookDto.eventType) {
      case 'payment_success':
        // Handle successful payment event
        break;
      case 'payment_failure':
        // Handle failed payment event
        break;
      // Add cases for other event types as needed
    }
  }
}