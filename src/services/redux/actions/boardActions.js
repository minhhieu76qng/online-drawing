export const addNewShape = ({ shape, owner }) => ({
  type: 'ADD_NEW_SHAPE',
  payload: {
    shape,
    owner,
  },
});
