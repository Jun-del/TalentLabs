import PropTypes from "prop-types";

const DisplayResults = ({ keyword }) => {
  return <div>{keyword}</div>;
};

DisplayResults.propTypes = {
  keyword: PropTypes.string.isRequired,
};

export default DisplayResults;
