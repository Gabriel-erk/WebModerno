const calculaValorAnuidade = (mes, valorAnuidade) => {
    let pv = valorAnuidade // valor atual
    let r = 0.05;  // taxa a ser cobrada por mes
    let n = mes - 1; // numero de meses, do mes atual até janeiro (numero de meses em que a taxa vai se acumular) 
    let anuidade = pv * (1 + r)**n

    console.log(anuidade);
    
    
    // for (let i = 1; i < 12; i++) {
        
        
    // }
} 

calculaValorAnuidade(12, 1000)