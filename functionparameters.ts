let namestu:string='Vagdevi';
function welcome(nameis:String):string{
    return`welcome${nameis}`;
}
let stringpara:string=welcome(namestu);
console.log(stringpara);
function LocationCheck(city:String="hyd"):string{
    return`get the location${city}`;
}
console.log(LocationCheck());
function Invetation(name:string, venue?:string):string{
    return`name of the function ${name} and the venue is at ${venue}`;
}
console.log(Invetation("vag"));
console.log("Hello World");