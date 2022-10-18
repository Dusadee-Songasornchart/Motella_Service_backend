import { Injectable } from '@nestjs/common';
import { PaymentDTO } from 'src/dto/product.dto';

@Injectable()
export class PaymentService {
private allpayment: PaymentDTO[] = [
    {bankname: 'kasikun' , user:'john',money:2500},
    {bankname: 'thaipanud', user: 'jim',money:3500}
];
    findAll(): PaymentDTO[]{
        return this.allpayment;
    
    }

    findByuser(user: string){
        return this.allpayment.find(p=>p.user === user);
    }
}
