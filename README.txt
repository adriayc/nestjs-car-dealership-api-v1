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

    - Postman
        + Crete a new Workspace (Click "New" | "Workspace" > "Blank workspace")
            > Name: "Ax2CDev"
              Click "Create"
            * Create a new collection (Click "+" | "Blank collection")
                > Name: "nestjs-car-dealership-api"

        + HTTP requests
            - Get all cars
                > GET: http://localhost:3000/cars                       Click "Send"

    * VSCode
        - Atajos
            + Recargar la app  (CTRL + SHIFT + P > Search: ..."Developer: Reload Window")
