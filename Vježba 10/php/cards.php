<?php
require_once("DatabaseAccess.php");


function getCardsFromDb()
{
 	$dbAccess = getDbAccess();
	return $dbAccess->executeQuery("SELECT * FROM Cards;");
}

function generateCardsHtml(){
    $html = "";

    $cards = getCardsFromDb();

    foreach($cards as $card){
        $id = $card[0];
        $title = $card[1];
        $imageUrl = $card[2];
        $description = $card[3];
        $liked = $card[4];
        
        if ($liked) {
            $heart = "fa-heart";
        }

        else {
            $heart = "fa-heart-o";
        }


        $html .= "<article class='card' data-card-id='$id'>
                    <i class='fa fa-times delete-button clickable-icon'></i>
                    <img src='$imageUrl' alt='$title'/>
                    <h3><span class='card-title-label'>$title</span> <i class='fa $heart heart-icon clickable-icon'></i></h3>
                    <p>$description</p>
                    <i class='fa fa-plus add-paragraph-icon clickable-icon'></i>
                  </article>";
    }

    return $html;
}

function addCard($title, $description, $imageUrl) {
    return getDbAccess()->executeInsertQuery(
        "INSERT INTO Cards(Title, Description, ImageUrl) VALUES('$title', '$description', '$imageUrl');"
    );
}

function toggleCardLike($id, $liked) {
    return getDbAccess()->executeInsertQuery(
        "UPDATE Cards SET Liked='$liked' WHERE ID='$id';"
    );
}

function deleteCard($id) {
    getDbAccess()->executeInsertQuery(
        "DELETE FROM Cards WHERE ID='$id';"
    );
}