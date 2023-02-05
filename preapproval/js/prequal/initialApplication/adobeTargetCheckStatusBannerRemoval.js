function getCookieValueForName(cookieName) {
  const value = '; ' + document.cookie;
  const parts = value.split('; ' + cookieName + '=');
  if (parts.length === 2) {
    return parts.pop().split(';').shift();
  } else {
    return '';
  }
}

const cookieValue = getCookieValueForName('appSubmitted');

// eslint-disable-next-line no-unused-vars
var targetPageParamsAll = function()  {
  return {
    'appSubmitted': cookieValue
  };
};
