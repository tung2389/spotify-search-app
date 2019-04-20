
function create_url(link, params){
    let url = new URL(link);
    url.search = new URLSearchParams(params);
    return url;
  }
  
  function get_access_token(){
    let returned_link = window.location.href;
    let true_url = return_true_url(returned_link);
    let url = new URL(true_url);
    let access_token = url.searchParams.get("access_token");
    return access_token;
  }
  
  //Throw out the "#" in the returned url
  function return_true_url(returned_link){
    let res = returned_link.split("#");
    let true_url = res[0] + '?' + res[1];
    return true_url;
  }

  export {create_url,get_access_token};