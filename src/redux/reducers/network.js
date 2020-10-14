const initialState = {};

export default function network(state = initialState, action = {}) {
  const actionType = action.type.replace(/SUCCESS_|FAILURE_/g, 'START_');
  const isLoadingStarted = action.type.startsWith('START_');
  const isLoadingEnded = action.type.startsWith('SUCCESS_') || action.type.startsWith('FAILURE_');

  return isLoadingStarted || isLoadingEnded ? { ...state, [actionType]: isLoadingStarted } : state;
}
