import { Controller, Get, Param, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { get } from 'http';
import { PaymentDTO } from 'src/dto/product.dto';
import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentController {
    constructor(private paymentService: PaymentService){

    }

    @Get()
    getPaymentAll(): PaymentDTO[]{
        return this.paymentService.findAll();

    }
    @Get('/search/:user')
    getPaymentbyuser(@Param('user')user: string ,
         @Req() req: Request,
         @Res() res: Response){
        
        const user_payment =  this.paymentService.findByuser(user);

        if(user_payment){
            res.send(user_payment);
        }else
            res.status(400).send({msg : 'User not found'});

    }
}
