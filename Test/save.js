var rightClick = chrome.contextMenus.create({
  "title" : "Save using LiliDrop",
  "contexts" : ["image","link"],
  "onclick": myClick
});

function myClick(info, tab) {
    alert("start");

    var client = new Dropbox.Client({key: "jenqtwz6nhaux4x"});

    // Try to finish OAuth authorization
    client.authenticate({interactive: true}, function (error) {
        if (error) {
            alert("Authentication error: " + error);
        }
    });

    if (client.isAuthenticated()) {
        // Client is authenticated
        alert("hello");
    }

    alert("end");
}