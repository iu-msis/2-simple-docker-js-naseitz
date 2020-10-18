<?php

require 'common.php';

// Only need this line if we're creating GUIDs (see comments below)

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
// Note the use of parameterized statements to avoid injection
$stmt = $db->prepare(
  'INSERT INTO Comments (id, commentText)
  VALUES
  ( ?, ?)'
);

$stmt->execute([
  $_POST['id'],
  $_POST['commentText'],
]);

// If needed, get auto-generated PK from DB
// $pk = $db->lastInsertId();  // https://www.php.net/manual/en/pdo.lastinsertid.php

// Step 4: Output
// Here, instead of giving output, I'm redirecting to the SELECT API,
// just in case the data changed by entering it
header('HTTP/1.1 303 See Other');
header('Location: ../comments/?id=' . $id);
