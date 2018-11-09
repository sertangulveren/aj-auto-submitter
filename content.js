function params() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
    vars[key] = value;
  });
  return vars;
}

function everythingIsOkay() {
  return document.getElementsByName("PnrOrETicketNo") && params().pnr && params().surname;
}