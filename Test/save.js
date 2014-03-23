var rightClick = chrome.contextMenus.create({
  "title" : "Save using LiliDrop",
  "contexts" : ["image","link"],
  "onclick": myClick
});

function myClick(info, tab) {
    alert("do something");
    var client = new Dropbox.Client({key: "jenqtwz6nhaux4x"});
    
    client.authenticate();

    // Try to finish OAuth authorization.
    client.authenticate({interactive: false}, function (error) {
        if (error) {
            alert('Authentication error: ' + error);
        }
    });

    if (client.isAuthenticated()) {
        // Client is authenticated
        alert("hello");
    }
    console.log(client.isAuthenticated());
}