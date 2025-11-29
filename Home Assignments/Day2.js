let genderType="female"

function printGender()
{
    let color="brown"

    if(genderType.startsWith("female"))
    {
        var age=30
        let color="pink"
        console.log("Printing the color inside the if block",color)

    }
        console.log("printing the color outside if block",color)
        console.log("printing the age outside the if block but inside the function",age)
}
printGender()