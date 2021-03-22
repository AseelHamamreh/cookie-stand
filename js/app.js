let WorkingHours = ['7 AM','8 AM','9 AM','10 AM','11 AM','12 PM','1 PM','2 PM','3 PM','4 PM','5 PM','6 PM','7 PM','8 PM'];

// first Object:
const Seattle = {
  Location:'seattle',
  MinCust: 23,
  MaxCust: 65,
  AvgCookie: 6.3,
  AvgCust:0,
  total:0,
  CookiesPerHour:[],
  Results:[],
  findAvgCust: function(){
    let min=this.MinCust;
    let max=this.MaxCust;
    this.AvgCust = Math.floor(Math.random() * (max - min + 1) + min);
    return Math.ceil(this.AvgCust);
  },
  findCookiesPerHour: function(){
    this.total =0;
    for (let i=0; i< WorkingHours.length;i++){
      this.findAvgCust();
      this.CookiesPerHour[i]=Math.ceil(this.AvgCust*this.AvgCookie);
      this.total= this.total+this.CookiesPerHour[i];
      this.Results=this.CookiesPerHour;
    }
  },

  // // displaying elements on the site for the first Object:
  displaying: function(){
    const container = document.getElementById('First');
    // console.log(container);
    const mainEl = document.createElement('main');
    container.appendChild(mainEl);
    // console.log(mainEl);
    const H1El = document.createElement ('h1');
    mainEl.appendChild(H1El);
    H1El.textContent= 'Sales Data';

    const UlEl = document.createElement ('ul');
    mainEl.appendChild(UlEl);
    UlEl.textContent=`${this.Location} sales:`;

    for (let i=0; i<WorkingHours.length;i++){
      const LiEl = document.createElement ('li');
      UlEl.appendChild(LiEl);
      LiEl.textContent= `${WorkingHours[i]}: ${this.Results[i]} cookies `;
    }
    const Li2El = document.createElement ('li');
    UlEl.appendChild(Li2El);
    Li2El.textContent= `Total = ${this.total}`;
  }
};
// cooling first object:

Seattle.findAvgCust();
console.log(Seattle.AvgCust);

Seattle.findCookiesPerHour();
console.log(Seattle.Results);
console.log(Seattle.total);

Seattle.displaying();

// Second Object:
const Tokyo = {
  Location:'Tokyo',
  MinCust: 3,
  MaxCust: 24,
  AvgCookie: 1.2,
  AvgCust:0,
  total:0,
  CookiesPerHour:[],
  Results:[],
  findAvgCust: function(){
    let min=this.MinCust;
    let max=this.MaxCust;
    this.AvgCust = Math.floor(Math.random() * (max - min + 1) + min);
    return Math.ceil(this.AvgCust);
  },
  findCookiesPerHour: function(){
    this.total =0;
    for (let i=0; i< WorkingHours.length;i++){
      this.findAvgCust();
      this.CookiesPerHour[i]=Math.ceil(this.AvgCust*this.AvgCookie);
      this.total= this.total+this.CookiesPerHour[i];
      this.Results=this.CookiesPerHour;
    }
  },

  // // displaying elements on the site for the Tokyo Object:
  displaying: function(){
    const container = document.getElementById('First');
    // console.log(container);
    const mainEl = document.createElement('main');
    container.appendChild(mainEl);
    // console.log(mainEl);
   

    const UlEl = document.createElement ('ul');
    mainEl.appendChild(UlEl);
    UlEl.textContent=`${this.Location} sales:`;

    for (let i=0; i<WorkingHours.length;i++){
      const LiEl = document.createElement ('li');
      UlEl.appendChild(LiEl);
      LiEl.textContent= `${WorkingHours[i]}: ${this.Results[i]} cookies `;
    }
    const Li2El = document.createElement ('li');
    UlEl.appendChild(Li2El);
    Li2El.textContent= `Total = ${this.total}`;
  }
};
// cooling Tokyo object:

Tokyo.findAvgCust();
console.log(Tokyo.AvgCust);

Tokyo.findCookiesPerHour();
console.log(Tokyo.Results);
console.log(Tokyo.total);

Tokyo.displaying();


// Dubai Object:
const Dubai = {
  Location:'Dubai',
  MinCust: 11,
  MaxCust: 38,
  AvgCookie: 3.7,
  AvgCust:0,
  total:0,
  CookiesPerHour:[],
  Results:[],
  findAvgCust: function(){
    let min=this.MinCust;
    let max=this.MaxCust;
    this.AvgCust = Math.floor(Math.random() * (max - min + 1) + min);
    return Math.ceil(this.AvgCust);
  },
  findCookiesPerHour: function(){
    this.total =0;
    for (let i=0; i< WorkingHours.length;i++){
      this.findAvgCust();
      this.CookiesPerHour[i]=Math.ceil(this.AvgCust*this.AvgCookie);
      this.total= this.total+this.CookiesPerHour[i];
      this.Results=this.CookiesPerHour;
    }
  },

  // // displaying elements on the site for the Dubai Object:
  displaying: function(){
    const container = document.getElementById('First');
    // console.log(container);
    const mainEl = document.createElement('main');
    container.appendChild(mainEl);
    // console.log(mainEl);
   

    const UlEl = document.createElement ('ul');
    mainEl.appendChild(UlEl);
    UlEl.textContent=`${this.Location} sales:`;

    for (let i=0; i<WorkingHours.length;i++){
      const LiEl = document.createElement ('li');
      UlEl.appendChild(LiEl);
      LiEl.textContent= `${WorkingHours[i]}: ${this.Results[i]} cookies `;
    }
    const Li2El = document.createElement ('li');
    UlEl.appendChild(Li2El);
    Li2El.textContent= `Total = ${this.total}`;
  }
};
// cooling Dubai object:

Dubai.findAvgCust();
console.log(Dubai.AvgCust);

Dubai.findCookiesPerHour();
console.log(Dubai.Results);
console.log(Dubai.total);

Dubai.displaying();

// Paris Object:
const Paris = {
  Location:'Paris',
  MinCust: 20,
  MaxCust: 38,
  AvgCookie: 2.3,
  AvgCust:0,
  total:0,
  CookiesPerHour:[],
  Results:[],
  findAvgCust: function(){
    let min=this.MinCust;
    let max=this.MaxCust;
    this.AvgCust = Math.floor(Math.random() * (max - min + 1) + min);
    return Math.ceil(this.AvgCust);
  },
  findCookiesPerHour: function(){
    this.total =0;
    for (let i=0; i< WorkingHours.length;i++){
      this.findAvgCust();
      this.CookiesPerHour[i]=Math.ceil(this.AvgCust*this.AvgCookie);
      this.total= this.total+this.CookiesPerHour[i];
      this.Results=this.CookiesPerHour;
    }
  },

  // // displaying elements on the site for the Paris Object:
  displaying: function(){
    const container = document.getElementById('First');
    // console.log(container);
    const mainEl = document.createElement('main');
    container.appendChild(mainEl);
    // console.log(mainEl);

    const UlEl = document.createElement ('ul');
    mainEl.appendChild(UlEl);
    UlEl.textContent=`${this.Location} sales:`;

    for (let i=0; i<WorkingHours.length;i++){
      const LiEl = document.createElement ('li');
      UlEl.appendChild(LiEl);
      LiEl.textContent= `${WorkingHours[i]}: ${this.Results[i]} cookies `;
    }
    const Li2El = document.createElement ('li');
    UlEl.appendChild(Li2El);
    Li2El.textContent= `Total = ${this.total}`;
  }
};
// cooling Paris object:

Paris.findAvgCust();
console.log(Paris.AvgCust);

Paris.findCookiesPerHour();
console.log(Paris.Results);
console.log(Paris.total);

Paris.displaying();


// Lima Object:
const Lima = {
  Location:'Lima',
  MinCust: 2,
  MaxCust: 16,
  AvgCookie: 4.6,
  AvgCust:0,
  total:0,
  CookiesPerHour:[],
  Results:[],
  findAvgCust: function(){
    let min=this.MinCust;
    let max=this.MaxCust;
    this.AvgCust = Math.floor(Math.random() * (max - min + 1) + min);
    return Math.ceil(this.AvgCust);
  },
  findCookiesPerHour: function(){
    this.total =0;
    for (let i=0; i< WorkingHours.length;i++){
      this.findAvgCust();
      this.CookiesPerHour[i]=Math.ceil(this.AvgCust*this.AvgCookie);
      this.total= this.total+this.CookiesPerHour[i];
      this.Results=this.CookiesPerHour;
    }
  },

  // // displaying elements on the site for the Paris Object:
  displaying: function(){
    const container = document.getElementById('First');
    // console.log(container);
    const mainEl = document.createElement('main');
    container.appendChild(mainEl);
    // console.log(mainEl);

    const UlEl = document.createElement ('ul');
    mainEl.appendChild(UlEl);
    UlEl.textContent=`${this.Location} sales:`;

    for (let i=0; i<WorkingHours.length;i++){
      const LiEl = document.createElement ('li');
      UlEl.appendChild(LiEl);
      LiEl.textContent= `${WorkingHours[i]}: ${this.Results[i]} cookies `;
    }
    const Li2El = document.createElement ('li');
    UlEl.appendChild(Li2El);
    Li2El.textContent= `Total = ${this.total}`;
  }
};
// cooling Paris object:

Lima.findAvgCust();
console.log(Lima.AvgCust);

Lima.findCookiesPerHour();
console.log(Lima.Results);
console.log(Lima.total);

Lima.displaying();


