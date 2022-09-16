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
    <div className="mx-1">
      <form className="form-container" onSubmit={handleSubmit} d-flex>
        <div className="flex flex-col items-center gap-1 form-container">
          <div className="flex flex-col gap-1">
          <input
          className="px-3 py-1 w-[98vw] md:text-3xl cityInput"
          placeholder="Type the city"
          type="text"
          name="SearchString"
          onChange={handleChangeCity}
          value={city}
          required
        />

        {/* Country input */}
        <input
          className="px-3 py-1 countryInput"
          placeholder="Type the state"
          type="text"
          name="SearchString"
          onChange={handleChangeState}
          value={state}
        />

        {/* Country input */}
        <input
          className="px-3 py-1 countryInput"
          placeholder="Type the country code (TZ, CD...)"
          type="text"
          name="SearchString"
          onChange={handleChangeCountry}
          value={country}
        />
          </div>
          <button className="w-24 p-1 submitButton" type="submit">
          Search
        </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
