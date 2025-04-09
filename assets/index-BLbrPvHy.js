(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const i=document.getElementById("from"),a=document.getElementById("to"),l=document.getElementById("amount"),u=document.getElementById("result"),d=document.getElementById("convert");fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json").then(r=>r.json()).then(r=>{Object.keys(r).sort().forEach(n=>{const o=document.createElement("option"),e=document.createElement("option");o.value=e.value=n,o.textContent=e.textContent=n.toUpperCase(),i.appendChild(o),a.appendChild(e)}),i.value="btc",a.value="rub"});d.addEventListener("click",()=>{const r=i.value.toLowerCase(),c=a.value.toLowerCase(),n=parseFloat(l.value);if(isNaN(n)||n<=0){u.textContent="Введите корректную сумму.";return}fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${r}.json`).then(o=>o.json()).then(o=>{const e=o[r][c],t=n*e;u.textContent=`${n} ${r.toUpperCase()} = ${t.toFixed(2)} ${c.toUpperCase()}`}).catch(o=>{console.error(o),u.textContent="Ошибка при загрузке курса."})});
