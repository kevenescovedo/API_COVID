async function global(request, response) {
    let globalcases = await fetch("https://api.covid19api.com/summary");
    let json = await globalcases.json();
    response.json({
        Api: " Api Infocovid feita por Keven Escovedo",
        Pais : "Global",
        NovosCasosConfirmados: json.Global.NewConfirmed,
    
        ToTalConfirmado:  json.Global.ToTalConfirmed,
        NovasMortes:  json.Global.NewDeaths,
        ToTalMortes:  json.Global.TotalDeaths,
        NovasRecuperados:  json.Global.NewRecovered,
        ToTalRecuperados:  json.Global.TotalRecovered,
    });
    
    
    }
export default global
