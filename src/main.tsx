import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './ui/App';
import { Game } from './game/Game';

const gameContainer = document.getElementById('game-container')!;
const uiOverlay = document.getElementById('ui-overlay')!;

const game = new Game(gameContainer);

ReactDOM.createRoot(uiOverlay).render(
  <React.StrictMode>
    <App game={game} />
  </React.StrictMode>,
);
