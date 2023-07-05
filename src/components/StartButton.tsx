import styled from '@components/style/StartBtn.module.css';

interface StartButtonProps {
  isActive: boolean;
  gameStarter: () => void;
}

const StartButton = ({ isActive, gameStarter }: StartButtonProps) => {
  return (
    <button
      className={isActive ? styled.hide : styled.button}
      onClick={gameStarter}
    >
      game start!
    </button>
  );
};

export default StartButton;
