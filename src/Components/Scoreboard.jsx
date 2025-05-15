import "/src/App.css";
import resetIcon from "/images/restart.png";

export default function Scoreboard(props) {
  return (
    <div className="scoreboard">
      <div className="scoreboard-div">
        <div className="scoreboard-header">Scoreboard</div>
        <div className="scoreboard-lower">
          <div className="current-score">
            Current Score: {props.currentScore}
          </div>
          <div className="best-score">Best Score: {props.bestScore}</div>
        </div>
      </div>
      <div className="reset-button" onClick={props.restartGame}>
        Restart <img src={resetIcon} alt="reset-icon" className="reset-icon" />
      </div>
    </div>
  );
}
