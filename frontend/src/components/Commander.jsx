import PropTypes from "prop-types";

const Commander = ({ numberFloor }) => {
  return (
    <div className="container-dial">
      <span>Floor: {numberFloor}</span>
    </div>
  );
};

Commander.propTypes = {
  numberFloor: PropTypes.number,
};

export default Commander;
