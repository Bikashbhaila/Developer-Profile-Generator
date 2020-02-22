const genhtml = function (username, color) {
    console.log(username, color);
    const htmlString = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${username}</title>
        </head>
        <body>
            <h1>Hello, I am ${username}. My favorite color is ${color}.</h1>
        </body>
    </html>
    `;
}

module.exports = {
    genhtml: genhtml,
}