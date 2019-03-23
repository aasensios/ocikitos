# Functional Requirements
[< Back to README](/README.md)

This document has the purpose of defining the Functional Requirements (FR) of the project. In order to accomplish that, we are going to break them into User Stories (US), which will be implemented afterwards, in the code developing stage.

This would be an example of a whole workflow:

1. Veterinarian registers a new Dog with chip number, owner's DNI and saliva sample into a Kit.
2. Bioinformatics Technician sequences the DNA from the saliva sample, getting the fasta file and the STR's pattern.
3. Street Agent takes a sample of a dog's droppings found in street, introduces the sample into the Kit, and registers the Incident into the app, storing the location, a photo as evidence and the Kit's barcode number.
4. Bioinformatics Technician sequences the DNA from the droppings sample, getting the fasta file and the STR's pattern, which will reveal if it matches with some existing saliva sample. This method allows us to uniquely identify a certain dog.
5. A Police Officer validates the evidences: photo + location + STR's matching patterns. If everything is considered as correct, a new InfractionProposal is generated, which will follow the workflow stablished by Town Administration until the corresponding monetary fine will be emitted to the dog's owner. 

> [See workflow diagram >](/requirements/workflow.pdf)

# FR00. Define user roles
As the Product Owner, I want to define the basic user roles for the application, so that I can decide which tasks are performed by which role(s). The roles are:
- Application Administrator, **admin**, who has permission to manage the users, as well as all the actions inside the application; for instance, the massive load of Kits for samples (barcode as id).
- Vetarinarian, **vet**, who is able to create or modify a Dog entry, injecting the chip into the dog's skin and taking a sample of dog's saliva into the Kit.
- Bioinformatics Technician, **bio**, who is able to create a Sample entry, which contains its DNA sequence info, such as the fasta and STR's files; as well as determine if two samples are from the same dog (match).
- Street Agent, **agent**, who is able to create an Incident entry, taking the dog droppings sample into the Kit and uploading a photo of them.
- Police Officer, **officer**, who is able to validate, invalidate or ask for more evidences about the droppings street Incident. By validating the Incident,  
- Final User, **dog**, who is able to list its own Infractions, and modify some customizable fields, such as the password or the profile photo. And yes, this view is made _from the dog perspective_.

# FR01. Users management

#### US011. List users
> As an **admin**, I want to list all the users, so that I can check their info and know the total amount of users in the app.

#### US012. Filter users
> As an **admin**, I want to filter the users list, so that I can search for an specific user.

#### US013. Add user
> As an **admin**, I want to create a new user with an specific role, so that I can give the correct permissions to use the app.

#### US014. Modify user
> As _any user role_, I want to modify the editable fields of my user, such as my password, so that I can mantain my account updated and secure.

#### US015. Delete user
> As an **admin**, I want to delete a user from database, so that I can clean up wrong users.

#### US016. Log in
> As _any user role_, I want to log in the app, so that I can use its functionalities, depending on my role.

#### US017. Log out
> As _any user role_, I want to log out from the app, so that I can leave the site securely.

# FR02. Dogs management

#### US021. List dogs
> As a **vet**, I want to list all the dogs, so that I can check their info and know the total amount of dogs in the app.

#### US022. Filter dogs
> As a **vet**, I want to filter the dogs list, so that I can search for an specific dog.

#### US023. Add dog
> As a **vet**, I want to create a new dog entry, so that I can register its new chip number, body features and the Kit's barcode; that Kit is made for taking a saliva sample from dog. This is the START of our workflow.

#### US024. Modify dog
> As **vet**, I want to modify a dog entry, so that I can update any change what is needed. For example, if a dog dies, we are not deleting it, but modifying its status field.

#### US025. Delete dog
> As a **vet**, I want to notify to Administrators a wrong dog entry. Then, an **admin** will check the veterinarian report, and will decide if that dog entry has to be deleted from database.

# FR03. Samples management

#### US031. List samples
> As a **bio**, I want to list all the samples, so that I can check their info and know the total amount of samples in the app.

#### US032. Filter samples
> As a **bio**, I want to filter the samples list, so that I can search for an specific sample.

#### US033. Add sample
> As a **bio**, I want to create a new sample entry, so that I can register its sequenced DNA as a fasta file and the obtained STR's, which identifies the dog uniquely.

#### US034. Modify sample
> As a **bio**, I want to modify a sample entry, so that I can update any change what is needed. For example, if the sequentiation process has to be repeated, the fasta file must be overwritten.

#### US035. Delete sample
> As a **bio**, I want to notify to Administrators a wrong sample entry. Then, an **admin** will check the Bioinformatics Technitian report, and will decide if that sample entry has to be deleted from database.

#### US036. Find STR match
> As a **bio**, I want to find if a certain STR pattern matches with an exiting STR pattern in database, obtained from a previous DNA sample, so that I can uniquely identify a certain dog. If one match is found, an InfractionProposal is automatically emitted to the Police Officers; if no match is found, our workflow reaches its END.

# FR04. Incidents management

#### US031. List incidents
> As an **admin**, I want to list all the incidents, so that I can check their info and know the total amount of incidents in the app.

#### US032. Filter incidents
> As an **admin**, I want to filter the incidents list, so that I can search for an specific incident.

#### US033. Add incident
> As an **agent**, I want to create a new incident entry, so that I can register the location, an attatched photo of the evidence, along with the Kit barcode, where the dog droppings sample is taken.

#### US034. Modify incident
> As an **agent**, I want to modify an incident entry, so that I can update the attatched photo or re-scan the Kit barcode.

#### US035. Delete incident
> As an **agent**, I want to notify to Administrators a wrong incident entry. Then, an **admin** will check the Police Officer report, and will decide if that incident entry has to be deleted from database.

# FR05. Infraction proposals management

#### US031. List infraction proposals
> As an **officer**, I want to list all the infraction proposals, so that I can check their info and know the total amount of infraction proposals in the app.

#### US032. Filter infraction proposals
> As an **officer**, I want to filter the infraction proposals list, so that I can search for an specific infraction proposal.

#### US033. Add infraction proposal
> As an **admin**, I want to add an infraction proposal entry manually.

#### US034. Modify infraction proposal
> As an **admin**, I want to modify an infraction proposal entry manually. so that I can fix any possible wrong information.

#### US035. Delete infraction proposal
> As an **officer**, I want to notify to Administrators a wrong infraction entry. Then, an **admin** will check the Police Officer report, and will decide if that infraction entry has to be deleted from database.

#### US036. Validate infraction proposal
> As an **officer**, I want to validate an existing infraction proposal entry, so that I can confirm the evidences and emit an automatic Infraction document to the corresponding Town Administration. At this point, our workflow reaches its END.

#### US037. Decline infraction proposal
> As an **officer**, I want to decline an existing infraction proposal entry, so that I can refuse the evidences as non-conclusive (maybe due to a non-accurate droppings photo or an inconsistency between owner address and Incident address). In this case, the InfractionProposal's status changes to "declined" and no further actions are performed; our workflow reaches its END.
