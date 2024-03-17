// // 16-03 özet
// // console.log('Hello World');
// // alert('Hello World');
// // confirm('Are you sure?');
// // let || var || const + değişken_adı = değer;
//
// let name = 'john';
// name = 2;
//
// // string " " || ' '
// // number 1 2.4
// // boolean true || false
// // null
// // undefined
// // object
// // array
//
// // soru
//
// let number = 5;
//
// // console.log(number++); //  console.log(number) number = number + 1
// // console.log(++number); //  number = number + 1  console.log(number)
// // console.log(--number);//
// // console.log(number--); //6
// // console.log(number);
//


// 17-03
// task : let vizeNotu = 70
// let finalNotu = 80;
// ortlama hesaplarken vizenin %40 finalin %60 ını alınız.
//ortlama sonucunu ekrana yazdırınız

// let vizeNotu = 10;
// let finalNotu = 80;
// console.log((vizeNotu * 0.4) + (finalNotu * 0.6));


// string concatenation
// let userID = 1;
// let firstname = 'John';
// let lastname = 'Doe';
//
// console.log(userID + ' ' + firstname + ' ' + lastname);
// console.log("Kullanıcı Adı: " + firstname + " Soyadı: " + lastname + " ID: " + userID);
// console.log(`Kullanıcının adı ${firstname} soyadı ${lastname} id'si ${userID} dir.`);


// diziler

// var || let || const + dizi_adı = [değer1, değer2, değer3, değer4];

let numbers = [1, 2, 3, 4, 5];
// let var1 = 1;
// let var2 = 2;
// let var3 = 3;
// let var4 = 4;
// let var5 = 5;

// console.log(var4);
// console.log(numbers[0])

// let names = ['John', 'Doe', 'Jane', 'Doep'];
//
// console.log(names[0]); // John
// console.log(names[1]); // Doe
// console.log(names[2]); // Jane
// console.log(names[3]); // Doep
//
// // TASK
// // Türkiyenin 7 adet ilini bir dizi içerisine atayınız ve ekrana yazdırınız.
//
// let cities = ['İstanbul', 'Ankara', 'İzmir', 'Bursa', 'Antalya', 'Adana', 'Trabzon'];
// console.log(cities[0]);
// console.log(cities[1]);

// const myArray = ['red', 2, false, null, [1,false,[1,2,3,4,5,['a','b','c']],"Ali"], 'white', 'purple',2,true];

// // ekrana Ali   yazdırınız
// console.log(myArray[4])
// console.log(myArray[4][2])
// console.log(myArray[4][2][5])
// console.log(myArray[4][2][5][1])
//
// // dizinin uzunluğunu
// console.log(myArray[4].length);
// console.log(myArray[4][2].length);
// console.log(myArray[4][2][5].length);
// console.log("ALİVELİasdasda".length) // string uzunluğu da length ile alınır

// TASK  myArray dizisinin son elemanını ekrana yazdırınız.
// console.log(myArray[myArray.length-1])

// console.log(myArray.length)

// objeler

const myObject = {
    firstname : "Ali",
    lastname : "Çelik",
    age : 27,
    hobbies : ['swimming', false, 'reading', 'running'],
    address : {
        city : 'İstanbul',
        country : 'Turkey',
        districts : [
            {name : 'Kadıköy',
            population : 1000000,
            neighborhoods : ['Moda', 'Fenerbahçe', 'Kalamış', 'Göztepe']
            },
            {name : 'Esenyurt',
                population : 1000000,
                neighborhoods : ['wads', 'asda', 'asda', 'asdasd']
            },
            {name : 'Avcılar',
                population : 1000000,
                neighborhoods : ['12312', '123123', '123', '213123123']
            },
        ]
    }
}
// TASK myPerson objesinin adres alanındaki 3. ilçeyi ekrana yazdırınız
// X ilçesinin nüfusu Y kişidir.
console.log(myObject.address.districts[2].neighborhoods[2])
// console.log(`${myObject.address.districts[2].name} ilçesinin nuüfusu ${myObject.address.districts[2].population} kişidir.`)

// console.log(myObject.firstname);
// TASK: ekrana reading yazdırınız (2. hobi)
// console.log(myObject.hobbies[1]);


// objenin uzunluğu
// console.log(Object.keys(myObject)) // objectin key'lerini dizi olarak döndürür
// console.log(Object.values(myObject)) // // objectin value'larını dizi olarak döndürür
// console.log(Object.entries(myObject)) // objectin key ve value'larını dizi olarak döndürür


