import css from './filter.module.css';

import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const startFilter = name => {
    const filterQvery = name.currentTarget.value;
    dispatch(filterContact(filterQvery));
  };

  return (
    <>
      <label>
        Find contacts by name
        <input type="text" onChange={startFilter} className={css.input}></input>
      </label>
    </>
  );
};

export default Filter;
