var clickbtn=document.getElementById("btn");
var display=document.getElementById("print");
var l=1;
clickbtn.addEventListener("click",function()
{
	
	var xhr=new XMLHttpRequest();
    var url='https://learnwebcode.github.io/json-example/animals-' +l+ '.json';
    xhr.open('GET',url);
    xhr.onload=()=>
    {
	var data=JSON.parse(xhr.responseText);
	dis(data);
	
    };
    xhr.send();
	l++;
	if(l>3)
	{
		clickbtn.classList.add("hide-me");
	}
});

function dis(data)
{
	var str="";
	for(var i=0;i<data.length;i++)
		str+="<p>"+data[i].name+"<p>";
	display.insertAdjacentHTML('beforeend',str);

}





