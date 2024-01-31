export const intialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //   token:
  //     "BQCvDnIuFpVoLbSS2jBz3_5hOKuIy-sh-sW5DfCO-nF7qGYmQw…uZGWr_DkZfVpqS-n3JPAs9yGWL-3Hcy0ztatKe0hpkXBvJzOG",
};
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};
export default reducer;
