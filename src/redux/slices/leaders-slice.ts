import { ILeader, ILeadersState } from '../interfaces/redux-interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: ILeadersState = {
  days: [],
  loading: false,
  hasErrors: false,
  editLeaderId: 0,
  pageSize: [],
  currentPage: 0,
  allLeaders: [],
  topLeaders: [],
};

export const leaderSlice = createSlice({
  name: 'leaders',
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    getLeadersSuccess: (state, action: PayloadAction<ILeader[]>) => {
      state.days.unshift(action.payload);
      state.loading = false;
      state.hasErrors = false;
    },
    getLeadersFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
    addLeader: (state, action: PayloadAction<ILeader>) => {
      state.days.map((day, i) => i === state.currentPage && day.push(action.payload));
    },
    setEditLeaderId: (state, action: PayloadAction<number>) => {
      state.editLeaderId = action.payload;
    },
    editLeaders: (state, action: PayloadAction<ILeader>) => {
      state.days.map((day, i) =>
        i === state.currentPage ? (day[state.editLeaderId] = action.payload) : null
      );
    },
    checkLeader: (state, action: PayloadAction<ILeader[]>) => {
      action.payload = action.payload.map((leader: ILeader, index) => {
        return { name: leader.name, score: leader.score ? leader.score : 0 };
      });
    },
    setPageSize: (state) => {
      state.pageSize = state.days.map((day) => day.length);
    },
    sortLeaders: (state) => {
      state.days.map((day) =>
        day.sort((prevLeader, nextLeader) => nextLeader.score - prevLeader.score)
      );
    },
    setLeaderPosition: (state) => {
      state.days.map((day) => day.map((leader, i) => (leader.position = i)));
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setAllLeaders: (state) => {
      state.allLeaders = state.days
        .flat()
        .sort((prevLeader, nextLeader) => nextLeader.score - prevLeader.score);
    },
    setTopLeaders: (state) => {
      state.topLeaders = state.allLeaders
        .filter((leader, index, array) => {
          return (
            array.map((mapItem) => mapItem['name']).indexOf(leader['name']) === index
          );
        })
        .slice(0, 4);
    },
    setDiffPlaces: (state) => {
      const nextLeader = state.days.length - (state.days.length - 1);
      if (state.days.length > 1) {
        for (let i: number = 0; i < state.days[0].length; i++) {
          for (let j: number = 0; j < state.days[nextLeader].length; j++) {
            if (state.days[0][i].name === state.days[nextLeader][j].name) {
              state.days[0][i].place =
                Number(state.days[nextLeader][j].position) -
                Number(state.days[0][i].position);
            }
          }
        }
      }
    },
  },
});

export const {
  startLoading,
  getLeadersSuccess,
  getLeadersFailure,
  addLeader,
  setEditLeaderId,
  editLeaders,
  checkLeader,
  setPageSize,
  sortLeaders,
  setLeaderPosition,
  setCurrentPage,
  setAllLeaders,
  setTopLeaders,
  setDiffPlaces,
} = leaderSlice.actions;
