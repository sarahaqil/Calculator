// function num
function calc(b){
    var a= document.getElementById("input")
    a.value += b;   
    }
    // function result
    function result(){
        var result = document.getElementById("input")
        result.value = eval(result.value)
    }
    // function clr
    function clr(){
        var result = document.getElementById("input")
        result.value = ''
    }
    // function delete
    function del(){
        var number = document.getElementById("input")
        var dele = number.value;
        dele= dele.slice(0,-1)
        number.value = dele 
    }
    