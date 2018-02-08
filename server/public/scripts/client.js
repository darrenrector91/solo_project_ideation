angular.module("myApp", ["ngTable"])
  .controller('tableControl', tableControl);
tableControl.$inject = ["NgTableParams"];

function tableControl(NgTableParams) {

  var self = this;
  var data = [{
    date: "06/12/2017",
    city: "Big Sky",
    state: "MT",
    species: "Rainbow trout",
    rod: "Temple Fork",
    reel: "Sage 2200",
    tackle_bait: "Stone fly",
    body_of_water: "Madison River",
    image_url: "images/brownTrout.jpg"
  },
  {
    date: "07/12/2016",
    city: "Bozeman",
    state: "MT",
    species: "Brown trout",
    rod: "Temple Fork",
    reel: "Sage 2200",
    tackle_bait: "Grasshopper",
    body_of_water: "Gallatin River",
    image_url: "http://bit.ly/2nK952F"
  }, /*,*/ ];
  self.tableParams = new NgTableParams({
    page: 1, // show first page
    count: 10 // count per page
  }, {
    dataset: data
  });
}