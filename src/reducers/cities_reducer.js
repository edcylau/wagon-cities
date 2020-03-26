export default function(state, action) {
  if (state === undefined) {
    return [];
  }
  // TODO: actions
  switch (action.type) {
    case 'SET_CITIES':
      return action.payload;
    default:
      return state;
  }
}
