import { Controller, Post, Body } from '@nestjs/common';
import { WebhookService } from './webhook.service';
import { WebhookDto } from './dto/webhook.dto';

@Controller('webhook')
export class WebhookController {
  constructor(private readonly webhookService: WebhookService) {}

  @Post()
  async handleWebhook(@Body() webhookDto: WebhookDto): Promise<void> {
    await this.webhookService.processWebhook(webhookDto);
  }
}