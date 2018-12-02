<?php
$nom = $_POST["nom"];
$prenom = $_POST["prenom"];
$date = $_POST["date"];
$adresse = $_POST["adresse"];
$cp = $_POST["cp"];
$ville = $_POST["ville"];
$email = $_POST["email"];
$mdp = $_POST["mdp"];
$mdp2 = $_POST["mdp2"];
?>

<p>Bravo, nous avons bien reçu vos données</p>
<p>
<?php echo $nom; ?><br>
<?php echo $prenom; ?><br>
<?php echo $date; ?><br>
<?php echo $adresse; ?><br>
<?php echo $cp; ?><br>
<?php echo $ville; ?><br>
<?php echo $email; ?><br>
<?php echo $mdp; ?><br>
<?php echo $mdp2; ?><br>
</p>