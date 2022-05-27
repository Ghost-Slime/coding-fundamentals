function calculateAge(date) {
    // your code
    var dateArray = date.split("/")
    var newDate = dateArray[1] + '/' + dateArray[0] + '/' + dateArray[2]
    var today = new Date();
    var birthDate = new Date(newDate);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age--;
    }
    return age;
}

console.log(calculateAge("20/7/2002") === 19)
console.log(calculateAge("1/1/1979") === 43)
