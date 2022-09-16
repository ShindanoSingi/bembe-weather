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
    <div className="mx-1 md:mb-4 lg:mb-8">
      <form className="form-container" onSubmit={handleSubmit} d-flex>
        <div className="flex flex-col items-center gap-1 lg:flex lg:flex-col lg:gap-2 form-container">
          <div className="flex flex-col gap-1 lg:flex lg:flex-col lg:gap-2 md:flex md:flex-col md:gap-2">
          <input
          className="px-3 xl:text-3xl xl:w-[80vw] xl:py-2 py-1 w-[98vw] lg:p-2 lg:rounded-md lg:text-3xl lg:w-[80vw] md:text-3xl md:w-[70vw] md:rounded-md text-center md:p-2 cityInput"
          placeholder="Type the city"
          type="text"
          name="SearchString"
          onChange={handleChangeCity}
          value={city}
          required
        />

        {/* Country input */}
        <input
          className="px-3 md:text-3xl lg:p-2 lg:rounded-md lg:text-3xl lg:w-[80vw] md:w-[70vw] md:rounded-md text-center md:p-2 py-1 countryInput"
          placeholder="Type the state"
          type="text"
          name="SearchString"
          onChange={handleChangeState}
          value={state}
        />

        {/* Country input */}
        <input
          className="px-3 md:text-3xl lg:p-2 lg:rounded-md lg:text-3xl lg:w-[80vw] md:w-[70vw] md:rounded-md text-center md:p-2 py-1 countryInput"
          placeholder="Type the country code (TZ, CD...)"
          type="text"
          name="SearchString"
          onChange={handleChangeCountry}
          value={country}
        />
          </div>
          <button className="w-24 p-1 py-1 text-center lg:p-2 lg:rounded-md lg:text-3xl lg:w-48 hover:bg-teal-600 md:w-48 md:text-3xl md:rounded-md md:p-2 submitButton" type="submit">
          Search
        </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
