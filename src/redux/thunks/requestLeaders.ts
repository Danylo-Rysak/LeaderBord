import { AppDispatch } from '../store';
import {
  checkLeader,
  getLeadersFailure,
  getLeadersSuccess,
  setAllLeaders,
  setDiffPlaces,
  setLeaderPosition,
  setPageSize,
  setTopLeaders,
  sortLeaders,
  startLoading,
} from '../slices/leaders-slice';
// import axios from "axios";

// const baseUrl = "http://coding-test.cube19.io/frontend/v1/starting-state";
export const requestLeaders = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(startLoading());
    // let {data} = await axios.get(`${baseUrl}`);
    let data = [
      { name: 'danylo', score: Math.floor(Math.random() * 15) },
      {
        name: 'chris',
        score: Math.floor(Math.random() * 15),
      },
      { name: 'john', score: Math.floor(Math.random() * 15) },
      {
        name: 'denis',
        score: Math.floor(Math.random() * 15),
      },
      { name: 'oleg', score: Math.floor(Math.random() * 15) },
      {
        name: 'nata',
        score: Math.floor(Math.random() * 15),
      },
      { name: 'jojo', score: Math.floor(Math.random() * 15) },
      {
        name: 'pik',
        score: Math.floor(Math.random() * 15),
      },
    ];
    const response = dispatch(checkLeader(data));
    dispatch(getLeadersSuccess(response.payload));
    dispatch(setPageSize());
    dispatch(sortLeaders());
    dispatch(setLeaderPosition());
    dispatch(setAllLeaders());
    dispatch(setDiffPlaces());
    dispatch(setTopLeaders());
  } catch (error) {
    dispatch(getLeadersFailure());
  }
};
