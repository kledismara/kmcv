function perkthe(data){
  var x=data;

var teksti = ` <h3> ${x[5].a} </h3> 
               <h4>${x[0].emriMbiemri} <br>
                  ${x[0].kombesia} <br> 
                  ${x[0].cel} <br>
                   ${x[0].email} <br> 
                   ${x[0].datelindja} <br>
                    ${x[0].gjinia}
                   </h4>`;
document.getElementById('tedhenatpersonale').innerHTML=teksti;

var arsim= `<h3 style="text-align: center">${x[5].b}</h3>
            <h4>${x[1].map(ktheArsim)}</h4> <br>`;
document.getElementById('arsimimi').innerHTML=arsim;



var tedhenatre = ` <h3>${x[5].c}</h3> 
                   <h5>${x[2].map(ktheGjuheTeHuaj)}</h5>
                   <h5><li>${x[3].lejeDrejtimi}</li></h5>
`;
document.getElementById('tedhena3').innerHTML=tedhenatre;




var programim = "<h4>"+x[5].d+" </h4> <br> <table> ";


 

  programim+="<tr>";
  for(var j=0; j<18; j++){
       if(j%6==0)
       { 
         programim+="</tr> <tr>";
       }
      
       programim=programim + "<td>"+x[4][j].emertimi+" "+x[4][j].nota+"</td>";
  };
  programim+="</tr>";     

programim+="</table>";
console.log(programim);

document.getElementById('programimi').innerHTML=programim;

var viti = new Date();

document.getElementById('footeri').innerHTML=`<h5> ${x[5].e} &#169; ${viti.getFullYear()} </h5>`;
}

