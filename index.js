window.onload = function(){
	var ulRecord = document.getElementById("main-body").querySelector("ul");
	var listArray = ulRecord.querySelectorAll("li");
	var sortArray = [];
	for(var i = 0,len = listArray.length;i<len;i++){
		sortArray.push(listArray[i].innerHTML);
	}
	var button1 = document.getElementById("ascend");//升序按钮
	var button2 = document.getElementById("descend");//降序按钮
	function compare(value1,value2){
		return value1-value2;
	}
	button1.onclick = function(){
		sortArray.sort(compare);
		var newLiHtml="";
		for(var i = 0,len = sortArray.length;i < len;i++){
			newLiHtml += "<li>" + sortArray[i] +"<i>";
		}
		ulRecord.innerHTML = newLiHtml;
	}
	button2.onclick = function(){
		sortArray.sort(compare);
		sortArray.reverse();//反转数组项
		var newLiHtml="";
		for(var i = 0,len = sortArray.length;i < len;i++){
			newLiHtml += "<li>" + sortArray[i] +"<i>";
		}
		ulRecord.innerHTML = newLiHtml;
	}

}