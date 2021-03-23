'use strict';

let WorkingHours = ['06:00 AM','07:00 AM','08:00 AM','09:00 AM','10:00 AM','11:00 AM','12:00 PM','01:00 PM','02:00 PM','03:00 PM','04:00 PM','05:00 PM','06:00 PM','07:00 PM'];

function MainLocation(Location,MinCust,MaxCust,AvgCookie){
  this.Location = Location;
  this.MinCust = MinCust;
  this.MaxCust = MaxCust;
  this.AvgCookie = AvgCookie;
  this.AvgCust=0;
  this.total=0;
  this.CookiesPerHour=[];
  this.Results=[];
}

MainLocation.prototype.findAvgCust= function(){
  let min=this.MinCust;
  let max=this.MaxCust;
  this.AvgCust = Math.floor(Math.random() * (max - min + 1) + min);
  return Math.ceil(this.AvgCust);
};
MainLocation.prototype.findCookiesPerHour= function(){
  for (let i=0; i< WorkingHours.length;i++){
    this.findAvgCust();
    this.CookiesPerHour[i]=Math.ceil(this.AvgCust*this.AvgCookie);
    this.total= this.total+this.CookiesPerHour[i];
    this.Results=this.CookiesPerHour;
  }
};

const container = document.getElementById('First');
const Table = document.createElement('table');
container.appendChild(Table);
const trEl = document.createElement ('tr');
Table.appendChild(trEl);
const first = document.createElement('th');
trEl.appendChild(first);
first.textContent= '    ';
for (let i=0; i<WorkingHours.length;i++){
  const FirstRow = document.createElement('th');
  trEl.appendChild(FirstRow);
  FirstRow.textContent= WorkingHours [i];
}
const Last = document.createElement('th');
trEl.appendChild(Last);
Last.textContent= 'Daily Location Total';

MainLocation.prototype.creatTable= function(){
  const trEl2 = document.createElement ('tr');
  Table.appendChild(trEl2);
  const Loc =document.createElement('td');
  trEl2.appendChild(Loc);
  Loc.textContent= this.Location;
  for (let i=0; i<WorkingHours.length;i++){

    const Mid =document.createElement('td');
    trEl2.appendChild(Mid);
    Mid.textContent= this.Results[i];
  }
  const total =document.createElement('td');
  trEl2.appendChild(total);
  total.textContent= this.total;
};


// cooling:

const Seattle = new MainLocation ('Seattle',23,65,6.3);
Seattle.findAvgCust();
Seattle.findCookiesPerHour();
// Seattle.displaying();
Seattle.creatTable();


const Tokyo = new MainLocation ('Tokyo',3,24,1.2);
Tokyo.findAvgCust();
Tokyo.findCookiesPerHour();
// Tokyo.displaying();


const Dubai = new MainLocation ('Dubai',11,38,3.7);
Dubai.findAvgCust();
Dubai.findCookiesPerHour();
// Dubai.displaying();
Dubai.creatTable();


const Paris = new MainLocation ('Paris'	,20, 38, 2.3);
Paris.findAvgCust();
Paris.findCookiesPerHour();
// Paris.displaying();
Paris.creatTable();


const Lima = new MainLocation ('Lima',2,16,4.6);
Lima.findAvgCust();
Lima.findCookiesPerHour();
// Lima.displaying();
Lima.creatTable();




