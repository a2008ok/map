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
		case "pic0 pic" : text.innerHTML='时常可以见到同学们可以在这里尽情挥洒汗水，享受运动，年轻就是好啊\(^o^)/~</br>运动不仅让我们收获一份共同运动的情谊，还有一个健康强壮的身体呢！';break;
		case "pic1 pic" : text.innerHTML='为永久纪念广大医护人员在抗击“非典”战斗中表现出来的崇高职业精神，这座青铜雕像落座于中山大学北校区</br>富有流动性的线条表现了白衣天使的崇高形象，剑穿缠绕的蛇寓意着加强国际间的合作，用科学手段战胜疫病</br>这座雕像不仅美化了校园环境，丰富了人文气息，也激励着学子们成为更合格的医护人员(๑•̀ㅂ•́)و✧';break;
		case "pic2 pic" : text.innerHTML='充斥着虫鸣声，正立于一排大叶紫薇树后，是中大光华口腔医学院楼</br>白墙红瓦的建筑体既在一群红墙建筑中突出而来，另显精致，又与它们互见和谐~';break;
		case "pic3 pic" : text.innerHTML='中山大学医学图书馆位于中山大学北校区，原为中山医科大学图书馆</br>形成了以生物医学为特色的馆藏体系，是华南地区重要的医学文献信息中心';break;
		case "pic4 pic" : text.innerHTML='不同于周围的三四层的建筑，十五层的建筑体在校园中十分显眼</br>Y形平面形成的三叉形体型，与基地环境协调一致，成为教学建筑群中的一颗明珠';break;
		case "pic5 pic" : text.innerHTML='北校区办公楼亦称“红楼”，是一座中西结合且具有欧洲古典主义建筑风格的建筑物</br>办公楼前座门柱“医病医身医心，救人救国救世”黑色大理石对联</br>彰显着医学学子的人生追求与信条';break;
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