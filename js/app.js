let WorkingHours = ['07:00 AM','08:00 AM','09:00 AM','10:00 AM','11:00 AM','12:00 PM','01:00 PM','02:00 PM','03:00 PM','04:00 PM','05:00 PM','06:00 PM','07:00 PM','08:00 PM'];

const Seattle = {
  Name:'seattle',
  MinCust: 23,
  MaxCust: 65,
  AvgCookie: 6.3,
  day:0,
  finalAvg:0,
  AvgCal: function(min,max){
    min=this.MinCust;
    max=this.MaxCust;
    this.day= Math.floor(Math.random() * (max - min + 1) + min);
    return this.day;
  },
  WithArray: function(){
    for (let i=0; i< WorkingHours.length;i++){
      this.finalAvg=this.day*this.AvgCookie;
      return this.finalAvg;
    }
  }

};




