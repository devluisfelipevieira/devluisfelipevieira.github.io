import {useEffect,useId,useRef} from 'react';

export function BorderLight(){
 const svgRef=useRef<SVGSVGElement>(null);
 const gradientId=useId();
 useEffect(()=>{
  const svg=svgRef.current!;
  const route=svg.querySelector<SVGPathElement>('.light-route')!;
  const ribbon=svg.querySelector<SVGPathElement>('.light-ribbon')!;
  const halo=svg.querySelector<SVGPathElement>('.light-halo')!;
  const gradient=svg.querySelector('linearGradient')!;
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  let perimeter=1,elapsed=0,last=0,frameId=0;
  const point=(d:number)=>route.getPointAtLength((d%perimeter+perimeter)%perimeter);
  function draw(){
   const head=(elapsed/7000%1)*perimeter,tail=Math.min(190,perimeter*.22),a:number[][]=[],b:number[][]=[];
   let end=point(head),tangent=[1,0];
   const samples=Math.ceil(tail/.3);
   for(let n=0;n<=samples;n++){
    const t=n/samples,d=head-tail+tail*t,p=point(d),before=point(d-.35),after=point(d+.35),dx=after.x-before.x,dy=after.y-before.y,len=Math.hypot(dx,dy)||1,half=.03+2.15*Math.pow(t,1.35);
    a.push([p.x-dy/len*half,p.y+dx/len*half]);b.push([p.x+dy/len*half,p.y-dx/len*half]);end=p;tangent=[dx/len,dy/len];
   }
   const tip=[end.x+tangent[0]*1.25,end.y+tangent[1]*1.25];
   const path='M '+a.map(p=>p.join(',')).join(' L ')+' Q '+tip.join(',')+' '+b[b.length-1].join(',')+' L '+b.slice(0,-1).reverse().map(p=>p.join(',')).join(' L ')+' Z';
   ribbon.setAttribute('d',path);halo.setAttribute('d',path);
   const start=point(head-tail);
   for(const [name,value] of Object.entries({x1:start.x,y1:start.y,x2:end.x,y2:end.y}))gradient.setAttribute(name,String(value));
  }
  function resize(){
   const {width:w,height:h}=svg.getBoundingClientRect(),i=.5,r=5.5;
   route.setAttribute('d',`M ${i+r} ${i} H ${w-i-r} A ${r} ${r} 0 0 1 ${w-i} ${i+r} V ${h-i-r} A ${r} ${r} 0 0 1 ${w-i-r} ${h-i} H ${i+r} A ${r} ${r} 0 0 1 ${i} ${h-i-r} V ${i+r} A ${r} ${r} 0 0 1 ${i+r} ${i}`);
   perimeter=route.getTotalLength();draw();
  }
  function frame(now:number){
   if(last&&!document.hidden&&!svg.parentElement?.matches(':hover,:focus-within')){elapsed+=Math.min(now-last,60);draw()}
   last=now;frameId=requestAnimationFrame(frame);
  }
  function motion(){cancelAnimationFrame(frameId);last=0;if(!reduced.matches)frameId=requestAnimationFrame(frame)}
  const observer=new ResizeObserver(resize);observer.observe(svg);resize();motion();reduced.addEventListener('change',motion);
  return ()=>{observer.disconnect();cancelAnimationFrame(frameId);reduced.removeEventListener('change',motion)};
 },[]);
 return <svg ref={svgRef} className="supriti-border-light" aria-hidden="true" focusable="false"><defs><linearGradient id={gradientId} gradientUnits="userSpaceOnUse"><stop stopColor="#459ee9" stopOpacity="0"/><stop offset=".3" stopColor="#529edc" stopOpacity=".3"/><stop offset=".72" stopColor="#83c5ee" stopOpacity=".8"/><stop offset="1" stopColor="#addcfa"/></linearGradient></defs><path className="light-route" fill="none" stroke="none"/><path className="light-halo" fill={`url(#${gradientId})`}/><path className="light-ribbon" fill={`url(#${gradientId})`}/></svg>;
}
