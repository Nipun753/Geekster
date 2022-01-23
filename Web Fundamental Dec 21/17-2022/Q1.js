
  function manipulateArray(array, functionality) {
       var result = [];
       for (let i = 0; i < array.length; i++) {
         var y = functionality(array[i]);
         result.push(y);
       }
       return result;
     }  
     var mulBy4 = function (n) {
        return n * 4;
      };
      
      function add9(n) {
        return n + 9;
      }
      var x = [1, 2, 3, 4];
       var geek1 = manipulateArray(x,mulBy4);
       var geek2 = manipulateArray(x,add9);
      console.log(geek1);
      console.log(geek2)