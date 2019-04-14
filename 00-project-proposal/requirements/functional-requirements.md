# Functional Requirements
[< Back to README](/README.md)

This document has the purpose of defining the Functional Requirements (FR) of the project. In order to accomplish that, we are going to break them into User Stories (US), which will be implemented afterwards, in the code developing stage.

# FR00. Define user roles
As the Product Owner, I want to define the basic user roles for the application, so that I can decide which tasks are performed by which role(s). The roles are:
- Application Administrator, **admin**, who has permission to manage the users, as well as all the actions inside the application; for instance, the massive load of Kits for samples (barcode as id).
- Vetarinarian, **vet**, who is able to create or modify a Dog entry, injecting the chip into the dog's skin and taking a sample of dog's saliva into the Kit.
- Bioinformatics Technician, **bio**, who is able to create a Sample entry, which contains its DNA sequence info, such as the fasta and STR's files; as well as determine if two samples are from the same dog (match).
- Street Agent, **agent**, who is able to create an Incident entry, taking the dog droppings sample into the Kit and uploading a photo of them.
- Police Officer, **officer**, who is able to validate, invalidate or ask for more evidences about the droppings street Incident. By validating the Incident,  
- Final User, **dog**, who is able to log in _from the dog perspective_, this is, and list the Infractions of its human owner, as well as modify some customizable fields, such as the alias, the password or the profile photo.

In this project we are implementing the CRUD (Create, Read, Update, Delete) system for every object type in our app, plus the Filter function; so we call it __CRUDF__. See [Use Case diagram](/01-delivery1/use-case-diagram.png).

# FR01. User management
### US011. List users
As an **admin**, I want to list all the users, so that I can check their info and know the total amount of users in the app.
### US012. Filter users
As an **admin**, I want to filter the users list, so that I can search for an specific user.
### US013. Add user
As an **admin**, I want to create a new user with an specific role, so that I can give the correct permissions to use the app.
### US014. Modify user
As _any user role_, I want to modify the editable fields of my user, such as my password, so that I can mantain my account updated and secure.
### US015. Delete user
As an **admin**, I want to delete a user from database, so that I can clean up wrong users.
### US016. Log in
As _any user role_, I want to log in the app, so that I can use its functionalities, depending on my role.
### US017. Log out
As _any user role_, I want to log out from the app, so that I can leave the site securely.
### US018. Register
As a _new user_, I want to register into the app, so that I can be assigned an specific role by the **admin** and start contributing to the app.

# FR02. Dog management
### US021. List dogs
As a **vet**, I want to list all the dogs, so that I can check their info and know the total amount of dogs in the app.
### US022. Filter dogs
As a **vet**, I want to filter the dogs list, so that I can search for an specific dog.
### US023. Add dog
As a **vet**, I want to create a new dog entry, so that I can register its new chip number, body features and the Kit's barcode; that Kit is made for taking a saliva sample from dog. This is the START of our workflow.
### US024. Modify dog
As **vet**, I want to modify a dog entry, so that I can update any change what is needed. For example, if a dog dies, we are not deleting it, but modifying its status field.
### US025. Delete dog
As a **vet**, I want to notify to Administrators a wrong dog entry. Then, an **admin** will check the veterinarian report, and will decide if that dog entry has to be deleted from database.

# FR03. Sample management
### US031. List samples
As a **bio**, I want to list all the samples, so that I can check their info and know the total amount of samples in the app.
### US032. Filter samples
As a **bio**, I want to filter the samples list, so that I can search for an specific sample.
### US033. Add sample
As a **bio**, I want to create a new sample entry, so that I can register its sequenced DNA as a fasta file and the obtained STR's, which identifies the dog uniquely.
### US034. Modify sample
As a **bio**, I want to modify a sample entry, so that I can update any change what is needed. For example, if the sequentiation process has to be repeated, the fasta file must be overwritten.
### US035. Delete sample
As a **bio**, I want to notify to Administrators a wrong sample entry. Then, an **admin** will check the Bioinformatics Technitian report, and will decide if that sample entry has to be deleted from database.
### US036. Analyze sample
As a **bio**, I want to analyze a sample, so that I can __sequence__ it, obtain its __STR pattern__ and find a possible __STR match__ among our database. 
### US0361. Sequence sample
As a **bio**, I want to sequence a sample, so that I can store it as a fasta file as an attribute of the sample register. 
### US0362. Obtain STR pattern
As a **bio**, I want to obtain the STR pattern of a sample, so that I can identify a unique dog by that pattern of Short Tandem Repeats of DNA.
### US0363. Find STR match
As a **bio**, I want to find a possible STR match, so that I can uniquely identify a certain dog that was previously registered in our database. If the match occurs, an Infraction proposal is automatically emitted to the Police Officers; if no match is found, this anonymous sample is stored and our workflow reaches its END.

# FR04. Incident management
### US041. List incidents
As an **admin**, I want to list all the incidents, so that I can check their info and know the total amount of incidents in the app.
### US042. Filter incidents
As an **admin**, I want to filter the incidents list, so that I can search for an specific incident.
### US043. Add incident
As an **agent**, I want to create a new incident entry, so that I can register the location, an attatched photo of the evidence, along with the Kit barcode, where the dog droppings sample is taken.
### US044. Modify incident
As an **agent**, I want to modify an incident entry, so that I can update the attatched photo or re-scan the Kit barcode.
### US045. Delete incident
As an **agent**, I want to notify to Administrators a wrong incident entry. Then, an **admin** will check the Police Officer report, and will decide if that incident entry has to be deleted from database.

# FR05. Infraction management
### US051. List infractions
As an **officer**, I want to list all the infraction proposals, so that I can check their info and know the total amount of infraction proposals in the app.
### US052. Filter infractions
As an **officer**, I want to filter the infraction proposals list, so that I can search for an specific infraction proposal.
### US053. Add infraction
As an **admin**, I want to add an infraction proposal entry manually.
### US054. Modify infraction
As an **admin**, I want to modify an infraction proposal entry manually. so that I can fix any possible wrong information.
### US055. Delete infraction
As an **officer**, I want to notify to Administrators a wrong infraction entry. Then, an **admin** will check the Police Officer report, and will decide if that infraction entry has to be deleted from database.
### US056. Validate infraction
As an **officer**, In one hand, I may want to __validate__ an existing infraction proposal entry, so that I can confirm the evidences and emit an automatic Infraction document to the corresponding Town Administration. At this point, our workflow reaches its END. In the other hand, I may want to __decline__ an existing infraction proposal entry, so that I can refuse the evidences as non-conclusive (maybe due to a non-accurate droppings photo or an inconsistency between owner address and Incident address). In this case, the InfractionProposal's status changes to "declined" and no further actions are performed; our workflow reaches its END.
### US057. Generate Offcial Document
As an **officer**, I want to an automated generation of an offical document, so I can proof my approval or rejection of an Infraction proposal.
