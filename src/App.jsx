import { useState } from 'react';
import Grid from './components/Grid/Grid';

const ROWS = 3;
const COLS = 3;

function createInitialGrid() {
  return Array.from({ length: ROWS }, () =>
    Array.from({ length: COLS }, () => ({ value: 0, locked: false }))
  );
}

function App() {
  const [grid, setGrid] = useState(createInitialGrid);

  const handleCellClick = (row, col) => {
    setGrid((prev) => {
      // Deep copy the grid
      const next = prev.map((r) => r.map((c) => ({ ...c })));

      const cell = next[row][col];

      // Skip if locked
      if (cell.locked) return prev;

      // 1. Increment the clicked cell
      cell.value += 1;

      // 2. Check if the clicked cell should be locked
      if (cell.value >= 15) {
        cell.locked = true;
      }

      // 3. Rule A — divisible by 3 → decrement right neighbor by 1
      if (cell.value % 3 === 0 && col < COLS - 1) {
        const right = next[row][col + 1];
        if (!right.locked) {
          right.value -= 1;
          if (right.value >= 15) {
            right.locked = true;
          }
        }
      }

      // 4. Rule B — divisible by 5 → increment below neighbor by 2
      if (cell.value % 5 === 0 && row < ROWS - 1) {
        const below = next[row + 1][col];
        if (!below.locked) {
          below.value += 2;
          if (below.value >= 15) {
            below.locked = true;
          }
        }
      }

      return next;
    });
  };

  return (
    <div className="app">
      <h1 className="title">Recursive Grid</h1>
      <Grid grid={grid} onCellClick={handleCellClick} />
    </div>
  );
}

export default App;
