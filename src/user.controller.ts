import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class UserController {
  @MessagePattern({ cmd: 'get_user' })
  getUser(data: { id: number }) {
    return {
      id: data.id,
      name: 'Harsh Goel',
      role: 'user',
    };
  }
}
