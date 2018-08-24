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
		case "pic0 pic" : text.innerHTML='中山大学北门牌坊是为中山大学的标志性建筑之一，门额刻有“国立中山大学”六个大字，是参照五山路原有的国立中山牌坊形制。此牌坊不远处还伫立着一尊中山像。';break;
		case "pic1 pic" : text.innerHTML='北学院楼由相连的4座大楼构成，其中A座为法学院院楼，B座为资讯管理学院院楼，C座为环境科学与工程学院院楼，D座为政治与公共事务管理学院院楼。';break;
		case "pic2 pic" : text.innerHTML='位于公共教学楼对面，集各种行政办公于一体，分为A、B两座楼。行政楼中设有行政楼餐厅，依河畔而建，不仅提供早中晚餐，还有提供下午茶。';break;
		case "pic3 pic" : text.innerHTML='教学楼总面积37715平方米，由五座教学楼相连而成，由北往南依次编排为A、B、C、D、E栋，外型融为一体， 80人课室位于南北端两座建筑内，中型课室位于中央三幢的1-5层，大型课室位于东西两端，以2-3层为主。教学楼以五层为主，有部分地下室，有大小阶梯课室111间，一期建设多媒体课室35间，2007年9月止建设多媒体课室97间，90%课室是多媒体课室，公共教学楼可同时容纳1万5千7百多人';break;
		case "pic4 pic" : text.innerHTML='实验教学楼分为南北两座，隔河相望，总建筑面积25680平方米，共分环境科学、信息科学、公共课和文科等三个功能区。分别承担校区的公共、信息、环境实验教学工作。一期已建成且投入使用的多媒体计算机室 5间，共有500多台计算机；语音实验室6间，共有300多个座位；物理学科实验室1间，电工基础实验室1间及自动化创新实验室1间。';break;
		case "pic5 pic" : text.innerHTML='东校区图书馆位于大学城南北主轴的中心。外观上看，图书馆像一本打开的图书，共有五层，其中拥有丰富的文献信息资源可供借阅，同时馆内设有许多可供自习的桌椅。';break;
		case "pic6 pic" : text.innerHTML='北望图书馆，南临中环路，它与校内现有的其他体育设施相互补充，完善了学校的体育教学环境。该馆可同时容纳5000名观众，能够满足网球、篮球、排球、羽毛球、乒乓球、手球等国际性体育赛事的需求。';break;
		case "pic7 pic" : text.innerHTML='东田径场又称真草体育场，因其足球场种植的真草而得名，环绕着草地的四百米跑道，宽大的观众台以及若干网球场，便是真草的配置了。体育场外还有一条风雨跑道，体育部的办公室也设于此处。';break;
		case "pic8 pic" : text.innerHTML='工学院楼为中大东校区最高的建筑，建筑面积近2万平方米，其高耸的塔楼为东校区的地标性建筑之一，内有多间大面积的空旷教室，工学院楼前为一广场，经常举办各类学生活动。';break;
		case "pic9 pic" : text.innerHTML='西田径场与东田径场类似，但其足球场使用的是假草，故名假草体育场。假草体育场全天候开放，供广大师生进行各类体育锻炼。假草附近还设有有排球场、篮球场，东校的游泳池也在其旁边。';break;
		case "pic10 pic" : text.innerHTML='明德园为东校园生活区的一个宿舍区，采用田园的风格，内有全家便利店、门诊、邮局、书店，理发店等，方便取快递，靠近第一饭堂，第二饭堂与GOGO新天地。同时明德园在东校区四个园中离图书馆、教学楼等学生常去的教学区场所最近。';break;
		case "pic11 pic" : text.innerHTML='格致园为东校园生活区的一个宿舍区，有中大最好的宾馆东苑宾馆及岐关车站，同学们可在车站乘坐岐关车前往不同的校区。格致园大部分住的是教职工以及研究生。通过格致园的中大地道，可从生活区前往教学区（去实验楼的一个好选择）。';break;
		case "pic12 pic" : text.innerHTML='至善园为东校园生活区的一个宿舍区，其内部有便利超市，动感地带业务厅，奶茶店等，靠近第四饭堂，GOGO新天地以及贝岗。第四饭堂楼上的学生活动中心为学生办公、学习及练习艺术特长提供了条件。';break;
		case "pic13 pic" : text.innerHTML='慎思园为东校园生活区的一个宿舍区，内有失物招领中心，网络中心服务部以及教育超市，靠近第四饭堂与内环路，可远眺大学城中心体育馆。同时慎思园在东校区四个园中离教学区最远，可考虑购买自行车。';break;
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
