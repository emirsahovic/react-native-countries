import { Types } from "./actionTypes";

const initialState = {
  countries: [],
  country: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

export const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_COUNTRIES_LOADING:
    case Types.GET_COUNTRY_LOADING:
      return { ...state, isLoading: true };
    case Types.GET_COUNTRIES_SUCCESS:
      return { ...state, isLoading: false, isError: false, country: null, isSuccess: true, countries: action.payload };
    case Types.GET_COUNTRY_SUCCESS:
      return { ...state, isLoading: false, isSuccess: true, country: action.payload };
    case Types.GET_COUNTRIES_FAIL:
    case Types.GET_COUNTRY_FAIL:
      return { ...state, isLoading: false, isSuccess: false, country: null, isError: true, message: action.payload };
    default:
      return state;
  }
};
