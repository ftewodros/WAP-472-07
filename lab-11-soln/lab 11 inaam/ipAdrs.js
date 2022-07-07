const dns = require('dns');
dns.lookup("www.miu.edu", (err, address, family) => {
    if(err) throw err;
    console.log(address);
  });
 