
const city_name_search = document.getElementById('city_name_search');
const sumbit_btn = document.getElementById('sumbit_btn');
const city_name = document.getElementById('city_name_output');
const temperature = document.getElementById('temp');
const datahide = document.querySelector('.middle_layer');


const getInfo = async(event)=>{
    event.preventDefault();
    const city_val = city_name_search.value; 
    if(city_val === ""){
        city_name.innerText = "Please! Write the city name before search";
        datahide.classList.add('data_hide');
    }else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${city_val}&units=metric&appid=a08f381254c3e6fe74f2bd613284f215`
            const storeData = await fetch(url);
            const ObjData = await storeData.json();
            const ArrData = [ObjData];
            console.log(ArrData);
            city_name.innerText=`${ArrData[0].name}, ${ArrData[0].sys.country}`;
            temperature.innerText= ArrData[0].main.temp;
            datahide.classList.remove('data_hide');
        }catch{
            city_name.innerText = "Please! Enter the City Name Properly"
            datahide.classList.add('data_hide');
        }
    }


}

addEventListener("click",getInfo);



