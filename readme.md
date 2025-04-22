# Setup to migrate a CSV to a Postgresql db with Prisma ORM

## Prerequisites 

Install [Docker Desktop](https://www.docker.com/get-started/) 

Install nvm and run `nvm install` this will pick the correct version from node that is stored in the file `./nvmrc`

### Usefull links and how this project was initialized

You don't actually need to run this again. I leave this just for reference

```
npm init -y
npm install typescript tsx @types/node --save-dev
npx tsc --init
npx prisma
npx prisma init --datasource-provider postgresql --output ../generated/prisma
```

https://www.prisma.io/docs/getting-started/quickstart-sqlite

---

## Prepare you database and load it with data


### 1. Start the container with your local db

`docker-compose up -d`

There's a docker-compose

### 2. Add your models to the database using Prisma

1. Add your models on `./schema.prisma`. To learn more about the sintaxis for this file see:
       - [Models](https://www.prisma.io/docs/orm/prisma-schema/data-model/models)
       - [Fields](https://www.prisma.io/docs/orm/prisma-schema/data-model/models#defining-fields)
       - [Attributes](https://www.prisma.io/docs/orm/prisma-schema/data-model/models#defining-attributes)

1. Run `npx prisma migrate dev` to create your database tables with Prisma 
  - This command did three things:

    - It created a new SQL migration file for this migration in the prisma/migrations directory.
    - It executed the SQL migration file against the database.
    - It ran prisma generate under the hood (which installed the @prisma/client package and generated a tailored Prisma Client API based on your models).

2. Now your database is up to date with the new schema and you can access your models through the Prisma Client 🙂

### 3. Load your database from you CSVs

1. Copy your csv files into this directory or have the path to them at hand
2. Use papaparse to read the csv
3. Use the prisma client to save it on the database
4. Run `npm run load` to execute the script `load.ts`
5. Done! Your database models are loaded with the information

## Have fun doing queries with Prisma

Write the queries you'd like on `./index.ts` and run `npm run start` to execute it 🥳
