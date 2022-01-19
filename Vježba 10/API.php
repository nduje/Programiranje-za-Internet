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
   case 'toggleCardLike':
      processToggleCardLike();
      break;
   case 'deleteCard':
      processDeleteCard();
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

function processToggleCardLike() {
   $id = getRequestParameter("id");
   $like = getRequestParameter("like");
   
   $success = false;
   $reason = "";

   if (is_numeric($id) && is_numeric($like)) {
      toggleCardLike($id, $like);
      $success = true;
   }

   else {
      $success = false;
      $reason = "Needs id: number, like: number";
   }

   echo(json_encode(array(
      "success" => $success,
      "reason" => $reason
   )));
}

function processDeleteCard() {
   $id = getRequestParameter("id");

   $reason = false;
   $reason = "";

   if (is_numeric($id)) {
      deleteCard($id);
      $success = true;
   }

   else {
      $success = false;
      $reason = "Needs id: number";
   }

   echo(json_encode(array(
      "success" => $success,
      "reason" => $reason
   )));
}

processRequest();