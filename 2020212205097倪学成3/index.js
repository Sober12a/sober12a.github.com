/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2022-03-09 08:49:23
 * @version $Id$
 */
  var d=new Date()
  var div = document.getElementById("m-box");
  var parent=document.getElementById("parent-list")
  var p1 = document.getElementById("p1")
  var p2 = document.getElementById("p2")
  var p3 = document.getElementById("p3")
  var p4 = document.getElementById("p4")
  var p5 = document.getElementById("p5")
  var p6 = document.getElementById("p6")
  var p7 = document.getElementById("p7")
 p1.onmousedown = function(){
      this.style.color="red"
    }
 p2.onmousedown = function(){
     document.getElementById("post-0").innerHTML=d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate()
    }
p3.onmousedown = function(){
      this.classList.add("fn-active")
    }
 p4.onmousedown = function(){
     var child=document.getElementById("p8");
     parent.removeChild(child);
    }
 p5.onmousedown = function(){
      window.open("https://www.taobao.com/") 
    }
 p6.onmousedown = function(){
       var para=document.createElement("li");
       var node=document.createTextNode("p9");
       para.appendChild(node);
       var element=document.getElementById("parent-list");
       element.appendChild(para);
    }
 p7.onmousedown = function(){
       div.style.width= window.innerWidth
    }
document.getElementById("parent-list").addEventListener("click",function(e) {
// e.target是被点击的元素!
// 如果被点击的是li元素
if(e.target && e.target.nodeName == "LI") {
  // 找到目标，输出ID!
  alert(e.target.id.replace("post-"));
}
});