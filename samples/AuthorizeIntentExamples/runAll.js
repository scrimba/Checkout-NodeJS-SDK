const createOrder = require('./create').createOrder;
const authorizeOrder = require('./authorize').authorizeOrder;
const captureOrder = require('./capture').captureOrder;

(async() => {
    let response = await createOrder();
    console.log("Creating Order...");
    let orderId = "";
    if (response.statusCode === 201){
        orderId = response.result.id;
        console.log("Links:");
        response.result.links.forEach((item, index) => {
            let rel = item.rel;
            let href = item.href;
            let method = item.method;
            let message = `\t${rel}: ${href}\tCall Type: ${method}`;
            console.log(message);
        });
        console.log("Created Successfully\n");
    }

    console.log("Copy approve link and paste it in browser. Login with buyer account and follow the instructions.\nOnce approved hit enter...");

    function prompt(question) {
        return new Promise((resolve, reject) => {
            const stdin = process.stdin;
            const stdout = process.stdout;
            stdin.resume();
            stdout.write(question);

            stdin.on('data', data => resolve(data.toString().trim()));
            stdin.on('error', err => reject(err));
        });
    }

    await prompt('');

    console.log('Authorizing Order...');
    response = await authorizeOrder(orderId);
    let authorizationId = "";
    if (response.statusCode === 201){
        console.log("Authorized Successfully\n");
        authorizationId = response.result.purchase_units[0].payments.authorizations[0].id;
    }

    console.log('Capturing Order...');
    response = await captureOrder(authorizationId);
    if (response.statusCode === 201){
        console.log("Captured Successfully");
        console.log("Status Code: " + response.statusCode);
        console.log("Status: " + response.result.status);
        console.log("Order ID: " + response.result.id);
        console.log("Links: ");
        response.result.links.forEach((item, index) => {
            let rel = item.rel;
            let href = item.href;
            let method = item.method;
            let message = `\t${rel}: ${href}\tCall Type: ${method}`;
            console.log(message);
        });
    }
    process.exit();
})();