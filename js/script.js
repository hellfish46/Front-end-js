window.onload = function(){	
	var events = {
    "14531":{
      "region": "Днепропетровск",
      "city": "Днепр",
      "category": "Лагерь"
    },
    "535":{
      "region": "Днепропетровск",
      "city": "Днепр",
      "category": "Поход"
    },
    "6277":{
      "region": "Днепропетровск",
      "city": "Днепр",
      "category": "Лагерь"
    },
    "2239995":{
      "region": "Днепропетровск",
      "city": "Днепр",
      "category": "Лагерь"
    },
    "3248":{
      "region": "Днепропетровск",
      "city": "Днепр",
      "category": "Лагерь"
    },
    "364969":{
      "region": "Днепропетровск",
      "city": "Павлоград",
      "category": "Поход"
    },
    "1222":{
      "region": "Днепропетровск",
      "city": "Павлоград",
      "category": "Лагерь"
    },
    "5235777":{
      "region": "Днепропетровск",
      "city": "Павлоград",
      "category": "Лагерь"
    },
    "245567":{
      "region": "Днепропетровск",
      "city": "Днепродзержинск",
      "category": "Поход"
    },
    "1346788":{
      "region": "Днепропетровск",
      "city": "Днепродзержинск",
      "category": "Поход"
    },
    "2999":{
      "region": "Днепропетровск",
      "city": "Днепродзержинск",
      "category": "Лагерь"
    },
    "12556":{
      "region": "Одесса",
      "city": "Одесса",
      "category": "Поход"
    },
    "343":{
      "region": "Одесса",
      "city": "Черноморск",
      "category": "Лагерь"
    },
    "22":{
      "region": "Одесса",
      "city": "Одесса",
      "category": "Лагерь"
    },
    "661":{
      "region": "Одесса",
      "city": "Одесса",
      "category": "Поход"
    },
    "44":{
      "region": "Одесса",
      "city": "Черноморск",
      "category": "Поход"
    },
    "444":{
      "region": "Одесса",
      "city": "Черноморск",
      "category": "Лагерь"
    },
    "22124":{
      "region": "Одесса",
      "city": "Измаил",
      "category": "Лагерь"
    },
    "225788":{
      "region": "Одесса",
      "city": "Измаил",
      "category": "Поход"
    },
    "34534":{
      "region": "Одесса",
      "city": "Измаил",
      "category": "Поход"
    },
    "16666":{
      "region": "Одесса",
      "city": "Измаил",
      "category": "Лагерь"
    }
  };

region.onchange = city.onchange = category.onchange = function(e){
	 tickets.innerHTML = '';
	 
	 var indexOption = this.selectedIndex;
	 var text = this.options[indexOption].text;	 
	 
	 function getRegion(){
		 var indexOption = region.selectedIndex;
	     var text = region.options[indexOption].text;
		 return text;
	 };
	 function getCity(){
		 var indexOption = city.selectedIndex;
	     var text = city.options[indexOption].text;
		 return text;		 
	 };
	 function getCategory(){
		 var indexOption = category.selectedIndex;
	     var text = category.options[indexOption].text;
		 return text;		 
	 };
	 
	 var regionSelected = getRegion();
	 var citySelected = getCity();
	 var categorySelected = getCategory();
	 //alert(regionSelected + ": " + citySelected + ": "+ categorySelected)
	 //var table = document.querySelector('#tickets table');
	 var firstChecking = [false,false,false];
	 var countFalse = 0;
	 var secondChecking = [false,false,false];
	 
	 function blackBox(){
		 
		 for(var i = 0; i < firstChecking.length; i++ ){
			// if(firstChecking[i] == false) countFalse += 1;
			 if(firstChecking[i] == true && secondChecking[i] == false) return 'next iteration';
			 return 1;
		 }
		 
	 }
	 
	 
	 
	 //первая проверка, по-умолчанию ли находится option
	 var regionNoDefault = false;
	 var cityNoDefault = false;
	 var categoryNoDefault = false;
	 
	 //Вторая проверка, те что не по-умолчанию совпадают ли с карточкой(объектом)
	 var reg = false;
	 var cit = false;
	 var cat = false;
	 for(key in events){
		
		 if(regionSelected != 'Все области') {
			firstChecking[0] = true;			
			if(events[key]['region'] == regionSelected) secondChecking[0] = true;
		 }
		 if(citySelected != 'Все города'){
			 firstChecking[1] = true;
			 if(events[key]['city'] == citySelected) secondChecking[1] = true;
		 } 
		 if(categorySelected != 'Все категории'){
			 firstChecking[2] = true;
			 if(events[key]['category'] == categorySelected) {secondChecking[2] = true;}		 
		 }
		
		 
		alert(firstChecking + '::::' + secondChecking );
		 
		 if(blackBox() === 'next iteration') continue;
		 
		 /*if(countFalse == firstChecking.lenght) {
			 tickets.innerHTML = '';
		 }*/
		/* <table class="example">
					<tr>
						<td>ID:</td>
						<td></td>
					</tr>
					<tr>
						<td>Область:</td>
						<td></td>
					</tr>
					<tr>
						<td>Город:</td>
						<td></td>
					</tr>
					<tr>
						<td>Категория:</td>
						<td></td>
					</tr>
			</table>
		 */
		 
		 var exampleClone = document.querySelector('.example').cloneNode(true);
		 
		 exampleClone.rows[0].cells[1].innerHTML = key;
		 exampleClone.rows[1].cells[1].innerHTML = key['region'];
		 exampleClone.rows[2].cells[1].innerHTML = key['city'];
		 exampleClone.rows[3].cells[1].innerHTML = key['category']; 
		 };
		

		//tickets.appendChild(exampleClone);
		 
	 }
	 
	 
	 
	// var tableClone = table.cloneNode(true);
	// tickets.appendChild(tableClone);
	 
	 
	 
	
	
}
		
	
		
	/*
  "events": {
    "14531":{
      "region": "Днепропетровск",
      "city": "Днепр",
      "category": "Лагерь"
    },
    "535":{
      "region": "Днепропетровск",
      "city": "Днепр",
      "category": "Поход"
    },
    "6277":{
      "region": "Днепропетровск",
      "city": "Днепр",
      "category": "Лагерь"
    },
    "2239995":{
      "region": "Днепропетровск",
      "city": "Днепр",
      "category": "Лагерь"
    },
    "3248":{
      "region": "Днепропетровск",
      "city": "Днепр",
      "category": "Лагерь"
    },
    "364969":{
      "region": "Днепропетровск",
      "city": "Павлоград",
      "category": "Поход"
    },
    "1222":{
      "region": "Днепропетровск",
      "city": "Павлоград",
      "category": "Лагерь"
    },
    "5235777":{
      "region": "Днепропетровск",
      "city": "Павлоград",
      "category": "Лагерь"
    },
    "245567":{
      "region": "Днепропетровск",
      "city": "Днепродзержинск",
      "category": "Поход"
    },
    "1346788":{
      "region": "Днепропетровск",
      "city": "Днепродзержинск",
      "category": "Поход"
    },
    "2999":{
      "region": "Днепропетровск",
      "city": "Днепродзержинск",
      "category": "Лагерь"
    },
    "12556":{
      "region": "Одесса",
      "city": "Одесса",
      "category": "Поход"
    },
    "343":{
      "region": "Одесса",
      "city": "Черноморск",
      "category": "Лагерь"
    },
    "22":{
      "region": "Одесса",
      "city": "Одесса",
      "category": "Лагерь"
    },
    "661":{
      "region": "Одесса",
      "city": "Одесса",
      "category": "Поход"
    },
    "44":{
      "region": "Одесса",
      "city": "Черноморск",
      "category": "Поход"
    },
    "444":{
      "region": "Одесса",
      "city": "Черноморск",
      "category": "Лагерь"
    },
    "22124":{
      "region": "Одесса",
      "city": "Измаил",
      "category": "Лагерь"
    },
    "225788":{
      "region": "Одесса",
      "city": "Измаил",
      "category": "Поход"
    },
    "34534":{
      "region": "Одесса",
      "city": "Измаил",
      "category": "Поход"
    },
    "16666":{
      "region": "Одесса",
      "city": "Измаил",
      "category": "Лагерь"
    }
  }
}
}*/