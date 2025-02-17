/* eslint-disable react/no-array-index-key */
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { Image, ImageSourcePropType } from 'react-native';

import { Button, Text, Title } from '@components';
import {
  ButtonContainer,
  CardContainer,
  ContentContainer,
  GameOverContainer,
  HandContainer,
  ScreenContainer,
} from './styles';

import c0C from '../../../../assets/blackjack-cards/0C.png';
import c0D from '../../../../assets/blackjack-cards/0D.png';
import c0H from '../../../../assets/blackjack-cards/0H.png';
import c0S from '../../../../assets/blackjack-cards/0S.png';
import c2C from '../../../../assets/blackjack-cards/2C.png';
import c2D from '../../../../assets/blackjack-cards/2D.png';
import c2H from '../../../../assets/blackjack-cards/2H.png';
import c2S from '../../../../assets/blackjack-cards/2S.png';
import c3C from '../../../../assets/blackjack-cards/3C.png';
import c3D from '../../../../assets/blackjack-cards/3D.png';
import c3H from '../../../../assets/blackjack-cards/3H.png';
import c3S from '../../../../assets/blackjack-cards/3S.png';
import c4C from '../../../../assets/blackjack-cards/4C.png';
import c4D from '../../../../assets/blackjack-cards/4D.png';
import c4H from '../../../../assets/blackjack-cards/4H.png';
import c4S from '../../../../assets/blackjack-cards/4S.png';
import c5C from '../../../../assets/blackjack-cards/5C.png';
import c5D from '../../../../assets/blackjack-cards/5D.png';
import c5H from '../../../../assets/blackjack-cards/5H.png';
import c5S from '../../../../assets/blackjack-cards/5S.png';
import c6C from '../../../../assets/blackjack-cards/6C.png';
import c6D from '../../../../assets/blackjack-cards/6D.png';
import c6H from '../../../../assets/blackjack-cards/6H.png';
import c6S from '../../../../assets/blackjack-cards/6S.png';
import c7C from '../../../../assets/blackjack-cards/7C.png';
import c7D from '../../../../assets/blackjack-cards/7D.png';
import c7H from '../../../../assets/blackjack-cards/7H.png';
import c7S from '../../../../assets/blackjack-cards/7S.png';
import c8C from '../../../../assets/blackjack-cards/8C.png';
import c8D from '../../../../assets/blackjack-cards/8D.png';
import c8H from '../../../../assets/blackjack-cards/8H.png';
import c8S from '../../../../assets/blackjack-cards/8S.png';
import c9C from '../../../../assets/blackjack-cards/9C.png';
import c9D from '../../../../assets/blackjack-cards/9D.png';
import c9H from '../../../../assets/blackjack-cards/9H.png';
import c9S from '../../../../assets/blackjack-cards/9S.png';
import cAC from '../../../../assets/blackjack-cards/AC.png';
import cAD from '../../../../assets/blackjack-cards/AD.png';
import cAH from '../../../../assets/blackjack-cards/AH.png';
import cAS from '../../../../assets/blackjack-cards/AS.png';
import cJC from '../../../../assets/blackjack-cards/JC.png';
import cJD from '../../../../assets/blackjack-cards/JD.png';
import cJH from '../../../../assets/blackjack-cards/JH.png';
import cJS from '../../../../assets/blackjack-cards/JS.png';
import cKC from '../../../../assets/blackjack-cards/KC.png';
import cKD from '../../../../assets/blackjack-cards/KD.png';
import cKH from '../../../../assets/blackjack-cards/KH.png';
import cKS from '../../../../assets/blackjack-cards/KS.png';
import cQC from '../../../../assets/blackjack-cards/QC.png';
import cQD from '../../../../assets/blackjack-cards/QD.png';
import cQH from '../../../../assets/blackjack-cards/QH.png';
import cQS from '../../../../assets/blackjack-cards/QS.png';
import BACK_CARD from '../../../../assets/blackjack-cards/back.png';

const API_URL = 'https://deckofcardsapi.com/api/deck';
const DEALER_PAUSE = 1500;

type Card = {
  code: string;
  image: string;
  images: {
    svg: string;
    png: string;
  };
  value: string;
  suit: string;
  showback?: boolean;
};

const wait = (time?: number): Promise<void> =>
  new Promise((resolve) => {
    setTimeout(resolve, time || 500);
  });

const HomeScreen = () => {
  const [deckId, setDeckId] = useState<string | null>(null);
  const [hitMeDisabled, setHitMeDisabled] = useState(false);
  const [playerCards, setPlayerCards] = useState<Card[]>([]);
  const [pcCards, setPcCards] = useState<Card[]>([]);
  const [pcText, setPcText] = useState('Welcome to Blackjack!');
  const [pcBusted, setPcBusted] = useState(false);
  const [pcWon, setPcWon] = useState(false);
  const [playerBusted, setPlayerBusted] = useState(false);
  const [playerWon, setPlayerWon] = useState(false);
  const [pcTurn, setPcTurn] = useState(false);
  const [playerTurn, setPlayerTurn] = useState(true);
  const [gameEnd, setGameEnd] = useState(false);
  const [dealEnd, setDealEnd] = useState(false);

  const [playerScore, setPlayerScore] = useState(0);
  const [pcScore, setPcScore] = useState(0);

  const cards: { [key: string]: ImageSourcePropType } = {
    '0C': c0C,
    '0D': c0D,
    '0H': c0H,
    '0S': c0S,
    '2C': c2C,
    '2D': c2D,
    '2H': c2H,
    '2S': c2S,
    '3C': c3C,
    '3D': c3D,
    '3H': c3H,
    '3S': c3S,
    '4C': c4C,
    '4D': c4D,
    '4H': c4H,
    '4S': c4S,
    '5C': c5C,
    '5D': c5D,
    '5H': c5H,
    '5S': c5S,
    '6C': c6C,
    '6D': c6D,
    '6H': c6H,
    '6S': c6S,
    '7C': c7C,
    '7D': c7D,
    '7H': c7H,
    '7S': c7S,
    '8C': c8C,
    '8D': c8D,
    '8H': c8H,
    '8S': c8S,
    '9C': c9C,
    '9D': c9D,
    '9H': c9H,
    '9S': c9S,
    JC: cJC,
    JD: cJD,
    JH: cJH,
    JS: cJS,
    QC: cQC,
    QD: cQD,
    QH: cQH,
    QS: cQS,
    KC: cKC,
    KD: cKD,
    KH: cKH,
    KS: cKS,
    AC: cAC,
    AD: cAD,
    AH: cAH,
    AS: cAS,
  };

  const shuffleDeck = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/new/shuffle/?deck_count=6`);
      setDeckId(data.deck_id);
    } catch (error) {
      throw new Error('Error shuffling deck');
    }
  };

  const drawCard = useCallback(async (): Promise<Card> => {
    try {
      const { data } = await axios.get(`${API_URL}/${deckId}/draw/?count=1`);
      return data.cards[0];
    } catch (error) {
      throw new Error('Error drawing card');
    }
  }, [deckId]);

  const handleNewGame = async () => {
    setDeckId(null);
    setPcBusted(false);
    setPlayerBusted(false);
    setPlayerWon(false);
    setPcWon(false);
    setPlayerCards([]);
    setPcCards([]);
    await shuffleDeck();
    setPlayerTurn(true);
    setGameEnd(false);
    setDealEnd(false);
    setPlayerScore(0);
    setPcScore(0);
  };

  const deal = useCallback(async () => {
    if (!deckId) return;

    // first to player, then PC, then player, then PC
    let newCard = await drawCard();
    setPlayerCards((prev) => [...prev, newCard]);

    // for the dealer, the first card is turned over
    newCard = await drawCard();
    newCard.showback = true;
    setPcCards((prev) => [...prev, newCard]);

    newCard = await drawCard();
    setPlayerCards((prev) => [...prev, newCard]);

    newCard = await drawCard();
    setPcCards((prev) => [...prev, newCard]);
  }, [deckId, drawCard]);

  useEffect(() => {
    if (deckId) {
      deal();
    }
  }, [deckId, deal]);

  const getCount = (hand: Card[]) => {
    /*
    For a hand, I return 2 values, a low value, where aces are considered 1s, and a high value, where aces are 11. Note that this fails to properly handle a case where I have 3 aces
    and could have a mix... although thinking about it, you can only have ONE ace at 11, so
    maybe the logic is:  low == all aces at 1. high = ONE ace at 11. fixed!
    */

    // first we will do low, all 1s
    const lowCount = hand.reduce((acc, card) => {
      if (
        card.value === 'JACK' ||
        card.value === 'KING' ||
        card.value === 'QUEEN'
      )
        return acc + 10;
      if (card.value === 'ACE') return acc + 1;
      return acc + Number(card.value);
    }, 0);

    const { highCount } = hand.reduce(
      (acc, card) => {
        if (
          card.value === 'JACK' ||
          card.value === 'KING' ||
          card.value === 'QUEEN'
        )
          acc.highCount += 10;
        else if (card.value === 'ACE') {
          if (acc.oneAce) acc.highCount += 1;
          else {
            acc.highCount += 11;
            acc.oneAce = true;
          }
        } else acc.highCount += Number(card.value);
        return acc;
      },
      { highCount: 0, oneAce: false }
    );

    // console.log('highCount', highCount);
    return { lowCount, highCount };
  };

  const handleHit = async () => {
    setDealEnd(true);
    setHitMeDisabled(true);
    const newCard = await drawCard();
    setPlayerCards((prev) => [...prev, newCard]);
    setHitMeDisabled(false);
  };

  const handleStay = () => {
    setPlayerTurn(false);
    setPcTurn(true);
    startDealer();
    setDealEnd(true);
  };

  const startDealer = async () => {
    /*
    Idea is - I take a card everytime I'm < 17. so i check my hand,
    and do it, see if im going to stay or hit. if hit, i do a wait though
    so the game isn't instant.
    */

    // really first, initial text
    setPcText('The dealer begins their turn...');
    await wait(DEALER_PAUSE);

    // first, a pause while we talk
    setPcText('Let me show my hand...');
    await wait(DEALER_PAUSE);

    // reveal my second card
    pcCards[0].showback = false;

    // what does the player have, we need the best under 22
    const playerCount = getCount(playerCards);
    let playerScr = playerCount.lowCount;
    if (playerCount.highCount < 22) playerScr = playerCount.highCount;
    // console.log('dealer needs to beat', playerScr);

    // ok, now we're going to loop until i bust/win
    const dealerTurn = async () => {
      console.log('dealer turn');
      const count = getCount(pcCards);

      /*
      We are NOT doing 'soft 17', so 1 ace always count as 11
      */
      if (count.highCount <= 16) {
        setPcText('Dealer draws a card...');
        await wait(DEALER_PAUSE);

        const newCard = await drawCard();
        setPcCards((prev) => [...prev, newCard]);
        dealerTurn();
      }
    };

    console.log('dealer turn start');
    dealerTurn();
  };

  // useEffect(() => {
  //   setDeckId(null);
  // }, []);

  useEffect(() => {
    if (playerCards.length > 0) {
      const checkCount = async () => {
        console.log('### player cards updated', playerCards);
        const count = getCount(playerCards);
        setPlayerScore(count.lowCount);

        console.log('---------- player score', count.lowCount);

        if (dealEnd && count.lowCount >= 22) {
          console.log('!!!! player busted');

          setPcText('You busted!');
          setPlayerTurn(false);
          setPlayerBusted(true);
          setHitMeDisabled(true);

          setPcWon(true);
          setPlayerWon(false);

          await wait(DEALER_PAUSE);
          setGameEnd(true);
        }
      };

      checkCount();
    }
  }, [playerCards]);

  useEffect(() => {
    if (pcCards.length > 0) {
      const checkCount = async () => {
        console.log('### pc cards updated');
        const count = getCount(pcCards);
        setPcScore(count.lowCount);

        console.log('---------- pc score', count.lowCount);

        if (dealEnd) {
          console.log('check dealer count', count.highCount);
          if (count.highCount <= 21) {
            setPcText('Dealer stays...');
            await wait(DEALER_PAUSE);
            setPcTurn(false);

            if (count.highCount >= playerScore) setPcWon(true);
            else setPlayerWon(true);

            await wait(DEALER_PAUSE);
            setGameEnd(true);
          } else {
            console.log('!!!! dealer busted');
            setPcTurn(false);
            setPcBusted(true);
            await wait(DEALER_PAUSE);
            setGameEnd(true);
          }
        }
      };

      checkCount();
    }
  }, [pcCards]);

  return (
    <ScreenContainer>
      {gameEnd ? (
        <GameOverContainer>
          <Text size={32} color="white">
            {pcWon || playerBusted ? 'GAME OVER' : ''}
            {playerWon || pcBusted ? 'YOU WON!!' : ''}
          </Text>
          <Button label="Start New Game" onPress={handleNewGame} />
        </GameOverContainer>
      ) : null}

      <ContentContainer>
        <Title mv={42}>{pcText}</Title>

        {deckId ? (
          <>
            <HandContainer>
              <Text size={16}>Dealer - {pcScore}</Text>

              <CardContainer>
                {pcCards.map((card, index) => (
                  <Image
                    key={`${card.code}-${index}`}
                    source={card.showback ? BACK_CARD : cards[card.code]}
                    alt={`Dealer card ${index}`}
                  />
                ))}
              </CardContainer>
            </HandContainer>

            <HandContainer>
              <Text size={16}>Player - {playerScore}</Text>
              <CardContainer>
                {playerCards.map((card, index) => (
                  <Image
                    key={`${card.code}-${index}`}
                    source={card.showback ? BACK_CARD : cards[card.code]}
                    alt={`Player card ${index}`}
                  />
                ))}
              </CardContainer>
            </HandContainer>

            <Text>What do you do?</Text>

            <ButtonContainer>
              <Button onPress={handleHit} label="Hit me" />
              <Button onPress={handleStay} label="Stay" />
            </ButtonContainer>
          </>
        ) : null}
      </ContentContainer>

      {!deckId ? (
        <Button label="Start New Game" onPress={handleNewGame} />
      ) : null}
    </ScreenContainer>
  );
};

export { HomeScreen };
