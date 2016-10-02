window.onload=function(){

// 楼层效果开始
var guding=$('.guding',document)[0];
window.onscroll=function(){
  var iw=document.body.scrollTop||document.documentElement.scrollTop;
  var shishang=$('.shishang',document)[0];
  var shishang1=$('.shishang1',document)[0];
  var shishang2=$('.shishang2',document)[0];
  var shishang3=$('.shishang3',document)[0];
  var shishang4=$('.shishang4',document)[0];
  var shishang5=$('.shishang5',document)[0];
  var shishang6=$('.shishang6',document)[0];
  var shishang7=$('.shishang7',document)[0];
  var shishang8=$('.shishang8',document)[0];
  var zi=$('.zi',guding);
  var gudingas=$('a',guding);
  var arr=[shishang.offsetTop,shishang1.offsetTop,shishang2.offsetTop,shishang3.offsetTop,shishang4.offsetTop,shishang5.offsetTop,shishang6.offsetTop,shishang7.offsetTop,shishang8.offsetTop];
  if(iw>=904){
     guding.style.right="26px";
      for (var io = 0; io < arr.length; io++) {
        zi[io].style.opacity=0;
      };
  }else{
     guding.style.right="-50px";
  }
  
  for (var ai = 0; ai < arr.length; ai++) {
    if(iw+200>=arr[ai]){
      for (var i = 0; i < arr.length; i++) {
        zi[i].style.opacity="";
      };
        zi[ai].style.opacity=1;
    }
  };
for (var di = 0; di < arr.length; di++) {
  gudingas[di].index=[di];
   gudingas[di].onclick=function(){
       animate(document.body,{scrollTop:arr[this.index]},120)
       animate(document.documentElement,{scrollTop:arr[this.index]},120)
   }
};
var guding101=$('.guding10-1')[0];
guding101.onclick=function(){
   animate(document.body,{scrollTop:0},240);
   animate(document.documentElement,{scrollTop:0},240);
}

}

// 楼层效果结束
  
// banner动画效果开始
    var box=getClass('banner1',document)[0];
	  var temai=getClass('temai4',document);
    var temai1=getClass('temai1',document);
    var as=temai1[0].getElementsByTagName('a');
    var sanjiao=$('.sanjiao',temai1[0])
    var kuang=getClass('temai2-1',document);
    var pic=getClass('pic',document)[0];
    var banners=pic.getElementsByTagName('a');
    var btn=getClass('btn',document)[0];
    var btns=btn.getElementsByTagName('li')
    var yidongs=getClass('yidong',document)[0];
    var rights=getClass('right',yidongs)[0];
    var lefts=getClass('left',yidongs)[0];
    var banneryou=$('.banneryou')[0]
    var index=0;
    for (var t = 0; t < temai.length; t++) {
        temai[t].style.display="none";
        sanjiao[t].style.display="none"
    };
    sanjiao[0].style.display="block";
    temai[0].style.display="block";
    kuang[0].style.backgroundColor="#e5004f";
    banners[0].style.zIndex=10;
	btns[0].style.backgroundColor="#e5004f";
    rights.style.display="none";
    lefts.style.display="none";
    for (var i = 0; i < as.length; i++) {
         as[i].index=i;
    	as[i].onmouseover=function(){
    		for (var j = 0; j< temai.length; j++) {
    			temai[j].style.display="none";
    			kuang[j].style.backgroundColor="transparent";
          sanjiao[j].style.display="none";
    		};

    		temai[this.index].style.display="block";
    		kuang[this.index].style.backgroundColor="#e5004f";
        sanjiao[this.index].style.display="block"
    	}
    };
    	var t=setInterval(move,2000)
		function move(){
				  index++;
			for (var b = 0; b < banners.length; b++) {
                banners[b].style.zIndex=0;
                btns[b].style.backgroundColor="";
			}
			if(index==banners.length){index=0;}
		      banners[index].style.zIndex=10;
		      btns[index].style.backgroundColor="#e5004f"
		}
        box.onmouseover=function(){
        	  clearInterval(t);
            rights.style.display="block";
            lefts.style.display="block";
        }
        box.onmouseout=function(){
             t=setInterval(move,2000)
             rights.style.display="none";
            lefts.style.display="none";
        }
        banneryou.onmouseover=function(){
          animate(banneryou,{left:980},360)
        }
        banneryou.onmouseout=function(){
          animate(banneryou,{left:990},360)
        }
        for (var d = 0; d < btns.length;d++) {
        	btns[d].index=d;
        	btns[d].onclick=function(){
        		for (var h = 0; h < btns.length; h++) {
        			banners[h].style.zIndex=0;
        			btns[h].style.backgroundColor="";
        		};
        	banners[this.index].style.zIndex=10;
        	btns[this.index].style.backgroundColor="#e5004f"
            index=this.index;
        };
        }
        rights.onclick=function(){
            move();
        }
        lefts.onclick=function(){
            index--;
            for (var l = 0; l < banners.length; l++) {
                banners[l].style.zIndex=0;
                btns[l].style.backgroundColor="";
            }
            if(index==-1){index=banners.length-1;}
              banners[index].style.zIndex=10;
              btns[index].style.backgroundColor="#e5004f"
        }
// banner动画效果结束
// 专柜动画效果开始
       var zhuanguipic2=getClass('zhuanguipic2',document)[0];
       var zhuanguipic2as=zhuanguipic2.getElementsByTagName('a')
       var sanjiao1=$('.sanjiao1',zhuanguipic2);
       
       var zhuanguipic3=getClass('zhuanguipic3-1',document);
       var tuijian=getClass('tuijian',document);
       for (var aa = 0; aa < tuijian.length; aa++) {
           tuijian[aa].style.display="none"
           sanjiao1[aa].style.display="none";
       };
       tuijian[0].style.display="block"
       sanjiao1[0].style.display="block";
       zhuanguipic3[0].style.backgroundColor="#e5004f";
       for (var q = 0; q < zhuanguipic2as.length; q++) {
        zhuanguipic2as[q].index=q
            zhuanguipic2as[q].onmouseover=function(){
                for (var j = 0; j < zhuanguipic3.length; j++) {
                    zhuanguipic3[j].style.backgroundColor="transparent";
                    tuijian[j].style.display="none";
                    sanjiao1[j].style.display="none";
                };
                   zhuanguipic3[this.index].style.backgroundColor="#e5004f";
                   tuijian[this.index].style.display="block"
                   sanjiao1[this.index].style.display="block";
            }
        }; 
// 专柜动画效果结束


// 时尚名品中部图片轮播效果开始
var zhongleizhong=$('.zhongleizhong')[0];
var imgboxshi=$('.imgboxshi')[0];
var shias=$('img',imgboxshi);
var zhongdian=$('.zhongdian1');
var jiantouzuo=$('.jiantouzuo')[0];
var jiantouyou=$('.jiantouyou')[0];
var last=0;
var out=0;
shias[0].style.left=0;
zhongdian[0].style.backgroundColor="#d24675";
var iww=parseInt(getStyle(shias[0],'width'));
function movee(){
    out++;
    if(out==shias.length){out=shias.length-1; return};
     for (var bbb = 0; bbb < zhongdian.length; bbb++) {
      zhongdian[bbb].style.backgroundColor="#666";
    };
    shias[out].style.left=iww+'px';
    zhongdian[out].style.backgroundColor="#d24675";
    animate(shias[last],{left:-iww},500)
    animate(shias[out],{left:0},500);
    last=out;
  }
     for (var ij = 0; ij < zhongdian.length; ij++) {
    zhongdian[ij].index=[ij];
    zhongdian[ij].onclick=function(){
        if(this.index==last){
        return
    }
      for (var bbbb = 0; bbbb < zhongdian.length; bbbb++) {
      zhongdian[bbbb].style.backgroundColor="#666";
    };   
        zhongdian[this.index].style.backgroundColor="#d24675";
        out=this.index
        shias[out].style.left=iww+'px';
        animate(shias[last],{left:-iww},500)
    animate(shias[out],{left:0},500)
    last=out;
    }
   }
    jiantouyou.onclick=function(){
        movee();
   }
   jiantouzuo.onclick=function(){
    out--;
    if(out==-1){out=0;return};
    for (var b = 0; b < zhongdian.length; b++) {
      zhongdian[b].style.backgroundColor="";
    };
    shias[out].style.left=-iww+'px';
    zhongdian[out].style.backgroundColor="#d24675";
    animate(shias[last],{left:iww},500)
    animate(shias[out],{left:0},500)
    last=out;
   }

      zhongleizhong.onmouseover=function(){
       animate(jiantouzuo,{left:0},240);
       animate(jiantouyou,{left:360},240);
   }
   zhongleizhong.onmouseout=function(){
      animate(jiantouzuo,{left:-30},240);
      animate(jiantouyou,{left:390},240);
   }
// 时尚名品中部图片轮播效果结束
// 时尚鞋靴开始
var zhongleizhong2=$('.zhongleizhong2')
for (var ic = 0; ic < zhongleizhong2.length; ic++) {
  zhonftu(ic)
};
function zhonftu(obj){
  var zhongleizhong2=$('.zhongleizhong2')[obj];
  var imgbox1=$('.imgbox1',zhongleizhong2)[0];
var shias1=$('img',imgbox1);
var zhongdian1=$('.zhongdian12',zhongleizhong2);
var jiantouzuo1=$('.jiantouzuo2',zhongleizhong2)[0];
var jiantouyou1=$('.jiantouyou2',zhongleizhong2)[0];
var last1=0;
var out1=0;
shias1[0].style.left=0;
zhongdian1[0].style.backgroundColor="#d24675";
var iww1=parseInt(getStyle(shias1[0],'width'));
function movee1(){
    out1++;
    if(out1==shias1.length){out1=shias1.length-1; return};
     for (var bbba = 0; bbba < zhongdian1.length; bbba++) {
      zhongdian1[bbba].style.backgroundColor="#666";
    };
    shias1[out1].style.left=iww1+'px';
    zhongdian1[out1].style.backgroundColor="#d24675";
    animate(shias1[last1],{left:-iww},500)
    animate(shias1[out1],{left:0},500);
    last1=out1;
  }
     for (var ijj = 0; ijj < zhongdian1.length; ijj++) {
    zhongdian1[ijj].index=[ijj];
    zhongdian1[ijj].onclick=function(){
        if(this.index==last1){
        return
    }
      for (var bbbba = 0; bbbba < zhongdian1.length; bbbba++) {
      zhongdian1[bbbba].style.backgroundColor="#666";
    };   
        zhongdian1[this.index].style.backgroundColor="#d24675";
        out1=this.index
        shias1[out1].style.left=iww1+'px';
        animate(shias1[last1],{left:-iww1},500)
    animate(shias1[out1],{left:0},500)
    last1=out1;
    }
   }
    jiantouyou1.onclick=function(){
        movee1();
   }
   jiantouzuo1.onclick=function(){
    out1--;
    if(out1==-1){out1=0;return};
    for (var b1 = 0; b1 < zhongdian1.length; b1++) {
      zhongdian1[b1].style.backgroundColor="";
    };
    shias1[out1].style.left=-iww+'px';
    zhongdian1[out1].style.backgroundColor="#d24675";
    animate(shias1[last1],{left:iww1},500)
    animate(shias1[out1],{left:0},500)
    last1=out1;
   }
   zhongleizhong2.onmouseover=function(){
       animate(jiantouzuo1,{left:0},240);
       animate(jiantouyou1,{left:360},240);
   }
   zhongleizhong2.onmouseout=function(){
      animate(jiantouzuo1,{left:-30},240);
      animate(jiantouyou1,{left:390},240);
   }
}
// 时尚名品中部图片轮播效果开始结束
// 四个小logo效果动画开始
zhongleizuo(0)
function zhongleizuo(obj){
    var kuandu=$('.zhongleizuo22')[obj];
    var imgs=$('.zhongleizuo222',kuandu);
    var zuosanjiao=$('.zhongleizuo221')[0];
    var yousanjiao=$('.zhongleizuo223')[0];
    var indexx=0;
    var next=0;
    imgs[0].style.left=0
    var iw=parseInt(getStyle(kuandu,'width'));
       function wheel(){
       next++;
       if(next==imgs.length){next=0}
        imgs[next].style.left=iw+'px';
       animate(imgs[indexx],{left:-iw},500)
       animate(imgs[next],{left:0},500)
       indexx=next;
    }
    yousanjiao.onclick=function(){
          wheel();
    }
    zuosanjiao.onclick=function(){
      next--;
       if(next==-1){next=imgs.length-1}
        imgs[next].style.left=-iw+'px';
       animate(imgs[indexx],{left:iw},500)
       animate(imgs[next],{left:0},500)
       indexx=next;
    }
}
// 时尚名品logo结束
// 潮流女装logo开始
var imgbox=$('.imgbox')[0];
var kuandu1=$('.zhongleizuo33')[0];
var imgs1=$('.zhongleizuo332',kuandu1);
var zuosanjiao1=$('.zhongleizuo331')[0];
var yousanjiao1=$('.zhongleizuo333')[0];
var indexx1=0;
var next1=0;
imgs1[0].style.left=0
var iw1=parseInt(getStyle(kuandu1,'width'));
   function wheel1(){
   next1++;
   if(next1==imgs1.length){next1=0}
    imgs1[next1].style.left=iw1+'px';
   animate(imgs1[indexx1],{left:-iw1},500)
   animate(imgs1[next1],{left:0},500)
   indexx1=next1;
}
yousanjiao1.onclick=function(){
      wheel1();
}
zuosanjiao1.onclick=function(){
  next1--;
   if(next1==-1){next1=imgs1.length-1}
    imgs1[next1].style.left=-iw1+'px';
   animate(imgs1[indexx1],{left:iw1},500)
   animate(imgs1[next1],{left:0},500)
   indexx1=next1;
}
// 潮流女装logo结束
// 精品男装
var imgbox=$('.imgbox')[0];
var kuandu2=$('.zhongleizuo44')[0];
var imgs2=$('.zhongleizuo442',kuandu2);
var zuosanjiao2=$('.zhongleizuo441')[0];
var yousanjiao2=$('.zhongleizuo443')[0];
var indexx2=0;
var next2=0;
imgs2[0].style.left=0
var iw2=parseInt(getStyle(kuandu2,'width'));
   function wheel2(){
   next2++;
   if(next2==imgs2.length){next2=0}
    imgs2[next2].style.left=iw2+'px';
   animate(imgs2[indexx2],{left:-iw2},500)
   animate(imgs2[next2],{left:0},500)
   indexx2=next2;
}
yousanjiao2.onclick=function(){
      wheel2();
}
zuosanjiao2.onclick=function(){
  next2--;
   if(next2==-1){next2=imgs2.length-1}
    imgs2[next2].style.left=-iw2+'px';
   animate(imgs2[indexx2],{left:iw2},500)
   animate(imgs2[next2],{left:0},500)
   indexx2=next2;
}
// // 精品男装结束
// // 时尚鞋靴
var imgbox=$('.imgbox')[0];
var kuandu3=$('.zhongleizuo55')[0];
var imgs3=$('.zhongleizuo552',kuandu3);
var zuosanjiao3=$('.zhongleizuo551')[0];
var yousanjiao3=$('.zhongleizuo553')[0];
var indexx3=0;
var next3=0;
imgs3[0].style.left=0
var iw3=parseInt(getStyle(kuandu3,'width'));
   function wheel3(){
   next3++;
   if(next3==imgs3.length){next3=0}
    imgs3[next3].style.left=iw3+'px';
   animate(imgs3[indexx3],{left:-iw3},500)
   animate(imgs3[next3],{left:0},500)
   indexx3=next3;
}
yousanjiao3.onclick=function(){
      wheel3();
}
zuosanjiao3.onclick=function(){
  next3--;
   if(next3==-1){next3=imgs3.length-1}
    imgs3[next3].style.left=-iw3+'px';
   animate(imgs3[indexx3],{left:iw3},500)
   animate(imgs3[next3],{left:0},500)
   indexx3=next3;
}
// // 时尚鞋靴结束
// // 潮流箱包
var imgbox=$('.imgbox')[0];
var kuandu4=$('.zhongleizuo66')[0];
var imgs4=$('.zhongleizuo662',kuandu4);
var zuosanjiao4=$('.zhongleizuo661')[0];
var yousanjiao4=$('.zhongleizuo663')[0];
var indexx4=0;
var next4=0;
imgs4[0].style.left=0
var iw4=parseInt(getStyle(kuandu4,'width'));
   function wheel4(){
   next4++;
   if(next4==imgs4.length){next4=0}
    imgs4[next4].style.left=iw4+'px';
   animate(imgs4[indexx4],{left:-iw4},500)
   animate(imgs4[next4],{left:0},500)
   indexx4=next4;
}
yousanjiao4.onclick=function(){
      wheel4();
}
zuosanjiao4.onclick=function(){
  next4--;
   if(next4==-1){next4=imgs4.length-1}
    imgs4[next4].style.left=-iw4+'px';
   animate(imgs4[indexx4],{left:iw4},500)
   animate(imgs4[next4],{left:0},500)
   indexx4=next4;
}
// // 潮流箱包结束
// // 美容护肤
var imgbox=$('.imgbox')[0];
var kuandu5=$('.zhongleizuo77')[0];
var imgs5=$('.zhongleizuo772',kuandu5);
var zuosanjiao5=$('.zhongleizuo771')[0];
var yousanjiao5=$('.zhongleizuo773')[0];
var indexx5=0;
var next5=0;
imgs5[0].style.left=0
var iw5=parseInt(getStyle(kuandu5,'width'));
   function wheel5(){
   next5++;
   if(next5==imgs5.length){next5=0}
    imgs5[next5].style.left=iw5+'px';
   animate(imgs5[indexx5],{left:-iw5},500)
   animate(imgs5[next5],{left:0},500)
   indexx5=next5;
}
yousanjiao5.onclick=function(){
      wheel5();
}
zuosanjiao5.onclick=function(){
  next5--;
   if(next5==-1){next5=imgs5.length-1}
    imgs5[next5].style.left=-iw5+'px';
   animate(imgs5[indexx5],{left:iw5},500)
   animate(imgs5[next5],{left:0},500)
   indexx5=next5;
}
// // 美容护肤结束
// // 运动户外
var imgbox=$('.imgbox')[0];
var kuandu6=$('.zhongleizuo88')[0];
var imgs6=$('.zhongleizuo882',kuandu6);
var zuosanjiao6=$('.zhongleizuo881')[0];
var yousanjiao6=$('.zhongleizuo883')[0];
var indexx6=0;
var next6=0;
imgs6[0].style.left=0
var iw6=parseInt(getStyle(kuandu6,'width'));
   function wheel6(){
   next6++;
   if(next6==imgs6.length){next6=0}
    imgs6[next6].style.left=iw6+'px';
   animate(imgs6[indexx6],{left:-iw6},500)
   animate(imgs6[next6],{left:0},500)
   indexx6=next6;
}
yousanjiao6.onclick=function(){
      wheel6();
}
zuosanjiao6.onclick=function(){
  next6--;
   if(next6==-1){next6=imgs6.length-1}
    imgs6[next6].style.left=-iw6+'px';
   animate(imgs6[indexx6],{left:iw6},500)
   animate(imgs6[next6],{left:0},500)
   indexx6=next6;
}
// // 运动户外结束
// // 内衣配饰
var imgbox=$('.imgbox')[0];
var kuandu7=$('.zhongleizuo99')[0];
var imgs7=$('.zhongleizuo992',kuandu7);
var zuosanjiao7=$('.zhongleizuo991')[0];
var yousanjiao7=$('.zhongleizuo993')[0];
var indexx7=0;
var next7=0;
imgs7[0].style.left=0
var iw7=parseInt(getStyle(kuandu7,'width'));
   function wheel7(){
   next7++;
   if(next7==imgs7.length){next7=0}
    imgs7[next7].style.left=iw7+'px';
   animate(imgs7[indexx7],{left:-iw7},500)
   animate(imgs7[next7],{left:0},500)
   indexx7=next7;
}
yousanjiao7.onclick=function(){
      wheel7();
}
zuosanjiao7.onclick=function(){
  next7--;
   if(next7==-1){next7=imgs7.length-1}
    imgs7[next7].style.left=-iw7+'px';
   animate(imgs7[indexx7],{left:iw7},500)
   animate(imgs7[next7],{left:0},500)
   indexx7=next7;
}
// // 内衣配饰结束
// // 可爱婴童
var imgbox=$('.imgbox')[0];
var kuandu8=$('.zhongleizuo10')[0];
var imgs8=$('.zhongleizuo102',kuandu8);
var zuosanjiao8=$('.zhongleizuo101')[0];
var yousanjiao8=$('.zhongleizuo103')[0];
var indexx8=0;
var next8=0;
imgs8[0].style.left=0
var iw8=parseInt(getStyle(kuandu8,'width'));
   function wheel8(){
   next8++;
   if(next8==imgs8.length){next8=0}
    imgs8[next8].style.left=iw8+'px';
   animate(imgs8[indexx8],{left:-iw8},500)
   animate(imgs8[next8],{left:0},500)
   indexx8=next8;
}
yousanjiao8.onclick=function(){
      wheel8();
}
zuosanjiao8.onclick=function(){
  next8--;
   if(next8==-1){next8=imgs8.length-1}
    imgs8[next8].style.left=-iw8+'px';
   animate(imgs8[indexx8],{left:iw8},500)
   animate(imgs8[next8],{left:0},500)
   indexx8=next8;
}
// 四个小logo效果动画结束
// banner左侧小图标开始
var bannerzuo11=getClass('bannerzuo1-1',document)
var bannerzuo1=getClass('bannerzuo1',document)
var bannerzuoxian=$('.bannerzuoxian',document);
var span=$('span',$('.bannerzuo',document)[0])
var bannerzuo14=$('.bannerzuo1-4',$('.bannerzuo',document)[0])
var pppii=0
for (var ift = 0; ift < bannerzuo1.length; ift++) {
  bannerzuoxian[ift].style.display="none";
};
for (var ibl = 0; ibl < bannerzuo1.length; ibl++) {
  bannerzuo1[ibl].index=ibl;

  hover(bannerzuo1[ibl],function(){for (var i = 0; i < bannerzuoxian.length; i++) {
      bannerzuoxian[i].style.display="none";
    };
    bannerzuoxian[this.index].style.display="block";
    console.log("移入"+pppii++)},function(){ for (var i = 0; i < bannerzuoxian.length; i++) {
      bannerzuoxian[i].style.display="none";
      console.log("移出"+pppii++)
    };})
     var p00=0
    for (var yti = 0; yti < bannerzuo1.length; yti++) {
      bannerzuoxian[yti].index=yti;
hover(bannerzuoxian[yti],function(){
        for (var i = 0; i < bannerzuoxian.length; i++) {
      bannerzuoxian[i].style.display="none";
    };
    bannerzuoxian[this.index].style.display="block";
    console.log("入"+p00++)
      },function(){
        for (var i = 0; i < bannerzuoxian.length; i++) {
      bannerzuoxian[i].style.display="none";
       console.log("出"+p00++)
    };
      })

    };

};

// banner左侧小图标结束

// 时尚名品右侧边框动画开始
var zhong=$('.zhongleiyou');
for (var ia= 0; ia < zhong.length; ia++) {
  mingpin(ia)
};
function mingpin(obj){
  var zhong=$('.zhongleiyou')[obj];
var you11=$('.you11',zhong);
for (var it = 0; it < you11.length; it++) {
   
  you11[it].onmouseover=function(){
      var bt=$('.bt',this)[0];
       animate(bt,{width:266},360);
       var bl=$('.bl',this)[0];
       animate(bl,{height:176},360);
       var br=$('.br',this)[0];
       animate(br,{height:176},360);
       var bb=$('.bb',this)[0];
       animate(bb,{width:266},360)
  }
   you11[it].onmouseout=function(){
      var bt=$('.bt',this)[0];
       animate(bt,{width:0},360);
       var bl=$('.bl',this)[0];
       animate(bl,{height:0},360);
       var br=$('.br',this)[0];
       animate(br,{height:0},360);
       var bb=$('.bb',this)[0];
       animate(bb,{width:0},360)
  }

};
}
// 时尚名品右侧边框动画结束

// 特卖边框动画开始
var teMai=$('.temai4-1');
for (var iy = 0; iy < teMai.length; iy++) {
  teMai[iy].onmouseover=function(){
     var bt=$('.bt',this)[0]
     animate(bt,{width:218},360)
     var bl=$('.bl',this)[0];
     animate(bl,{height:258},360)
     var bb=$('.bb',this)[0]
     animate(bb,{width:218},360)
     var br=$('.br',this)[0];
     animate(br,{height:258},360)
  }
   teMai[iy].onmouseout=function(){
     var bt=$('.bt',this)[0]
     animate(bt,{width:0},360)
     var bl=$('.bl',this)[0];
     animate(bl,{height:0},360)
     var bb=$('.bb',this)[0]
     animate(bb,{width:0},360)
     var br=$('.br',this)[0];
     animate(br,{height:0},360)
  }
};

var teMai1=$('.temai4-2');
for (var ip = 0; ip < teMai1.length; ip++) {
  teMai1[ip].onmouseover=function(){
     var bt1=$('.bt1',this)[0]
     animate(bt1,{width:218},360)
     var bl1=$('.bl1',this)[0];
     animate(bl1,{height:258},360)
     var bb1=$('.bb1',this)[0]
     animate(bb1,{width:218},360)
     var br1=$('.br1',this)[0];
     animate(br1,{height:258},360)
  }
   teMai1[ip].onmouseout=function(){
     var bt1=$('.bt1',this)[0]
     animate(bt1,{width:0},360)
     var bl1=$('.bl1',this)[0];
     animate(bl1,{height:0},360)
     var bb1=$('.bb1',this)[0]
     animate(bb1,{width:0},360)
     var br1=$('.br1',this)[0];
     animate(br1,{height:0},360)
  }
};

var baihuolin=$('.baihuowulin');
 function biankuang(kuang){
  baihuolin[kuang].onmouseover=function(){
     var bt2=$('.bt2',this)[0]
     animate(bt2,{width:200},360)
     var bl2=$('.bl2',this)[0];
     animate(bl2,{height:250},360)
     var bb2=$('.bb2',this)[0]
     animate(bb2,{width:200},360)
     var br2=$('.br2',this)[0];
     animate(br2,{height:250},360)
  }
   baihuolin[kuang].onmouseout=function(){
     var bt2=$('.bt2',this)[0]
     animate(bt2,{width:0},360)
     var bl2=$('.bl2',this)[0];
     animate(bl2,{height:0},360)
     var bb2=$('.bb2',this)[0]
     animate(bb2,{width:0},360)
     var br2=$('.br2',this)[0];
     animate(br2,{height:0},360)
  }
}
for (var ii = 0; ii < baihuolin.length; ii++) {
         biankuang(ii)
};
// 特卖边框动画开始

// 按需加载开始
var jiazai=$('.jiazai')
var avr=[];
var flagg=[];
var ind=0;
for (var i = 0; i < jiazai.length; i++) {
  avr.push(jiazai[i].offsetTop);
  flagg.push(true);
};
var liuh=document.documentElement.clientHeight;
on(window,"scroll",function(){
  var gunh=document.body.scrollTop||document.documentElement.scrollTop;
  for (var i = 0; i < avr.length; i++) {
  
  if(gunh+liuh+100>avr[i]&&flagg[i]==true){
    ind++;
    flagg[i]=false;
    var imgg=$('img',jiazai[i]);
    for(var kj=0;kj<imgg.length;kj++){
      imgg[kj].src=imgg[kj].getAttribute('asrc')
    }
  }
}
})
// 按需加载结束

// 二维码动画
var gj=0
var icon1=$('.icon1')[0];
var iconzhao=$('.iconzhao')[0];
var icon2=$('.icon2')[0];
var iconzhao1=$('.iconzhao1')[0];
iconzhao.style.display="none";
iconzhao1.style.display="none";
hover(icon1,function(){
    iconzhao.style.display="block";
      console.log("移入"+gj++)
},function(){
     iconzhao.style.display="none";
        console.log("移出"+gj++)
})
hover(icon2,function(){
  iconzhao1.style.display="block";
  console.log("移入"+gj++)
},function(){
  iconzhao1.style.display="none";
  console.log("移出"+gj++)
})
// 二维码动画结束

// 我的银泰开始
var kl=0;
var bao=$('.bao')[0];
var baozhao=$('.baozhao')[0];
baozhao.style.display="none";
hover(bao,function(){
  baozhao.style.display="block";
  console.log("移入"+kl++)
},function(){
  baozhao.style.display="none";
  console.log("移出"+kl++)
})
// 我的银泰结束

}
