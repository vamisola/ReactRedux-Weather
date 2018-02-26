import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      //return state.concat([action.payload.data]);//same as below
      return [ action.payload.data, ...state]; //array like [city, city, city] NOT [city, [city], [city]]
  }
  return state;
}
