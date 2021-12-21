<?php include("../zajednicko/zaglavlje.php");?>
<?php require_once("../zajednicko/spajanje_baza.php");?>

<?
if(!(empty($_REQUEST["ime_studenta"])) && !(empty($_REQUEST["prezime_studenta"])) && !(empty($_REQUEST["broj_indeksa"])) && isset($_REQUEST["botun"]))
{
	$ime_studenta = $mysqli->real_escape_string($_REQUEST["ime_studenta"]);
    $prezime_studenta = $mysqli->real_escape_string($_REQUEST["prezime_studenta"]);
    $broj_indeksa = $mysqli->real_escape_string($_REQUEST["broj_indeksa"]);

	
	$dodaj = $mysqli->query("INSERT INTO studenti(ime, prezime, broj_indeksa) VALUES('$ime_studenta', '$prezime_studenta', '$broj_indeksa')") ;
	
	echo "Podaci su ubačeni";


}
else
 {
?>

<form METHOD="POST" ACTION="<?echo $_SERVER["PHP_SELF"];?>">
<TABLE>
<TR><TD>
<BR>Ubacivanje studenta <BR>
Ime studenta: <INPUT type="text" NAME="ime_studenta" id="ime_studenta"><br>
Prezime studenta: <INPUT type="text" NAME="prezime_studenta" id="prezime_studenta"><br>
Broj indeksa: <INPUT type="text" NAME="broj_indeksa" id="broj_indeksa"><br>

</TD>
<TD>

<br>
<input type="submit" name="botun" value="Ubaci studenta" size="1" > 
</TD>
</TR></TABLE></form>
<?
}
?>
<?php include("../zajednicko/podnozje.php");?>