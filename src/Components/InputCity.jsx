/* eslint-disable react/prop-types */
/*
- Component takes 3 attributes:
    city (value), onChangeHandler, onSubmitHandler
- Submit button initiates API call
*/

const InputCity = ({
  city,
  onInputHandler,
  onSubmitHandler,
}) => (
  <div>
    <input
      type="text"
      value={city}
      onChange={onInputHandler}
      placeholder="city name"
    />
    <button
      type="submit"
      onClick={onSubmitHandler}
    >
      Search
    </button>
  </div>
);

export default InputCity;
