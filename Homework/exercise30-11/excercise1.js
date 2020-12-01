let num = prompt("Put your number : ");
let star = "";
let k = 0;

// draw1(num);
// draw2(num);
// draw3(num);
// draw4(num);
// draw5(num);
// draw6(num);
// draw7(num);
// draw8(num);
// draw9(num);
// draw10(num);
// draw11(num);
// draw12(num);
// draw13(num);
// draw14(num);
// draw15(num);
// draw17(num);
// draw18(num);
// draw19(num);
// draw20(num);
// draw21(num);
// draw22(num);
// draw23(num);
draw24(num);


//1.1//
// function draw1(num) {
//     for (let i = 0; i < num; i++){
//         star += "*"}
//     alert(star)
// }

//1.2//
// function draw2(num) {
//     for (let i = 0; i < num; i++){
//         for(let j = 0; j < num; j++){
//             star += "*" }
//             star += '\n';
//         }
//     alert(star)
// }

// 1.3//
// function draw13(num) {
//     for (let i = 0; i <num; i++){
//         for(let j=1; j<=num;j++){
//             star+= j;
//         }
//         star += '\n';
//     }
        
//     alert(star)
    
//     }

//1.4//
// function draw4(num) {
//         for (let i = 0; i < num; i++){
//             k++ ;
//             for (let j = 0; j < num; j++){
//                 star += k;
//             }
//             star += '\n';
//         }
//         alert(star)
//     }

//1.5//
// function draw5(num) {
//     k = num;
//     for (let i = 0; i <num; i++){
//         for (let j = 0; j <num; j++){
//             star += k;
//         }
//         star += '\n';
//         k--;
//     }
//     alert(star)
// }


//1.6//
// function draw6(num) {
//     for (let i = 0; i < num; i++){
//         for (let j = 0; j < num; j++){
//             k++ ;
//             star += k;
//         }
//         star += '\n';
//     }
//     alert(star)
// }

//1.7//
// function draw7(num) {
//     k = (num**2) +1  ;
//     for (let i = 0; i < num; i++){
//         for (let j = 0; j < num; j++){
//             k--;
//             star += k;
//         }
//         star += '\n';
//     }
//     alert(star)
// }

//1.8//
// function draw8(num) {
//         for (let j = 0; j < num; j++){
//             k = 2*j  ;
//             star += k;
//             star += '\n';
//         }
//     }
//     alert(star)

// 1.9//
// function draw9(num) {
//         for (let j = 0; j < num; j++){
//             k = (2*j)+2  ;
//             star += k;
//             star += '\n';
//         }
//     }
//     alert(star)


//1.10//
// function draw10(num) {
//     for (let i = 1; i <= num; i++){
//         for(let j = 1; j <= num; j++){
//             star += i * j; 
//         }
//             star += '\n';
//         }
//     alert(star)
// }

// 1.11//
// function draw11(num) {
//         for (let i = 0; i < num; i++){
//             for (let j = 0; j < num; j++){
//                 if(i==j){
//                     star += '_';
//                 }
//                 else {
//                     star += '*';
//                 }
            
//             }
//             star += '\n';
//         }
//         alert(star)
//     }
   
// 1.12//
// function draw12(num) {
//         for (let i = num; i >= 1; i--){
//             for (let j = 1; j <= num; j++){
//                 if(i==j){
//                     star += '_';
//                 }
//                 else {
//                     star += '*';
//                 }
            
//             }
//             star += '\n';
//         }
//         alert(star)
//     }
   
// 1.13//
// function draw13(num) {
//         for (let i = 0; i < num; i++){
//             for (let j = 0; j < num; j++){
//                 if(i<j){
//                     star += '_';
//                 }
//                 else {
//                     star += '*';
//                 }
            
//             }
//             star += '\n';
//         }
//         alert(star)
//     }

//1.14//
// function draw14(num){
//     for(let i =0;i<=num-1;i++){
//         for(let j=0;j<=num-1;j++){
//             if(i+j>=num){
//                 star+='_';
//             }
//             else{
//                 star+='*'
//             }
            
//         }star+="\n"
//     }alert(star);
// }

// 1.15//
// function draw15(num){
//     let star = "";
//     for (i = 0 ; i < num ; i++){
//         for (j=0 ; j < num ; j++){
//             if (i>=j){
//                 star+= '*'
//             }else{
//                 star+= '-'
//             }
//         }star += '\n'
//     }
//     for (i = 1 ; i<num; i++){
//         for (j= 0 ; j < num ; j++){
//             if (i+j >= num){
//                 star += '-'
//             }else{
//                 star += '*'
//             }
//         }star += '\n'
//     }
//     alert(star);
// }

//1.17//
// function draw17(num) {
//     for (let i = 0; i < num; i++){
//         for(let j = 0; j < num; j++){
//             if(i+j >= num-1){
//                 star += "*" }
//             else {
//                 star += "_" }
//             }
//             star += '\n';
//         }
//     alert(star)
// }

//1.18//
// function draw18(num) {
//     for (let i = 0; i < num; i++){
//         for(let j = 0; j < num; j++){
//             if(i >= j+1){
//                 star += "_" }
//             else {
//                 star += "*" }
//             }
//             star += '\n';
//         }
//     alert(star)
// }

//1.19//
// function draw19(num) {
//     for (let i = 0; i < num; i++){
//         for(let j = 0; j < num; j++){
//             if(i+j >= num-1){
//                 star += "*" }
//             else {
//                 star += "_" }
//             }
//             star += '\n';
//         }
    
//     for (let i = 1; i < num; i++){
//         for(let j = 0; j < num; j++){
//             if(i >= j+1){
//                 star += "_" }
//             else {
//                 star += "*" }
//         }
//         star += '\n';
//     }
//     alert(star)
// }

//1.20//
// function draw20(num) {
//     let running =1; 
//     for (let i = 0; i < num; i++){
//         for(let j = 0; j < num; j++){
//             if(i+j >= num-1){
//                 star += running++ }
//             else {
//                 star += "_" }
//             }
//             star += '\n';
//         }
    
//     for (let i = 1; i < num; i++){
//         for(let j = 0; j < num; j++){
//             if(i >= j+1){
//                 star += "_" }
//             else {
//                 star += running++ }
//         }
//         star += '\n';
//     }
//     alert(star)
// }

//1.21//
// function draw21(num){
//     let star = ''
//     for (i=0 ; i<num ; i++){
//         for (j=0 ; j< num ; j++){
//             if( i+j>=num-1){
//                 star+='*'
//             }else{
//                 star += '-'
//             }
//         }
//         for (j=1 ; j < num ; j++){
//             if (i>=j  ){
//                 star+= '*'
//             }else{
//                 star+= '-'
//             }
//         }
//         star+='\n'
//     }alert(star);
// }

//1.22//
// function draw22(num){
//     let star = ''
//     for (i=0 ; i<num ; i++){
        
//         for (j=0 ; j< num ; j++){
//             if (i>=j +1  ){
//                 star+='-'
//             }else{
//                 star+='*'
//             }
            
//         }
//         for (j=1 ; j < num ; j++){
//             if (i+j >= num){
//                 star += '-'
//             }else{
//                 star += '*'
//             }
//         }
//         star+='\n'
//     }alert(star);
// }

//1.23//
// function draw23(num){
//     let star = ''
//     for (i=0 ; i<num ; i++){
//         for (j=0 ; j< num ; j++){
//             if( i+j>=num-1){
//                 star+='*';
//             }else{
//                 star += '-';
//             }
//         }
//         for (j=1 ; j < num ; j++){
//             if (i>=j  ){
//                 star+= '*';
//             }else{
//                 star+= '-';
//             }
//         }
//         star+='\n'
//     for (i=0 ; i<num ; i++){
//         for (j=0 ; j< num ; j++){
//             if (i>=j +1  ){
//                 star+='-';
//             }else{
//                 star+='*';
//             }
//         }
//         for (j=1 ; j < num ; j++){
//             if (i+j >= num){
//                 star += '-';
//             }
//             else{
//                 star += '*';
//             }
//         }
//         star+='\n'
//     }alert(star);
// }
// }

//1.24//
// function draw24(num){
//     let star = ''
//     let running1 =1;
//     for (i=0 ; i<num ; i++){
//         for (j=0 ; j< num ; j++){
//             if( i+j>=num-1){
//                 star+=running1++;
//             }else{
//                 star += '-';
//             }
//         }
//         for (j=1 ; j < num ; j++){
//             if (i>=j  ){
//                 star+= running1++;
//             }else{
//                 star+= '-'
//             }
//         }
//         star+='\n'
//     for (i=0 ; i<num ; i++){
//         for (j=0 ; j< num ; j++){
//             if (i>=j +1  ){
//                 star+='-';
//             }else{
//                 star+=running1++;
//             }
//         }
//         for (j=1 ; j < num ; j++){
//             if (i+j >= num){
//                 star += '-';
//             }
//             else{
//                 star += running1++;
//             }
//         }
//         star+='\n'
//     }alert(star);
// }
// }


      






