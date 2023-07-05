import styled from '@components/style/Message.module.css';

interface MessageProps {
  isActive: boolean;
}

const Message = ({ isActive }: MessageProps) => {
  return <section className={isActive ? styled.hide : 'none'}></section>;
};

export default Message;
