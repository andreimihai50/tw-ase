function eligibleToVote(yearsOld) {
    if (yearsOld>=18) {
        console.log("You are leigible to vote!")
    } else {
        console.log(" You are NOT eligible to vote!")
    }
}

eligibleToVote(18);

function eligibleToVote2(yearsOld) {
    if(isNaN(yearsOld)) {
        console.log("Not a number")
        return
    }

    return yearsOld>=18 ? console.log("You are leigible to vote!"):console.log(" You are NOT eligible to vote!")
}
eligibleToVote2(18);
eligibleToVote2("a");