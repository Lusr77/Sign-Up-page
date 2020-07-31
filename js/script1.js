function DatendTime()
{
let today = new Date();
let date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
document.getElementById("dt").innerHTML=date;
let h=today.getHours();
let m=today.getMinutes();
let s=today.getSeconds();
m=(m<10?"0"+m:m);
s=(s<10?"0"+s:s);
document.getElementById("dtntim").innerHTML=h+":"+m+":"+s;
setTimeout(function () {
DatendTime()}, 500);
}
DatendTime();

