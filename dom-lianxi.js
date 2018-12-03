// function holdPic(whichpic){
// 	var hre=whichpic.getAttribute("href");
// 	var placeholder=document.getElementById("placeholder");
// 	placeholder.setAttribute("src",hre);
// 	var text1=whichpic.getAttribute("title");
// 	var text2=document.getElementById("description");
// 	text2.firstChild.nodeValue=text1;
// }
// function imagegallery(){
// 	var imagegallery=document.getElementById("imagegallery");
// 	var son=imagegallery.getElementsByTagName("a");
// 	for(var i=0;i<son.length;i++){
// 			son[i].onclick=function{
// 				holdPic();
// 				return false;
// 			}
// 	}
// }
// 	// window.onload=imagegallery;
// 	function fn(){
// 		var n=document.createElement("img");
// 		n.setAttribute("id","placeholder");
// 		n.setAttribute("src","images/魅力妈咪切图_53.jpg");
// 		n.setAttribute("alt","this is a image");
// 		var n2=document.createElement("p");
// 		n2.setAttribute("id","description");
// 		var ptext=document.createTextNode("choose an image");
// 		n2.appendChild(ptext);
// 		document.getElementsByTagName("body")[0].appendChild(n);
// 		document.getElementsByTagName("body")[0].appendChild(n2);


// 	}
// window.onload=fn;
// function displayAbbreviations(){
// 	var abbreviations=document.getElementsByTagName("abbr");
// 	if(abbreviations.length<1) return false;
// 	var defs=new Array();
// 	for(var i=0;i<abbreviations.length;i++){
// 		var definition=abbreviations[i].getAttribute("title");
// 		var key=abbreviations[i].lastChild.nodeValue;
// 		defs[key]=definition;
// 	}
// }
// var dlist=document.createElement("dl");
// for(key in defs){
// 	var definition=defs[key];
// 	var dtitle=document.createElement("dt");
// 	var dtitle_text=document.createTextNode(key);
// }
// 第一步获取所有的缩略词
// function displayAbbreviations(){
// 	var Abbreviations=document.getElementsByTagName("abbr");
// 	if(Abbreviations.length<1) return false;
// 	var defs=new Array();
// 	// 遍历这些缩略词
// 	for(var i=0;i<Abbreviations.length;i++){
// 		if(Abbreviations[i].childNodes.length<1) continue;
// 		var definition= Abbreviations[i].getAttribute("title");
// 		var key= Abbreviations[i].lastChild.nodeValue;
// 		defs[key]=definition;
// 	}

// 	// 创建定义列表
// 	var dlist=document.createElement("dl");
// 	// 遍历定义
// 	for(key in defs){
// 		var definition=defs[key];
// 		// 创建定义标题
// 		var dtitle=document.createElement("dt");
// 		var dtitle_text=document.createTextNode(key);
// 			dtitle.appendChild(dtitle_text);
// 		// 创建定义描述
// 		var ddesc=document.createElement("dd");
// 		var ddesc_text=document.createTextNode(definition);
// 		ddesc.appendChild(ddesc_text);
// 		// 把他们添加到定义列表
// 		dlist.appendChild(dtitle);
// 		dlist.appendChild(ddesc);
// 	}
// 		if(dlist.childNodes.length<1) return false;
// 		// 创建标题
// 		var header=document.createElement("h2");
// 		var header_text=document.createTextNode("Abbreviations");
// 		header.appendChild(header_text);
// 		// 把标题添加到页面主题
// 		document.body.appendChild(header);
// 		// 把定义列表添加到页面主题
// 		document.body.appendChild(dlist);
	
// }
// // window.onload=displayAbbreviations;
// // 多个事件添加window.onload处理函数上面
// function addloadEvent(func){
// 	var oldonload=window.onload;
// 	if(typeof window.onload!='function'){
// 		window.onload=func;
// 	}else{
// 		window.onload=function(){
// 			oldonload;
// 			return false;
// 		}
// 	}
// }
// addloadEvent(displayAbbreviations);

// function displayCitation(){
// 	var quotes=document.getElementsByTagName("blockquote");
// // 	for(var i=0;i<quotes.length;i++){
// // 		if(!quotes.getAttribute("cite")) continue;
// // 		var url=quotes[i].getAttribute("cite");
// // 	}
	
// // }
// // 获取abbr
//  function getThumbnail(){
//  	var abbr=document.getElementsByTagName("abbr");
 	
//  	var array=new Array();
//  	// 遍历数组
//  	for( var i=0;i<abbr.length;i++){
//  		var abbr_title=abbr[i].getAttribute("title");
//  		var abbr_text=abbr[i].childNodes[0].nodeValue;
//  		array[abbr_text]=abbr_title;
//  	}


//  	var dl=document.createElement("dl");
//  	for(t in array){
//  		var abbr_title=array[t];
//  		var dt=document.createElement("dt");
//  		var dt_text=document.createTextNode(t);
//  		dt.appendChild(dt_text);
//  		var dd=document.createElement("dd");
//  		var dd_text=document.createTextNode(abbr_title);
//  		dd.appendChild(dd_text);
//  		dl.appendChild(dt);
// 	 	dl.appendChild(dd);
//  	}
	 	
// 	 	document.body.appendChild(dl);
//  }
 		

// function onLoadEvent(func){
// 	var oldonload=window.onload;
// 	if(typeof window.onload!='function'){
// 		window.onload=func;
// 	}else{
// 		window.onload=function(){
// 			oldonload();
// 			func();
// 		}
// 	}
// }

// onLoadEvent(getThumbnail);

// // 显示文献来源连接表
//  //  function blockquo(){
//  //  	var blockquote=document.getElementsByTagName("blockquote");
//  //  	for(var i=0;i<blockquote.length;i++){
//  //  		var url=blockquote[i].getAttribute("cite");
//  //  		var quoteElements=blockquote[i].getElementsByTagName("*");
//  //  		var elem=quoteElements[quoteElements.length-1];
//  //  		var link=document.createElement("a");
//  //  		var link_text=document.createTextNode("source");
//  //  		link.appendChild(link_text);
//  //  		link.setAttribute("href",url);
//  //  		var superscript=document.createElement("sup");
//  //  		superscript.appendChild(link);
//  //  		elem.appendChild(superscript);
//  //  	}
//  //  }
//  // onLoadEvent(blockquo);
//  // 显示文献来源连接表
//      function blockquote(){
//      	var blockquoteElement=document.getElementsByTagName("blockquote");
//      	for(var i=0;i<blockquoteElement.length;i++){
//      		var cite=blockquoteElement[i].getAttribute("cite");
//      		 var citeNodes=blockquoteElement[i].getElementsByTagName("*");
//      		 var theLast=citeNodes[citeNodes.length-1];
//      		var a=document.createElement(a);
//      		// var a_href=document.createElement(href);
//      		var a_text=document.createTextNode("source");
//      		a.appendChild(a_text);
//      		a.setAttribute("href",cite);
//      		var sup=document.createElement("sup");
//      		sup.appendChild(a);
//      		theLast.appendChild(sup);
     		

//      	}
//      }
//      	onLoadEvent(blockquote);
     	// 显示快捷键菜单
    function accesskeys(){
     	var links=document.getElementsByTagName("a");
     	var arrs=new Array();
     	for(var i=0;i<links.length;i++){
     		var link=links[i];
     		var access=link.getAttribute("accesskey");
     		var accesskey_text=link.lastChild.nodeValue;
     		arrs[access]=accesskey_text;
     	}
     	var ul=document.createElement("ul");
     	for(access in arrs){
     		var accesskey_text=arrs[access];
     		var str=access+":"+accesskey_text;
     		var li=document.createElement("li");
     		var li_text=document.createTextNode(str);
     		li.appendChild(li_text);
     		ul.appendChild(li);
     	}
     		document.body.appendChild(ul);
     	}
     	window.onload=accesskeys;