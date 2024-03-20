let name=prompt("Enter Your Name");

let math=+prompt("Enter your Math Marks:")
let english=+prompt("Enter your English Marks:")
let urdu=+prompt("Enter your Urdu Marks:")
let physics=+prompt("Enter your physics Marks:")
let chemistry=+prompt("Enter your chemsitry Marks:")


let total=500;
let obtainedMarks=math + english + urdu +physics +chemistry

let percentage=(obtainedMarks/total)*100

if(math<33 || english<33 || urdu<33 || physics<33 || chemistry<33){

    alert("Your marke in one subject is less than 33 \n you are failed")

}

if(percentage>=90 && percentage<=100){
    alert(`${name} your percentage is ${percentage}% \n You grade is A1 \n You are passed`)

    console.log(`${name} your percentage is ${percentage}% \n You grade is A1 \n You are passed`)
}else if(percentage>=80 && percentage<=89){
    alert(`${name} your percentage is ${percentage}% \n You grade is A+ \n You are passed`)

    console.log(`${name} your percentage is ${percentage}% \n You grade is A+ \n You are passed`)

}else if(percentage>=70 && percentage<=79){
    alert(`${name} your percentage is ${percentage}% \n You grade is A \n You are passed`)

    console.log(`${name} your percentage is ${percentage}% \n You grade is A \n You are passed`)

}else if(percentage>=60 && percentage<=69){
    alert(`${name} your percentage is ${percentage}% \n You grade is B \n You are passed`)

    console.log(`${name} your percentage is ${percentage}% \n You grade is B \n You are passed`)

}else if(percentage>=50 && percentage<=59){
    alert(`${name} your percentage is ${percentage}% \n You grade is C \n You are passed`)

    console.log(`${name} your percentage is ${percentage}% \n You grade is C \n You are passed`)

}else if(percentage>=40 && percentage<=49){
    alert(`${name} your percentage is ${percentage}% \n You grade is D \n You are passed`)

    console.log(`${name} your percentage is ${percentage}% \n You grade is D \n You are passed`)

}else if(percentage>=33 && percentage<=39){
    alert(`${name} your percentage is ${percentage}% \n You grade is E \n You are passed`)

    console.log(`${name} your percentage is ${percentage}% \n You grade is E \n You are passed`)

}else if(percentage<33){
    alert(`${name} your percentage is ${percentage}% \n You grade is F \n You are Failed`)

    console.log(`${name} your percentage is ${percentage}% \n You grade is F \n You are Failed`)

}else{
    alert("Enter valid Subject marks between 0 to 100")
    console.log("Enter valid Subject marks between 0 to 100")
}

