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
