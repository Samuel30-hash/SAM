const students = [
    {
        name: "KAHUMUZA MUNIHIZI HILLARY",
        indexNumber: "U1223/687",
        district: "KABAROLE",
        courseName: "BSc. Accounting",
        totalWeight: 43.7
    },
    {
        name: "ATUHAIRE MAURICE",
        indexNumber: "U0859/919",
        district: "KAMPALA",
        courseName: "BSc. Accounting",
        totalWeight: 41.3
    },
    {
        name: "SSEMATIMBA REAGAN",
        indexNumber: "U3941/595",
        district: "KAMPALA",
        courseName: "BSc. Accounting",
        totalWeight: 40
    },
    {
        name: "NAMYALO HILDAH",
        indexNumber: "U2167/518",
        district: "MUKONO",
        courseName: "BSc. Accounting",
        totalWeight: 39.5
    },
    {
        name: "NAKAYIZA MARIETTA C",
        indexNumber: "U0013/620",
        district: "BUIKWE",
        courseName: "BSc. Accounting",
        totalWeight: 38.8
    },
    {
        name: "NAKABUGO RENITAH",
        indexNumber: "U1688/542",
        district: "KAMPALA",
        courseName: "BSc. Accounting",
        totalWeight: 38.7
    },
    {
        name: "NAKALEMBE PATIENCE ESTHER",
        indexNumber: "U2663/546",
        district: "WAKISO",
        courseName: "BSc. Accounting",
        totalWeight: 38.4
    },
    {
        name: "CHANCE ARTHER",
        indexNumber: "U1144/540",
        district: "NTUNGAMO",
        courseName: "BSc. Accounting",
        totalWeight: 37.6
    },
    {
        name: "MUGARURA SAMSON",
        indexNumber: "U0068/593",
        district: "MBARARA",
        courseName: "BSc. Accounting",
        totalWeight: 37.2
    },
    {
        name: "WASSWA JOHN V. KAGOLO",
        indexNumber: "U0048/993",
        district: "MASAKA",
        courseName: "BSc. Accounting",
        totalWeight: 37.2
    },
    {
        name: "MUGISHA ADRIAN EMMA",
        indexNumber: "U2789/562",
        district: "KAMPALA",
        courseName: "BSc. Accounting",
        totalWeight: 37.1
    },
    {
        name: "NANOZZI GLADDY",
        indexNumber: "U0852/504",
        district: "BUIKWE",
        courseName: "BSc. Accounting",
        totalWeight: 36.7
    },
    {
        name: "NALUKENGE JOSEPHINE",
        indexNumber: "U1611/726",
        district: "KAMPALA",
        courseName: "BSc. Accounting",
        totalWeight: 36.5
    },
    {
        name: "MUKYALA MOUREEN",
        indexNumber: "U0018/572",
        district: "JINJA",
        courseName: "BSc. Accounting",
        totalWeight: 36.4
    },
    {
        name: "AMALI JULIANA",
        indexNumber: "U0036/790",
        district: "TORORO",
        courseName: "BSc. Accounting",
        totalWeight: 36.4
    },
    {
        name: "GIRAMIA RACHEAL",
        indexNumber: "U0036/562",
        district: "KAMPALA",
        courseName: "BSc. Accounting",
        totalWeight: 36.3
    },
    {
        name: "ABUCAI EMMANUEL",
        indexNumber: "U0562/501",
        district: "APAC",
        courseName: "BSc. Accounting",
        totalWeight: 36.1
    },
    {
        name: "SSETTUMBA MATTHEW",
        indexNumber: "U0955/596",
        district: "KAMPALA",
        courseName: "BSc. Accounting",
        totalWeight: 36
    },
    {
        name: "SANYA JULIANA",
        indexNumber: "U2728/501",
        district: "KAMPALA",
        courseName: "BSc. Accounting",
        totalWeight: 35.9
    },
    {
        name: "BABIRYE LILLIAN",
        indexNumber: "U1611/714",
        district: "IGANGA",
        courseName: "BSc. Accounting",
        totalWeight: 35.9
    },
    {
        name: "NAMUKOSE FATUMA JANNAT",
        indexNumber: "U0025/598",
        district: "KAMPALA",
        courseName: "BSc. Accounting",
        totalWeight: 35.8
    },
    {
        name: "OKUDA DANIEL",
        indexNumber: "U0334/662",
        district: "ARUA",
        courseName: "BSc. Accounting",
        totalWeight: 35.7
    },
    {
        name: "NAGAWA MIMA SHANITAH",
        indexNumber: "U2962/591",
        district: "JINJA",
        courseName: "BSc. Accounting",
        totalWeight: 35.7
    },
    {
        name: "NAMYALO ELIZABETH",
        indexNumber: "U0528/550",
        district: "WAKISO",
        courseName: "BSc. Accounting",
        totalWeight: 35.6
    },
    {
        name: "KIRABO RODNEY",
        indexNumber: "U0041/832",
        district: "MUKONO",
        courseName: "BSc. Accounting",
        totalWeight: 35.3
    },
    {
        name: "MATOVU SHABAN",
        indexNumber: "U2106/510",
        district: "WAKISO",
        courseName: "BSc. Accounting",
        totalWeight: 35
    },
    {
        name: "KATO DAVIS",
        indexNumber: "U1828/572",
        district: "BUSHENYI",
        courseName: "BSc. Accounting",
        totalWeight: 34.9
    },
    {
        name: "NIWAKORA HOPE",
        indexNumber: "U0083/574",
        district: "ISINGIRO",
        courseName: "BSc. Accounting",
        totalWeight: 34.7
    },
    {
        name: "NAKABIITO DAPHINE",
        indexNumber: "U2163/552",
        district: "MASAKA",
        courseName: "BSc. Accounting",
        totalWeight: 34.6
    },
    {
        name: "AMPURIRA MACKLYN PRAISE",
        indexNumber: "U0801/545",
        district: "KAMPALA",
        courseName: "BSc. Accounting",
        totalWeight: 34.6
    },
    {
        name: "MUTEBI IAN",
        indexNumber: "U3331/566",
        district: "KAMPALA",
        courseName: "BSc. Accounting",
        totalWeight: 34.6
    },
    {
        name: "NAZZIWA FLORENCE",
        indexNumber: "U2338/756",
        district: "KAMPALA",
        courseName: "BSc. Accounting",
        totalWeight: 34.6
    },
    {
        name: "KASOZI BRASIO",
        indexNumber: "U0959/502",
        district: "BUSIA",
        courseName: "BSc. Accounting",
        totalWeight: 34.5
    },
    {
        name: "RAHMA MUHAMMAD",
        indexNumber: "U0077/871",
        district: "KAMPALA",
        courseName: "BSc. Accounting",
        totalWeight: 34.5
    },
    {
        name: "KUTEESA MONICAH",
        indexNumber: "U0041/562",
        district: "HOIMA",
        courseName: "BSc. Accounting",
        totalWeight: 34.4
    },
    {
        name: "ODONGO OKUNE ALEX MARTIN",
        indexNumber: "U3859/675",
        district: "APAC",
        courseName: "BSc. Accounting",
        totalWeight: 34.2
    },
    {
        name: "ATUJUNA JOHN VIANNY",
        indexNumber: "U1342/652",
        district: "KABAROLE",
        courseName: "BSc. Accounting",
        totalWeight: 34
    },
    {
        name: "AINEMUKAMA RICHARD",
        indexNumber: "U2057/514",
        district: "BUSHENYI",
        courseName: "BSc. Accounting",
        totalWeight: 34
    },
    {
        name: "KHAUKHA EMMANUEL",
        indexNumber: "U0010/532",
        district: "MBALE",
        courseName: "BSc. Accounting",
        totalWeight: 34
    },
    {
        name: "NAKIMENYA TAMIA GLADYS",
        indexNumber: "U1758/542",
        district: "KAMPALA",
        courseName: "BSc. Accounting",
        totalWeight: 33.6
    }
];
function displayStudents(students) {
    students.forEach(student => {
        console.log(`Name: ${student.name}`);
        console.log(`Index Number: ${student.indexNumber}`);
        console.log(`District: ${student.district}`);
        console.log(`Course Name: ${student.courseName}`);
        console.log(`Total Weight: ${student.totalWeight}`);
        console.log('--------------------------');
    });
}

// Call the function
displayStudents(students);

let admissions = [
    {
        name: "KAHUMUZA MUNIHIZI HILLARY",
        indexNumber: "U1223/687",
        district: "KABAROLE",
        courseName: "BSc. Accounting",
        totalWeight: 43.7
    },
    {
        name: "ATUHAIRE MAURICE",
        indexNumber: "U0859/919",
        district: "KAMPALA",
        courseName: "BSc. Accounting",
        totalWeight: 41.3
    },
    {
        name: "SSEMATIMBA REAGAN",
        indexNumber: "U3941/595",
        district: "KAMPALA",
        courseName: "BSc. Accounting",
        totalWeight: 40
    },
    {
        name: "NAMYALO HILDAH",
        indexNumber: "U2167/518",
        district: "MUKONO",
        courseName: "BSc. Accounting",
        totalWeight: 39.5
    },
    {
        name: "NAKAYIZA MARIETTA C",
        indexNumber: "U0013/620",
        district: "BUIKWE",
        courseName: "BSc. Accounting",
        totalWeight: 38.8
    },
    {
        name: "NAKABUGO RENITAH",
        indexNumber: "U1688/542",
        district: "KAMPALA",
        courseName: "BSc. Accounting",
        totalWeight: 38.7
    },
    {
        name: "NAKALEMBE PATIENCE ESTHER",
        indexNumber: "U2663/546",
        district: "WAKISO",
        courseName: "BSc. Accounting",
        totalWeight: 38.4
    },
    {
        name: "CHANCE ARTHER",
        indexNumber: "U1144/540",
        district: "NTUNGAMO",
        courseName: "BSc. Accounting",
        totalWeight: 37.6
    },
    {
        name: "MUGARURA SAMSON",
        indexNumber: "U0068/593",
        district: "MBARARA",
        courseName: "BSc. Accounting",
        totalWeight: 37.2
    },
    {
        name: "WASSWA JOHN V. KAGOLO",
        indexNumber: "U0048/993",
        district: "MASAKA",
        courseName: "BSc. Accounting",
        totalWeight: 37.2
    },
    {
        name: "MUGISHA ADRIAN EMMA",
        indexNumber: "U2789/562",
        district: "KAMPALA",
        courseName: "BSc. Accounting",
        totalWeight: 37.1
    },
    {
        name: "NANOZZI GLADDY",
        indexNumber: "U0852/504",
        district: "BUIKWE",
        courseName: "BSc. Accounting",
        totalWeight: 36.7
    },
    {
        name: "NALUKENGE JOSEPHINE",
        indexNumber: "U1611/726",
        district: "KAMPALA",
        courseName: "BSc. Accounting",
        totalWeight: 36.5
    },
    {
        name: "MUKYALA MOUREEN",
        indexNumber: "U0018/572",
        district: "JINJA",
        courseName: "BSc. Accounting",
        totalWeight: 36.4
    },
    {
        name: "AMALI JULIANA",
        indexNumber: "U0036/790",
        district: "TORORO",
        courseName: "BSc. Accounting",
        totalWeight: 36.4
    },
    {
        name: "GIRAMIA RACHEAL",
        indexNumber: "U0036/562",
        district: "KAMPALA",
        courseName: "BSc. Accounting",
        totalWeight: 36.3
    },
    {
        name: "ABUCAI EMMANUEL",
        indexNumber: "U0562/501",
        district: "APAC",
        courseName: "BSc. Accounting",
        totalWeight: 36.1
    },
    {
        name: "SSETTUMBA MATTHEW",
        indexNumber: "U0955/596",
        district: "KAMPALA",
        courseName: "BSc. Accounting",
        totalWeight: 36
    },
    {
        name: "SANYA JULIANA",
        indexNumber: "U2728/501",
        district: "KAMPALA",
        courseName: "BSc. Accounting",
        totalWeight: 35.9
    },
    {
        name: "BABIRYE LILLIAN",
        indexNumber: "U1611/714",
        district: "IGANGA",
        courseName: "BSc. Accounting",
        totalWeight: 35.9
    },
    {
        name: "NAMUKOSE FATUMA JANNAT",
        indexNumber: "U0025/598",
        district: "KAMPALA",
        courseName: "BSc. Accounting",
        totalWeight: 35.8
    },
    {
        name: "OKUDA DANIEL",
        indexNumber: "U0334/662",
        district: "ARUA",
        courseName: "BSc. Accounting",
        totalWeight: 35.7
    },
    {
        name: "NAGAWA MIMA SHANITAH",
        indexNumber: "U2962/591",
        district: "JINJA",
        courseName: "BSc. Accounting",
        totalWeight: 35.7
    },
    {
        name: "NAMYALO ELIZABETH",
        indexNumber: "U0528/550",
        district: "WAKISO",
        courseName: "BSc. Accounting",
        totalWeight: 35.6
    },
    {
        name: "KIRABO RODNEY",
        indexNumber: "U0041/832",
        district: "MUKONO",
        courseName: "BSc. Accounting",
        totalWeight: 35.3
    },
    {
        name: "MATOVU SHABAN",
        indexNumber: "U2106/510",
        district: "WAKISO",
        courseName: "BSc. Accounting",
        totalWeight: 35
    },
    {
        name: "KATO DAVIS",
        indexNumber: "U1828/572",
        district: "BUSHENYI",
        courseName: "BSc. Accounting",
        totalWeight: 34.9
    },
    {
        name: "NIWAKORA HOPE",
        indexNumber: "U0083/574",
        district: "ISINGIRO",
        courseName: "BSc. Accounting",
        totalWeight: 34.7
    },
    {
        name: "NAKABIITO DAPHINE",
        indexNumber: "U2163/552",
        district: "MASAKA",
        courseName: "BSc. Accounting",
        totalWeight: 34.6
    },
    {
        name: "AMPURIRA MACKLYN PRAISE",
        indexNumber: "U0801/545",
        district: "KAMPALA",
        courseName: "BSc. Accounting",
        totalWeight: 34.6
    },
    {
        name: "MUTEBI IAN",
        indexNumber: "U3331/566",
        district: "KAMPALA",
        courseName: "BSc. Accounting",
        totalWeight: 34.6
    },
    {
        name: "NAZZIWA FLORENCE",
        indexNumber: "U2338/756",
        district: "KAMPALA",
        courseName: "BSc. Accounting",
        totalWeight: 34.6
    },
    {
        name: "KASOZI BRASIO",
        indexNumber: "U0959/502",
        district: "BUSIA",
        courseName: "BSc. Accounting",
        totalWeight: 34.5
    },
    {
        name: "RAHMA MUHAMMAD",
        indexNumber: "U0077/871",
        district: "KAMPALA",
        courseName: "BSc. Accounting",
        totalWeight: 34.5
    },
    {
        name: "KUTEESA MONICAH",
        indexNumber: "U0041/562",
        district: "HOIMA",
        courseName: "BSc. Accounting",
        totalWeight: 34.4
    },
    {
        name: "ODONGO OKUNE ALEX MARTIN",
        indexNumber: "U3859/675",
        district: "APAC",
        courseName: "BSc. Accounting",
        totalWeight: 34.2
    },
    {
        name: "ATUJUNA JOHN VIANNY",
        indexNumber: "U1342/652",
        district: "KABAROLE",
        courseName: "BSc. Accounting",
        totalWeight: 34
    },
    {
        name: "AINEMUKAMA RICHARD",
        indexNumber: "U2057/514",
        district: "BUSHENYI",
        courseName: "BSc. Accounting",
        totalWeight: 34
    },
    {
        name: "KHAUKHA EMMANUEL",
        indexNumber: "U0010/532",
        district: "MBALE",
        courseName: "BSc. Accounting",
        totalWeight: 34
    },
    {
        name: "NAKIMENYA TAMIA GLADYS",
        indexNumber: "U1758/542",
        district: "KAMPALA",
        courseName: "BSc. Accounting",
        totalWeight: 33.6
    }
];
console.log(admissions); // Display the array of students

//adding new student 
let newStudent = {
    name: "SAMUEL LAGUYA WILSON RAMBA",
    indexNumber: "U2663/546",
    district: "KOBOKO",
    courseName: "BSc. Accounting",
    totalWeight: 38.4
};

admissions.push(newStudent);
console.log("Updated Admissions List:", admissions);

//top student
let topStudent = admissions.reduce(function (prev, current) {
    return (prev.totalWeight > current.totalWeight) ? prev : current;
});
console.log("Top Student:", topStudent)

//students from kampala  
let kampalaStudents = admissions.filter(function (student) {
    return student.district === "KAMPALA";
});
console.log("Students from Kampala:", kampalaStudents);

//saving and storing data on local storage
localStorage.setItem("admissions", JSON.stringify(admissions));
console.log("Admission data saved!");

//retrieving data
let savedAdmissions = JSON.parse(localStorage.getItem("admissions"));
console.log("Retrieved Admission Data:", savedAdmissions);

// Function to search for a student by their index number  
function searchStudentByIndex(index) {  
    let foundStudent = admissions.find(student => student.indexNumber === index);  
    if (foundStudent) {  
        console.log("Found Student:", foundStudent);  
    } else {  
        console.log("Student not found.");  
    }  
}  

// Example usage of search function  
searchStudentByIndex("U0013/620");  

// Function to update a student's total weight by searching for their index number  
function updateStudentWeight(index, newWeight) {  
    let studentToUpdate = admissions.find(student => student.indexNumber === index);  
    if (studentToUpdate) {  
        studentToUpdate.totalWeight = newWeight;  
        console.log("Updated Student:", studentToUpdate);  
    } else {  
        console.log("Student not found.");  
    }  
}  

// Example usage of update function  
updateStudentWeight("U2663/546", 39.0);  

// Original admissions data  
let admission= [  
    {  
        name: "Shadrack Boboya",  
        indexNumber: "U1223/687",  
        district: "Kabale",  
        courseName: "BSc. Accounting",  
        totalWeight: 43.7  
    },  
    {  
        name: "Fifi sharon",  
        indexNumber: "U0859/919",  
        district: "Arua",  
        courseName: "BSc. Accounting",  
        totalWeight: 41.3  
    },  
    {  
        name: "samson Bida",  
        indexNumber: "U3941/595",  
        district: "Nebbi",  
        courseName: "BSc. Accounting",  
        totalWeight: 40.0  
    }  
];  

// Function to add a new course and assign students to it  
function addNewCourse(courseName, students) {  
    let newCourse = {  
        courseName: courseName,  
        enrolledStudents: []  
    };  

    // Assignment of students to the new course  
    students.forEach(studentIndex => {  
        let student = admissions.find(s => s.indexNumber === studentIndex);  
        if (student) {  
            // Update the student's courseName to the new course  
            student.courseName = courseName;  
            // Add the student to the enrolled students array in the new course  
            newCourse.enrolledStudents.push(student);  
        }  
    });  

    console.log("New Course Added:", newCourse);  
}  
  
let studentsToAssign = ["U1223/687", "U0859/919", "U1223/687"]; // indexnumbers to asign the students  
addNewCourse("BSc.Environment and Natural Resource Management", studentsToAssign);  

console.log("Updated Admissions List:", admission);  



