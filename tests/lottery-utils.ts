import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  BuyTicket,
  LotteryCalculating,
  OwnershipTransferred,
  PrizeToTransfer,
  PrizeTransfered,
  RandomWords,
  RestartLottery,
  StartLottery,
  UpdatePlayersRequired,
  WinnerPicked
} from "../generated/Lottery/Lottery"

export function createBuyTicketEvent(prize: BigInt, from: Address): BuyTicket {
  let buyTicketEvent = changetype<BuyTicket>(newMockEvent())

  buyTicketEvent.parameters = new Array()

  buyTicketEvent.parameters.push(
    new ethereum.EventParam("prize", ethereum.Value.fromUnsignedBigInt(prize))
  )
  buyTicketEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )

  return buyTicketEvent
}

export function createLotteryCalculatingEvent(
  lotteryStatus: i32
): LotteryCalculating {
  let lotteryCalculatingEvent = changetype<LotteryCalculating>(newMockEvent())

  lotteryCalculatingEvent.parameters = new Array()

  lotteryCalculatingEvent.parameters.push(
    new ethereum.EventParam(
      "lotteryStatus",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(lotteryStatus))
    )
  )

  return lotteryCalculatingEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createPrizeToTransferEvent(prize: BigInt): PrizeToTransfer {
  let prizeToTransferEvent = changetype<PrizeToTransfer>(newMockEvent())

  prizeToTransferEvent.parameters = new Array()

  prizeToTransferEvent.parameters.push(
    new ethereum.EventParam("prize", ethereum.Value.fromUnsignedBigInt(prize))
  )

  return prizeToTransferEvent
}

export function createPrizeTransferedEvent(winner: Address): PrizeTransfered {
  let prizeTransferedEvent = changetype<PrizeTransfered>(newMockEvent())

  prizeTransferedEvent.parameters = new Array()

  prizeTransferedEvent.parameters.push(
    new ethereum.EventParam("winner", ethereum.Value.fromAddress(winner))
  )

  return prizeTransferedEvent
}

export function createRandomWordsEvent(
  requestId: BigInt,
  randomWords: Array<BigInt>
): RandomWords {
  let randomWordsEvent = changetype<RandomWords>(newMockEvent())

  randomWordsEvent.parameters = new Array()

  randomWordsEvent.parameters.push(
    new ethereum.EventParam(
      "requestId",
      ethereum.Value.fromUnsignedBigInt(requestId)
    )
  )
  randomWordsEvent.parameters.push(
    new ethereum.EventParam(
      "randomWords",
      ethereum.Value.fromUnsignedBigIntArray(randomWords)
    )
  )

  return randomWordsEvent
}

export function createRestartLotteryEvent(
  lotteryStatus: i32,
  s_players: Array<Address>
): RestartLottery {
  let restartLotteryEvent = changetype<RestartLottery>(newMockEvent())

  restartLotteryEvent.parameters = new Array()

  restartLotteryEvent.parameters.push(
    new ethereum.EventParam(
      "lotteryStatus",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(lotteryStatus))
    )
  )
  restartLotteryEvent.parameters.push(
    new ethereum.EventParam(
      "s_players",
      ethereum.Value.fromAddressArray(s_players)
    )
  )

  return restartLotteryEvent
}

export function createStartLotteryEvent(
  price: BigInt,
  lotteryStatus: i32,
  playersRequired: BigInt
): StartLottery {
  let startLotteryEvent = changetype<StartLottery>(newMockEvent())

  startLotteryEvent.parameters = new Array()

  startLotteryEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
  startLotteryEvent.parameters.push(
    new ethereum.EventParam(
      "lotteryStatus",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(lotteryStatus))
    )
  )
  startLotteryEvent.parameters.push(
    new ethereum.EventParam(
      "playersRequired",
      ethereum.Value.fromUnsignedBigInt(playersRequired)
    )
  )

  return startLotteryEvent
}

export function createUpdatePlayersRequiredEvent(
  playersRequired: BigInt
): UpdatePlayersRequired {
  let updatePlayersRequiredEvent = changetype<UpdatePlayersRequired>(
    newMockEvent()
  )

  updatePlayersRequiredEvent.parameters = new Array()

  updatePlayersRequiredEvent.parameters.push(
    new ethereum.EventParam(
      "playersRequired",
      ethereum.Value.fromUnsignedBigInt(playersRequired)
    )
  )

  return updatePlayersRequiredEvent
}

export function createWinnerPickedEvent(player: Address): WinnerPicked {
  let winnerPickedEvent = changetype<WinnerPicked>(newMockEvent())

  winnerPickedEvent.parameters = new Array()

  winnerPickedEvent.parameters.push(
    new ethereum.EventParam("player", ethereum.Value.fromAddress(player))
  )

  return winnerPickedEvent
}
