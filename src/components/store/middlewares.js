export const logger = (store) => (next) => (action) => {
  console.log('Action dispatched: ', action.type);
  console.log('PrevState: ', { ...store.getState() });
  next(action);
  console.log('ActualState: ', {
    ...store.getState(),
  });
  return;
};
