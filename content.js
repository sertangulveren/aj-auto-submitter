if (everythingIsOkay()) { fillForm(); }

function params() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
    vars[key] = value;
  });
  return vars;
}

function fillForm() {
  document.getElementsByName("PnrOrETicketNo")[0].setAttribute("value",params().pnr);
  document.getElementsByName("LastName")[0].setAttribute("value",params().surname);
  document.getElementsByClassName("send-button")[0].click();
}

function everythingIsOkay() {
  return document.getElementsByName("PnrOrETicketNo") && params().pnr && params().surname;
}