import React from "react";

import { BoardContainer } from "./components/Board/BoardContainer";

export const App: React.FC = () => (
  <div className="App">
    <header className="App-header">Banzai: Kanban on Crack</header>
    <div>
      <BoardContainer />
    </div>
  </div>
);
