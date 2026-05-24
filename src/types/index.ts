export type Project = {
  name: string;
  desc: string;
  tech: string[];
  github?: string;
  apk?: string;
  flowerColor: string;
  petalColor: string;
  centerColor: string;
  stemColor: string;
};

export type ButterflyConfig = {
  id: number;
  startX: number;
  startY: number;
  color1: string;
  color2: string;
  scale: number;
  duration: number;
  delay: number;
  driftX: number;
  driftY: number;
};
