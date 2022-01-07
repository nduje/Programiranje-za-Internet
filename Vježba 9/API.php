<?php
require_once("php/cards.php");

// GET - API.php?action=addCard&title=Hrvatska&description=opis&imageUrl=/images/hrvatska.jpg

// $_REQUEST

function getRequestParameter($key) {
   /**
    * if (isset...) {
    *   return
    *}
    */

   return isset($_REQUEST[$key]) ? $_REQUEST[$key] : "";
}

function processRequest()
{
   $action = getRequestParameter("action");
  switch ($action) {
   case 'addCard':
      processAddCard();
      break;    
   default:
       echo(json_encode(array(
          "success" => false,
          "reason" => "Unknown action: $action"
       )));
       break;
    }
}

function processAddCard() {
   $title = getRequestParameter("title");
   $description = getRequestParameter("description");
   $imageUrl = getRequestParameter("imageUrl");

   $id = -1;
   $success = false;
   $reason = "";

   if(!empty($title) && !empty($description) && !empty($imageUrl)) {
      $id = addCard($title, $description, $imageUrl);
      $success = true;
   }
   else {
      $success = false;
      $reason = "Missing card info";
   }

   echo(
      json_encode(
         array(
            "id" => $id,
            "reason" => $reason,
            "success" => $success
         )
      )
   );
}

processRequest();