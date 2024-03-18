function check(a, b) {
    let c = a.toLowerCase();
    let d = b.toLowerCase();

    if (c.length === d.length) {
        console.log("Jaldi vaha se badho");

        let sortedC = c.split('').sort().join('');
        let sortedD = d.split('').sort().join('');

        console.log(sortedC);
        console.log(sortedD);
        if (sortedC === sortedD) {
            console.log("Strings are anagrams.");
        } else {
            console.log("Strings are not anagrams.");
        }
    } else {
        console.log("niklo");
    }
}
check("jadoo", "ooadj");

