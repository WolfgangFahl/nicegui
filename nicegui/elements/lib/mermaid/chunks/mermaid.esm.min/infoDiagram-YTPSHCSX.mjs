import{a as p}from"./chunk-YFFLADYN.mjs";import"./chunk-VRGDDFRA.mjs";import"./chunk-E4AWDUZE.mjs";import{a as s}from"./chunk-OUDNNCD4.mjs";import{a}from"./chunk-WVHPJQMP.mjs";import{M as n,b as o}from"./chunk-NQURTBEV.mjs";import"./chunk-C7NU23FD.mjs";import"./chunk-DZFIHE2J.mjs";import"./chunk-D3PZO57J.mjs";import"./chunk-BKDDFIKN.mjs";import"./chunk-YPUTD6PB.mjs";import"./chunk-6BY5RJGC.mjs";import{a as r}from"./chunk-GTKDMUJJ.mjs";var m={parse:r(async t=>{let e=await p("info",t);o.debug(e)},"parse")};var c={version:s},D=r(()=>c.version,"getVersion"),f={getVersion:D};var y=r((t,e,d)=>{o.debug(`rendering info diagram
`+t);let i=a(e);n(i,100,400,!0),i.append("g").append("text").attr("x",100).attr("y",40).attr("class","version").attr("font-size",32).style("text-anchor","middle").text(`v${d}`)},"draw"),g={draw:y};var T={parser:m,db:f,renderer:g};export{T as diagram};