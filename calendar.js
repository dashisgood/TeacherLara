monthstrings = ['January', 'February', 'March', 'April', 'May',
'June', 'July', 'August', 'September', 'October', 'November', 'December']


function make_calendar() {

	document.getElementById('month-header').innerHTML = monthstrings[d.getMonth()]
	document.getElementById('year-header').innerHTML = d.getYear() + 1900

	d.setDate(1);
	startday = d.getDay();

	z = new Date(d.getYear(), d.getMonth()+1, 0)
	daysinmonth = z.getDate()


	calendar = document.getElementById('calendar-body')

	weeks = []
	for(var i=0;i<6;i++){
		weeks.push(document.createElement('tr'))
	}

	for(var i=0; i<6; i++){
		for (var x=(i*7+1-startday); x<(i*7+8-startday); x++){			
			day_data = get_datedata(d.getYear(), d.getMonth(), x, daysinmonth, startday)
			weeks[i].appendChild(day_data);
		}
	}
		
	for (var n=0; n<6; n++){	
	
	calendar.appendChild(weeks[n]);

	}

};

function get_datedata(year, month, date, daysinmonth, startday){
	
	date_data = document.createElement('td')
	date_data.classList.add('calEntry');

	if((startday+date)%7===0 ||(startday+date-1)%7===0){
			date_data.classList.add('weekend');
	}		
	if (date>0 && date<=daysinmonth){
		


	date_data_header = document.createElement('p')
	date_data_header.innerHTML = date

	date_data_info = document.createElement('p')
	try	{date_data_info.innerHTML = calendar_data[year+1900][month][date]['data']}
	catch(err){}

	date_data_info.classList.add('date-text')
	date_data_info.classList.add('text-left')

	date_data.appendChild(date_data_header)
	date_data.appendChild(date_data_info)

	try{date_data.classList.add(calendar_data[year+1900][month][date]['class'])}


	catch(err){}
	}


	else {date_data.innerHTML = '';}
	      
	return date_data 
}

function next() {
	change_month(1)
};

function prev(){
	change_month(-1)
}


function change_month(direction) {

	calendar = document.getElementById('calendar-body')
	calendar.parentNode.removeChild(calendar)
	cal_body = document.createElement('tbody')
	cal_body.id = 'calendar-body'
	document.getElementById('calendar').appendChild(cal_body)
	d.setMonth(d.getMonth() + direction)
	make_calendar()
};


d = new Date();

heading = document.getElementById('month-header')
make_calendar()



