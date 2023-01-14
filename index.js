const { exec } = require('child_process');
const git_dir = '/Users/leesingchan/Documents/web/Was-it-Rufus';

exec('git rev-parse --abbrev-ref HEAD', { cwd:  git_dir}, (err, stdout, stderr) => {
    if (err) {
        // handle your error
        console.log(err);
    }
    
    if (typeof stdout === 'string') {
      console.log("active branch:", stdout);
      // Call your function here conditionally as per branch
    }
});

exec('git diff HEAD', { cwd: git_dir}, (err, stdout, stderr) => {
    if (err) {
        console.log(err);
    }
    console.log(stdout);
    if (stdout === '') {
        console.log("local changes: False");
    } else {
        console.log("local changes: True");
    }
})