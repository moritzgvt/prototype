import store from '../store/store';

const err = {
  throw: (payload) => {
    store.commit('setError', payload);
    throw new Error (payload);
  }
}

export default err