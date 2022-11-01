## The Graph

Index service.

## How to create subgraph?

0. graph auth --studio <deploy-key>

1. Init graph project folder
```bash
graph init --contract-name Lottery \
--index-events \
--product subgraph-studio \
--from-contract 0xdc12b61cee7E9BaEDf552e8DB42744b9f63a555A
```

2. Create graphql schema

```
./schema.graphql
```

3. Edit entities on yaml

```
./subgraph.yaml
```

```
...
mapping:
    entities:
        - LotteryData
        - Player
...
```

4. Select which events to handle

from:
```
./subgraph.yml
```

```
...
      eventHandlers:
        - event: EnterLottery()
          handler: handleEnterLottery
        - event: PrizeTransfered(address,uint256)
          handler: handlePrizeTransfered
        - event: WinnerPicked(indexed address)
          handler: handleWinnerPicked
...
```

Optional:

Adding startBlock:

```
    source:
      address: "0x01434E6A301e70a7C84679272F0959b09850651f"
      abi: Lottery
      startBlock: block where to start transactions
```

5. Generate code

```bash
graph codegen
```