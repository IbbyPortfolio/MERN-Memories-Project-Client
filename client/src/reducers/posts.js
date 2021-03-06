// eslint-disable-next-line import/no-anonymous-default-export

const initialState = [];

export default (posts = initialState, action) => {
   switch (action.type) {
      case 'FETCH_ALL':
         return action.payload;
      case 'CREATE':
         return [...posts, action.payload];
      default:
         return posts;
   }
};
