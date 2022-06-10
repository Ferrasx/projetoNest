import { Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { MessagesService } from '../messages/messages.service'
@Controller('messages')
export class MessagesController {
  constructor(private messagesServices: MessagesService){}
  @Get()  
  findAll() {
    return this.messagesServices.findAll();
  }
  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number)
{
  return this.messagesServices.findById(id);
}
@Post()
create(@body() body:any ){
  return this.messagesServices.create(body);
}
}
