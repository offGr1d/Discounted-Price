var amount = window.prompt("Enter Amount: ");
amount = parseInt(amount);

switch(true)
{
    case amount >= 1000 && amount < 5000:
        let price = amount * 0.90;
        console.log('Amount: ' + amount + '\nDiscounted Amount: ' +price)
    break;
    case amount >= 5000 && amount < 10000:
        let price1 = amount * 0.80;
        console.log('Amount: ' + amount + '\nDiscounted Amount: ' +price1)
    break;
    case amount >= 10000:
        let price2 = amount * 0.70;
        console.log('Amount: ' + amount + '\nDiscounted Amount: ' +price2)
    break;
    default:
        console.log('Amount: ' + amount + '\nDiscounted Amount: ' +amount)
}