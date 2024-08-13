import PropTypes from "prop-types";

const Score = ({ score, isWinner }) => {
  return (
    <span
      className={`font-raleway ${
        isWinner
          ? "text-white font-bold text-xl"
          : "text-white/50 font-normal text-xl"
      }`}
    >
      {score}
    </span>
  );
};
Score.propTypes = {
  score: PropTypes.number,
  isWinner: PropTypes.bool,
};

export default Score;
