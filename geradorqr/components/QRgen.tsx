import React from 'react';
import { useQRCode } from 'next-qrcode';

type Props = {
  text: string ;
  options?: {
    level?: 'L' | 'M' | 'Q' | 'H';
    margin?: number;
    scale?: number;
    width?: number;
    color?: {
      dark?: string;
      light?: string;
    };
  };
  logo?: {
    src: string;
    options?: {
      width?: number;
      x?: number;
      y?: number;
    };
  };
};

const QrCode: React.FC<Props> = ({ text, options, logo }) => {
  const { Canvas } = useQRCode();
  return <Canvas text={text} options={options} logo={logo} />;
};

export default QrCode;
