function showResult() {
    // const searchBar = document.querySelector('#location');
    const selection = document.querySelector('#place');
    const container = document.querySelector('.search')
    // console.log(selection.options[ selection.selectedIndex ].value);
    // searchBar.value = selection.options[selection.selectedIndex].value;
    if (selection.options[selection.selectedIndex].value == "Kalyani") {
        // const worker1 = "static/img/worker1.jpg";
        container.innerHTML = '<!-- search result --><div class="searchResult" ><div class="leftSection col"><h1>Deepak Malhotra</h1><p>Contact: +91 9832115836<br>Address: Some Street, Moon<br>With 6 years of experience of recycling wastes</p></div><div class="middleSection col"><h1>Sell Waste</h1><a href="tel:9832115836"><button id="sellBtn">Contact To Sell</button></a></div><img src="img/worker1.jpg" class="img-fluid col" alt="factory 1"></div><!-- search result --><div class="searchResult"><div class="leftSection col"><h1>Rajiv Deshmukh</h1><p>Contact: +91 93952258566<br>Address: Some Street, Jupitar<br>With 8 years of experience of recycling wastes</p></div><div class="middleSection col"> <h1>Sell Waste</h1><a href="tel:93952258566"><button id="sellBtn">Contact To Sell</button></a></div><img src="img/worker2.jpg" class="img img-fluid col" alt="factory 1"></div><br><center><a href="https://akash-nath29.github.io/kalyani-analytics/">View Analytics</a></center>';
    }
    else if(selection.options[selection.selectedIndex].value == "Krishnanagar"){
        container.innerHTML = ' <!-- search result --><div class="searchResult"><div class="leftSection col"><h1>Alok Tiwari</h1><p>Contact: +91 6901774002<br>Address: Some Street, Uranus<br>With 2 years of experience of recycling wastes</p></div><div class="middleSection col"><h1>Sell Waste</h1><a href="tel:6901774002"><button id="sellBtn">Contact To Sell</button></a></div><img src="img/worker3.jpg" class="img-fluid col" alt="factory 1"></div><!-- search result --><div class="searchResult"><div class="leftSection col"><h1>Sunil Kumar</h1><p>Contact: +91 7439611385<br>Address: Some Street, Pluto<br>With 5 years of experience of recycling wastes</p></div><div class="middleSection col"><h1>Sell Waste</h1><a href="tel:7439611385"><button id="sellBtn">Contact To Sell</button></a></div><img src="img/worker4.jpg" class="img-fluid col" alt="factory 1"></div><br><center><a href="https://akash-nath29.github.io/krishnagar-analytics/">View Analytics</a></center>';
    }

    else if(selection.options[selection.selectedIndex].value == "Kolkata"){
        container.innerHTML = ' <!-- search result --><div class="searchResult"><div class="leftSection col"><h1>Karan Rajan</h1><p>Contact: +91 6290320670<br>Address: Some Street, Sun<br>With 15 years of experience of recycling wastes</p></div><div class="middleSection col"><h1>Sell Waste</h1><a href="tel:6290320670"><button id="sellBtn">Contact To Sell</button></a></div><img src="img/worker5.jpg" class="img-fluid col" alt="factory 1"></div><!-- search result --><div class="searchResult"><div class="leftSection col"><h1>Rakesh Sharma</h1><p>Contact: +91 7439207218<br>Address: Some Street, Saturn<br>With 4 years of experience of recycling wastes</p></div><div class="middleSection col"><h1>Sell Waste</h1><a href="tel:7439207218"><button id="sellBtn">Contact To Sell</button></a></div><img src="img/worker6.jpg" class="img-fluid col" alt="factory 1"></div><br><center><a href="https://akash-nath29.github.io/kolkata-analytics/">View Analytics</a></center>';
    }
}
