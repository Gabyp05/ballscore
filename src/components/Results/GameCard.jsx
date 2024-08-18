import PropTypes from "prop-types";
import Score from "./Score";
import { Link } from "react-router-dom";

const GameCard = ({
  awayTeamName,
  awayTeamId,
  homeTeamName,
  homeTeamId,
  gameStatus,
  gameLive,
  gameDate,
  gameTime,
  teamLogoAway,
  teamLogoAwayAlt,
  teamLogoHome,
  teamLogoHomeAlt,
  awayTeamIsWinner,
  homeTeamIsWinner,
  teamAwayScore,
  teamHomeScore,
}) => {
  return (
    <div className="gameBox">
      <h2>
        {awayTeamName} @ {homeTeamName}
      </h2>
      <div className="game">
        {gameStatus === "Scheduled" ? (
          <div className="flex flex-row items-center gap-8 justify-between">
            <h1 className="text-white text-sm sm:text-lg font-raleway font-bold">
              {gameDate}
            </h1>
            <span className="badge game-status min-w-20 max-w-28">
              {gameTime}
            </span>
          </div>
        ) : gameStatus === "In Progress" ? (
            <div className="flex flex-row items-center gap-8 justify-between">
            <span className="badge game-status min-w-20 max-w-28">
              {gameStatus === "In Progress" ? "En Progreso" : "Finalizado"}
            </span>
            <span className="badge-live game-status-live min-w-20 max-w-28">
            {gameLive === "Live" ? "En Vivo" : null}
          </span>
          </div> 
        ) : (
          <span className="badge game-status w-24">
            {gameStatus === "In Progress" ? "En Progreso" : gameStatus === "Warmup" ? "Por empezar" : "Finalizado"}
          </span>
        )}
      </div>

      <div className="flex justify-between items-center gap-4">
        <div className="flex flex-col gap-2 justify-end">
          <Link to={`/teams/${awayTeamId}`}>
          <div className="flex flex-row gap-2 items-center">
            <img
              src={teamLogoAway}
              alt={teamLogoAwayAlt}
              className="size-6 md:size-8 object-contain"
            />
            <h3 className="font-raleway text-white text-xs md:text-lg text-center font-bold leading-[25px]">
              {awayTeamName}
            </h3>
          </div>
          </Link>

          <Link to={`/teams/${homeTeamId}`}>
          <div className="flex flex-row gap-2 items-center">
            <img
              src={teamLogoHome}
              alt={teamLogoHomeAlt}
              className="size-6 md:size-8 object-contain"
            />
            <h3 className="font-raleway text-white text-xs md:text-lg text-center font-bold leading-[25px]">
              {homeTeamName}
            </h3>
          </div>
          </Link>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center">
          <div className="score_away">
            <Score score={teamAwayScore} isWinner={awayTeamIsWinner} />
          </div>
          <div className="score_home">
            <Score score={teamHomeScore} isWinner={homeTeamIsWinner} />
          </div>
        </div>
      </div>
    </div>
  );
};

GameCard.propTypes = {
  awayTeamName: PropTypes.string,
  awayTeamId: PropTypes.string,
  homeTeamName: PropTypes.string,
  homeTeamId: PropTypes.string,
  gameStatus: PropTypes.string,
  gameLive: PropTypes.string,
  gameDate: PropTypes.string,
  gameTime: PropTypes.string,
  teamLogoAway: PropTypes.string,
  teamLogoAwayAlt: PropTypes.string,
  teamLogoHome: PropTypes.string,
  teamLogoHomeAlt: PropTypes.string,
  awayTeamIsWinner: PropTypes.bool,
  homeTeamIsWinner: PropTypes.bool,
  teamAwayScore: PropTypes.number,
  teamHomeScore: PropTypes.number,
};

export default GameCard;
