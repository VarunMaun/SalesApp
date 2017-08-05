function Lead(){
	return {
		  "topic": "",
		  "uuid":"",
		  "desc":"",
		  "leadSource": "",
		  "leadStatus": "",
		  "statusReason": "",
		  "contact": {
		    "uuid": "",
		    "firstName": "",
		    "lastName": "",
		    "jobTitle": "",
		    "account": {
		      "uuid": "",
		      "name": "",
		      "website": "",
		      "address": ""
		    },
		    "phoneNumbers": {
		      "business": [],
		      "mobile": []
		    },
		    "emailAddress": ""
		  },
		  opportunities:[],
		  activityLog:[]
		};
}