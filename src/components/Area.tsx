import styled from '@components/style/Area.module.css';
import Bird from './Bird';
interface AreaProps {
  isActive: boolean;
  areaRef: React.RefObject<HTMLDivElement>;
  bodyRef: React.RefObject<HTMLDivElement>;
  wingRef: React.RefObject<HTMLDivElement>;
}

const Area = ({ isActive, areaRef, bodyRef, wingRef }: AreaProps) => {
  return (
    <div className={styled.gameArea} ref={areaRef}>
      <Bird isActive={isActive} bodyRef={bodyRef} wingRef={wingRef} />
    </div>
  );
};

export default Area;
