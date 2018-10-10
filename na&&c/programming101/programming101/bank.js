let action = process.argv[2]
let amount = Number(process.argv[3])
let balance = 1000

if(isNaN (amount)){
    console.log ('oh no, u passed'+amount+'instead of a number')
    
}

else if (action == 'give'){
    balance += Number(amount)
    console.log('gonna do some depositing')
    console.log('you know have' + balance +'dollars')
}
else if (action == 'take'){
    balance -= Number(amount)
    console.log('gonna do some withdrawing')
    console.log('you know have' + balance +'dollars')
}
else{
    console.log('sorry'+action+'is not a function')
    console.log('why dont you try "give" or "take"')
}
