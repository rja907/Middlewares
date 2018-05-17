export default function({
  dispatch
}) {
  return next => action => {
    // If no promise, pass it to the next action.
    if(!action.payload || !action.payload.then) {
      return next(action);
    }
    // If we have a promise
    action.payload
      .then(function (response) {
        // Replacing promise with response data
        const newAction = { ...action, payload: response };
        dispatch(newAction);
      })
  }
}
