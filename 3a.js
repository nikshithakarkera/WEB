var n=prompt("Enter number");
f1=0;
f2=1;
document.write("<h3 style='color:blue'> The Fibbonacci Number" +n+ "is <br />");
document.write(f1 + "<br />" + f2 + "<br />");

for(i=3;i<=n;i++){
f3=f1+f2;
document.write(f3 + "<br/>");
f1=f2;
f2=f3;
}





var n;
n=parseInt(prompt("Enter the numbers"));
document.write("The "+n + "Square numbers are ");
m="Number | Square\n";
for(i=0;i<=n;i++)
{
    m+="      " + i + "       |      " + i**2 + "\n";
    document.write("<tr><td>" + i + "</td><td>" + i**2 + "</td></tr>");
}
alert(m);
