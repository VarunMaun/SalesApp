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

function Address(){
	return {
        "uuid": "",
        "nickname":"",
        "line1": "",
        "line2": "",
        "line3": "",
        "pinCode": "",
        "city": "",
        "district": "",
        "state": "",
        "country": ""
      };
}

function Bid(){
	return {
		  "uuid": "",
		  "topic": "",
		  "createdOn": "",
		  "createdBy": "",
		  "currentStatus": "",
		  "statusHistory": [
		    {
		      "uuid": "",
		      "createdBy": {
		        "uuid": "",
		        "name": ""
		      },
		      "createdOn": "2017-08-06T05:28:34.709Z",
		      "newStatus": "",
		      "remarks": ""
		    }
		  ],
		  "contacts": [
		    {
		      "uuid": "",
		      "role": "",
		      "firstName": "",
		      "lastName": "",
		      "jobTitle": "",
		      "phoneNumbers": {
		        "business": [],
		        "mobile": []
		      },
		      "emailAddress": ""
		    }
		  ],
		  "documents": [
		    {
		      "uuid": "",
		      "name": "",
		      "version": ""
		    }
		  ],
		  "account": {
		    "uuid": "",
		    "name": "",
		    "website": "",
		    "address": ""
		  },
		  "recurringAmount": {
		    "net": "",
		    "products": "",
		    "tax": "",
		    "discount": ""
		  },
		  "nonRecurringAmount": {
		    "net": "",
		    "products": "",
		    "tax": "",
		    "discount": ""
		  },
		  "sites": [
		    {
		      "uuid": "",
		      "address": {
		        "uuid": "",
		        "nickname":"",
		        "line1": "",
		        "line2": "",
		        "line3": "",
		        "pinCode": "",
		        "city": "",
		        "district": "",
		        "state": "",
		        "country": ""
		      },
		      "products": [
		        {
		          "uuid": "",
		          "productName": "",
		          "productGroup": "",
		          "productConfiguration": "",
		          "productPriceRecurring": "",
		          "productPriceNonRecurring": "",
		          "tax": [
		            {
		              "taxCategory": "",
		              "taxAmount": ""
		            }
		          ],
		          "discount": [
		            {
		              "discountType": "",
		              "disocuntAmount": ""
		            }
		          ]
		        }
		      ]
		    }
		  ]
		}
}