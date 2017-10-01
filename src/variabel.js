
//contoh menggunakan var
//function sayHello (){
//    if (false){
//      var nama = "arief";
//      console.log(nama);
//    }else{
//      console.log(nama);
//    }
//}

//sayHello();
//hasil function ini tidak akan throw error karena var (global scope) jadi nama = undefined


//contoh menggunakan let (pengganti var)
function sayHelloES6(){
    if(false){
      let nama = "arief";
      console.log(nama);
    }else{
      console.log(nama);
    }
}

sayHelloES6();
//hasil fungsi ini akan throw error (ReferenceError: nama is not defined)
//karena let (block scope)