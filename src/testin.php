<tbody>

<?php

$queryrateMode="SELECT rateMode FROM sports where eventId='$event_id'and marketName='Match Odds' and winner is NULL ";
$resultrateMode=$db_handle->runQuery($queryrateMode);
//echo '<script> alert('.$resultrateMode[0]['rateMode'].') </script>';
if($resultrateMode[0]['rateMode'] == "2"){
$httpRequest="https://bvincap.skyexchange.com/exchange/member/playerService/queryFancyBetMarkets?eventId=".$event_id;

$cURLConnection = curl_init();

curl_setopt($cURLConnection, CURLOPT_URL, $httpRequest);
curl_setopt($cURLConnection, CURLOPT_RETURNTRANSFER, true);
curl_setopt($cURLConnection,CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($cURLConnection, CURLOPT_HTTPHEADER, array(
  'user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36'
));

$apiResponse = curl_exec($cURLConnection);

//echo $apiResponse;

curl_close($cURLConnection);

$jsonMarketResponse = json_decode($apiResponse, TRUE);
//echo '<script> //console.log("'.$apiResponse.'") </script>';
//echo '<script> //console.log("'..'") </script>';

}
else if($resultrateMode[0]['rateMode'] == "1"){

$queryfancyD="SELECT * FROM diamondFancy where eventId='$event_id' order by id asc";
$resultfancyD=$db_handle->runQuery($queryfancyD);  

$jsonMarketResponse = array(
  'fancyBetMarkets' => $resultfancyD
  
); 

// echo '<script> //console.log('.json_encode($jsonMarketResponse).') </script>';


}


for($i=0;$i<sizeof($jsonMarketResponse['fancyBetMarkets']);$i=$i+1)
{
  $selectionId=$jsonMarketResponse['fancyBetMarkets'][$i]['marketId'];
  //echo $nation;
  //echo '<script> //console.log("'.$jsonMarketResponse['fancyBetMarkets'][$i]['marketId'].'") </script>';
  $queryFancy="SELECT * FROM fancy where eventId='$event_id' and selectionId='$selectionId'";
  $resultFancy=$db_handle->runQuery($queryFancy);
  $fancyStatus=$jsonMarketResponse['fancyBetMarkets'][$i]['status'];
  //echo '<script> //console.log("'.$jsonMarketResponse['fancyBetMarkets'][$i]['status'].'") </script>';
  if(sizeof($resultFancy)==0 && $jsonMarketResponse['fancyBetMarkets'][$i]['marketId']!="" && ($fancyStatus==2 || $fancyStatus==10)){
?> 

<?php echo '<form method="post" action="create_fancy.php?event_id='.$event_id.'">'; ?>
     <tr>
    <td>
     <?php echo '<input type="text" name="runner_name" value="'.$jsonMarketResponse['fancyBetMarkets'][$i]['marketName'].'" style="width:350px" />'; ?>
    </td>

    
     <?php
      
      $sel=$jsonMarketResponse['fancyBetMarkets'][$i]['marketId'];
      if($jsonMarketResponse['fancyBetMarkets'][$i]['mode']=="7"){
        $rateMode = 1;
      }
      else{
        $rateMode = 2;
      }

      echo '<input type="text" name="selection_id" hidden="hidden" value="'.$sel.'" />';
      echo '<input type="text" name="rate_id" hidden="hidden" value="'.$rateMode.'" />'; ?>
    
    <td>
     <input type="text"  name="min_stack" value="1" />
    </td>

    <td>
     <input type="text"  name="max_stack" value="1000" />
    </td>

    <td>
      <input class="btn btn-primary" type="submit" name="create_fancy" value="Import"> 
    </td>

    </tr>
  </form>
 <?php 
}}; 
?>
</tbody>