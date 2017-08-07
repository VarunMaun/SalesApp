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
		
		
		
		var site2=  {};
		site2.uuid="5";
		site2.address={};
		site2.address.line1 = '385/5';
		site2.address.line2 = 'Sector 29';
		site2.address.city = 'Gandhinanagar';
		site2.address.pinCode = '382030';
		site2.address.nickname = 'Home Address';
		
		site2.products = [];
		for(var iter=40;iter<50;iter++){
			var op = MOCK_PRODUCTS[iter];
			var p = {};
			p.uuid = op.uuid;
			p.productName = op.productName;
			p.productGroup = op.productGroup;
			p.productConfiguration = 'Standard';
			p.productPriceRecurring = op.costRecurring;
			p.productPriceNonRecurring = op.costNonRecurring;
			
			site2.products[iter-40]=p;			
		}
		
		
		o.sites[1] = site2;
		return o;
		
	}
	
	

	return service;
});


app.factory('productService', function() {
	var service = {};

	service.fetchAll = function() {
		return MOCK_PRODUCTS;
	}

	return service;
});

