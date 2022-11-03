var billAmount=document.querySelector("#bill-amount");
var checkButton=document.querySelector("#check-button");
var cashGiven=document.querySelector("#cash-given");
var errormessage=document.querySelector("#error-message");
var availableNotes=[2000,500,100,20,10,5,1];
var numberOfNotes=document.querySelectorAll(".No-Of-notes")

checkButton.addEventListener("click",function validatebillandcashamount()
{
    errormessage.style.display="none";
    if(billAmount.value>0)
    {
        if(cashGiven.value>=billAmount.value)
        {
            var amountToBeReturned=cashGiven.value-billAmount.value;
            calulateReturnAmount(amountToBeReturned)
           
        }
        else{
            showMessage("Cash given should be equal or more than bill amount")
        }
     }
     else if(billAmount.value!=parseInt(billAmount.value))
     {
        showMessage("you have entered a string")
     }
    else{
        showMessage("Bill amount is invalid!")
    }
})

function showMessage(message)
{
        errormessage.style.display="block";
        errormessage.innerText=message
}

function  calulateReturnAmount(amountToBeReturned)
{
   for(let i=0;i<availableNotes.length;i++)
   {
    var denomination=Math.trunc(amountToBeReturned/availableNotes[i]);
    console.log(denomination);
    amountToBeReturned=amountToBeReturned%availableNotes[i];
    console.log(amountToBeReturned);
    numberOfNotes[i].innerText=denomination;
    console.log(numberOfNotes)
   }

}