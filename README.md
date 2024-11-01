A subgraph tutorial for tracking wallet transactions on Kaia blockchain using The Graph Studio
# Creating a Subgraph for Kaia Blockchain using The Graph Studio

This tutorial demonstrates how to build a subgraph for Kaia blockchain data using The Graph Studio, providing a powerful tool for tracking wallet transactions.

## Prerequisites
- **The Graph Studio account** (Sign up at [The Graph Studio](https://thegraph.com/studio))
- **Kaia smart contract information** (contract address and ABI) here i have used kaia docs fro ABI
- **Graph CLI** (install via `yarn global add @graphprotocol/graph-cli`)

## Step-by-Step Guide
### Step 1: Setting Up the Project in The Graph Studio
1. Log in to The Graph Studio, then click **Create a Subgraph**.

   ![Graph Studio Dashboard](images/image1.png)

2. Fill in the details for your subgraph, selecting the Kaia network.

   ![Subgraph Creation Form](images/image2.png)

### Step 2: Define Your Subgraph Schema
- Define the `Account` and `Transaction` entities in `schema.graphql` under the `subgraph/` folder.

   ```graphql
   type Account @entity {
     id: ID!
     balance: BigInt!
     transactions: [Transaction!] @derivedFrom(field: "from")
   }

   type Transaction @entity {
     id: ID!
     from: Account!
     to: Account!
     value: BigInt!
     timestamp: BigInt!
     type: String! # e.g., "send", "receive"
   }




### Step 3: Writing the Mapping Logic

Add the mapping logic in `src/mapping.ts` to process `Transfer` events.

```typescript
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
```

### Step 4: Deploying Your Subgraph

To build and deploy your subgraph, follow these steps:

1. **Install Project Dependencies**  
   Install the necessary dependencies for your subgraph by running:
   ```bash
   yarn install
   graph codegen
   graph build

Link for my Subgraph : https://thegraph.com/studio/subgraph/subgraph-kaia
