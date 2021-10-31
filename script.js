window.confirm("audio ?");
if (confirm("Press ok to comfirm audio ")) {
  txt = music() "Ok here it comes";
} else {
  txt = "You dont like sound?";
}
function music(){
  var music = new Audio('loud indian music.mp3');
 music.play();
