import { Address } from '@graphprotocol/graph-ts'
import {
  Lottery as LotteryContract,
  BuyTicket as BuyTicketEvent,
  LotteryCalculating as LotteryCalculatingEvent,
  PrizeTransfered as PrizeTransferedEvent,
  RestartLottery as RestartLotteryEvent,
  StartLottery as StartLotteryEvent,
  UpdatePlayersRequired as UpdatePlayersRequiredEvent,
  TicketPriceUpdated as TicketPriceUpdatedEvent,
  WinnerPicked as WinnerPickedEvent,
} from '../generated/Lottery/Lottery'

import { LotteryStore } from '../generated/schema'

/**
 * Takes 1 ByteArray and byteArrayToStringArrays it to String[]
 * @param arr - ByteArray
 * @returns A byteArrayToStringArrayed String[]
 */
function byteArrayToStringArray(arr: Address[]): string[] {
  let out = new Array<string>()

  for (let i = 0; i < arr.length; i++) {
    out[i] = arr[i].toHexString()
  }

  return out
}

// Events handlers
export function handleBuyTicket(event: BuyTicketEvent): void {
  let id = (
    event.block.number.toString() + event.logIndex.toString()
  ).toString()

  let lottery = LotteryContract.bind(event.address)

  let lotteryStore = new LotteryStore(id)

  lotteryStore.event = 'BuyTicket'
  lotteryStore.status = lottery.getLotteryStatus()
  lotteryStore.price = lottery.getTicketPrice()
  lotteryStore.playersRequired = lottery.getPlayersRequired()
  lotteryStore.players = byteArrayToStringArray(lottery.getPlayers())
  lotteryStore.prize = lottery.getPrize()

  lotteryStore.save()
}

export function handleLotteryCalculating(event: LotteryCalculatingEvent): void {
  let id = (
    event.block.number.toString() + event.logIndex.toString()
  ).toString()

  let lottery = LotteryContract.bind(event.address)

  let lotteryStore = new LotteryStore(id)

  lotteryStore.event = 'LotteryCalculating'
  lotteryStore.price = lottery.getTicketPrice()
  lotteryStore.winner = lottery.getWinner()
  lotteryStore.playersRequired = lottery.getPlayersRequired()
  lotteryStore.players = byteArrayToStringArray(lottery.getPlayers())

  lotteryStore.status = event.params.lotteryStatus
  // lotteryStore.players.push(event.address.toString())

  lotteryStore.save()
}

export function handlePrizeTransfered(event: PrizeTransferedEvent): void {
  let id = (
    event.block.number.toString() + event.logIndex.toString()
  ).toString()

  let lottery = LotteryContract.bind(event.address)

  let lotteryStore = new LotteryStore(id)

  lotteryStore.event = 'PrizeTransfered'
  lotteryStore.status = lottery.getLotteryStatus()
  lotteryStore.price = lottery.getTicketPrice()
  lotteryStore.playersRequired = lottery.getPlayersRequired()
  lotteryStore.players = byteArrayToStringArray(lottery.getPlayers())

  lotteryStore.winner = event.params.winner

  lotteryStore.save()
}

export function handleRestartLottery(event: RestartLotteryEvent): void {
  let id = (
    event.block.number.toString() + event.logIndex.toString()
  ).toString()

  let lottery = LotteryContract.bind(event.address)

  let lotteryStore = new LotteryStore(id)

  lotteryStore.event = 'RestartLottery'
  lotteryStore.price = lottery.getTicketPrice()
  lotteryStore.playersRequired = lottery.getPlayersRequired()

  lotteryStore.status = event.params.lotteryStatus
  lotteryStore.players = []

  lotteryStore.save()
}

export function handleStartLottery(event: StartLotteryEvent): void {
  let id = (
    event.block.number.toString() + event.logIndex.toString()
  ).toString()

  let lottery = LotteryContract.bind(event.address)

  let lotteryStore = new LotteryStore(id)

  lotteryStore.event = 'StartLottery'
  lotteryStore.players = byteArrayToStringArray(lottery.getPlayers())
  lotteryStore.price = event.params.price
  lotteryStore.status = event.params.lotteryStatus
  lotteryStore.playersRequired = event.params.playersRequired

  lotteryStore.save()
}

export function handleUpdatePlayersRequired(
  event: UpdatePlayersRequiredEvent,
): void {
  let id = (
    event.block.number.toString() + event.logIndex.toString()
  ).toString()

  let lottery = LotteryContract.bind(event.address)

  let lotteryStore = new LotteryStore(id)

  lotteryStore.event = 'UpdatePlayersRequired'
  lotteryStore.status = lottery.getLotteryStatus()
  lotteryStore.price = lottery.getTicketPrice()
  lotteryStore.winner = lottery.getWinner()
  lotteryStore.players = byteArrayToStringArray(lottery.getPlayers())

  lotteryStore.playersRequired = event.params.playersRequired

  lotteryStore.save()
}

export function handleTicketPriceUpdated(
  event: TicketPriceUpdatedEvent,
): void {
  let id = (
    event.block.number.toString() + event.logIndex.toString()
  ).toString()

  let lottery = LotteryContract.bind(event.address)

  let lotteryStore = new LotteryStore(id)

  lotteryStore.event = 'TicketPriceUpdated'
  lotteryStore.status = lottery.getLotteryStatus()
  lotteryStore.winner = lottery.getWinner()
  lotteryStore.players = byteArrayToStringArray(lottery.getPlayers())

  lotteryStore.price = event.params.ticketPrice

  lotteryStore.save()
}

export function handleWinnerPicked(event: WinnerPickedEvent): void {
  let id = (
    event.block.number.toString() + event.logIndex.toString()
  ).toString()

  let lottery = LotteryContract.bind(event.address)

  let lotteryStore = new LotteryStore(id)

  lotteryStore.event = 'WinnerPicked'
  lotteryStore.status = lottery.getLotteryStatus()
  lotteryStore.price = lottery.getTicketPrice()
  lotteryStore.playersRequired = lottery.getPlayersRequired()
  lotteryStore.players = byteArrayToStringArray(lottery.getPlayers())
  lotteryStore.winner = lottery.getWinner()
  // lotteryStore.winner = event.params.player

  lotteryStore.save()
}
