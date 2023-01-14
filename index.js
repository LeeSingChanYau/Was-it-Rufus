const { exec } = require('child_process');
exec('git rev-parse --abbrev-ref HEAD', { cwd: '/Users/leesingchan/Documents/OneCommunity/HighestGoodNetworkApp' }, (err, stdout, stderr) => {
    if (err) {
        // handle your error
        console.log(err);
    }
    
    if (typeof stdout === 'string') {
      console.log("active branch:", stdout);
      // Call your function here conditionally as per branch
    }
});