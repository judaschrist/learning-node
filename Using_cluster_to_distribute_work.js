var cluster = require('cluster');
var numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  // Fork workers.
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', function(worker) {
    console.log('worker ' + worker.id + ' died');
  });
} else {
  // Worker processes have a http server.
  worker = cluster.worker;
  console.log(worker.id + " is working!");
  worker.kill();
}