const BASE_URL =' https://steam-api-dot-cs-platform-306304.et.r.appspot.com';



/*Lay param tu url*/
const queryString   = window.location.search;
const urlParams     = new URLSearchParams(queryString);

const param_game    = urlParams.get('game');
console.log(param_game);

/*Get game by genres*/
const getGame = async () => {
    try {
        const url   = `${BASE_URL}/single-game/`+param_game;
        const res   = await fetch(url);
        const data  = await res.json();
        console.log("data game : "+param_game, data);
        renderGame(data.data);
        // return data;
    } catch (err) {
        console.log('error', err)
    }
}


if(param_game != null){
    getGame();
}

/*Gan data vao html*/

const renderGame = (data) => {
    console.log("Du lieu lay duoc",data);
    var html_render =  `
        <div class="game_wrapper">
            <div class="cover">
                <img src="`+data.header_image+`" >
                <div class="game_info">
                    <p>`+data.name+`</p>
                </div>
            </div>
        </div>
        <div>
            <table>
                <tr>
                    <td width=28%>Tên Trò Chơi</td>
                    <td>`+data.name+`</td>
                </tr>

                <tr>
                    <td>Mô tả</td>
                    <td>`+data.description+`</td>
                </tr>

                <tr>
                    <td>Giá</td>
                    <td>`+data.price+`$</td>
                </tr>

            <table>
        </div>
    `;

    console.log(html_render);
    const display_game = document.getElementById("render_display");
    display_game.innerHTML = html_render;
}
