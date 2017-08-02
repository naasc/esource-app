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
                        "backendId": "b93925cf-7c60-4cda-a3e0-2f0358c9eff2",
                        "anonymousToken": "WjE3R1NFQUNDVDI3NDIwNTUxMjFfTU9CSUxFUE9SVEFMU0VUUklBTDExNjVERVZfTU9CSUxFX0FOT05ZTU9VU19BUFBJRDphSjVfdHpmZ3FqaTJoYg==",
                    }
                }
            }
        }
};

mcs.MobileBackendManager.setConfig(mcs_config)
let mbe = mcs.MobileBackendManager.getMobileBackend('NAAContentFeed')
console.log('mbe', mbe)

mbe.setAuthenticationType("basicAuth")


export const getMBE =() => (
   console.log("dhhd")

)