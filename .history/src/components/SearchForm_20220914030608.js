import React from "react";

const SearchForm = ({
  city,
  state,
  country,
  handleSubmit,
  handleChangeCity,
  handleChangeState,
  handleChangeCountry,
}) => {
  return (
    <div >
      <form className="form-container" onSubmit={handleSubmit} d-flex>
        <div>
          <input
          className="mx-2 cityInput"
          placeholder="Type the city"
          type="text"
          name="SearchString"
          onChange={handleChangeCity}
          value={city}
          required
        />

        {/* Country input */}
        <input
          className="countryInput"
          placeholder="Type the state"
          type="text"
          name="SearchString"
          onChange={handleChangeState}
          value={state}
        />

        {/* Country input */}
        <input
          className="countryInput"
          placeholder="Type the country code (TZ, CD...)"
          type="text"
          name="SearchString"
          onChange={handleChangeCountry}
          value={country}
        />
        </div>
        {/* City Input */}


        <button className="submitButton" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
