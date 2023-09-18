module.exports = {
    apps: [{
        name: "GenDutyLogServer",
        cwd: "./server",
        script: "sudo node server.mjs",
        watch: true
    },{
        name: "GenDutyLogClient",
        cwd: "./client/src",
        script: "sudo npm start",
        watch: true
    }]
};