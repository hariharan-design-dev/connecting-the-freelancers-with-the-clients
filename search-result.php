<?php
include 'db.php';

$topic = isset($_GET['topic']) ? $_GET['topic'] : '';
$content_type = isset($_GET['content_type']) ? $_GET['content_type'] : '';
$experience = isset($_GET['experience']) ? $_GET['experience'] : '';

$sql = "SELECT w.id, u.name, w.bio, w.expertise, w.experience, w.rating, w.profile_image
        FROM writers w
        JOIN users u ON w.user_id = u.id
        WHERE 1=1";

if ($topic) {
    $sql .= " AND w.expertise LIKE '%$topic%'";
}
if ($content_type) {
    $sql .= " AND w.expertise LIKE '%$content_type%'";
}
if ($experience) {
    $sql .= " AND w.experience = '$experience'";
}

$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Search Results</title>
</head>
<body>
    <h2>Search Results</h2>
    <?php while ($row = $result->fetch_assoc()) { ?>
        <div>
            <img src="<?php echo $row['profile_image']; ?>" width="50">
            <h3><?php echo $row['name']; ?></h3>
            <p><?php echo $row['bio']; ?></p>
            <p>Expertise: <?php echo $row['expertise']; ?></p>
            <p>Experience: <?php echo $row['experience']; ?></p>
            <p>Rating: <?php echo $row['rating']; ?></p>
        </div>
    <?php } ?>
</body>
</html>
