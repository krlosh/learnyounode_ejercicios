//Recepción de parámetros (incluye todo el comando que se ejecuta en process.argv por eso nos saltamos dos elementos)
//Los parámetros son cadenas y se convierten a numeros con Number();
//console.log("SUMANDO.....");
total=0;
sumandos="";
for(i=2;i<process.argv.length;i++){
	total+=(+process.argv[i]);
	if(i>2){
		sumandos+=" + ";
	}
	sumandos+=Number(process.argv[i]);
	
}
//console.log(sumandos+" = " +total);
console.log(total);