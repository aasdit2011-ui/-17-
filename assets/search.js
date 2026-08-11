
const pages = [
  {keys:["林逸","Evan Lin"], url:"sites/evan/index.html", title:"林逸个人网站"},
  {keys:["照片","摄影","Untitled_1017"], url:"sites/evan/photo-1017.html", title:"林逸的最后一张照片"},
  {keys:["10月17日","2019/10/17","2019-10-17"], url:"sites/evan/journal-1017.html", title:"2019/10/17 日志"},
  {keys:["Harbor Tower","Harbor","塔"], url:"sites/harbor/index.html", title:"Harbor Tower 官方网站"},
  {keys:["17","17层","第17层","LEVEL 17","Level 17"], url:"archive/found-17.html", title:"17 · 调查继续"},
  {keys:["灰港日报","Greyhaven Chronicle","日报"], url:"sites/chronicle/index.html", title:"灰港日报档案"},
  {keys:["2017","翻修"], url:"sites/chronicle/article-2017.html", title:"2017年 Harbor Tower 翻修报道"},
  {keys:["失踪","林逸失踪","2019/10/21"], url:"sites/chronicle/missing.html", title:"林逸失踪案报道"},
  {keys:["Mara Voss","Mara","记者"], url:"sites/voss/index.html", title:"Mara Voss 记者网站"},
  {keys:["陈诺","Chen Nuo"], url:"people/chen-nuo.html", title:"陈诺人物档案"},
  {keys:["林伟","Lin Wei"], url:"people/lin-wei.html", title:"林伟人物档案"},
  {keys:["Adrian Vale","A.VALE","Vale"], url:"people/adrian-vale.html", title:"Adrian Vale 人物档案"},
  {keys:["S-3","S3","service stairwell"], url:"archive/level17.html", title:"LEVEL 17 / S-3 内部档案"},
  {keys:["03:17","0317"], url:"archive/0317.html", title:"03:17 服务器访问记录"},
  {keys:["171109","NS-H17-1109"], url:"archive/171109.html", title:"NS-H17-1109 数字档案"},
  {keys:["10/17","时间线","timeline"], url:"archive/day-1017.html", title:"2019/10/17 时间线"},
  {keys:["03:21","East Terminal","Greyhaven East Terminal"], url:"archive/after-0317.html", title:"03:17 后续服务器日志"}
];

function normalize(s){
  return s.trim().toLowerCase().replace(/\s+/g,"");
}
function searchIndex(q){
  const n=normalize(q);
  if(!n) return [];
  return pages.filter(p=>p.keys.some(k=>normalize(k)===n || normalize(k).includes(n) || n.includes(normalize(k))));
}
function wireSearch(){
  const form=document.querySelector("[data-search]");
  if(!form)return;
  const input=form.querySelector("input");
  const out=document.querySelector(".result");
  const run=()=>{
    const q=input.value.trim();
    if(!q){out.innerHTML="<p class='small'>请输入关键词。</p>";return;}
    const results=searchIndex(q);
    if(!results.length){
      out.innerHTML=`<div class="notice warning"><b>没有公开结果</b><br>“${q}”不在公开索引中。也许它需要与其他线索组合。</div>`;
      return;
    }
    out.innerHTML=results.map(r=>`<a class="search-result" href="${r.url}"><b>${r.title}</b><br><span class="small">关键词命中：${q}</span></a>`).join("");
  };
  form.addEventListener("submit",e=>{e.preventDefault();run();});
  input.addEventListener("keydown",e=>{if(e.key==="Enter"){e.preventDefault();run();}});
}
document.addEventListener("DOMContentLoaded",wireSearch);
