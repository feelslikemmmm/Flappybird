import styled from '@components/style/Bird.module.css';

interface BirdProps {
  isActive: boolean;
  bodyRef: React.RefObject<HTMLDivElement>;
  wingRef: React.RefObject<HTMLDivElement>;
}

const Bird = ({ isActive, bodyRef, wingRef }: BirdProps) => {
  return (
    // <div className={isActive ? styled.container : styled.hide}>
    <div className={styled.body} ref={bodyRef}>
      <div className={styled.wing} ref={wingRef}></div>
    </div>
    // </div>
  );
};

export default Bird;
