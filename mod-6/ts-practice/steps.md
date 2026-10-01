Step 1: Initialize Project (creates the package.json)

npm init -y



Step 2: Install TypeScript (creates node_modules and package-lock.json)

npm install typescript @types/node --save-dev



Step 3: Generates a TypeScript configuration file (tsconfig.json)

npx tsc --init



Step 4: Change the TypeScript configuration file

(uncomment rootDir and outDir under the "File Layout" section)

    "rootDir": "./src",
    "outDir": "./dist",


Step 5: Create the root directory (the src folder)

(src is inside of our main project folder and will hold any TypeScript files)

    ts-practice/src/test.ts



Step 6: Write the TypeScript code

    (inside of test.ts in this example)

    let name: string = "Bob";



Step 7: Compile the TypeScript code (create the dist folder with the final JavaScript files)

    npx tsc



Step 8: Run our JavaScript code

    node dist/test.js



Step 9 (OPTIONAL): Change the TypeScript configuration again (to remove extra files in dist)

(comment out sourceMap, declaration, and declarationMap under the "Other Outputs" section)

    "sourceMap": true,
    "declaration": true,
    "declarationMap": true,



Step 10 (OPTIONAL): Create a .gitignore (if you are creating a repository)

(write a list of files or folders that you want to ignore)

    node_modules
    dist



Step 11 (OPTIONAL): Change the package.json file (if you are planning on using modules to import and export)

(change the "type" property to module or add it if it's missing)

    "type": "module"
