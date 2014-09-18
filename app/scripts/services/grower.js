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
                        legals:['1604-128-1','1604-128-2','1604-128-3'],
                        farmName:''
                      },
                      {
                        unit:'0001-0002',
                        practice:'Continuous',
                        type:'Grain',
                        legals:['1634-148-1','1634-148-2','1634-148-3'],
                        farmName:''
                      }
                      ,{
                        unit:'0001-0003',
                        practice:'Continuous',
                        type:'Grain',
                        legals:['1634-178-1','1634-178-2'],
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
                        legals:['2344-172-1','2344-172-2'],
                        farmName:''
                      },
                      {
                        unit:'0001-0002',
                        practice:'Continuous',
                        type:'Grain',
                        legals:['2344-142-1','2344-142-2'],
                        farmName:''
                      }
                      ,{
                        unit:'0001-0003',
                        practice:'Continuous',
                        type:'Grain',
                        legals:['3344-142-1','3244-142-4'],
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
