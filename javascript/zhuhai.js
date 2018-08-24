var pic=document.getElementsByClassName("pic");

function Disappear(temp) {
	var i;
	for (i=0;i<pic.length;i++) {
		var st="pic"+i;
		var picx=document.getElementsByClassName(st)[0];
		if (picx!=temp) {
			picx.classList.add('clear');
		}
	}
}

function Recover(temp) {
	var i;
	for (i=0;i<pic.length;i++) {
		var st="pic"+i;
		var picx=document.getElementsByClassName(st)[0];
		if (picx!=temp) {
			picx.classList.remove('clear');
		}
	}
}

function ShowText(temp) {
	var text=document.getElementsByClassName("text")[0];
	switch (temp.className) {
		case "pic0 pic" : text.innerHTML='珠海校区图书馆拥有丰富的图书资源及电子资源，拥有藏、阅、检、网一体化的先进管理。图书馆的整个立面都是透明玻璃，外观如一本打开的书，从图书馆向外看便是辽阔的海洋，广大师生学子在此可享受到一个舒适的学习环境。';break;
		case "pic1 pic" : text.innerHTML='孙中山纪念铜像是在孙中山先生逝世后，孙中山先生的日本友人梅屋庄吉先生在1932年赠送的，希望通过纪念铜像宣传主义。此中山像乃仿制康乐园中的中山像而成。';break;
		case "pic2 pic" : text.innerHTML='位临中山大学珠海校区岁月湖，是以名曰“岁月湖餐厅”。一楼设有自选窗口、煲仔饭、石锅饭、汤粉面等各种菜式的窗口，还有饮料店和奶茶甜品店；二楼有专设的教师饭堂。';break;
		case "pic3 pic" : text.innerHTML='珠海校区新体育馆内设有室内运动场、学生活动室、公共设施配套用房。新体育馆为校区师生及珠海市民提供一个集大型集会、球类运动比赛、演出、多功能会议和学生活动中心功能于一身的多功能场所。';break;
		case "pic4 pic" : text.innerHTML='珠影超市是中珠内唯一一家超市，品种基本上能满足同学们的日常需求，整体价格相较于外部超市略贵，在下课高峰期时收银效率较低，但离各个宿舍楼只要5到10min车程，十分便捷';break;
		case "pic5 pic" : text.innerHTML='海滨红楼取名海滨，一是为纪念我校首任校长邹鲁，邹鲁先生字海滨；二是意指红楼建于美丽滨海之畔。其整体分办公区、教学区和实验区，整体规划面积约19591㎡，即将启用的办公区总建筑面积13818㎡，共有18栋楼';break;
		case "pic6 pic" : text.innerHTML='全长571.2m,宽37.2m，珠海校区的这栋亚洲最长、面积最大的教学楼是一座环保型现代化教学大楼。红、黄、蓝五个大型彩球点缀其上，整栋楼如长龙静卧，又不失生气与活力。';break;
		case "pic7 pic" : text.innerHTML='位于荔园学生生活区，一楼主要经营大众伙食，以粤菜为主，二楼主要以多层次服务为主，经营西式扒饭、煲仔饭、煲仔菜、碟头饭以及风味特色小炒等专窗，二楼还设单独荔园小餐厅，主要经营南北风味特色小炒。';break;
		case "pic8 pic" : text.innerHTML='榕园食堂包括榕园一食堂和榕园二食堂，其中，一食堂建筑面积2500m2，有餐位836个，二食堂建筑面积3800m2，有餐位1220占地个。榕园食堂旁边是占地约3000m2的榕园广场，各种室外活动、大型舞台演出都在这里举办';break;
	}
	text.classList.add('trans');
}

window.onload = function() {
	var i;
	var background=document.getElementsByClassName("background")[0];
	for (i=0;i<pic.length;i++) {
		var st="pic"+i;
		var picx=document.getElementsByClassName(st)[0];
		picx.onclick=function() {
			var temp=event.target;
			if (!temp.classList.contains('trans')) {
				Disappear(temp);
				ShowText(temp);
				document.getElementsByClassName("ToSouth")[0].classList.add('clear');
				document.getElementsByClassName("back")[0].classList.add('show');
		    	temp.classList.add('trans');
		    	background.classList.add('trans');
		    }
		};
		picx.ontouchstart=function() {
			var temp=event.target;
			if (!temp.classList.contains('trans')) {
				Disappear(temp);
				ShowText(temp);
				document.getElementsByClassName("ToSouth")[0].classList.add('clear');
				document.getElementsByClassName("back")[0].classList.add('show');
		    	temp.classList.add('trans');
		    	background.classList.add('trans');
		    }
		};
	}
	var back=document.getElementsByClassName("back")[0];
	back.onclick=function() {
		var target=event.target;
		if (target.classList.contains('show')) {
			for (i=0;i<pic.length;i++) {
			    var st="pic"+i;
				var picx=document.getElementsByClassName(st)[0];
				if (picx.classList.contains('trans')) {
					Recover(picx);
					document.getElementsByClassName("text")[0].innerHTML="";
					document.getElementsByClassName("text")[0].classList.remove('trans');
					document.getElementsByClassName("ToSouth")[0].classList.remove('clear');
					document.getElementsByClassName("back")[0].classList.remove('show');
		    		picx.classList.remove('trans');
		    		background.classList.remove('trans');
				}
			}
		}
	};
	back.ontouchstart=function() {
		var target=event.target;
		if (target.classList.contains('show')) {
			for (i=0;i<pic.length;i++) {
			    var st="pic"+i;
				var picx=document.getElementsByClassName(st)[0];
				if (picx.classList.contains('trans')) {
					Recover(picx);
					document.getElementsByClassName("text")[0].innerHTML="";
					document.getElementsByClassName("text")[0].classList.remove('trans');
					document.getElementsByClassName("ToSouth")[0].classList.remove('clear');
					document.getElementsByClassName("back")[0].classList.remove('show');
		    		picx.classList.remove('trans');
		    		background.classList.remove('trans');
				}
			}
		}
	};
};