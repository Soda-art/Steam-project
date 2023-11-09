
const inputSearch   = document.getElementById("store_nav_search_term");
const searchQuery   = inputSearch.value;

/*Lay danh sach game theo noi dung search*/
const searchAction = async () => {

    const inputSearch   = document.getElementById("store_nav_search_term");
    const searchQuery   = inputSearch.value;
    console.log(searchQuery);

    try {
        const url   = `${BASE_URL}/games?q=`+searchQuery;
        const res   = await fetch(url);
        const data  = await res.json();
        renderSearchGame(data.data);
    } catch (err) {
        console.log('error', err);
    }
}

inputSearch.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    searchAction();
  }
});

/*Gan data vao html*/

const renderSearchGame = (data) => {
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
