var mcs_config = {
  "logLevel": mcs.LOG_LEVEL.INFO,
  "logHTTP": true,
  "mobileBackends": {
    "NAAContentFeed": {
      "default": true,
      "baseUrl": "https://mobile-gse00010386.mobileenv.us2.oraclecloud.com:443",
      "applicationKey": "9f6e9030-c040-493d-bbd8-8ebf215153de",
        "authorization": {
        "basicAuth": {
          "backendId": "2b803cfa-4740-4323-9a70-a39b789816a5",
          "anonymousToken": "R1NFMDAwMTAzODZfTU9CSUxFX01PQklMRV9BTk9OWU1PVVNfQVBQSUQ6UHcwbnFmZ2sudHViNnI="
        }
      }
    }
  },
  // "sync": {
  //   "periodicRefreshPolicy": "PERIODIC_REFRESH_POLICY_REFRESH_NONE",
  //   "policies": [
  //     {
  //       "path": '/mobile/custom/firstApi/tasks',
  //       "fetchPolicy": 'FETCH_FROM_SERVICE_ON_CACHE_MISS'
  //     },
  //     {
  //       "path": '/mobile/custom/secondApi/tasks',
  //     }
  //   ]
  // },
  "syncExpress": {
    "handler": "OracleRestHandler",
    "policies": [
      {
        "path": '/mobile/custom/firstApi/tasks/:id(\\d+)?',
      },
      {
        "path": '/mobile/custom/secondApi/tasks/:id(\\d+)?',
      }
    ]
  }

};
