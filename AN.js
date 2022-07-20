var n=prompt("Enter number");
s=0;
l=n.length;
for(i=0;i<l;i++)
{
    s+=n[i]**l;
}
if(n==s)
    alert("AS number");
else
    alert("Not AS number");
