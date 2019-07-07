import React from "react";

import { BoardContainer } from "./components/Board/BoardContainer";
import { BoardPickerContainer } from "./components/BoardPicker/BoardPickerContainer";

export const App: React.FC = () => (
  <div className="App">
    <header className="App-header">Banzai: Kanban on Crack</header>
    <div>
      <BoardPickerContainer />
    </div>
    <div>
      <BoardContainer />
    </div>
  </div>
);
