import * as koa from "koa";
import * as Router from "koa-router";

const app = new koa();
const router = new Router();

// Below is generc fucntion soo next is needed. SO it is generic to all funxtions


router.get("/a", (ctx) => {
    ctx.response.body = " a url has been invoked";
})

router.get("/b", (ctx) => {
    ctx.response.body += " b url has been invoked";
})

app.use(router.routes());

app.use((ctx,nex) => {
    ctx.response.body = "incorrect url has been invoked in koa server";
    // next();
})

app.listen(3005, () => console.log("simple koa server is running in 3005"))





/*
For ***UI deployment*** we did it using two methods -

1. local machine --->> firebase server.
2. Local machine --> github --> pipeline --> firebase server.

pipeline here refers to (build+release)

#***For first step - direct deployment to firebase server ***#
1. npm install -g firebase-tools
2. firebase login 
3. firebase init hosting
4. npm run build - minified version of code gets created in build folder 
5. firebase deploy

-- This is a direct deployment so here we did not check in our code to github
-- This is feasible for testing environment


#***For deploying via the github and automatic pipeline method***#
1. install git first
2. initialise repository in source control
3. git init
4. git add .
5. git commit -m "Initial Commit"
6. git remote add origin ______git url link_____________
7. git push -f origin master

-- now the code should be visdible in github
Now we have to add the frebase secrets to github repositiory secrets section
1. Copy the environment variables to github repo in secrets section.
2. Now another environment variable is needed so that github knows which firebase project to access.
    In terminal type -  firebase login:ci
3. Paste this token in repository secrets
    Github will use Auth2 protocol to login into firebase
4. Now go to Github->Actions. Here we have to setup the workflow
5. Then go to setup workflow yourself
6. Edit the main.yml file 
    name: CI/CD -> build/deploy
    branch: master -> which branch it will be pushed to
    env: -> which env secerets it need to pass to firebase
    build runs on and steps
        These steps have to be known by CI/CD pipeline
    --> Now to change code we just have to save and update the version in package.json and 
       then stage the changes and commit the changes.
    --> after this pull by git: fetch and then push the changes.
7. Now the workflow will run automatically.
8. Once the build completes we can straightaway see the changes in the github/actions page

- Duty of github is to push minified version of code to firebase server.


****Summary*****
1st deployment ---- this is bad practice for production deployment -- geneally for testing
    - we created minified version of the code
    - we pasted the code to build folder using npm run build
    - firebase deploy to copy minified files to friebase.
    - firebase application server. run minified files behind the application server.
    - application server  provides a url to access the web application

2nd deployment
    - we pushed our code to github which is a repository.
    - github actions is a ci/cd pipeline
    - github action continuously checks if there is any commit in the master branch
    - github action build and test your code. create minifid files.
    - github actions will deploy using firebase deploy. copy minified files to firebase.
    - firebase application server. run minified files behind the application server.
    - application server  provides a url to access the web application
***end summary***

**testing ways***
test types --> jest unit test, jest snapshot test, cypress e2e test.



*********Things to be done in backend*********
node js --> there we used to create api
expressjs --> creat api nowadays. library of node.
koa js - library of node where we create api nowadays.

1. database -- postgress -- heroku
2. accessing postgres using koa app
3. returning data using graphQL.

    Earlier before graphQl we used to ,
    need only hotel name --- write on api
    need only hotel reviews --- write on more api
    
in Node we also hae unit test, kronos test as syllabus.

**************How to setup backend*************************
1. Go to Heroku and Create an app.
2. Go to ./Heroku/Resources and install postgres as an add-on.
3. Install postgres in th specific project created in heroku.
4. Cick on the dtatabase and go to ./data.heroku/setting/credenials and copy paste the 
    credentials to DBeaver DB (Hostname, PORT, Hostname).
5. Add the json as csv and insert it as table in DBeaver
6. After adding csv in correct format we can then see data info in Postgres DB in data.heroku

-- This is till creation of database.
*****Backend start*****
1. create a new folder for backend
2. create a package.json file by doing -> npm init
3. orm dependency is required - maps database table woith a typescript object.
4. We have to write a start script in package.json -> ts-node-dev --respawn server.ts
5. Then we can write the server code in server.ts

    Here we can fetch data from database to browser using two ways -
    a. connection string - select query - return it to browser
    b. connction string - orm framework - it has functions which will be 
        reading the db -- return it to browser
    
    what orm does is relate ** typescript object === table in the database **
    
    Second point (b) is preferrable as -
        1. any sql query
        2. code clean
        3. safety from sql injection

6. Copy the URI fro postgres DB settings and paste it as connection strinng for a server scriptin koa js
7. Istall DB library so we can import it. Import pg for postgres.
    Postgres provides a function Pool, which is a functon by which we can provide 
        connection details of database.
    By this we can create the db connection server side script.
8. ssl concept :
    pair of ssl certificates are provided -
        1. Production DB has 1st certificate
        2. Production server has 2nd certificate

        testing server has no certificae. So only those servers which have ssl certificate 
            can access prod DB.
9. download heroku cli
10. In github create a new repository
11. In Heroku/deployment connect to github and search for the backend github repository
12. Now push the backend code to github
    - git init
    - git add .
    - git remote add origin ___GITHUB_LINK____

    - write message and commit to github and push your chnages.
13. Install heroku cli and login into heroku account.
14. Then do the following steps -
    - heroku create -> It will create an app in heroku for you
    - git push heroku master -> mention master branch
15. Check if DB (Postgres) is added or not
16. Check if the connection with DB in DBeaver is there or not.
17. Check heroku if the rows are there or not
19. Go to Heroku/deploy and deploy the branch
20. Create entity with filename exactly same as table name.
21. Create Connections from typeorm
22. Create simpleOrm

*/