import config from '@/config/config';
import store from '@/store/store';

let networkDataReceived = false;

const get = {
  getContent: async (endpoint, params={}) => {

    if (endpoint === 'posts') {
      await store.commit('contentLoaded', false);
    }

    const query = generateQuery(endpoint, params)
    const res = await fetchCache(query);

    return new Promise(function(resolve, reject) {
      if (res) {
        resolve(res);
      } else {
        reject(`Could not fetch data from ${query}.`)
      }
    });
  }
}

// fetch new data
const fetchNetwork = (query) => {
  return fetch(query)
    .then((res) => {
      store.commit('setPostsTotal', res.headers.get('X-WP-Total'));
      return res.json();
    })
    .catch(err => {
      console.log(err)
    });
}

// fetch chached data
const fetchCache = (query) => { 
  return caches.match(query)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (!networkDataReceived) {
        return data.json();
      }
    })
    .catch(async () => {
      const res = await fetchNetwork(query);
      return res;
    });
}

// generate query to be fetched
const generateQuery = (endpoint, params={}) => {
  let fields = '';
  let filter = '';
  let slug = '';

  const api = params.api ? params.api : 'wp';

  if (params.slug) {
    slug = 'slug=' + params.slug;
  }

  if (params.fields) {
    params.fields.map(field => fields += '&_fields[]=' + field);
  }

  filter += params.per_page ? '&per_page=' + params.per_page : '';
  filter += params.offset ? '&offset=' + params.offset : '';
  filter += params.orderby ? '&orderby=' + params.orderby : '';
  filter += params.meta_key ? '&meta_key=' + params.meta_key : '';
  filter += params.order ? '&order=' + params.order : '';

  const parameter = (slug || fields || filter) ? '?' + slug + fields + filter : '';
  const query = config.API_LOCATION + config.API_TYPE[api] + endpoint + parameter;

  return query
}

export default {
    content: get.getContent
}