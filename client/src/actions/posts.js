import * as api from '../api';

// Action Creators
// use reduxt thunk for async
export const getPosts = () => async (dispatch) => {
   try {
      const { data } = await api.fetchPosts();
      dispatch({ type: 'FETCH_ALL', payload: data });
   } catch (error) {
      console.log('getPosts Action', error.message);
   }
};

export const createPost = (post) => async (dispatch) => {
   try {
      const { data } = await api.createPost(post);

      dispatch({ type: 'CREATE', payload: data });
   } catch (error) {
      console.log(error.message);
   }
};

// const createPost = (post) => {
//    return function (dispatch) {
//       dispatch(createPost());
//       const { data } = api
//          .createPost(post)
//          .then((response) => {
//             dispatch(createPost())
//          })
//          .catch((error) => {});
//    };
// };

// export async function createPost(dispatch, getState) {
//    const response = await api.createPost(getState);
//    dispatch({ type: 'CREATE', payload: response.data });
// }

// export function createPost(text) {
//    return async function createPostThunk(dispatch, getState) {
//       const initialPost = { text };
//       const response = await api.createPost({ post: initialPost });
//       dispatch({ type: 'CREATE', payload: response.data });
//    };
// }
