function showResult() {
    const searchBar = document.querySelector('#location');
    const selection = document.querySelector('#place');
    const container = document.querySelector('.search')
    // console.log(selection.options[ selection.selectedIndex ].value);
    searchBar.value = selection.options[selection.selectedIndex].value;
    if (selection.options[selection.selectedIndex].value == "Kalyani") {
        container.innerHTML = '<!-- search result --><div class="searchResult" ><div class="leftSection col"><h1>Deepak Malhotra</h1><p>Contact: +91 6598326478<br>Address: Some Street, Moon<br>With 6 years of experience of recycling wastes</p></div><div class="middleSection col"><h1>Sell Waste</h1><a href="tel:6598326478"><button id="sellBtn">Contact To Sell</button></a></div><img src="img/worker1.jpg" class="img-fluid col" alt="factory 1"></div><!-- search result --><div class="searchResult"><div class="leftSection col"><h1>Rajiv Deshmukh</h1><p>Contact: +91 1565798423<br>Address: Some Street, Jupitar<br>With 8 years of experience of recycling wastes</p></div><div class="middleSection col"> <h1>Sell Waste</h1><a href="tel:1565798423"><button id="sellBtn">Contact To Sell</button></a></div><img src="img/worker2.jpg" class="img img-fluid col" alt="factory 1"></div>';
    }
    else if(selection.options[selection.selectedIndex].value == "Krishnanagar"){
        container.innerHTML = ' <!-- search result --><div class="searchResult"><div class="leftSection col"><h1>Alok Tiwari</h1><p>Contact: +91 2356498715<br>Address: Some Street, Uranus<br>With 2 years of experience of recycling wastes</p></div><div class="middleSection col"><h1>Sell Waste</h1><a href="tel:2356498715"><button id="sellBtn">Contact To Sell</button></a></div><img src="img/worker3.jpg" class="img-fluid col" alt="factory 1"></div><!-- search result --><div class="searchResult"><div class="leftSection col"><h1>Sunil Kumar</h1><p>Contact: +91 9784563215<br>Address: Some Street, Pluto<br>With 5 years of experience of recycling wastes</p></div><div class="middleSection col"><h1>Sell Waste</h1><a href="tel:9784563215"><button id="sellBtn">Contact To Sell</button></a></div><img src="img/worker4.jpg" class="img-fluid col" alt="factory 1"></div>';
    }

    else if(selection.options[selection.selectedIndex].value == "Kolkata"){
        container.innerHTML = ' <!-- search result --><div class="searchResult"><div class="leftSection col"><h1>Karan Rajan</h1><p>Contact: +91 5649871235<br>Address: Some Street, Sun<br>With 15 years of experience of recycling wastes</p></div><div class="middleSection col"><h1>Sell Waste</h1><a href="tel:5649871235"><button id="sellBtn">Contact To Sell</button></a></div><img src="img/worker5.jpg" class="img-fluid col" alt="factory 1"></div><!-- search result --><div class="searchResult"><div class="leftSection col"><h1>Rakesh Sharma</h1><p>Contact: +91 3469782654<br>Address: Some Street, Saturn<br>With 4 years of experience of recycling wastes</p></div><div class="middleSection col"><h1>Sell Waste</h1><a href="tel:3469782654"><button id="sellBtn">Contact To Sell</button></a></div><img src="img/worker6.jpg" class="img-fluid col" alt="factory 1"></div>';
    }
}