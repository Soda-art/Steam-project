
const BASE_URL =' https://steam-api-dot-cs-platform-306304.et.r.appspot.com';


/*Lay param tu url*/
const queryString   = window.location.search;
const urlParams     = new URLSearchParams(queryString);

const param_genres  = urlParams.get('genres');
console.log(param_genres);


/*Lay danh sach game*/
const getAllGameData= async () => {
    try {
        const url   = `${BASE_URL}/games`;
        const res   = await fetch(url);
        const data  = await res.json();
        renderGame(data.data);
        // return data;
    } catch (err) {
        console.log('error', err)
    }
}
/*Get game by genres*/
const getGameByGenres = async () => {
    try {
        const url   = `${BASE_URL}/games?genres=`+param_genres;
        const res   = await fetch(url);
        const data  = await res.json();
        console.log("data genres : "+param_genres, data);
        renderGame(data.data);
        // return data;
    } catch (err) {
        console.log('error', err)
    }
}

if(param_genres == null){
    getAllGameData();
}else{
    getGameByGenres();
}


/*Gan data vao html*/

const renderGame = (data) => {
    var html_render = '';

    console.log("Du lieu lay duoc",data);
    console.log("Do dai",data.length);
    for (let i = 0; i < data.length; i++) {
        html_render +=  `
        <div class="game_wrapper">
            <div class="cover">
                <img src="`+data[i].header_image+`" >
                <a href="detailgame.html?game=`+data[i].appid+`">
                <div class="game_info">
                    <p>`+data[i].name+`</p>
                    <p></p>
                </div>
                </a>
            </div>
        </div>
        `;
    }

    console.log(html_render);
    const display_game = document.getElementById("render_display");
    display_game.innerHTML = html_render;
}
