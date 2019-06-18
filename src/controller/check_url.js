let redirect_url = 'https://tung2389.github.io/spotify-search-app/';
let fields = [
    redirect_url,
    'access_token',
    'token_type=Bearer',
    'expires_in',
    '#',
    '=',
    '&'
];
function check_url(url){
    for(let i = 0; i < fields.length; i++){
        if(url.indexOf(fields[i]) === -1)
        return false;
    }
    return true;
}
export default check_url;