import { BusinessAction as BusinessActionEvent} from "../generated/Contract/Contract"
import { ClaimTokens } from "../generated/schema";
  
export function handleBusinessAction(event: BusinessActionEvent): void {
    let claimTokens = ClaimTokens.load(event.transaction.hash.toHex());
  
    if(!claimTokens) {
        claimTokens = new ClaimTokens(event.transaction.hash.toHex());
    }
  
    claimTokens.block = event.block.number;
    claimTokens.businessAction = event.params.businessAction.toString();
    claimTokens.dayId = event.params.dayId.toString();
    claimTokens.monthId = event.params.monthId.toString();
    claimTokens.yearId = event.params.yearId.toString();
    claimTokens.amount = event.params.amount;
    claimTokens.invoiceLink = event.params.invoiceLink;
    claimTokens.workArea = event.params.workArea;
    claimTokens.country = event.params.country;
  
    claimTokens.save();
}