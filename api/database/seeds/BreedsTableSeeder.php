<?php

use Illuminate\Database\Seeder;

class BreedsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Official list of existing dog breeds (consulted on 2019-05-18). Source: https://dogtime.com/dog-breeds
        // The array must inlcude the 'name' key for the next insert call.
        // To construct the following array, we can use Visual Studio Code editor's
        // "Find & Replace" (Ctrl + H) functionality, using the sub-feature Regular Expressions.
        //     Find:     ^(.*)$
        //     Replace:  ['name' => '$1'],
        $breeds = [
            ['name' => 'Affenpinscher'],
            ['name' => 'Afghan Hound'],
            ['name' => 'Airedale Terrier'],
            ['name' => 'Akita'],
            ['name' => 'Alaskan Klee Kai'],
            ['name' => 'Alaskan Malamute'],
            ['name' => 'American Bulldog'],
            ['name' => 'American English Coonhound'],
            ['name' => 'American Eskimo Dog'],
            ['name' => 'American Foxhound'],
            ['name' => 'American Pit Bull Terrier'],
            ['name' => 'American Staffordshire Terrier'],
            ['name' => 'American Water Spaniel'],
            ['name' => 'Anatolian Shepherd Dog'],
            ['name' => 'Appenzeller Sennenhunde'],
            ['name' => 'Australian Cattle Dog'],
            ['name' => 'Australian Kelpie'],
            ['name' => 'Australian Shepherd'],
            ['name' => 'Australian Terrier'],
            ['name' => 'Azawakh'],
            ['name' => 'Barbet'],
            ['name' => 'Basenji'],
            ['name' => 'Basset Hound'],
            ['name' => 'Beagle'],
            ['name' => 'Bearded Collie'],
            ['name' => 'Bedlington Terrier'],
            ['name' => 'Belgian Malinois'],
            ['name' => 'Belgian Sheepdog'],
            ['name' => 'Belgian Tervuren'],
            ['name' => 'Berger Picard'],
            ['name' => 'Bernedoodle'],
            ['name' => 'Bernese Mountain Dog'],
            ['name' => 'Bichon Frise'],
            ['name' => 'Black and Tan Coonhound'],
            ['name' => 'Black Mouth Cur'],
            ['name' => 'Black Russian Terrier'],
            ['name' => 'Bloodhound'],
            ['name' => 'Blue Lacy'],
            ['name' => 'Bluetick Coonhound'],
            ['name' => 'Boerboel'],
            ['name' => 'Bolognese'],
            ['name' => 'Border Collie'],
            ['name' => 'Border Terrier'],
            ['name' => 'Borzoi'],
            ['name' => 'Boston Terrier'],
            ['name' => 'Bouvier des Flandres'],
            ['name' => 'Boxer'],
            ['name' => 'Boykin Spaniel'],
            ['name' => 'Bracco Italiano'],
            ['name' => 'Briard'],
            ['name' => 'Brittany'],
            ['name' => 'Brussels Griffon'],
            ['name' => 'Bull Terrier'],
            ['name' => 'Bulldog'],
            ['name' => 'Bullmastiff'],
            ['name' => 'Cairn Terrier'],
            ['name' => 'Canaan Dog'],
            ['name' => 'Cane Corso'],
            ['name' => 'Cardigan Welsh Corgi'],
            ['name' => 'Catahoula Leopard Dog'],
            ['name' => 'Caucasian Shepherd Dog'],
            ['name' => 'Cavalier King Charles Spaniel'],
            ['name' => 'Cesky Terrier'],
            ['name' => 'Chesapeake Bay Retriever'],
            ['name' => 'Chihuahua'],
            ['name' => 'Chinese Crested'],
            ['name' => 'Chinese Shar-Pei'],
            ['name' => 'Chinook'],
            ['name' => 'Chow Chow'],
            ['name' => 'Clumber Spaniel'],
            ['name' => 'Cockapoo'],
            ['name' => 'Cocker Spaniel'],
            ['name' => 'Collie'],
            ['name' => 'Coton de Tulear'],
            ['name' => 'Curly-Coated Retriever'],
            ['name' => 'Dachshund'],
            ['name' => 'Dalmatian'],
            ['name' => 'Dandie Dinmont Terrier'],
            ['name' => 'Doberman Pinscher'],
            ['name' => 'Dogo Argentino'],
            ['name' => 'Dogue de Bordeaux'],
            ['name' => 'Dutch Shepherd'],
            ['name' => 'English Cocker Spaniel'],
            ['name' => 'English Foxhound'],
            ['name' => 'English Setter'],
            ['name' => 'English Springer Spaniel'],
            ['name' => 'English Toy Spaniel'],
            ['name' => 'Entlebucher Mountain Dog'],
            ['name' => 'Field Spaniel'],
            ['name' => 'Finnish Lapphund'],
            ['name' => 'Finnish Spitz'],
            ['name' => 'Flat-Coated Retriever'],
            ['name' => 'Fox Terrier'],
            ['name' => 'French Bulldog'],
            ['name' => 'German Pinscher'],
            ['name' => 'German Shepherd Dog'],
            ['name' => 'German Shorthaired Pointer'],
            ['name' => 'German Wirehaired Pointer'],
            ['name' => 'Giant Schnauzer'],
            ['name' => 'Glen of Imaal Terrier'],
            ['name' => 'Goldador'],
            ['name' => 'Golden Retriever'],
            ['name' => 'Goldendoodle'],
            ['name' => 'Gordon Setter'],
            ['name' => 'Great Dane'],
            ['name' => 'Great Pyrenees'],
            ['name' => 'Greater Swiss Mountain Dog'],
            ['name' => 'Greyhound'],
            ['name' => 'Harrier'],
            ['name' => 'Havanese'],
            ['name' => 'Ibizan Hound'],
            ['name' => 'Icelandic Sheepdog'],
            ['name' => 'Irish Red and White Setter'],
            ['name' => 'Irish Setter'],
            ['name' => 'Irish Terrier'],
            ['name' => 'Irish Water Spaniel'],
            ['name' => 'Irish Wolfhound'],
            ['name' => 'Italian Greyhound'],
            ['name' => 'Jack Russell Terrier'],
            ['name' => 'Japanese Chin'],
            ['name' => 'Japanese Spitz'],
            ['name' => 'Korean Jindo Dog'],
            ['name' => 'Karelian Bear Dog'],
            ['name' => 'Keeshond'],
            ['name' => 'Kerry Blue Terrier'],
            ['name' => 'Komondor'],
            ['name' => 'Kooikerhondje'],
            ['name' => 'Kuvasz'],
            ['name' => 'Labradoodle'],
            ['name' => 'Labrador Retriever'],
            ['name' => 'Lagotto Romagnolo'],
            ['name' => 'Lakeland Terrier'],
            ['name' => 'Lancashire Heeler'],
            ['name' => 'Leonberger'],
            ['name' => 'Lhasa Apso'],
            ['name' => 'Lowchen'],
            ['name' => 'Maltese'],
            ['name' => 'Maltese Shih Tzu'],
            ['name' => 'Maltipoo'],
            ['name' => 'Manchester Terrier'],
            ['name' => 'Mastiff'],
            ['name' => 'Miniature Pinscher'],
            ['name' => 'Miniature Schnauzer'],
            ['name' => 'Mudi'],
            ['name' => 'Mutt'],
            ['name' => 'Neapolitan Mastiff'],
            ['name' => 'Newfoundland'],
            ['name' => 'Norfolk Terrier'],
            ['name' => 'Norwegian Buhund'],
            ['name' => 'Norwegian Elkhound'],
            ['name' => 'Norwegian Lundehund'],
            ['name' => 'Norwich Terrier'],
            ['name' => 'Nova Scotia Duck Tolling Retriever'],
            ['name' => 'Old English Sheepdog'],
            ['name' => 'Otterhound'],
            ['name' => 'Papillon'],
            ['name' => 'Peekapoo'],
            ['name' => 'Pekingese'],
            ['name' => 'Pembroke Welsh Corgi'],
            ['name' => 'Petit Basset Griffon Vendeen'],
            ['name' => 'Pharaoh Hound'],
            ['name' => 'Plott'],
            ['name' => 'Pocket Beagle'],
            ['name' => 'Pointer'],
            ['name' => 'Polish Lowland Sheepdog'],
            ['name' => 'Pomeranian'],
            ['name' => 'Pomsky'],
            ['name' => 'Poodle'],
            ['name' => 'Portuguese Water Dog'],
            ['name' => 'Pug'],
            ['name' => 'Puggle'],
            ['name' => 'Puli'],
            ['name' => 'Pyrenean Shepherd'],
            ['name' => 'Rat Terrier'],
            ['name' => 'Redbone Coonhound'],
            ['name' => 'Rhodesian Ridgeback'],
            ['name' => 'Rottweiler'],
            ['name' => 'Saint Bernard'],
            ['name' => 'Saluki'],
            ['name' => 'Samoyed'],
            ['name' => 'Schipperke'],
            ['name' => 'Schnoodle'],
            ['name' => 'Scottish Deerhound'],
            ['name' => 'Scottish Terrier'],
            ['name' => 'Sealyham Terrier'],
            ['name' => 'Shetland Sheepdog'],
            ['name' => 'Shiba Inu'],
            ['name' => 'Shih Tzu'],
            ['name' => 'Siberian Husky'],
            ['name' => 'Silken Windhound'],
            ['name' => 'Silky Terrier'],
            ['name' => 'Skye Terrier'],
            ['name' => 'Sloughi'],
            ['name' => 'Small Munsterlander Pointer'],
            ['name' => 'Soft Coated Wheaten Terrier'],
            ['name' => 'Stabyhoun'],
            ['name' => 'Staffordshire Bull Terrier'],
            ['name' => 'Standard Schnauzer'],
            ['name' => 'Sussex Spaniel'],
            ['name' => 'Swedish Vallhund'],
            ['name' => 'Tibetan Mastiff'],
            ['name' => 'Tibetan Spaniel'],
            ['name' => 'Tibetan Terrier'],
            ['name' => 'Toy Fox Terrier'],
            ['name' => 'Treeing Tennessee Brindle'],
            ['name' => 'Treeing Walker Coonhound'],
            ['name' => 'Vizsla'],
            ['name' => 'Weimaraner'],
            ['name' => 'Welsh Springer Spaniel'],
            ['name' => 'Welsh Terrier'],
            ['name' => 'West Highland White Terrier'],
            ['name' => 'Whippet'],
            ['name' => 'Wirehaired Pointing Griffon'],
            ['name' => 'Xoloitzcuintli'],
            ['name' => 'Yorkipoo'],
            ['name' => 'Yorkshire Terrier'],
        ];

        // Insert the data into the database.
        DB::table('breeds')->insert($breeds);
    }
}