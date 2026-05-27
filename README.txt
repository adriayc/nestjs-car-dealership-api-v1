CAR-DEALERSHIP API (NestJS)

* Inicializamos la app (Back-End)
    - Instalar Nest CLI
        $ npm i -g @nestjs/cli
    
    - Crear la app
        $ nest new car-dealership-api
            > ? Which package manager would you ❤️  to use? yarn
        $ cd car-dealership-api
        $ yarn run start                    // Run app (API URL: http://localhost:3000/)
        $ yarn run start:dev                // Run app (development mode)

        Construir y ejecutar el build de prod 
        $ yarn build
        $ yarn start:prod

    - Agregar dependencias
        + UUID
            $ yarn add uuid
            $ yarn add -D @types/uuid       (Optional: si no tiene soporte a TS)
        + Class-Validator and Class-Transformer (Librerías externas)
            $ yarn add class-validator class-transformer

    - Remover dependencias
        + Prettier
            $ yarn remove prettier  (optional)
        + ESlint-Config-Prettier and ESlint-Plugin-Prettier (optional solo para dev)
            $  yarn remove eslint-config-prettier eslint-plugin-prettier

    - Nestjs CLI
        - Ayuda de comandos
            $ nest --help | nest -h
        - Crear un module
            $ nest g mo cars
        - Crear un controller
            $ nest g co cars
        - Crear un service (sin archivo de test)
            $ nest g s cars --no-spec
        - Crear un resource (recurso completo sin archivos de test)
            $ nest g resource brands --no-spec | nest g res brands --no-spec
                > ? What transport layer do you use? REST API
                > ? Would you like to generate CRUD entry points? (Y/n) y
        - Crear un resource (sin archivos de test  - SEED para cargar datos)
            $ nest g resource seed --no-spec | nest g res seed --no-spec
                > ? What transport layer do you use? REST API
                > ? Would you like to generate CRUD entry points? (Y/n) y

    - Postman
        + Crete a new Workspace (Click "New" | "Workspace" > "Blank workspace")
            > Name: "Ax2CDev"
              Click "Create"
            * Create a new collection (Click "+" | "Blank collection")
                > Name: "nestjs-car-dealership-api"

        + HTTP requests
            - Car (Click "..." > Add folder > Name: "Car")
                + Find All Cars
                    > GET: http://localhost:3000/cars                       Click "Send"
                + Find One By ID
                    > Get: http://localhost:3000/cars/{{UUID}}              Click "Send"
                + Create Car
                    > POST: http://localhost:3000/cars                      Click "Send"
                        > Body | x-www-form-urlencoded
                            KEY                     VALUE
                            brand                   Volvo
                            model                   XC40
                + Update Car
                    > PATCH: http://localhost:3000/cars/{{UUID}}            Click "Send"
                        > Body | x-www-form-urlencoded
                            KEY                     VALUE
                            brand                   Volvo update
                            model                   XC40 update
                + Delete Car
                    > DELETE: http://localhost:3000/cars/{{UUID}}           Click "Send"
            - Brand (Click "..." > Add folder > Name: "Brand")
                + Create Brand
                    > POST: http://localhost:3000/brands                    Click "Send"
                        > Body | raw (JSON)
                            { name: "Honda" }
                + Find All Brand
                    > GET: http://localhost:3000/brands                     Click "Send"
                + Find One Brand
                    > GET: http://localhost:3000/brands/{{UUID}}            Click "Send"
                + Update Brand
                    > PATCH: http://localhost:3000/brands/{{UUID}}          Click "Send"
                        > Body | raw (JSON)
                            { name: "Honda update" }
                + Remove Brand
                    > DELETE: http://localhost:3000/brands/{{UUID}}         Click "Send"
            - SEED (Click "..." > Add folder > Name: "SEED")
                + Populate DB
                    > GET: http://localhost:3000/seed                       Click "Send"

    * VSCode
        - Atajos
            + Recargar la app  (CTRL + SHIFT + P > Search: ..."Developer: Reload Window")
            + Vista previa Markdown (CTRL + SHIFT + P > Search: ..."Markdown: Open Preview")
