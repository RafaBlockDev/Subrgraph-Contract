import {
  ClaimTokens,
  BusinessAction
} from "../generated/LBToken/LBToken"
import { ClaimToken, PaymentSubmited } from "../generated/schema"

export function handleClaimTokens(event: ClaimTokens): void {
  let claimToken = ClaimToken.load(event.transaction.hash.toHex());

  if(!claimToken) {
    claimToken = new ClaimToken(event.transaction.hash.toHex());
  }

  claimToken.dayId = event.params.dayId.toString();
  claimToken.monthId = event.params.monthId.toString();
  claimToken.yearId = event.params.yearId.toString();
  claimToken.amountToBeTransfer = event.params.amount;
  claimToken.user = event.params.from;
  claimToken.block = event.block.number;

  claimToken.save();

  let payment = PaymentSubmited.load(event.transaction.hash.toHex());
  if(!payment) {
    payment = new PaymentSubmited(event.transaction.hash.toHex());
    payment.save();
  }
}

export function handlePaymentSubmited(event: BusinessAction): void {
  let paymentSubmited = PaymentSubmited.load(event.transaction.hash.toHex());

  if(!paymentSubmited) {
    paymentSubmited = new PaymentSubmited(event.transaction.hash.toHex());
  }

  paymentSubmited.dayId = event.params.dayId.toString();
  paymentSubmited.monthId = event.params.monthId.toString();
  paymentSubmited.yearId = event.params.yearId.toString();
  paymentSubmited.REQUEST_REFUND = event.params.businessAction.toString();
  paymentSubmited.from = event.params.mainActor;
  paymentSubmited.amount = event.params.amount;
  paymentSubmited.employeeId = event.params.employeeId.toString();
  paymentSubmited.invoiceLink = event.params.invoiceLink.toString();
  paymentSubmited.timestamp = event.block.timestamp;

  paymentSubmited.save();
}