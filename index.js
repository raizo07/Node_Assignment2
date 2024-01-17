const http = require("http");

const method = (req, res) => {
    if (req.method === "GET" && req.url === "/books") {
        res.write("Command successfully executed");
        res.end();
    }
         else if (req.method === "PUT" && req.url === "/books") {
        res.write("This is the response from the above method");
        res.end();
        } 
            else if (req.method === "DELETE" && req.url === "/books") {
            res.write("It has been Deleted");
            res.end();
    }
        else if (req.method === "POST" && req.url === "/books/author") {
            res.write("This is the Response from the POST books author");
            res.end();
        } 
            else if (req.method === "PUT" && req.url === "/books/author") {
                res.write("This is the Response from the Author/'s book");
                res.end();
            } else {
                res.write("404 Error we do not not recognize you");
            }
};


const server = http.createServer(method);
server.listen(8000, null, null, () => {
    console.log("Server is runing on port 8000.");
});