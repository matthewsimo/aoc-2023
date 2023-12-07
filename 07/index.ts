type HandType =
  | "FiveOfAKind"
  | "FourOfAKind"
  | "FullHouse"
  | "ThreeOfAKind"
  | "TwoPair"
  | "OnePair"
  | "HighCard";

type Round = { hand: string; bid: number; handType: HandType };

const cardVals = {
  A: 13,
  K: 12,
  Q: 11,
  J: 10,
  T: 9,
  "9": 8,
  "8": 7,
  "7": 6,
  "6": 5,
  "5": 4,
  "4": 3,
  "3": 2,
  "2": 1,
};

const handTypeVals = {
  FiveOfAKind: 7,
  FourOfAKind: 6,
  FullHouse: 5,
  ThreeOfAKind: 4,
  TwoPair: 3,
  OnePair: 2,
  HighCard: 1,
};

const getHandType = (hand: string, withJokers = false): HandType => {
  const cards = hand.split("");
  let dupes: Record<string, number> = {};
  for (let card of cards) {
    if (dupes[card]) {
      dupes[card] = dupes[card] + 1;
    } else {
      dupes[card] = 1;
    }
  }

  let jokers = 0;
  if (withJokers && dupes["J"]) {
    jokers = dupes["J"];
    delete dupes["J"];
  }

  const vals = Object.values(dupes).sort((a, b) => b - a);
  vals[0] = vals[0] + jokers;

  if (vals.includes(5) || jokers === 5) {
    return "FiveOfAKind";
  } else if (vals.includes(4)) {
    return "FourOfAKind";
  } else if (vals.includes(3) && vals.includes(2)) {
    return "FullHouse";
  } else if (vals.includes(3)) {
    return "ThreeOfAKind";
  } else if (vals.includes(2)) {
    const twosCount = vals.filter((val) => val === 2);
    if (twosCount.length === 2) {
      return "TwoPair";
    } else {
      return "OnePair";
    }
  } else {
    return "HighCard";
  }
};

const compareHands = (handA: Round, handB: Round): number => {
  if (handTypeVals[handA.handType] > handTypeVals[handB.handType]) {
    return 1;
  } else if (handTypeVals[handA.handType] < handTypeVals[handB.handType]) {
    return -1;
  } else {
    return compareCards(handA.hand, handB.hand);
  }
};

const compareCards = (hand1: string, hand2: string): number => {
  const hand1Cards = hand1.split("");
  const hand2Cards = hand2.split("");

  for (let i in hand1Cards) {
    const hand1Card = hand1Cards[i] as keyof typeof cardVals;
    const hand2Card = hand2Cards[i] as keyof typeof cardVals;
    if (cardVals[hand1Card] > cardVals[hand2Card]) {
      return 1;
    } else if (cardVals[hand1Card] < cardVals[hand2Card]) {
      return -1;
    }
  }

  return 0;
};

export const p1 = (input: string) => {
  const rounds = input.split("\n").map((l) => {
    const [hand, bid] = l.split(" ");
    return { hand, bid: Number(bid), handType: getHandType(hand) };
  });

  rounds.sort(compareHands);

  return rounds.reduce((pV, cV, i) => {
    return pV + cV.bid * (i + 1);
  }, 0);
};

export const p2 = (input: string) => {
  cardVals["J"] = 0;
  const rounds = input.split("\n").map((l) => {
    const [hand, bid] = l.split(" ");
    return { hand, bid: Number(bid), handType: getHandType(hand, true) };
  });

  rounds.sort(compareHands);

  return rounds.reduce((pV, cV, i) => {
    return pV + cV.bid * (i + 1);
  }, 0);
};
