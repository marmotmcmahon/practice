<?PHP
function game() {
	$rando = rand(1, 10);
do {
	fwrite(STDOUT, 'Choose a number and press enter! ');
	$userChoice = trim(fgets(STDIN));
	fwrite(STDOUT, "Your choice were $userChoice\n");
	if ($userChoice == $rando) {
		echo "BULLSEYE!" . PHP_EOL;
	} else if ($userChoice > $rando) {
		echo "lower!" . PHP_EOL;
	} else {
		echo "higher!" . PHP_EOL;
	}
} while ($userChoice != $rando);
again();
}
function again() {
	fwrite(STDOUT, 'Play again? Y or N ');
		$againChoice = fgets(STDIN);
		if (trim($againChoice) == "Y") {
		game();
	};
}
game();