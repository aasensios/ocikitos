# DNA Dog Matching

## Description
This project aims to use bioinformatics tools to identify a dog by its STR’s pattern from two different biological samples: saliva and droppings, respectively. To accomplish this, we are going to build a web application to handle the actions assigned to each user role.

This would be an example of a whole workflow:

1. Veterinarian registers a new Dog with chip number, owner's DNI and saliva sample into a Kit.
2. Bioinformatics Technician sequences the DNA from the saliva sample, getting the fasta file and the STR's pattern.
3. Street Agent takes a sample of a dog's droppings found in street, introduces the sample into the Kit, and registers the Incident into the app, storing the location, a photo as evidence and the Kit's barcode number.
4. Bioinformatics Technician sequences the DNA from the droppings sample, getting the fasta file and the STR's pattern, which will reveal if it matches with some existing saliva sample. This method allows us to uniquely identify a certain dog. If there is no match, a new "Suspected non-registered Dog" log is automatically stored in our database.
5. A Police Officer validates the evidences: photo + location + STR's matching patterns. If everything is considered as correct, a new InfractionProposal is generated, which will follow the workflow established by Town Administration until the corresponding monetary fine will be emitted to the dog's owner.

The codename of this project is “ocikitos”, which in Spanish means little snout (animal nose).

## Documentation
#### Project Proposal
- [Official Project .odt file >](/project-proposal/project.odt)

#### Requirements
- [Functional Requirements >](/project-proposal/requirements/functional-requirements.md)
- [Non Functional Requirements >](/project-proposal/requirements/non-functional-requirements.md)

#### Workflow diagram
- [See workflow diagram >](/requirements/workflow.pdf)

#### Mockups
- [Mockups description >](/project-proposal/mockups/description.md)
- [Mockups drawings >](/project-proposal/mockups/mockups.pdf)

## About

#### Developed by
- Alejandro Asensio -- <alejandro.asensio.10@gmail.com>
- Óscar Burgos -- <mihifidem@gmail.com>

#### Module
- M12 Project

#### Degree
- Cicle formatiu de grau superior (CFGS) Desenvolupament d'Aplicacions Web - perfil professional Bioinformàtica (DAW-BIO) (cicle LOE) -- <https://www.proven.cat/intraweb/index.php/els-estudis/36-familia-professional-dinformatica-i-comunicacions/334-cfgs-desenvolupament-d-aplicacions-web-perfil-professional-bioinformatica>

#### Center of Studies
- IES Provençana -- https://www.proven.cat
