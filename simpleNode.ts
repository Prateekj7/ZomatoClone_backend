import * as http from 'http';

const server = http.createServer((request, response) => {
    if(request.url === "/a"){
        response.write("a url has been invoked")
    }
    else if(request.url === "/b"){
        response.write("b url has been invoked");
    }
    else
        response.write("incorrect url has been invoked");
    response.end();
    
});

server.listen(3005, () => console.log("server is running in 3005"));