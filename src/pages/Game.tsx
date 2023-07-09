import StartButton from '@components/StartButton';
import styled from './Game.module.css';
import Area from '@components/Area';
import Message from '@components/Message';
import Score from '@components/Score';
import { useCallback, useEffect, useRef, useState } from 'react';

interface Player {
  x: number;
  y: number;
  speed: number;
}

const Game = () => {
  const [isActive, setIsActive] = useState(false);
  const [start, setStart] = useState(false);
  const [keys, setKeys] = useState<{ [key: string]: boolean }>({});
  const [player, setPlayer] = useState<Player>({
    x: 0,
    y: 0,
    speed: 2,
  });

  const areaRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const wingRef = useRef<HTMLDivElement>(null);

  const gameStarter = () => {
    setIsActive(true);
    setStart(true);
    if (bodyRef.current) {
      setPlayer((prevPlayer) => ({
        ...prevPlayer,
        x: bodyRef.current?.offsetLeft || 0,
        y: bodyRef.current?.offsetTop || 0,
      }));
    }
    // window.requestAnimationFrame(playGame);
  };

  const playGame = useCallback(() => {
    if (keys.ArrowLeft && player.x - player.speed > 0) {
      setPlayer((prevPlayer) => ({
        ...prevPlayer,
        x: prevPlayer.x - prevPlayer.speed,
      }));
    }

    if (
      keys.ArrowRight &&
      areaRef.current &&
      bodyRef.current &&
      player.x < areaRef.current.offsetWidth - bodyRef.current.offsetWidth
    ) {
      setPlayer((prevPlayer) => ({
        ...prevPlayer,
        x: prevPlayer.x + prevPlayer.speed,
      }));
    }

    if (keys.ArrowUp && player.y > 0) {
      setPlayer((prevPlayer) => ({
        ...prevPlayer,
        y: prevPlayer.y - prevPlayer.speed,
      }));
    }

    if (
      keys.ArrowDown &&
      areaRef.current &&
      bodyRef.current &&
      areaRef.current.offsetHeight - bodyRef.current.offsetHeight > 0
    ) {
      setPlayer((prevPlayer) => ({
        ...prevPlayer,
        y: prevPlayer.y + prevPlayer.speed,
      }));
    }

    if (bodyRef.current) {
      bodyRef.current.style.left = player.x + 'px';
      bodyRef.current.style.top = player.y + 'px';
    }

    console.log('player', player);
    console.log('left', bodyRef.current?.style.left);
    console.log('top', bodyRef.current?.style.top);

    window.requestAnimationFrame(playGame);
  }, [keys, player]);

  const pressOn = (e: React.KeyboardEvent) => {
    e.preventDefault();
    setKeys((prevKeys) => ({
      ...prevKeys,
      [e.code]: true,
    }));
  };

  const pressOff = (e: React.KeyboardEvent) => {
    e.preventDefault();
    setKeys((prevKeys) => ({
      ...prevKeys,
      [e.code]: false,
    }));
  };

  useEffect(() => {
    if (start) {
      window.requestAnimationFrame(playGame);
    }
  }, [playGame, start]);

  return (
    <section
      className={styled.game}
      tabIndex={0}
      onKeyDown={(e) => pressOn(e)}
      onKeyUp={(e) => pressOff(e)}
    >
      <StartButton isActive={isActive} gameStarter={gameStarter} />
      <Area
        isActive={isActive}
        areaRef={areaRef}
        bodyRef={bodyRef}
        wingRef={wingRef}
      />
      <Message isActive={isActive} />
      <Score />
    </section>
  );
};

export default Game;
