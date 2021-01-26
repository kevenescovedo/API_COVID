async function brazil(request,response) {
    var responseBrazilCovidApi = await fetch("https://covid19-brazil-api.now.sh/api/report/v1/brazil");
    
   var jsonbrazilCovidApi = await responseBrazilCovidApi.json();
   var data = jsonbrazilCovidApi.data
 
    response.json({
       Api: " Api Infocovid feita por Keven Escovedo",
       "Pais" : "Brasil",
       'Casos' :  data.cases, 
       "Confirmados":   data.confirmed,
       "Mortes" : data.deaths,
       "Recuperados" : data.recovered,
       "Ultima Atualização":  data.updated_at


    });
    
    }
export default brazil
