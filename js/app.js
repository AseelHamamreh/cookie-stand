let WorkingHours = ['7 AM','8 AM','9 AM','10 AM','11 AM','12 PM','1 PM','2 PM','3 PM','4 PM','5 PM','6 PM','7 PM','8 PM'];

// first Object:
const seattle = {
  Location:'Seattle',
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
    H1El.textContent= 'Sales Data:';

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

seattle.findAvgCust();
// console.log(seattle.AvgCust);

seattle.findCookiesPerHour();
// console.log(seattle.Results);
// console.log(seattle.total);

seattle.displaying();

// Second Object:
const tokyo = {
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

tokyo.findAvgCust();
// console.log(tokyo.AvgCust);

tokyo.findCookiesPerHour();
// console.log(tokyo.Results);
// console.log(tokyo.total);

tokyo.displaying();


// Dubai Object:
const dubai = {
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

dubai.findAvgCust();
// console.log(dubai.AvgCust);

dubai.findCookiesPerHour();
// console.log(dubai.Results);
// console.log(dubai.total);

dubai.displaying();

// Paris Object:
const paris = {
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

paris.findAvgCust();
// console.log(paris.AvgCust);

paris.findCookiesPerHour();
// console.log(paris.Results);
// console.log(paris.total);

paris.displaying();


// Lima Object:
const lima = {
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

lima.findAvgCust();
// console.log(lima.AvgCust);

lima.findCookiesPerHour();
// console.log(lima.Results);
// console.log(lima.total);

lima.displaying();


