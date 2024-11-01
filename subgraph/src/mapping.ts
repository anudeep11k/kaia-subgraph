import { Transfer } from "../generated/Token/Token"
import { Account, Transaction } from "../generated/schema"

export function handleTransaction(event: Transfer): void {
  let transaction = new Transaction(event.transaction.hash.toHex())
  transaction.from = event.params.from.toHex()
  transaction.to = event.params.to.toHex()
  transaction.value = event.params.value
  transaction.timestamp = event.block.timestamp
  transaction.type = "send"
  transaction.save()
}