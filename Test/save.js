var rightClick = chrome.contextMenus.create({
  "title" : "Save using LiliDrop",
  "contexts" : ["image","link"],
  "onclick": authen
});

var client;

function authen(info, tab) {
    alert("start");

    client = new Dropbox.Client({key: "jenqtwz6nhaux4x"});

    // Try to finish OAuth authorization
    client.authenticate({interactive: true}, function (error) {
        if (error) {
            alert("Authentication error: " + error);
        }
    });

    if (client.isAuthenticated()) {
        // Client is authenticated
        alert("start2");

        saveFile(info);

        alert("end2");
    }

    alert("end");
}

function saveFile(info) {
    alert(info);

    var datastoreManager = client.getDatastoreManager();

    datastoreManager.openDefaultDatastore(function (error, datastore) {
        if (error) {
            alert("Error opening default datastore: " + error);
        }

        var defaultsTable = datastore.getTable("defaults");

        defaultsTable.insert({ audio : "audio" });
        defaultsTable.insert({ documents : "documents" });
        defaultsTable.insert({ images : "images" });
        defaultsTable.insert({ pdfs : "pdfs" });
        defaultsTable.insert({ videos : "videos" });

        client.mkdir("audio", defaultMkdir);
        client.mkdir("documents", defaultMkdir);
        client.mkdir("images", defaultMkdir);
        client.mkdir("pdfs", defaultMkdir);
        client.mkdir("videos", defaultMkdir);

        var pathTable = datastore.getTable("paths");
    });
}

function defaultMkdir(error, stat) {
    if (error) {
        alert("Error making default folder: " + error);
    }
}