<?php $browseDogs = Voyager::can('browse_dogs'); ?>

@if(browseDogs)
    You can browse dogs
@else
    You cannot browse dogs
@endif