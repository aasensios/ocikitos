# Functional Requirements
This document has the purpose of defining the Functional Requirements (FR) of the project. In order to accomplish that, we are going to describe them as User Stories (US), which will be implemented afterwards.

## US00. Define user roles
As the Product Owner, I want to define the basic user roles for the application, so I can decide which tasks are performed by which role(s). The roles are:
- App Admin (AA), who is able to perform all tasks inside the app.
- Public Worker (PW), who is able to load data into the app through a backend gateway. There are two subtypes of public workers: Office Worker (OW) and Street Agent (SA).
- Pet (PT), who is able to log in the app "from the pet perspective". The pet will be the real user of the app, not its owner.

## US01. User management
As an App Admin, I want to manage the users, so I can make the necessary changes to mantain the app.

## US011. Search user
As a user (any role), I want to search for other users, so I can check if a certain user exists. Each user role has its own searching scope, this is, a Pet can only search among other pets, a public worker can only search among other other public workers, and so on.

## US012. Add user
As an Office Worker, I want to add a user (other Office Worker or a Pet) into database, so I can grow the app.

## US013. Modify user
As a user (any role), I want to modify the editable information of my own user, so I can update, for example, my password.

## US014. Delete user
As an App Admin, I want to delete a user from database, so I can fix some concrete issue or clean up old users.

## US015. Log in
As a user, I want to log in the app, so I can use its functionalities, depending on my role.

## US016. Log out
As a user, I want to log out from the app, so I can leave the site securely.
