console.log("Ejercicio 4: Filter e includes");

let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

//Uso de filter
refResultado=document.getElementById("usefilter");
stringListItems="Utilize filter:";
console.log("Utilize filter:");

for(let i=0;i<student2Courses.length;i++)
{
    const result = student1Courses.filter((materia)=>materia===student2Courses[i]);
    if(result.length!=0)
    {
        console.log(result);

        refResultado.innerHTML=stringListItems;
        imprimirArreglo(result,"usefilter1");
    }
}

//Uso de includes
console.log("Utilize includes");
refResultado=document.getElementById("useincludes");
stringListItems="Utilize includes:";
refResultado.innerHTML=stringListItems;

for(let i=0;i<student2Courses.length;i++)
{
    if((student1Courses.includes(student2Courses[i])))
    {
    console.log(student2Courses[i]);refResultado=document.getElementById("useincludes1");
    stringListItems=`${student2Courses[i]}`;
    refResultado.innerHTML=stringListItems;
    }
}