
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
loadScript("../../../common/scripts/swfobject.js", registerSWF);

var mainMovieClip;

(Animation = function(control,id){	
		var manifest = [
		{src:"images/_3425.jpg", id:"_5325"},
		{src:"images/envelope_closed_static.png", id:"envelope_closed_static"},
		{src:"images/Router.png", id:"Router"}
	];
	return manifest;			
});
(slideViewDidLoad = function(slideContainer,id){
var c=document.getElementById("canvas");
c.height=490;
});