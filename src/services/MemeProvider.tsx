import { createContext, useContext, useState } from "react";
import { Meme } from '@/components/CustomCarousel/Card';

const MemeContext = createContext<{ memes: Meme[]; setMemes: (memes: Meme[]) => void }>({
  memes: [],
  setMemes: () => {},
});

export const MemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [memes, setMemes] = useState<Meme[]>([]);
  return <MemeContext.Provider value={{ memes, setMemes }}>{children}</MemeContext.Provider>;
};

export const useMemes = () => useContext(MemeContext);