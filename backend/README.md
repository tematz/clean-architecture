## Clean Architecture and Hexagonal Architecture Project

**Description:**

This project demonstrates the implementation of clean architecture and hexagonal architecture in TypeScript, focusing on principles like modularity and decoupling.

**Technologies:**

* **Language:** TypeScript
* **Framework:** Express
* **Database Manager:** pg-promise
* **Authentication:** JWT
* **Encryption:** bcrypt
* **Dependencies:**
    * **Development:**
        * "@types/bcrypt": "^5.0.2"
        * "@types/express": "^4.17.21"
        * "@types/jsonwebtoken": "^9.0.5"
        * "@types/node": "^20.4.9"
        * "@types/uuid": "^9.0.8"
        * "ts-node-dev": "^2.0.0"
        * "tsconfig-paths": "^4.2.0"
        * "typescript": "^5.1.6"
    * **Production:**
        * "bcrypt": "^5.1.1"
        * "dotenv": "^16.4.5"
        * "express": "^4.18.2"
        * "jsonwebtoken": "^9.0.2"
        * "pg-promise": "^11.5.4"
        * "uuid": "^9.0.1"

**Hexagonal Architecture:**

The project is organized in layers, following the principles of hexagonal architecture:

* **Application Layer:** Contains the business logic of the application, independent of technical details.
* **Domain Layer:** Defines the models and entities of the system.
* **Infrastructure Layer:** Implements the technical details of accessing the database, authentication, and other dependencies.
* **Adapters:** Connect the application layer to the infrastructure layer.

**Clean Architecture Principles:**

* **Separation of Concerns:** Business logic is separated from technical details and user interfaces.
* **Dependency Inversion:** Dependencies are injected into the classes, avoiding direct coupling.

**Additional Resources:**

* **API Example:** The project includes a sample RESTful API that utilizes the principles of clean architecture and hexagonal architecture.
