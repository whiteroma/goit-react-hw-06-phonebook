import PropTypes from 'prop-types';
import { FilterLabel } from './Filter.styled';

const Filter = ({}) => (
  <FilterLabel htmlFor="filter">
    Find contacts by name
    <input type="text" name="filter" />
  </FilterLabel>
);

export default Filter;

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
