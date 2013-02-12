// Generated by CoffeeScript 1.3.3
(function() {
  var e;

  if (!(typeof jQuery !== "undefined" && jQuery !== null)) {
    e = document.createElement('script');
    e.setAttribute('type', 'text/javascript');
    e.setAttribute('charset', 'UTF-8');
    e.setAttribute('src', '//ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min.js');
    document.body.appendChild(e);
  }

  window.saveTrelloCard = function(idList, key, token) {
    var opts;
    if (!(typeof jQuery !== "undefined" && jQuery !== null)) {
      setTimeout((function() {
        return saveTrelloCard(idList, key, token);
      }), 0);
      return;
    }
    opts = {
      url: "https://api.trello.com/1/cards",
      type: "POST",
      data: {
        key: key,
        token: token,
        //name: document.title === "" ? "<none>" : document.title,
        //DS FOO
        name: document.title === "" ? "<none>" : document.title.substring(0,document.title.search(/ - .*@gmail.com/))
        desc: document.location.href,
        idList: idList
      },
      dataType: "json"
    };
    if (!$.support.cors) {
      opts.dataType = "jsonp";
      opts.type = "GET";
      opts.data._method = "POST";
    }
    return $.ajax(opts);
  };

}).call(this);
