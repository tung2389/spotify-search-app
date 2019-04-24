
import {authorization_params} from '../config/Params';
import {search_url} from '../config/Url';
import {create_url} from './process_url';

function send_fetch_request(url,access_token){
  return fetch(url,{
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + access_token
    },
  });
}

async function get_data(keyword,access_token){
  let search_params = {
    q: keyword,
    type: 'album,artist,playlist,track'
  };
  let url = create_url(search_url,search_params);
  let res = await send_fetch_request(url,access_token);
  let result = await res.json();
  return result;
}

export default get_data;