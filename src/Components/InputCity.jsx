/* eslint-disable react/prop-types */
/*
- Provides user with a search box where they can search weather
  information by city name
- Component contains input field and a submit button
- Component takes 3 attributes:
    city (value), onChangeHandler, onSubmitHandler
- Submit button initiates API call
*/

const InputCity = ({
  city,
  onChangeHandler,
  onSubmitHandler,
}) => (
  <div>
    <input
      type="text"
      value={city}
      onChange={onChangeHandler}
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
