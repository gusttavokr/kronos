'use client';

import { useCallback, useEffect, useState } from 'react';
import Cronometro from '../components/layout/cronometro';
import Header from '../components/layout/header';
import ButtonPrimary, { buttonType } from '../components/shared/button';

export default function Home() {
  const [milisegundo, setMilisegundo] = useState(0);
  const [segundo, setSegundo] = useState(0);
  const [minuto, setMinuto] = useState(0);
  const [hora, setHora] = useState(0);
  const [rodando, setRodando] = useState(false);

  useEffect(() => {
    if (!rodando) return;

    const intervalId = setInterval(() => {
      setMilisegundo((prev) => prev + 1);

      if (milisegundo == 99) {
        setSegundo((prev) => prev + 1);
        setMilisegundo(0);
      }

      // Update Minuto
      if (segundo == 59) {
        setMinuto((prev) => prev + 1);
        setSegundo(0);
        setMilisegundo(0);
      }

      // Update Hora
      if (minuto == 59) {
        setHora((prev) => prev + 1);
        setMinuto(0);
        setSegundo(0);
        setMilisegundo(0);
      }
    }, 10);

    return () => clearInterval(intervalId);
  }, [rodando, milisegundo, segundo, minuto, hora]);

  const iniciar = useCallback(() => {
    setRodando(true);
  }, []);

  const parar = useCallback(() => {
    // clearInterval(timer.current as NodeJS.Timeout);
    setRodando(false);
  }, []);

  const reiniciar = useCallback(() => {
    setMilisegundo(0);
    setSegundo(0);
    setMinuto(0);
    setHora(0);
  }, []);

  return (
    <div>
      <main className="flex flex-col text-center justify-between min-h-screen p-20 items-center">
        <Header></Header>

        <Cronometro
          segundo={segundo}
          minuto={minuto}
          milisegundo={milisegundo}
          hora={hora}
        ></Cronometro>

        <div className="flex flex-row flex-wrap items-center justify-center gap-5 ">
          <ButtonPrimary function={reiniciar} title="Reiniciar" type={buttonType.TERTIARY} />
          <ButtonPrimary function={parar} title="Parar" type={buttonType.TERTIARY} />
          <ButtonPrimary function={iniciar} title="Iniciar" type={buttonType.PRIMARY} />
        </div>
      </main>
    </div>
  );
}
