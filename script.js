// La fecha de nacimiento se utiliza exclusivamente para el contador y no se muestra en la interfaz.
// Hora local de Colombia (UTC-5). El cálculo usa UTC para evitar errores por zona horaria.
const birthUTC=Date.UTC(2002,6,23,8,0,0);
function updateAge(){
 const now=new Date();const stamp=now.getTime();
 let year=now.getUTCFullYear()-2002;
 let anniversary=Date.UTC(2002+year,6,23,8);
 if(stamp<anniversary){year--;anniversary=Date.UTC(2002+year,6,23,8)}
 let month=0;
 while(month<12){let d=new Date(anniversary);d.setUTCMonth(d.getUTCMonth()+1);if(d.getTime()>stamp)break;anniversary=d.getTime();month++}
 const remainder=stamp-anniversary;
 const day=Math.floor(remainder/86400000);
 const hour=Math.floor(remainder%86400000/3600000);
 const minute=Math.floor(remainder%3600000/60000);
 for(const [id,val] of Object.entries({years:year,months:month,days:day,hours:hour,minutes:minute}))document.getElementById(id).textContent=id==='years'?val:String(val).padStart(2,'0');
}
updateAge();setInterval(updateAge,1000);document.getElementById('current-year').textContent=new Date().getFullYear();
const meanings={publica:'Salud pública: el eje que conecta mis intereses clínicos, científicos y comunitarios.',psiquiatria:'Psiquiatría · Comprender la salud mental y sus contextos.',adicciones:'Medicina de adicciones · Interés en el consumo de sustancias y sus abordajes.',precision:'Medicina de precisión · Explorar cómo adaptar decisiones a perfiles individuales.',ia:'Medicina + inteligencia artificial · Nuevas herramientas para la práctica y la investigación en salud.'};
const detail=document.getElementById('topic-detail');document.querySelectorAll('.node').forEach(node=>{node.addEventListener('click',()=>{document.querySelectorAll('.node').forEach(n=>n.classList.remove('active'));node.classList.add('active');detail.textContent=meanings[node.dataset.topic]})});
