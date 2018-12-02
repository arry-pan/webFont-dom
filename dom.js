
	function showPic(whichpic){
		if(!document.getElementById("placeholder")) return false;
		var n1=whichpic.getAttribute("href");
		var n2=document.getElementById("placeholder");
		n2.setAttribute("src",n1);
		if(document.getElementById("description")){
			var text=whichpic.getAttribute("title");
 		var description=document.getElementById("description");
 		description.firstChild.nodeValue=text;
		}
		return true;
	}
	function prepareGallery(){
		if(!document.getElementById) return false;
		if(!document.getElementsByTagName) return false;
		if(!document.getElementById("imagegallery")) return false;
		var n3=document.getElementById("imagegallery");
		var n4=n3.getElementsByTagName("a");
		for(var i=0;i<n4.length;i++){
			n4[i].onclick=function(){
				showPic(this);
				return false;
			}
		}
	}
	// window.onload=prepareGallery;

	// window.onload=function(){
	// 	prepareGallery();
	// 	showpic();
	// }
	window.onload=function(){
		alert("ddd");
	}
	window.onload=function(){
		alert("jdjj");
	}
	// 
	// function holdPic(choicepic){
	// 	if(!document.getElementById("placeholder")) return false;
	// 	var n1=choicepic.getAttribute("href");
	// 	var n2=document.getElementById("placeholder");
	// 	n2.setAttribute("src",n1);
	// 	if(!document.getElementById("description")) return false;
	// 	var n3=choicepic.getAttribute("title");
	// 	var n4=document.getElementById("description");
	// 	n4.firstChild.nodeValue=n3;		
	// }
	// function fnn(){
	// 	if(!document.getElementsByTagName) return false;
	// 	if(!document.getElementById) return false;
	// 	if(!document.getElementById("imagegallery")) return false;
	// 	var n5=document.getElementById("imagegallery");
	// 	var n6=n5.getElementsByTagName("a");
	// 	for(var i=0;i<n6.length;i++){
	// 		n6[i].onclick=function(){
	// 			return holdPic(this);
	// 			return false;
	// 		}
	// 	}
	// }
	// window.onload=fnn;
	
	// // window.onload=function(){
	// // 	fnn();
	// // 	holdPic();
	// // }
	
	// function addLoadEvent(func){
	//  	var oldonload=window.onload;
	//  	if(typeof window.onload !='function'){
	//  		window.onload=func;
	//  	}else{
	//  		oldonload();
	//  		func();
	//  	}
	//  }
	// function insertAfter(newElement,targetElent){
	// 	var parent=targetElement.parentNode;
	// 	if(parent.lastChild==targetElement){
	// 		parent.appendChild(newElement);
	// 	}else{
	// 		parent.insertBefore(newElement,targetElement.nextSibling);
	// 	}
	// }
	function preparePlaceholder(){
		var placeholder=document.createElement("img");
		placeholder.setAttribute("id","placeholder");
		placeholder.setAttribute("src","images/魅力妈咪切图_53.jpg");
		placeholder.setAttribute("alt","my image gallery");
		
		
		var description=document.createElement("p");
		description.setAttribute("id","description");
		var desctext=document.createTextNode("choose an image");
		description.appendChild(desctext);
		  document.getElementsByTagName("body")[0].appendChild(placeholder);
		  document.getElementsByTagName("body")[0].appendChild(description);
		 
		  // var gallery=document.getElementById("imagegallery");
	// 	  insertAfter(placeholder,gallery);
	// 	  insertAfter(description,placeholder);
	}
	// window.onload=preparePlaceholder;