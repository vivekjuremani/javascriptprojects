document.querySelector(".btn").addEventListener("click",function()
{
if(document.querySelector(".btn").innerHTML=='<i class="fa fa-bars fa-2x"> </i>')
{document.querySelector(".links").style.left='0%';
document.querySelector(".btn").innerHTML='<i class="fa fa-times fa-2x"> </i>';}
else
{
  document.querySelector(".links").style.left='-100%';
  document.querySelector(".btn").innerHTML='<i class="fa fa-bars fa-2x"> </i>';
}
});
