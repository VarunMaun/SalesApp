var app = angular.module("app.service", []);

app.factory('leadService', function() {
	var service = {};

	service.fetchById = function(id) {
		var returnObj = Lead();

		for (var iter = 0; iter < 100; iter++) {
			var l = MOCK_LEADS[iter];
			var c = MOCK_CONTACTS[iter];
			var a = MOCK_ACCOUNTS[iter];

			if (l.uuid == id) {

				var o = Lead();
				o.uuid = l.uuid;
				o.topic = l.topic;
				o.desc = l.desc;
				o.leadStatus = l.status;
				o.leadSource = 'Email';

				o.contact.firstName = c.first_name;
				o.contact.lastName = c.last_name;
				o.contact.jobTitle = c.jobTitle;
				o.contact.phoneNumbers.mobile.push(c.mobilePhone);
				o.contact.phoneNumbers.business.push(c.workPhone);
				o.contact.emailAddress = c.email;

				o.contact.account.name = a.name;
				o.contact.account.website = a.website;
				o.contact.account.address = a.address;

				returnObj = o;
				break;

			}

		}

		return returnObj;
	}

	service.fetchAll = function() {
		var list = [];
		for (var iter = 0; iter < 100; iter++) {
			var l = MOCK_LEADS[iter];
			var c = MOCK_CONTACTS[iter];
			var a = MOCK_ACCOUNTS[iter];

			var o = Lead();
			o.uuid = l.uuid;
			o.topic = l.topic;
			o.desc = l.desc;
			o.leadStatus = l.status;
			o.leadSource = 'Email';

			o.contact.firstName = c.first_name;
			o.contact.lastName = c.last_name;
			o.contact.jobTitle = c.jobTitle;
			o.contact.phoneNumbers.mobile.push(c.mobilePhone);
			o.contact.phoneNumbers.business.push(c.workPhone);
			o.contact.emailAddress = c.email;

			o.contact.account.name = a.name;
			o.contact.account.website = a.website;
			o.contact.account.address = a.address;
			list.push(o);
		}
		return list;
	}
	
	service.fetchByStatus = function(filterStatus){
		var list = [];
		for (var iter = 0; iter < 100; iter++) {
			var l = MOCK_LEADS[iter];
			var c = MOCK_CONTACTS[iter];
			var a = MOCK_ACCOUNTS[iter];

			var o = Lead();
			o.uuid = l.uuid;
			o.topic = l.topic;
			o.desc = l.desc;
			o.leadStatus = l.status;
			o.leadSource = 'Email';

			o.contact.firstName = c.first_name;
			o.contact.lastName = c.last_name;
			o.contact.jobTitle = c.jobTitle;
			o.contact.phoneNumbers.mobile.push(c.mobilePhone);
			o.contact.phoneNumbers.business.push(c.workPhone);
			o.contact.emailAddress = c.email;

			o.contact.account.name = a.name;
			o.contact.account.website = a.website;
			o.contact.account.address = a.address;

			if(filterStatus==o.leadStatus){
				list.push(o);
			}
		}
		return list;

	}
	
	
	service.save = function(o) {

	}

	return service;
});

app.factory('contactService', function() {
	var service = {};

	service.fetchAll = function() {
		return MOCK_CONTACTS;
	}

	return service;
});

app.factory('accountService', function() {
	var service = {};

	service.fetchAll = function() {
		return MOCK_ACCOUNTS;
	}

	return service;
});

app.factory('bidService', function() {
	var service = {};

	service.fetchAll = function() {
		return [{"uuid":"1","account":"Test1","topic":"Test1"},{"uuid":"2","account":"Test2","topic":"Test2"},{"uuid":"3","account":"Test3","topic":"Test3"}];
	}
	
	service.fetchById = function(id){
		o = Bid();
		o.uuid = id;
		o.topic = 'Test' + id;
		o.currentStatus = 'new';
		
		
		var site1=  {};
		site1.uuid="4";
		site1.address={};
		site1.address.line1 = '385/5';
		site1.address.line2 = 'Sector 29';
		site1.address.city = 'Gandhinanagar';
		site1.address.pinCode = '382030';
		site1.address.nickname = 'Home Address';
		
		site1.products = [];
		for(var iter=0;iter<5;iter++){
			var op = MOCK_PRODUCTS[iter];
			var p = {};
			p.uuid = op.uuid;
			p.productName = op.productName;
			p.productGroup = op.productGroup;
			p.productConfiguration = 'Standard';
			p.productPriceRecurring = op.costRecurring;
			p.productPriceNonRecurring = op.costNonRecurring;
			
			site1.products[iter]=p;			
		}
		
		o.sites[0] = site1;
		
		
		return o;
		
	}
	
	

	return service;
});


app.factory('productService', function() {
	var service = {};

	service.fetchAll = function() {
		return MOCK_PRODUCTS.slice(0, 15);;
	}

	return service;
});




app.factory('pipelineService', function() {
	var service = {};

	service.fetchAll = function() {
		return MOCK_PIPELINE_BIDS.slice(0, 16);;
	}

	return service;
});


app.factory('opportunityService', function() {
	var service = {};

	service.fetchAll = function() {
		return MOCK_OPPORTUNITIES.slice(0, 20);;
	}

	return service;
});



app.factory('worklistService', function() {
	var service = {};

	service.fetchAll = function() {
		return [
				{
					title: 'All Day Event',
					start: '2017-05-01'
				},
				{
					title: 'Long Event',
					start: '2017-05-07',
					end: '2017-05-10'
				},
				{
					id: 999,
					title: 'Repeating Event',
					start: '2017-05-09T16:00:00'
				},
				{
					id: 999,
					title: 'Repeating Event',
					start: '2017-05-16T16:00:00'
				},
				{
					title: 'Conference',
					start: '2017-05-11',
					end: '2017-05-13'
				},
				{
					title: 'Meeting',
					start: '2017-05-12T10:30:00',
					end: '2017-05-12T12:30:00'
				},
				{
					title: 'Lunch',
					start: '2017-05-12T12:00:00'
				},
				{
					title: 'Meeting',
					start: '2017-05-12T14:30:00'
				},
				{
					title: 'Happy Hour',
					start: '2017-05-12T17:30:00'
				},
				{
					title: 'Dinner',
					start: '2017-05-12T20:00:00'
				},
				{
					title: 'Birthday Party',
					start: '2017-05-13T07:00:00'
				},
				{
					title: 'Click for Google',
					url: 'http://google.com/',
					start: '2017-05-28'
				}
			];
	}

	return service;
});

