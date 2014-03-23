var client = new Dropbox.Client({key: APP_KEY});

// Try to finish OAuth authorization.
client.authenticate({interactive: false}, function (error) {
    if (error) {
        alert('Authentication error: ' + error);
    }
});

if (client.isAuthenticated()) {
    // Client is authenticated
}

/*
var datastoreManager = client.getDatastoreManager();
datastoreManager.openDefaultDatastore(function (error, datastore) {
    if (error) {
        alert('Error opening default datastore: ' + error);
    }

    var taskTable = datastore.getTable('tasks');

    var firstTask = taskTable.insert({
        taskname: 'Buy milk',
        completed: false,
        created: new Date()
    });

    var taskname = firstTask.get('taskname');
    firstTask.set('completed', true);
    firstTask.deleteRecord();

    var results = taskTable.query();

    var results = taskTable.query({completed: false});
    var firstResult = results[0];
});
*/