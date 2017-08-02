const api = process.env.REACT_APP_CONTENT_API_URL || 'https://mobile-gse00010386.mobileenv.us2.oraclecloud.com:443/mobile/custom/contentfeed/'

let token = localStorage.token

if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

let myHeaders = new Headers({
  "Authorization": "Basic R1NFMDAwMTAzODZfTU9CSUxFX01PQklMRV9BTk9OWU1PVVNfQVBQSUQ6UHcwbnFmZ2sudHViNnI=",
  "Oracle-Mobile-Backend-ID": "2b803cfa-4740-4323-9a70-a39b789816a5"
 });

let fetchData = { 
  method: 'GET', 
  headers: myHeaders
}

export const getIndex = () =>
  fetch(`${api}/index`, fetchData )
    .then(res => res.json())