## Project Overview

This is a Next.js project for an institutional repository for Jigjiga University. It is designed to store, manage, and disseminate digital assets such as research papers, datasets, and other scholarly materials. The project uses NextAuth.js for authentication, Prisma as the ORM for a PostgreSQL database, and Tailwind CSS for styling.

### Key Features:

*   **Hierarchical Structure:** The repository is organized into Communities, Collections, and Items, allowing for a flexible and scalable content hierarchy.
*   **Role-Based Access Control:** The system has a role-based access control system with roles like `USER`, `ADMIN`, `SUBMITTER`, and `REVIEWER`.
*   **Metadata:** The application supports flexible metadata for describing digital assets, similar to the Dublin Core standard.
*   **Authentication:** User authentication is handled by NextAuth.js, with support for credentials-based login.

## Building and Running

1.  **Install dependencies:**

    ```bash
    npm install
    ```

2.  **Set up the database:**

    *   Make sure you have a PostgreSQL database running.
    *   Create a `.env` file and set the `DATABASE_URL` environment variable.
    *   Run the following command to sync the database schema:

        ```bash
        npx prisma db push
        ```

3.  **Run the development server:**

    ```bash
    npm run dev
    ```

    The application will be available at [http://localhost:3000](http://localhost:3000).

## Development Conventions

*   **Styling:** The project uses Tailwind CSS for styling. Utility classes should be used whenever possible.
*   **Components:** Reusable components are located in the `components` directory.
*   **Authentication:** Authentication is handled by NextAuth.js. The configuration is in `app/api/auth/[...nextauth]/route.ts`.
*   **Database:** The database schema is defined in `prisma/schema.prisma`. Prisma Client is used to interact with the database.
