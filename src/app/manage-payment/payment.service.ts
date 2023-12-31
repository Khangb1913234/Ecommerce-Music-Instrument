import { Injectable } from "@angular/core";
import { Payment } from "./payment.model";

@Injectable({providedIn: "root"})
export class PaymentService{
    
    public needUpdatePayment!: Payment;

    setNeedUpdatePayment(payment: Payment){
        this.needUpdatePayment = payment;
    }


}