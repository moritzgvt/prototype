import config from '@/config/config';

const post = {
  postContent: async (endpoint, payload, params={}) => {

    const query = generateQuery(endpoint, params)

    const res = await fetch(query, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(payload)
    });

    return new Promise(function(resolve, reject) {
      if (res) {
        resolve(res.json());
      } else {
        reject(`Could not fetch data from ${query}.`)
      }
    });
  }
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

  console.log(query);

  return query
}

export default {
  content: post.postContent
}