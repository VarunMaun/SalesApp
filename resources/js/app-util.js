var commonUtil = {


 fmt : function (item){
	 
	 var _blank = 'NA';
	 
	if(item===undefined || item=='' || item.length==0){
		return _blank;
	}
	//Check if item is array
	else if( Object.prototype.toString.call( item ) === '[object Array]' ) {
		var text = '';
		for(var iter=0;iter<item.length;iter++){
			text = text + item[iter] + ',';
		}
		text = text.substr(0,(text.length-1));
		return text;
	}
	else{
		return item; 
	}
 },	
		

  guid: function() {
	  function s4() {
	    return Math.floor((1 + Math.random()) * 0x10000)
	      .toString(16)
	      .substring(1);
	  }
	  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
	    s4() + '-' + s4() + s4() + s4();
	},
 
 ftmNumber: function(val){
	 return numeral(val).format('0,0');;
 }

};