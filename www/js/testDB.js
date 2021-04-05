/*document.addEventListener('deviceready', function() {
  window.sqlitePlugin.selfTest(function() {
    console.log('SELF test OK');
  });
});
console.log("!");
*/
var db = null;

document.addEventListener('deviceready', function() {
  db = window.sqlitePlugin.openDatabase({
    name: 'my.db',
    location: 'default',
  });
  /*db.transaction(function(tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS DemoTable (name, score)');
    tx.executeSql('INSERT INTO DemoTable VALUES (?,?)', ['Alice', 101]);
    tx.executeSql('INSERT INTO DemoTable VALUES (?,?)', ['Betty', 202]);
    tx.executeSql('INSERT INTO DemoTable VALUES (?,?)', ['Ann', 303]);
  }, function(error) {
    console.log('Transaction ERROR: ' + error.message);
  }, function() {
    console.log('Populated database OK');
  });
*/
db.transaction(function(tx) {
    tx.executeSql('SELECT sum(score) AS mycount FROM DemoTable', [], function(tx, rs) {
      console.log('Record count (expected to be 2): ' + rs.rows.item(0).mycount);
    }, function(tx, error) {
      console.log('SELECT error: ' + error.message);
    });
  });
});

