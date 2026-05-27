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

    - Agregar dependencias
        + UUID
            $ yarn add uuid
            $ yarn add -D @types/uuid       (Optional: si no tiene soporte a TS)

    - Remover dependencias
        + Prettier
            $ yarn remove prettier  (optional)

    - Nestjs CLI
        - Ayuda de comandos
            $ nest --help | nest -h
        - Crear un module
            $ nest g mo cars
        - Crear un controller
            $ nest g co cars
        - Crear un service (sin archivo de test)
            $ nest g s cars --no-spec

    - Postman
        + Crete a new Workspace (Click "New" | "Workspace" > "Blank workspace")
            > Name: "Ax2CDev"
              Click "Create"
            * Create a new collection (Click "+" | "Blank collection")
                > Name: "nestjs-car-dealership-api"

        + HTTP requests
            - Find All Cars
                > GET: http://localhost:3000/cars                       Click "Send"
            - Find One By ID
                > Get: http://localhost:3000/cars/{{UUID}}              Click "Send"
            - Create Car
                > POST: http://localhost:3000/cars                      Click "Send"
                    > Body | x-www-form-urlencoded
                        KEY                     VALUE
                        brand                   Volvo
                        model                   XC40
            - Update Car
                > PATCH: http://localhost:3000/cars/1                   Click "Send"
                    > Body | x-www-form-urlencoded
                        KEY                     VALUE
                        brand                   Volvo update
                        model                   XC40
            - Delete Car
                > DELETE: http://localhost:3000/cars/1                  Click "Send"

    * VSCode
        - Atajos
            + Recargar la app  (CTRL + SHIFT + P > Search: ..."Developer: Reload Window")
