// actions
const GET_ALL_ROCKETS = 'GET_ALL_ROCKETS';
const RESERVEVATION = 'RESERVEVATION';
const GET_ALL_MISSIONS = 'GET_ALL_MISSIONS';
const CREATE_JOIN = 'CREATE_JOIN';
const CREATE_RESERVATION = 'CREATE_RESERVATION';

// APIS
const API = 'https://api.spacexdata.com/v3/rockets';
const missionAPI = 'https://api.spacexdata.com/v3/missions';

// IState
const IState = {
  rockets: [],
  missions: [],
};

// ACTION CREATORS

export const getRockets = (payload) => ({
  type: GET_ALL_ROCKETS,
  payload,
});

export const createReserve = (payload) => ({
  type: RESERVEVATION,
  payload,
});

export const getMissions = (payload) => ({
  type: GET_ALL_MISSIONS,
  payload,
});

export const createJoin = (payload) => ({
  type: CREATE_JOIN,
  payload,
});

export const createReservation = (payload) => ({
  type: CREATE_RESERVATION,
  payload,
});

// ACTIONS

export const getRocketFromApi = () => async (dispatch) => {
  const request = await fetch(API);
  const response = await request.json();
  dispatch(getRockets(response));
};

export const getMissionFromApi = () => async (dispatch) => {
  const request = await fetch(missionAPI);
  const response = await request.json();
  dispatch(getMissions(response));
};

// REDUCERS

const reducer = (state = IState, action) => {
  switch (action.type) {
    case GET_ALL_ROCKETS:
      return { ...state, rockets: action.payload };
    case RESERVEVATION: {
      const changeState = state.rockets.map((element) => {
        if (element.id === action.payload.id) {
          return { ...element, reserve: action.payload.reserve };
        }
        return element;
      });
      return { ...state, rockets: changeState };
    }
    case GET_ALL_MISSIONS:
      return { ...state, missions: action.payload };
    case CREATE_JOIN: {
      const changeJoin = state.missions.map((element) => {
        if (element.mission_id === action.payload.mission_id) {
          return { ...element, join: action.payload.join };
        }
        return element;
      });
      return { ...state, missions: changeJoin };
    }
    case CREATE_RESERVATION: {
      const changeState = state.dragons.map((element) => {
        if (element.id === action.payload.id) {
          return { ...element, reservation: action.payload.reservation };
        }
        return element;
      });
      return { ...state, dragons: changeState };
    }

    default:
      return state;
  }
};

export default reducer;
