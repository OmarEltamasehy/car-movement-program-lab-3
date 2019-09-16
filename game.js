function move_img(str) {
    var step=50; // change this to different step value
    var car = document.getElementById('i1');
    switch(str){
        case "down":
            var x=document.getElementById('i1').offsetTop;
            if(car.offsetTop <= 600){
                x= x + step;
                document.getElementById('i1').style.top= x + "px";
               // alert(car.offsetTop);
            }
            
            break;

        case "up":
            var x=document.getElementById('i1').offsetTop;
            if(car.offsetTop >= 0){
                x= x -step;
                document.getElementById('i1').style.top= x + "px";
                //alert(car.offsetTop);
            }
            break;

        case "left":
            if(car.offsetLeft > 0){
                var y=document.getElementById('i1').offsetLeft;
                y= y - step;
                document.getElementById('i1').style.left= y + "px";
                //alert(car.offsetLeft);
            }
            break;

        case "right":
            if(car.offsetLeft < 1150){
                var y=document.getElementById('i1').offsetLeft;
                y= y + step;
                document.getElementById('i1').style.left= y + "px";
                //alert(car.offsetLeft);
            }
            break;
    }
}
