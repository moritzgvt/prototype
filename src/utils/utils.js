import getUtilities from './_get';
import postUtilities from './_post';
import mapUtilities from './_map';
import errUtilities from './_err';
import processUtilities from './_process';

const utilities = {
  get: getUtilities,
  post: postUtilities,
  map: mapUtilities,
  err: errUtilities,
  process: processUtilities
}

export const get = getUtilities;
export const post = postUtilities;
export const map = mapUtilities;
export const err = errUtilities;
export const process = processUtilities;

export default utilities