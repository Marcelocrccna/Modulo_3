
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);

//Function triggers when all the slides/view contents are loaded
(slideViewDidLoad = function(){	
isResize=false;
	
	//Create new div with scroll property into root container
	$("#commonMediaText").append("<div id='canvasId' style='top:33px;left:0px;position:absolute;width:470px;height:380px;overflow-y:auto;overflow-x:hidden !important;'></div>");	
	var canvasDOM = new createjs.DOMElement(document.getElementById("canvasId"));
	canvasDOM.x = 0;
	canvasDOM.y = 0;
	root.addChild(canvasDOM);
	
	//Create new canvas & stage into new div
	$("#canvasId").append("<canvas id='childCanvas' width='470' height='450'></canvas>");	
	var childStage = new createjs.Stage(document.getElementById("childCanvas"));	
	var im = new Image();
	
	//Create Flowchart IMAGE component
	im.onload = function()
	{		
		var _img = new createjs.Bitmap(this);
		_img.y = 0;
		childStage.addChild(_img);
		initSlide();	
	}
	im.src = "6.3.4.1.jpg";
	
	//Create Flowchart TEXT components using an array
	function initSlide()
	{
		var textArray = [{compId:"ID_txt04" ,x:"179" ,y:"143" ,width:"98.45" ,expand:"up+down" ,align:"center" ,size:"10"},
		{compId:"ID_txt01" ,x:"147" ,y:"19" ,width:"155 ",expand:"left+right" ,align:"center" ,size:"10",class:"greenout"},
		{compId:"ID_txt06" ,x:"359" ,y:"151" ,width:"77.4" ,expand:"up" ,align:"center" ,size:"10",class:"greenout"},
		{compId:"ID_txt02" ,x:"11" ,y:"136" ,width:"65.4" ,expand:"up" ,align:"center" ,size:"10",class:"greenout"},
		{compId:"ID_txt03" ,x:"91" ,y:"132" ,width:"40.2" ,expand:"left" ,align:"right" ,size:"10"},
		{compId:"ID_txt05" ,x:"312" ,y:"132" ,width:"40.2" ,expand:"right" ,align:"left" ,size:"10"},
		{compId:"ID_txt10" ,x:"179" ,y:"309" ,width:"98.45" ,expand:"up+down" ,align:"center" ,size:"10"},
		{compId:"ID_txt11" ,x:"370" ,y:"294" ,width:"68.4" ,expand:"down" ,align:"center" ,size:"10",class:"greenout"},
		{compId:"ID_txt08" ,x:"12" ,y:"293" ,width:"65.4" ,expand:"down" ,align:"center" ,size:"10",class:"greenout"},
		{compId:"ID_txt09" ,x:"91" ,y:"299" ,width:"40.2" ,expand:"left" ,align:"right" ,size:"10"},
		{compId:"ID_txt12" ,x:"225" ,y:"358" ,width:"40.2" ,expand:"right" ,align:"left" ,size:"10"},
		{compId:"ID_txt14" ,x:"124" ,y:"400" ,width:"213" ,expand:"down" ,align:"center" ,size:"10",class:"greenout"},
		{compId:"ID_txt13" ,x:"3" ,y:"386" ,width:"72.5" ,expand:"down" ,align:"center" ,size:"10",class:"greenout"},
		{compId:"ID_txt07" ,x:"1" ,y:"213" ,width:"90.4" ,expand:"right" ,align:"left" ,size:"10",class:"greenout"}];						
		
		//Add each text object into the new stage
		var tComp;				
		for(var i = 0;i<textArray.length;i++)
		{
			textArray[i].div = "canvasId";
			tComp = getCJSElement("TEXT",textArray[i],"canvasId");
			childStage.addChild(tComp);
		}
		update = true;
		childStage.update();
	}	
});