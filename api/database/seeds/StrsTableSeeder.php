<?php

use Illuminate\Database\Seeder;

class StrsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $strs = [
            ['locus' => 'FH2001', 'chromosome' => 23, 'start_coordenate' => 50961325, 'end_coordenate' => 50961475, 'repeat_motif' => 'GATA', 'min_size' => 119, 'max_size' => 160, 'min_repeats' => 30, 'max_repeats' => 40, 'annealing_temp' => 51],
            ['locus' => 'FH2004', 'chromosome' => 11, 'start_coordenate' => 32161381, 'end_coordenate' => 32161621, 'repeat_motif' => 'AAAG', 'min_size' => 233, 'max_size' => 325, 'min_repeats' => 58, 'max_repeats' => 81, 'annealing_temp' => 64],
            ['locus' => 'FH2010', 'chromosome' => 24, 'start_coordenate' => 5196383, 'end_coordenate' => 5196605, 'repeat_motif' => 'ATGA', 'min_size' => 222, 'max_size' => 243, 'min_repeats' => 56, 'max_repeats' => 61, 'annealing_temp' => 57],
            ['locus' => 'FH2054', 'chromosome' => 12, 'start_coordenate' => 37914504, 'end_coordenate' => 37914739, 'repeat_motif' => 'GATA', 'min_size' => 139, 'max_size' => 177, 'min_repeats' => 35, 'max_repeats' => 44, 'annealing_temp' => 57],
            ['locus' => 'FH2088', 'chromosome' => 15, 'start_coordenate' => 53905651, 'end_coordenate' => 53905779, 'repeat_motif' => 'TTTA/TTCA', 'min_size' => 95, 'max_size' => 138, 'min_repeats' => 12, 'max_repeats' => 17, 'annealing_temp' => 56],
            ['locus' => 'FH2107', 'chromosome' => 3, 'start_coordenate' => 83830247, 'end_coordenate' => 83830574, 'repeat_motif' => 'GAAA', 'min_size' => 292, 'max_size' => 426, 'min_repeats' => 73, 'max_repeats' => 107, 'annealing_temp' => 54],
            ['locus' => 'FH2309', 'chromosome' => 1, 'start_coordenate' => 85772974, 'end_coordenate' => 85773377, 'repeat_motif' => 'GAAA', 'min_size' => 340, 'max_size' => 428, 'min_repeats' => 85, 'max_repeats' => 107, 'annealing_temp' => 52],
            ['locus' => 'FH2328', 'chromosome' => 33, 'start_coordenate' => 19158127, 'end_coordenate' => 19158477, 'repeat_motif' => 'GAAA', 'min_size' => 171, 'max_size' => 213, 'min_repeats' => 43, 'max_repeats' => 53, 'annealing_temp' => 58],
            ['locus' => 'FH3377', 'chromosome' => 3, 'start_coordenate' => 78748898, 'end_coordenate' => 78749090, 'repeat_motif' => 'GAAAA', 'min_size' => 184, 'max_size' => 305, 'min_repeats' => 37, 'max_repeats' => 61, 'annealing_temp' => 54],
            ['locus' => 'PEZ02', 'chromosome' => 17, 'start_coordenate' => 13276076, 'end_coordenate' => 13276209, 'repeat_motif' => 'GGAA', 'min_size' => 104, 'max_size' => 144, 'min_repeats' => 26, 'max_repeats' => 36, 'annealing_temp' => 60],
            ['locus' => 'PEZ05', 'chromosome' => 12, 'start_coordenate' => 60326434, 'end_coordenate' => 60326541, 'repeat_motif' => 'TTTA', 'min_size' => 92, 'max_size' => 116, 'min_repeats' => 23, 'max_repeats' => 29, 'annealing_temp' => 57],
            ['locus' => 'PEZ16', 'chromosome' => 27, 'start_coordenate' => 10305692, 'end_coordenate' => 10305995, 'repeat_motif' => 'GAAA', 'min_size' => 281, 'max_size' => 332, 'min_repeats' => 70, 'max_repeats' => 83, 'annealing_temp' => 57],
            ['locus' => 'PEZ17', 'chromosome' => 4, 'start_coordenate' => 71904833, 'end_coordenate' => 71905038, 'repeat_motif' => 'GAAA', 'min_size' => 191, 'max_size' => 225, 'min_repeats' => 48, 'max_repeats' => 56, 'annealing_temp' => 59],
            ['locus' => 'PEZ21', 'chromosome' => 2, 'start_coordenate' => 36438658, 'end_coordenate' => 36438751, 'repeat_motif' => 'AAAT', 'min_size' => 83, 'max_size' => 103, 'min_repeats' => 21, 'max_repeats' => 26, 'annealing_temp' => 52],
            ['locus' => 'VWF.X', 'chromosome' => 27, 'start_coordenate' => 41977918, 'end_coordenate' => 41978074, 'repeat_motif' => 'AGGAAT', 'min_size' => 151, 'max_size' => 187, 'min_repeats' => 25, 'max_repeats' => 31, 'annealing_temp' => 57],
        ];

        // Insert the data into the database.
        DB::table('strs')->insert($strs);

    }
}
