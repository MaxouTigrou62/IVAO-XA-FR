aMois = new Array();
aMois[0] = "Janvier";
aMois[1] = "Février";
aMois[2] = "Mars";
aMois[3] = "Avril";
aMois[4] = "Mai";
aMois[5] = "Juin";
aMois[6] = "Juillet";
aMois[7] = "Août";
aMois[8] = "Septembre";
aMois[9] = "Octobre";
aMois[10] = "Novembre";
aMois[11] = "Décembre";

aJours = new Array();
aJours[0] = "Dim";
aJours[1] = "Lun";
aJours[2] = "Mar";
aJours[3] = "Mer";
aJours[4] = "Jeu";
aJours[5] = "Ven";
aJours[6] = "Sam";

function dateTot(utc) {
  var nDate = new Date();
  var nEr = nDate.getDate();
  if (nEr == 1) nEr += "er";
  var nJour = aJours[nDate.getDay()];
  var nMois = aMois[nDate.getMonth()];
  var nAnnee = nDate.getFullYear();
  if (utc == 1) {
    var heure = nDate.getUTCHours();
    var minute = nDate.getUTCMinutes();
    var seconde = nDate.getUTCSeconds();
  } else {
    var heure = nDate.getHours();
    var minute = nDate.getMinutes();
    var seconde = nDate.getSeconds();
  }
  if (heure < 10) heure = "0" + heure;
  if (minute < 10) minute = "0" + minute;
  if (seconde < 10) seconde = "0" + seconde;
  document.getElementById("date").innerHTML = nJour + " " + nEr + " " + nMois + " " + nAnnee + " à " + heure + ":" + minute + ":" + seconde;
}
var utc=1;
function changeHeure(){
  if (utc==1) {
    $("#clock").css( {"background-color": "#2a4982","color":"#eeeeee"} );
    utc=0;
  }
  else{
    utc=1;
    $("#clock").css( {"background-color": "#eeeeee","color":"#2a4982"} );
};
  dateTot(utc);
}
$(function() {
  dateTot(utc);
  setInterval(function() { dateTot(utc); }, 100);
});
