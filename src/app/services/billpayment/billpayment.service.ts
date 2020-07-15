import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { billPaymentProvider, billPaymentRequest, billPayment } from '../../models/billpayments';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BillpaymentService {

  constructor(private httpClient: HttpClient) { }

  public getBillPaymentProviders(): Observable<Array<billPaymentProvider>> {
    var url = environment.apiUrl + 'api/billpayments/providers';
    return this.httpClient.get<Array<billPaymentProvider>>(url);
  }

  public payBill(billpaymentRequest: billPaymentRequest): Observable<any> {
    var url = environment.apiUrl + 'api/billpayments';
    return this.httpClient.post<any>(url, billpaymentRequest);
  }

  public getBillpayments(): Observable<Array<billPayment>> {
    var url = environment.apiUrl + 'api/billpayments/history';
    return this.httpClient.get<Array<billPayment>>(url);
  }

}
