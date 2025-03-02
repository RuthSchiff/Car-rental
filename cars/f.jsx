const initialState = {

plantType: [
    { id :101,sort: 'tree'},
    { id :102,sort: 'flower'},
    { id :103,sort: 'grass'},
],
modalFlower:[
    {id:1011, company:'MyFlower',modalCompany:'m5332',plantType:101},
    {id:1012, company:'MyFlower',modalCompany:'m1125',plantType:101},
    {id:1013, company:'theFlower',modalCompany:'f3442',idcarType:103},
    {id:1013, company:'bestFlower',modalCompany:'f3442',idcarType:102},

],
flowerType:[
    {id:10001,sort:'C',price:10},
    {id:10002,sort:'B',price:20},
    {id:10003,sort:'A',price:30},
    {id:10004,sort:'A',price:40},
    {id:10005,sort:'A',price:50},
],
flowers: [
    { id: 2, number: 15345, modalFlowerId: 1011, mount: 6, year: 2022, movementSortId: 10001, pricePerHour: 12, stay: 5, street: "נוה יעקב", city: "ירושלים", is: true },
    { id: 3, number: 82345, modalFlowerId: 1013, mount: 12, year: 2011,movementSortId: 10001, pricePerHour: 20, stay: 15, street: "גולדה", city: "ירושלים", is: false },
    { id: 4, number: 17645, modalFlowerId: 1012, mount: 20, year: 2024,movementSortId: 10003, pricePerHour: 15, stay: 10, street: "בר אילן", city: "ירושלים", is: true },
    { id: 4, number: 17645, modalFlowerId: 1012, mount: 20, year: 2024,movementSortId: 10003, pricePerHour: 15, stay: 10, street: "שמואל הנביא", city: "ירושלים", is: true },
    { id: 4, number: 17645, modalFlowerId: 1012, mount: 20, year: 2024,movementSortId: 10003, pricePerHour: 35, stay: 10, street: "רוממה", city: "ירושלים", is: true },
    { id: 5, number: 99345, modalFlowerId: 1011, mount: 5, year: 2024, movementSortId: 10005, pricePerHour: 20, stay: 5, street: "רבי עקיבא", city: "בני ברק", is: false },
    { id: 5, number: 99345, modalFlowerId: 1011, mount: 5, year: 2024, movementSortId: 10005, pricePerHour: 15, stay: 3, street: "כהנמן", city: "בני ברק", is: true },
    { id: 5, number: 99345, modalFlowerId: 1011, mount: 5, year: 2024, movementSortId: 10005, pricePerHour: 15, stay: 13, street: "אור החיים", city: "קרית ספר", is: true },
  ], 

};