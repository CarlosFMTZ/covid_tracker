let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    let text = document.getElementById("getText").value;

    fetch('https://api.covid19api.com/summary')
        .then((covidData) => {
            return covidData.json();
        })

    .then((getData) => {
        console.log(getData);
        var content = document.querySelector(".data");
        var box = content.lastElementChild;

        while (box) {
            content.removeChild(box);
            box.content.lastElementChild;
        }

        var index = 0;
        for (var i = 0; i < 185; i++) {
            if (getData.Countries[i].Country.toLowerCase() == text.toLowerCase()) {
                index = i;
                break;
            }
        }
        let data = document.querySelector(".data");
        data.innerHTML = `<div class="box">
                                <div class ="head">
                                <span>Casos coronavirus en ${getData.Countries[index].Country}</span>
                                </div>
                                <div class="total">
                                <div><p>Total de confirmados</p>${getData.Countries[index].TotalConfirmed}</div>
                                <div><p>Total de muertes</p>${getData.Countries[index].TotalDeaths}</div>
                                <div><p>Total de recuperados</p>${getData.Countries[index].TotalRecovered}</div>
                                </div>
                                <div class="new">
                                <div><p>Nuevos confirmados</p>${getData.Countries[index].NewConfirmed}</div>
                                <div><p>Nuevas muertes</p>${getData.Countries[index].NewDeaths}</div>
                                <div><p>Nuevos recuperados</p>${getData.Countries[index].NewRecovered}</div>
                                </div>`;


    })
})