const showResult = () =>{
    const selection = document.querySelector('#place');
    const searchBar = document.querySelector('#location');
    searchBar.value = selection.value;
}