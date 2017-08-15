import mcs from '../mcs/mcs'


const mcs_config = {
        "logLevel": mcs.LOG_LEVEL.INFO,
        "mobileBackends": {
            "NAAContentFeed": {
                "default": true,
                "baseUrl": "https://mobile-gse00010386.mobileenv.us2.oraclecloud.com:443",
                "applicationKey": "0fc655f4-5ebb-4876-b9e4-352be9a2f491",
                "authorization": {
                    "basicAuth": {
                        "backendId": "2b803cfa-4740-4323-9a70-a39b789816a5",
                        "anonymousToken": "R1NFMDAwMTAzODZfTU9CSUxFX01PQklMRV9BTk9OWU1PVVNfQVBQSUQ6UHcwbnFmZ2sudHViNnI=",
                    }
                }
            }
        }
};

mcs.MobileBackendManager.setConfig(mcs_config)
const mbe = mcs.MobileBackendManager.getMobileBackend('NAAContentFeed')
mbe.setAuthenticationType("basicAuth")
/*
mbe.Authorization.authenticateAnonymous(
                    function (response, data) {                        
                        console.log("Success authenticating against mobile backend");
                    },
                    function (statusCode, data) {
                        console.log("Failure authenticating against mobile backend");
                    }
            );
*/
//mbe.Authorization.authenticate(username, password, successCallback, failureCallback);
//console.log("In MBE", mbe)
  

export const authenticate = (params) => {
   const {username, password} = params
   console.log(params)
   return mbe.Authorization.authenticate(username, password
   	 , function(data) { console.log("Success"); }
   	 , function(status,data){ console.log("Error authenticating: " + data);
    })
}
 
export const getUpdates = () => {
   console.log('in getUpdates', mbe);
   return mbe.CustomCode.invokeCustomCodeJSONRequest('contentfeed/updates' , 'GET' , null
    , function(statusCode,data) {console.log("Success", statusCode ,data)}
    , function(statusCode,data) {console.log("Failure", statusCode ,data)})
}