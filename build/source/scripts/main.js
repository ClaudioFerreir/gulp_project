"use strict";document.addEventListener("DOMContentLoaded",function(){new bootstrap.Modal("#aviso-modal").show()});var ಠ_ಠ675=document.getElementById("btn-close-alert"),output=(ಠ_ಠ675.addEventListener("click",function(){setTimeout(function(){var ಠ_ಠ676=document.getElementById("mensagem-cookies");new bootstrap.Toast(ಠ_ಠ676).show()},3e3)}),document.querySelector(".output")),ಠ_ಠ686="https://servicodados.ibge.gov.br/api/v1/localidades/estados/",optionEstado=document.querySelector("#estado"),optionCidade=document.querySelector("#cidade");window.addEventListener("DOMContentLoaded",function(ಠ_ಠ676){console.log("DOM fully loaded and parsed"),fetch(ಠ_ಠ686).then(function(ಠ_ಠ676){return ಠ_ಠ676.json()}).then(function(ಠ_ಠ676){for(var ಠ_ಠ677=0;ಠ_ಠ677<ಠ_ಠ676.length;ಠ_ಠ677++){var ಠ_ಠ678=document.createElement("option");ಠ_ಠ678.ಠ_ಠ681=ಠ_ಠ676[ಠ_ಠ677].ಠ_ಠ687,ಠ_ಠ678.ಠ_ಠ682=ಠ_ಠ676[ಠ_ಠ677].ಠ_ಠ688,optionEstado.appendChild(ಠ_ಠ678)}}).catch(function(ಠ_ಠ676){console.log(ಠ_ಠ676)})}),optionEstado.addEventListener("change",function(ಠ_ಠ676){ಠ_ಠ676=ಠ_ಠ676.target.ಠ_ಠ681;fetch(ಠ_ಠ686+ಠ_ಠ676+"/municipios").then(function(ಠ_ಠ676){return ಠ_ಠ676.json()}).then(function(ಠ_ಠ676){for(var ಠ_ಠ677=0;ಠ_ಠ677<ಠ_ಠ676.length;ಠ_ಠ677++){var ಠ_ಠ678=document.createElement("option");ಠ_ಠ678.ಠ_ಠ681=ಠ_ಠ676[ಠ_ಠ677].ಠ_ಠ688,ಠ_ಠ678.ಠ_ಠ682=ಠ_ಠ676[ಠ_ಠ677].ಠ_ಠ688,optionCidade.appendChild(ಠ_ಠ678)}}).catch(function(ಠ_ಠ676){console.log(ಠ_ಠ676)})});