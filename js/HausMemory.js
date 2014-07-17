$(function(){
	hausMemory.init();
});

var hausMemory = {
	init: function(){
		//hausMemory.getToday();
		hausMemory.bind_Action();
	},
	bind_Action: function(){
		$('#generate-btn').on('click',function(){hausMemory.generateHausSchedule();});
	},
	getToday: function(){
		var today = new Date();
		var year = today.getFullYear();
		var month = today.getMonth() + 1;
		var day = today.getDate();
		console.log(year + '/' + month + '/' + day);
	},
	generateHausSchedule: function(){
		console.log('Generating!');
		var totalUnit = parseInt($('#total-unit').val());
		var unitPerDay = parseInt($('#unit-per-day').val());
		var o_schedule = new scheduleObj();
		

	},
	loadSchedule: function(){

	},
	saveSchedule: function(){

	}
}

// Data object for schedule
function scheduleObj(){
	var scheduleObjCom = this;
	var returnObj = []; // [[{startUnit:1, endUnit:2 , isReview: true},] ,...]
	// Public methods	
	scheduleObjCom.getData = function(){
		return returnObj;
	};
	scheduleObjCom.add = function(startUnit,endUnit, isReview ,dayIndex){
		returnObj[dayIndex].push({startUnit:startUnit, endUnit:endUnit, isReview: isReview});
	};
}