import PropTypes from 'prop-types';
import FilterStyles from './FilterStyles';

const Filter = ({ value, handleOnChangeFilter }) => {
  return (
    <>
      <h3>Find contacts by name</h3>
      <FilterStyles
       type="text"
       value={value}
       onChange={handleOnChangeFilter} />
    </>
  );
};

Filter.propTypes = {  
  handleOnChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
