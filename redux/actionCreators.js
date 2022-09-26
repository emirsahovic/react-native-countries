import { Types } from "./actionTypes";
import countryService from "./countryService";

export const getCountries = () => async (dispatch) => {
  try {
    dispatch({ type: Types.GET_COUNTRIES_LOADING });

    const data = await countryService.getCountries();

    dispatch({
      type: Types.GET_COUNTRIES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: Types.GET_COUNTRIES_FAIL,
      payload: error.message,
    });
  }
};

export const getCountryBySearch = (name) => async (dispatch) => {
  try {
    dispatch({ type: Types.GET_COUNTRIES_LOADING });

    const data = await countryService.getCountryBySearch(name);

    dispatch({
      type: Types.GET_COUNTRIES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: Types.GET_COUNTRIES_FAIL,
      payload: error.message,
    });
  }
};

export const getCountryByName = (name) => async (dispatch) => {
  try {
    dispatch({ type: Types.GET_COUNTRY_LOADING });

    const data = await countryService.getCountryByName(name);

    dispatch({
      type: Types.GET_COUNTRY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: Types.GET_COUNTRY_FAIL,
      payload: error.message,
    });
  }
};
