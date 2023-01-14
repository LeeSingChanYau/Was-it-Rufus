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
    if (stdout === '') {
        console.log("local changes: False");
    } else {
        console.log("local changes: True");
    }
});

exec('git log -1 --format=%ct', { cwd: git_dir}, (err, stdout, stderr) => {
    if (err) {
        console.log(err);
    }
    
    const date = new Date(stdout * 1000);
    const oneWeekAgo = new Date(date.setDate(date.getDate() - 7));
    const lastCommitDate = new Date(stdout * 1000);
    
    if (lastCommitDate > oneWeekAgo) {
        console.log("recent commit: True");
    } else {
        console.log("recent commit: False");
    }
});

exec(`git log -1 --pretty=format:'%an'`, { cwd: git_dir}, (err, stdout, stderr) => {
    if (err) {
        console.log(err);
    }
    
    if(stdout==="Rufus") {
        console.log("blame Rufus: True");
    } else {
        console.log("blame Rufus: False");
    }
});