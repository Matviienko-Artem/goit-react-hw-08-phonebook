// import { createSelector } from '@reduxjs/toolkit';

const getIsAuthenticated = state => state.auth.token;

const getUserName = state => state.auth.user.name;

// const getVisibleContacs = createSelector(
//   [getItems, getFilter],
//   (items, filter) => {
//     const normalizedFilter = filter.toLowerCase();
//     return items.filter(({ name }) =>
//       name.toLowerCase().includes(normalizedFilter),
//     );
//   },
// );

export default { getIsAuthenticated, getUserName };
