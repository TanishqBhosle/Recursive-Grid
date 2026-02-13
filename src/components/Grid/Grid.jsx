import Cell from '../Cell/Cell';
import styles from './Grid.module.css';

function Grid({ grid, onCellClick }) {
    return (
        <div className={styles.grid}>
            {grid.map((row, rowIndex) =>
                row.map((cell, colIndex) => (
                    <Cell
                        key={`${rowIndex}-${colIndex}`}
                        value={cell.value}
                        locked={cell.locked}
                        onClick={onCellClick}
                        row={rowIndex}
                        col={colIndex}
                    />
                ))
            )}
        </div>
    );
}

export default Grid;
