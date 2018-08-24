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
		case "pic0 pic" : text.innerHTML='临着珠江，这个高楼建筑在一众低矮的校园建筑中十分显眼</br>虽是标标准准的现代化建筑，学人堂仍配以红墙而与校园中其他历史建筑相和谐</br>拥有数百间不同风格的客房，内设有中餐厅、西餐厅、风味餐厅、大堂吧、音乐吧等';break;
		case "pic1 pic" : text.innerHTML='中大国际学术交流中心，不同于康乐园内的红砖绿瓦</br>建筑大师佘畯南和莫伯治先生为了尊重环境，特地采用了玻璃幕墙，</br>“结构巍峨，崇光闪烁，坪铺翡翠，壁映红灰”</br>除了建筑本身的光彩，更倒映出了周边风景的美丽啊~';break;
		case "pic2 pic" : text.innerHTML='位于主干道上，紧邻第一教学楼</br>为纪念岭南大学第一位华人校长钟荣光博士，被命名为“荣光堂”</br>其建筑本身风格，堪称是中西结合的典范。现在，荣光堂是中山大学的招待所和西餐厅';break;
		case "pic3 pic" : text.innerHTML='踏上门前的台阶，抬头看一眼虽已有些残旧但仍有余韵的图书馆三个大字</br>一步一步，走近知识的殿堂</br>其藏书不仅有近两年的新书，更有难得的古籍文献，</br>是追求宁静之处的不二选择哦，一泡就是一整天(*^__^*)';break;
		case "pic4 pic" : text.innerHTML='1915年由美国约翰*肯尼迪夫人出资修建，名为“格兰堂”</br>后来，梁銶琚先生购买一座由香港通达公司为中大制造的日本精工石英报时钟，作为中大60周年的校庆贺礼。钟上面的大理石板，记录下这段历史哟~';break;
		case "pic5 pic" : text.innerHTML='宽广的草坪上，孙中山静静伫立，神色肃穆，右手伸向北方，仿佛还心心念念着他的北伐事业</br>在每一个校区，都经常可以看见游客或学子与铜像合影。这是中山大学的象征，也是中大学子的骄傲呢';break;
		case "pic6 pic" : text.innerHTML='1905年动工的马丁堂是人类学系所在的大楼</br>这座简洁而庄重的三层红楼，见证了一百多年的风风雨雨</br>门前的母石狮庄重威严，与其所守护的红砖楼相得益彰，成为中大一道独具特色的风景';break;
		case "pic7 pic" : text.innerHTML='外方内圆的双曲面和展开的双翼，直达三楼的六十级台阶，堂前的中国近代十八先贤铜像雕塑群都特色十足</br>这里还流传着著名的灵异故事(*@ο@*) 可以询问度娘 小心不要被吓到嗷~';break;
		case "pic8 pic" : text.innerHTML='三层建筑，坐北朝南，东西对称，错落有致，庄重雅致</br>红砖外墙间以传统翠绿通花砖装饰，灰砖砌成菱形图案，四周浓荫环抱，绿草如茵</br>中山先生曾在这里勉励青年人“立志做大事，不要做大官”，至今仍激励着中大学子';break;
		case "pic9 pic" : text.innerHTML='由香港知名实业家梁銶琚先生于1982年捐资兴建</br>一座风格独特、功能齐全，文化底蕴深厚的现代化建筑</br>这里是中大著名的礼堂，各种活动都在这里举办</br>是学生文化生活的大本营噢~';break;
		case "pic10 pic" : text.innerHTML='其建材采用红砖绿瓦，与中山大学康乐园历史建筑融为一体</br>正门墙壁题词的镶金对联是：</br>领百年风骚开一园桃李，揽九天星斗写千古文章</br>也表达着对中大学子的美好期望~';break;
		case "pic11 pic" : text.innerHTML='由曾宪梓先生捐资建成，该楼其塔楼部分模仿原中山大学钟楼设计</br>粉红色的外墙配上天蓝色的玻璃幕墙，别有一番风韵</br>现在是中山大学行政办公大楼';break;
		case "pic12 pic" : text.innerHTML='“矗巍峨之厦庭龙旭影，瞻气相之光宏壁染赤”</br>带有飞阁流丹，充满西洋建筑风格的外国语学院大楼于1998年落成并投入使用</br>楼前的碑文《外国语学院大楼记》记录了朱孟仪先生斥资修建外国语学院大楼的事迹';break;
		case "pic13 pic" : text.innerHTML='迈过校门，就是中大人</br>绿瓦配上红色的“中山大学”字样，古色古香</br>花香满径，暮色朦胧，满院的红墙绿树</br>一门之隔，可以是闹市与学府之隔，可以是聒噪与宁静之隔。</br>你好，我是中大，很高兴认识你O(∩_∩)O';break;
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
				document.getElementsByClassName("ToNorth")[0].classList.add('clear');
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
				document.getElementsByClassName("ToNorth")[0].classList.add('clear');
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
					document.getElementsByClassName("ToNorth")[0].classList.remove('clear');
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
					document.getElementsByClassName("ToNorth")[0].classList.remove('clear');
					document.getElementsByClassName("back")[0].classList.remove('show');
		    		picx.classList.remove('trans');
		    		background.classList.remove('trans');
				}
			}
		}
	};
};
