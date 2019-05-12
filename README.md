# DNA-based Dog Identification

## Description

This project aims to use bioinformatics tools to identify a certain dog by its Short Tandem Repeats (STR) pattern, located among the different chromosomes of its DNA. That identification may have several uses, and one of them is helping towns and cities to maintain the streets clean from dogs' droppings.

To accomplish that mission, we are building a web application with Laravel as backend, (((__Blade OR Vue__???))) as frontend, Biopython as scripting language and MySQL as relational database persistence. In addition, we are using [Voyager admin tool for Laravel](https://laravelvoyager.com/) to manage changes on the backend more quickly and efficiently.

The following points describe the expected [workflow](documentation/workflow.png) of our web app:

1. Veterinarian registers a new Dog with chip number, owner's DNI and saliva sample into a Kit.
2. Bioinformatics Technician sequences the DNA from the saliva sample, getting the fasta file and the STR pattern.
3. Street Agent takes a sample of a dog's droppings found in street, introduces the sample into the Kit, and registers the Incident into the app, storing the location, a photo as evidence and the Kit's barcode number.
4. Bioinformatics Technician sequences the DNA from the droppings sample, getting the fasta file and the STR pattern, which will reveal if it matches with some existing saliva sample. This method allows us to uniquely identify a certain dog. If there is no match, a new "Suspected non-registered Dog" log is automatically stored in our database.
5. A Police Officer validates the evidences: photo + location + STR matching patterns. If everything is considered as correct, a new InfractionProposal is generated and sent to Town Administration, which will proceed with the corresponding monetary fine to the dog's owner.

To take a deeper idea of this project, see the [Use Case diagram](documentation/use-case-diagram.png) and its [technical specification](documentation/use-case-specification.odt).

The friendly codename, as well as the domain name, of this project is "ocikitos", which in Spanish means little snout (animal nose).

## Documentation

#### Mockups
- [Mockups](documentation/mockups.pdf)

#### Requirements
- [Functional Requirements](documentation/working-files/00-project-proposal/requirements/functional-requirements.md)
- [Non-Functional Requirements](documentation/working-files/00-project-proposal/requirements/non-functional-requirements.md)

#### Project Proposal
- [Official Project File (.odt)](documentation/project.pdf)

## About this Project

#### Developed by
- Alejandro Asensio <alejandro.asensio.10@gmail.com>
- Óscar Burgos <mihifidem@gmail.com>

#### Module
- M12 Project

#### Degree
- Cicle formatiu de grau superior (CFGS) Desenvolupament d'Aplicacions Web - perfil professional Bioinformàtica (DAW-BIO) (cicle LOE)
> <https://www.proven.cat/intraweb/index.php/els-estudis/36-familia-professional-dinformatica-i-comunicacions/334-cfgs-desenvolupament-d-aplicacions-web-perfil-professional-bioinformatica>

#### Center of Studies
- IES Provençana
> https://www.proven.cat
