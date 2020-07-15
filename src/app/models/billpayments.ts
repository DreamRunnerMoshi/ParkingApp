export class billPaymentProvider {
    id: number;
    providerName: string;
}

export class billPaymentRequest {
    providerId: number;
    amount: number;
    referenceNo: number;
}

export class billPayment {
    providerName: string;
    amount: number;
    paidOn: Date;
    referenceNo: string
}