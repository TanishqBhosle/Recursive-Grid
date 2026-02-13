import styles from './Cell.module.css';

function Cell({ value, locked, onClick, row, col }) {
  const handleClick = () => {
    if (!locked) {
      onClick(row, col);
    }
  };

  let stateClass;
  if (locked) {
    stateClass = styles.locked;
  } else if (value % 2 === 0) {
    stateClass = styles.even;
  } else {
    stateClass = styles.odd;
  }

  return (
    <div
      className={`${styles.cell} ${stateClass}`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      aria-label={`Cell row ${row + 1} column ${col + 1}, value ${value}${locked ? ', locked' : ''}`}
    >
      {value}
    </div>
  );
}

export default Cell;
