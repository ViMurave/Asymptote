(function(){
var tdforbutton=document.getElementsByName("2"); // создаем кнопки
var btn=document.createElement('input');
btn.type='button';
btn.value='   Начать cначала   '
btn.onclick=click_begin;
tdforbutton[0].appendChild(btn);
var tdforbutton1=document.getElementsByName("3"); // создаем кнопки
var btn1=document.createElement('input');
btn1.type='button';
btn1.value='   Старт   ';
btn1.onclick=pause;
tdforbutton1[0].appendChild(btn1);
var flag_pause=false;
var counter=0;

var yy = document.getElementsByName("y"); 

var xx = document.getElementsByName("x"); 
xx[0].innerHTML = "0.00";
yy[0].innerHTML = "0.00";
var plot = new Plotter('plot',{
left: 0,
right: 4.5,
top: 5.5,
bottom: -0.2,
width:1000,
height: 600,
accuracy: 5000000,
zoom: false});

k = 5;
m = 3;
n = 2;

function funcValue(x) {

	return x + k * Math.sin(Math.pow(x, m)) / Math.pow(x, n);	
}
var func=plot.addFunc(function(x){
	return x+k*Math.sin(Math.pow(x,m))/ Math.pow(x, n);	
},{left:0.000001,strokeWidth:1.5,right:6,accuracy:3000})
var func_01=plot.addFunc(function(x){
	return x+k*Math.sin(Math.pow(x,m))/ Math.pow(x, n);	
},{left:6,strokeWidth:1.5,right:7.5,accuracy:3000})
var func_02=plot.addFunc(function(x){
	return x+k*Math.sin(Math.pow(x,m))/ Math.pow(x, n);	
},{left:7.5,strokeWidth:1.5,right:9,accuracy:3000})
var func_03=plot.addFunc(function(x){
	return x+k*Math.sin(Math.pow(x,m))/ Math.pow(x, n);	
},{left:9,strokeWidth:1.5,right:11.5,accuracy:3500})
var func1=plot.addFunc(function(x){
	return x;
},{color:3})
var p_x=0.25;
var point = plot.addPoint(p_x,funcValue(p_x));
point.setSize(5);

var tdforwrite=document.getElementsByName("1");


function pause(){
	if(p_x<10.6)
	{
		if(counter==0)
		{
			counter=1;
			click_start();
			btn1.value='   Пауза   ';
		}
		else{
			if(flag_pause==false)
			{
				click_pause();
				btn1.value='   Продолжить   ';
			}
			else{
				click_start();
				btn1.value='   Пауза   ';
				
			}
		}
	}
}
function click_begin(){
	plot.plot.setTop(5.5);
	plot.plot.setBottom(-0.2);
	plot.plot.setLeft(0);
	plot.plot.setRight(4.5);
	plot.draw();
	plot.remove(point);
	p_x=0.25;
	point = plot.addPoint(p_x,funcValue(p_x));
	point.setSize(5);
	
	xx[0].innerHTML = "0.00";
	yy[0].innerHTML = "0.00";

	if(!flag_pause)
	{
		if(p_x>=10.6)
		{
			counter=0;
			btn1.value='   Старт   ';
		}		
	}
	else{
		counter=0;
		btn1.value='   Старт   ';		
	}
}
function click_pause(){
	clearInterval(timer);
	flag_pause=true;
}


function click_start() {
	
	flag_pause=false;
	
	
	timer = setInterval(function()
	{
		if(p_x>=10.6){
			clearInterval(timer);
		}
		else{
			if(p_x<4.4){
				plot.remove(point);
				p_x=p_x+0.002;
				point=plot.addPoint(p_x,funcValue(p_x));
				
				xx[0].innerHTML = Math.round(p_x*100)/100; 
				yy[0].innerHTML = Math.round(funcValue(p_x)*100)/100;

				point.setSize(5);
				if(Math.abs(p_x-funcValue(p_x))<0.1){
					tdforwrite[0].style.backgroundColor="#ff0000";
				}
				else{
					tdforwrite[0].style.backgroundColor="#ffffff";
				}
			}
			else{
				if(p_x<7){
				plot.plot.setRight(p_x+0.1);
				plot.plot.setLeft(p_x+0.1-4.5);
				plot.plot.setTop(p_x+1.1);
				plot.plot.setBottom(p_x-4.6);
				
				plot.draw();
				plot.remove(point);				
				point=plot.addPoint(p_x,funcValue(p_x));
				p_x=p_x+0.01;
				xx[0].innerHTML = Math.round(p_x*100)/100; 
				yy[0].innerHTML = Math.round(funcValue(p_x)*100)/100;
				point.setSize(5);
				if(Math.abs(p_x-funcValue(p_x))<0.065){
					tdforwrite[0].style.backgroundColor="#ff0000";
				}
				else{
					tdforwrite[0].style.backgroundColor="#ffffff";
				}
			}
			if(p_x>=7 && p_x<8.5)
			{
				plot.plot.setRight(p_x+0.1);
				plot.plot.setLeft(p_x+0.1-4.5);
				plot.plot.setTop(p_x+1.1);
				plot.plot.setBottom(p_x-4.6);
				
				plot.draw();
				plot.remove(point);

				point=plot.addPoint(p_x,funcValue(p_x));
				p_x=p_x+0.01;
				xx[0].innerHTML = Math.round(p_x*100)/100; 
				yy[0].innerHTML = Math.round(funcValue(p_x)*100)/100;
				point.setSize(5);
				if(Math.abs(p_x-funcValue(p_x))<0.04){
					tdforwrite[0].style.backgroundColor="#ff0000";
				}
				else{
					tdforwrite[0].style.backgroundColor="#ffffff";
				}
			}
			if(p_x>=8.5 && p_x<9)
			{
				plot.plot.setRight(p_x+0.1);
				plot.plot.setLeft(p_x+0.1-4.5);
				plot.plot.setTop(p_x+1.1);
				plot.plot.setBottom(p_x-4.6);
				
				plot.draw();
				plot.remove(point);
		
				point=plot.addPoint(p_x,funcValue(p_x));
				p_x=p_x+0.009;
				xx[0].innerHTML = Math.round(p_x*100)/100; 
				yy[0].innerHTML = Math.round(funcValue(p_x)*100)/100;
				point.setSize(5);
				if(Math.abs(p_x-funcValue(p_x))<0.037){
					tdforwrite[0].style.backgroundColor="#ff0000";
				}
				else{
					tdforwrite[0].style.backgroundColor="#ffffff";
				}
			}
			if(p_x>=9 && p_x<9.5)
			{
				plot.plot.setRight(p_x+0.1);
				plot.plot.setLeft(p_x+0.1-4.5);
				plot.plot.setTop(p_x+1.1);
				plot.plot.setBottom(p_x-4.6);
				
				plot.draw();
				plot.remove(point);
				
				point=plot.addPoint(p_x,funcValue(p_x));
				p_x=p_x+0.008;
				xx[0].innerHTML = Math.round(p_x*100)/100; 
				yy[0].innerHTML = Math.round(funcValue(p_x)*100)/100;
				point.setSize(5);
				if(Math.abs(p_x-funcValue(p_x))<0.034){
					tdforwrite[0].style.backgroundColor="#ff0000";
				}
				else{
					tdforwrite[0].style.backgroundColor="#ffffff";
				}
			}
			if(p_x>=9.5 && p_x<10.1)
			{
				plot.plot.setRight(p_x+0.1);
				plot.plot.setLeft(p_x+0.1-4.5);
				plot.plot.setTop(p_x+1.1);
				plot.plot.setBottom(p_x-4.6);
				
				plot.draw();
				plot.remove(point);
				
				point=plot.addPoint(p_x,funcValue(p_x));
				p_x=p_x+0.008;
				xx[0].innerHTML = Math.round(p_x*100)/100; 
				yy[0].innerHTML = Math.round(funcValue(p_x)*100)/100;
				point.setSize(5);
				if(Math.abs(p_x-funcValue(p_x))<0.03){
					tdforwrite[0].style.backgroundColor="#ff0000";
				}
				else{
					tdforwrite[0].style.backgroundColor="#ffffff";
				}
			}
			if(p_x>=10.1 && p_x<10.6)
			{
				plot.plot.setRight(p_x+0.1);
				plot.plot.setLeft(p_x+0.1-4.5);
				plot.plot.setTop(p_x+1.1);
				plot.plot.setBottom(p_x-4.6);
				
				plot.draw();
				plot.remove(point);
				
				point=plot.addPoint(p_x,funcValue(p_x));
				p_x=p_x+0.007;
				xx[0].innerHTML = Math.round(p_x*100)/100; 
				yy[0].innerHTML = Math.round(funcValue(p_x)*100)/100;
				point.setSize(5);
				if(Math.abs(p_x-funcValue(p_x))<0.023){
					tdforwrite[0].style.backgroundColor="#ff0000";
				}
				else{
					tdforwrite[0].style.backgroundColor="#ffffff";
				}
			}
			}
		}
	}, 1);


}

})();

