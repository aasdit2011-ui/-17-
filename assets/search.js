
const pages = [
 ["林逸","../sites/evan/index.html","林逸个人网站"],
 ["Evan Lin","../sites/evan/index.html","林逸个人网站"],
 ["照片","../sites/evan/photo-1017.html","林逸的最后一张照片"],
 ["10月17日","../sites/evan/journal-1017.html","被删除的日志"],
 ["Harbor Tower","../sites/harbor/index.html","Harbor Tower 官方网站"],
 ["17","../archive/level17.html","Level 17 档案"],
 ["第17层","../archive/level17.html","Level 17 档案"],
 ["灰港日报","../sites/chronicle/index.html","灰港日报"],
 ["Mara Voss","../sites/voss/index.html","记者 Mara Voss 的旧网站"],
 ["Mara","../sites/voss/index.html","记者 Mara Voss 的旧网站"],
 ["陈诺","../people/chen-nuo.html","陈诺人物档案"],
 ["林伟","../people/lin-wei.html","林伟人物档案"],
 ["Adrian Vale","../people/adrian-vale.html","Adrian Vale 人物档案"],
 ["2017","../sites/chronicle/article-2017.html","2017年翻修报道"],
 ["03:17","../archive/0317.html","03:17 隐藏档案"],
 ["171109","../archive/171109.html","数字档案"],
 ["10/17","../archive/day-1017.html","2019年10月17日时间线"]
];
const here = location.pathname.includes("/sites/") || location.pathname.includes("/people/") || location.pathname.includes("/archive/") ? "../.." : ".";
function searchIndex(q){
  q=q.trim().toLowerCase();
  return pages.filter(x=>x[0].toLowerCase()===q || x[0].toLowerCase().includes(q));
}
function wireSearch(){
 const form=document.querySelector("[data-search]");
 if(!form)return;
 const input=form.querySelector("input"), out=form.parentElement.querySelector(".result");
 form.addEventListener("submit",e=>{
  e.preventDefault(); const q=input.value.trim(); const r=searchIndex(q);
  if(!q){out.innerHTML="<p class='small'>请输入关键词。</p>";return}
  out.innerHTML=r.length?r.map(x=>`<a href="${x[1]}"><b>${x[0]}</b><br><span class="small">${x[2]}</span></a>`).join(""):`<p class="small">没有找到“${q}”。</p>`;
 });
}
document.addEventListener("DOMContentLoaded",wireSearch);
