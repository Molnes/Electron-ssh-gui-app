const SSH = require('simple-ssh');

const ip = document.getElementById("ipadresse").value


var ssh = new SSH({
    host: document.getElementById("ipadresse").value,
    user: document.getElementById("brukernavn").value,
    pass: document.getElementById("passord").value
});

function sshls() {

    var ssh = new SSH({
        host: document.getElementById("ipadresse").value,
        user: document.getElementById("brukernavn").value,
        pass: document.getElementById("passord").value
    });

    ssh.exec('ls', {
        out: function (stdout) {
            document.getElementById('consoleoutput').innerHTML = stdout; console.log(stdout);
        },

        err: function (stderr) {
            document.getElementById('consoleoutputerror').innerHTML = stderr; console.log(stderr);
        },

        exit: function (code) {
            document.getElementById('consoleoutputexitcode').innerHTML = 'Exitcode ' + code; console.log(code);
        }
    }).start();
}

function sshshutdown() {

    var ssh = new SSH({
        host: document.getElementById("ipadresse").value,
        user: document.getElementById("brukernavn").value,
        pass: document.getElementById("passord").value
    });

    ssh.exec('sudo poweroff', {
        out: function (stdout) {
            document.getElementById('consoleoutput').innerHTML = stdout; console.log(stdout);
        },

        err: function (stderr) {
            document.getElementById('consoleoutputerror').innerHTML = stderr; console.log(stderr);
        },

        exit: function (code) {
            document.getElementById('consoleoutputexitcode').innerHTML = 'Exitcode ' + code; console.log(code);
        }
    }).start();
}