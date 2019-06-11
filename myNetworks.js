upd=1;
hide=/(Paul Shark|Maxlevel|Junior Republic|Cohen|Barrett|Monaco|Agatha)/
r = document.querySelectorAll("#tabsText > li:nth-child(2) > table > tbody > tr");
r.forEach(function(row){
	if(row.style.display=='none'){row.style.display='';upd=0;}
	if(upd&&row.querySelector("td:nth-child(3)").innerText!='a.belyaev')row.style.display='none';
	if(upd&&row.querySelector("td:nth-child(2)").innerText.search(hide)!=-1)
		row.style.display='none';
	code=row.querySelector("td:nth-child(2)").querySelector("img:nth-child(3)").outerHTML;
	row.querySelector("td:nth-child(4)").innerText=/datam(.*?)\(/.exec(code)[1];
	});
	
/*
javascript:(function(){upd=1;hide=/(Paul Shark|Maxlevel|Junior Republic|Cohen|Barrett|Monaco|Agatha)/;r = document.querySelectorAll("#tabsText > li:nth-child(2) > table > tbody > tr");r.forEach(function(row){if(row.style.display=='none'){row.style.display='';upd=0;}if(upd&&row.querySelector("td:nth-child(3)").innerText!='a.belyaev')row.style.display='none';if(upd&&row.querySelector("td:nth-child(2)").innerText.search(hide)!=-1)row.style.display='none';
code=row.querySelector("td:nth-child(2)").querySelector("img:nth-child(3)").outerHTML;row.querySelector("td:nth-child(4)").innerText=/datam(.*?)\(/.exec(code)[1];});void 0;})()
*/