console.log("Let's get this party started!");
const $userInput = $('#gifSearch');
const $gifArea = $('#gif-area');

async function findGif(e) {
    e.preventDefault();
    let searchTerm = $userInput.val();
    $userInput.val(''); //clear search bar
    const res = await axios.get('http://api.giphy.com/v1/gifs/search', {params: {q: searchTerm, api_key: 'IEcSKrwLn9BmnVuOMU4MLDvbALPbl4zV'}});
    addGif(res.data);

}

function addGif(res) {
    //select random gif
    let numResults = res.data.length;
    console.log(numResults);
    if(numResults) {
        let ranNum = Math.floor(Math.random() * numResults);
        let $newCol = $('<div>');
    let $newGif = $('<img>', {src: res.data[ranNum].images.original.url});
    console.log($newGif.src);
    $newCol.append($newGif);
    $gifArea.append($newCol);
    }
}

$('#submit').on('click', findGif);

//remove all gifs if remove btn is clicked
$('#removeBtn').on("click", function() {
    $('div').remove();
});