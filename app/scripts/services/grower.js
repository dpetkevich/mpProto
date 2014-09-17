angular.module('mpProtoApp.service.grower', [])

.factory('grower', function(){
  var service={};
    service.grower=
    {
      firstName:"Joe",
      lastName:"Grower",
      policies:
        [
          {
            number:11111,
            state:'KS',
            coverages:
              [
                {
                  crop:'Wheat',
                  county:'Chester',
                  databases:
                    [
                      {
                        unit:'0001-0001',
                        practice:'Continuous',
                        type:'Grain',
                        legals:'',
                        farmName:''
                      },
                      {
                        unit:'0001-0002',
                        practice:'Continuous',
                        type:'Grain',
                        legals:'',
                        farmName:''
                      }
                      ,{
                        unit:'0001-0003',
                        practice:'Continuous',
                        type:'Grain',
                        legals:'',
                        farmName:''
                      }

                    ]
                },
                {
                  crop:'Wheat',
                  county:'Arthur',
                  databases:
                    [
                      {
                        unit:'0001-0001',
                        practice:'Continuous',
                        type:'Grain',
                        legals:'',
                        farmName:''
                      },
                      {
                        unit:'0001-0002',
                        practice:'Continuous',
                        type:'Grain',
                        legals:'',
                        farmName:''
                      }
                      ,{
                        unit:'0001-0003',
                        practice:'Continuous',
                        type:'Grain',
                        legals:'',
                        farmName:''
                      }

                    ]
                }
              ]
          },
          {
            number:222222
          },
          {
            number:33333
          }
        ]



    }
	

 

 return service;

});
