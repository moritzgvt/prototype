import _get from 'lodash/get';

const map = {
  mapPosts: (posts) => {
    return posts.map(post => {
      return {
        id: _get(post, 'id'),
        title: _get(post, 'title.rendered'),
        content: _get(post, 'content.rendered'),
        excerpt: _get(post, 'excerpt.rendered'),
        image: _get(post, 'acf.project_title_image')
      }
    });
  },
  mapPage: (pages) => {
    return pages.map(page => {
      return {
        id: _get(page, 'id'),
        slug: _get(page, 'slug'),
        title: _get(page, 'title.rendered'),
        content: _get(page, 'content.rendered')
      }
    })
  },
  mapMenu: (payload) => {
    return payload.map(menuItem => {
      return {
        id: _get(menuItem, 'ID'),
        title: _get(menuItem, 'title'),
        url: _get(menuItem, 'url'),
        path: getUrlPath(_get(menuItem, 'url')),
      }
    });
  },
  mapFooter: (payload) => {
    return {
      rightColumn: _get(payload, 'acf.footer_content'),
      social: {
        facebook: _get(payload, 'acf.footer_facebook'),
        instagram: _get(payload, 'acf.footer_instagram'),
        youtube: _get(payload, 'acf.footer_youtube')
      }
    }
  },
  mapLogo: (payload) => {
    return {
      image: _get(payload, 'acf.general_logo') || null,
      title: _get(payload, 'acf.general_title') || null
    }
  },
}

const convertToArray = (data) => {
  if (!Array.isArray(data)) {
    return [data];
  }

  return data;
}

const getUrlPath = (absoluteLink) => {
  const url = new URL(absoluteLink);
  return url.pathname;
}

export default {
  posts: map.mapPosts,
  page: map.mapPage,
  menu: map.mapMenu,
  footer: map.mapFooter,
  logo: map.mapLogo
}