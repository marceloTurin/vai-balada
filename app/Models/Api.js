{
	"_type": "export",
	"__export_format": 3,
	"__export_date": "2018-07-03T02:22:17.227Z",
	"__export_source": "insomnia.desktop.app:v5.16.6",
	"resources": [
		{
			"_id": "wrk_c980b1772c2e40049332105a12bcc800",
			"created": 1528822136220,
			"description": "",
			"modified": 1530578359677,
			"name": "AirBnB",
			"parentId": null,
			"_type": "workspace"
		},
		{
			"_id": "env_39bdfd60daef4c5599ebf93493fad299",
			"color": null,
			"created": 1528822136288,
			"data": {
				"base_url": "http://localhost:3333",
				"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTUzMDU3OTA0MH0.Q0GavD6_6oadYy0MmUDTD0z4HH-4chMflbhHLybKNio"
			},
			"isPrivate": false,
			"modified": 1530579059773,
			"name": "New Environment",
			"parentId": "wrk_c980b1772c2e40049332105a12bcc800",
			"_type": "environment"
		},
		{
			"_id": "jar_b68ff290c4b842cba16e2d6332203980",
			"cookies": [],
			"created": 1528822136396,
			"modified": 1528822136396,
			"name": "Default Jar",
			"parentId": "wrk_c980b1772c2e40049332105a12bcc800",
			"_type": "cookie_jar"
		},
		{
			"_id": "fld_224592c38c644e749adb5ccb4bc463bb",
			"created": 1530578369664,
			"description": "",
			"environment": {},
			"metaSortKey": -1530578369665,
			"modified": 1530578369664,
			"name": "Imóveis",
			"parentId": "wrk_c980b1772c2e40049332105a12bcc800",
			"_type": "request_group"
		},
		{
			"_id": "fld_274e262dcb994a669dddf7536f95ec26",
			"created": 1530579069015,
			"description": "",
			"environment": {},
			"metaSortKey": -1530579069015,
			"modified": 1530579069015,
			"name": "Auth",
			"parentId": "wrk_c980b1772c2e40049332105a12bcc800",
			"_type": "request_group"
		},
		{
			"_id": "req_5e8d1548f17d4e029dc800baf95e3565",
			"authentication": {
				"token": "{{ token  }}",
				"type": "bearer"
			},
			"body": {},
			"created": 1530578378869,
			"description": "",
			"headers": [],
			"isPrivate": false,
			"metaSortKey": -1530578378869,
			"method": "GET",
			"modified": 1530579109540,
			"name": "Index",
			"parameters": [],
			"parentId": "fld_224592c38c644e749adb5ccb4bc463bb",
			"settingDisableRenderRequestBody": false,
			"settingEncodeUrl": true,
			"settingRebuildPath": true,
			"settingSendCookies": true,
			"settingStoreCookies": true,
			"url": "{{ base_url  }}/ballads",
			"_type": "request"
		},
		{
			"_id": "req_3b4c42b4df754c3fbd73862a004397c6",
			"authentication": {
				"token": "{{ token  }}",
				"type": "bearer"
			},
			"body": {},
			"created": 1530583491069,
			"description": "",
			"headers": [],
			"isPrivate": false,
			"metaSortKey": -1530359554007,
			"method": "GET",
			"modified": 1530583866610,
			"name": "Show",
			"parameters": [],
			"parentId": "fld_224592c38c644e749adb5ccb4bc463bb",
			"settingDisableRenderRequestBody": false,
			"settingEncodeUrl": true,
			"settingRebuildPath": true,
			"settingSendCookies": true,
			"settingStoreCookies": true,
			"url": "{{ base_url  }}/ballads/1",
			"_type": "request"
		},
		{
			"_id": "req_f587175dde1e421ab805ba0acbe04f31",
			"authentication": {
				"token": "{{ token  }}",
				"type": "bearer"
			},
			"body": {},
			"created": 1530584039948,
			"description": "",
			"headers": [],
			"isPrivate": false,
			"metaSortKey": -1530250141576,
			"method": "DELETE",
			"modified": 1530584109626,
			"name": "Delete",
			"parameters": [],
			"parentId": "fld_224592c38c644e749adb5ccb4bc463bb",
			"settingDisableRenderRequestBody": false,
			"settingEncodeUrl": true,
			"settingRebuildPath": true,
			"settingSendCookies": true,
			"settingStoreCookies": true,
			"url": "\t{{ base_url  }}/ballads/1",
			"_type": "request"
		},
		{
			"_id": "req_9d5a1d072a7445009e1af8bfecfae87b",
			"authentication": {},
			"body": {
				"mimeType": "application/json",
				"text": "{\n\t\"username\": \"diego3g3\",\n\t\"email\": \"diego3@rocketseat.com.br\",\n\t\"password\": \"123456\"\n}"
			},
			"created": 1530138692882,
			"description": "",
			"headers": [
				{
					"id": "pair_38d56fbe9cac46a98c825f9b9a1cc5df",
					"name": "Content-Type",
					"value": "application/json"
				}
			],
			"isPrivate": false,
			"metaSortKey": -1530140729145,
			"method": "POST",
			"modified": 1530584052484,
			"name": "Register",
			"parameters": [],
			"parentId": "fld_274e262dcb994a669dddf7536f95ec26",
			"settingDisableRenderRequestBody": false,
			"settingEncodeUrl": true,
			"settingRebuildPath": true,
			"settingSendCookies": true,
			"settingStoreCookies": true,
			"url": "{{ base_url  }}/users",
			"_type": "request"
		},
		{
			"_id": "req_7b0af4e36a114a6c9a01ca17a8ba36d1",
			"authentication": {},
			"body": {
				"mimeType": "application/json",
				"text": "{\n\t\"email\": \"diego@rocketseat.com.br\",\n\t\"password\": \"123456\"\n}"
			},
			"created": 1530140729095,
			"description": "",
			"headers": [
				{
					"id": "pair_20ce7c95321e454192f3df9c391b672e",
					"name": "Content-Type",
					"value": "application/json"
				}
			],
			"isPrivate": false,
			"metaSortKey": -1530140729095,
			"method": "POST",
			"modified": 1530579094463,
			"name": "Authentication",
			"parameters": [],
			"parentId": "fld_274e262dcb994a669dddf7536f95ec26",
			"settingDisableRenderRequestBody": false,
			"settingEncodeUrl": true,
			"settingRebuildPath": true,
			"settingSendCookies": true,
			"settingStoreCookies": true,
			"url": "{{ base_url  }}/sessions",
			"_type": "request"
		}
	]
}