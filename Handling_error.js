var http = require('http')

var opts = {
  host: 'www.zzzzbaidu.com',
  port: 80,
  path: '/'
}

var req = http.get(opts, function(res) {
  console.log('This will never get called')
  console.log(res);
})

/*
 * handle error here instead of a try-catch
 */

req.on('error', function(e) {
  console.log('Got that pesky error trapped')
})