function handleCalculateGrade(event) {

    const grade = event.target.value.toUpperCase();

    if (!grade) {
        return;
    }

    let percentage; 
    switch (grade) {
        case 'A':
            percentage = "90-100%";
            break;
        case 'B':
            percentage = "75-90%";
            break;
        case 'C':
            percentage = "50-75%";
            break;
        case 'D':
            percentage = "25-50%";
            break;
        case 'E':
            percentage = "0-25%";
            break;
    }

    alert("The percentage was " + percentage);
}