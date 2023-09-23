function showResult(){
    const searchBar = document.querySelector('#location');
    const selection = document.querySelector('#place');
    // console.log(selection.options[ selection.selectedIndex ].value);
    searchBar.value = selection.options[ selection.selectedIndex ].value;
}