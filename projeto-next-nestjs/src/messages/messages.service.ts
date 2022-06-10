import { Injectable } from '@nestjs/common';


@Injectable()
export class MessagesService {
  private messages = [
    {
      id: 1,
      text: 'Primeira mensagem',
    },
    {
      id: 2,
    },
  ];

  findAll() {
    return this.messages;
  }
  findById(id : number ){
    return this.messages.find((messages)=>messages.id==id);
  }
  create(messages : {id:number, text: string  }){
    return this.messages.push(messages)
  }
}
