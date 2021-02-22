$(document).ready(function(){
    $("#calc").click(function(){

        let h = $("#height").val() / 100,
            w = $("#weight").val(),
            a = $("#age").val(),
            s = $("#sex").val();

        if( $("#height").val() == "" ){ 
            alert("請輸入身高"); 
        }
        else if( $("#weight").val() == "" ){ 
            alert("請輸入體重"); 
        }
        else if( $("#age").val() == "" ){ 
            alert("請輸入年齡"); 
        }
        else if( $("#sex").val() == "2" ){ 
            alert("請選擇性別"); 
        }
        else{
            let num = ( w / ( h * h ) ).toFixed(2)*100;
            let bmi = ( w / ( h * h ) ).toFixed(2);
            $("#bmi_result").animateNumber({ number: num ,numberStep: $.animateNumber.numberStepFactories.separator('.')},1500),
            $("#height").val(""),
            $("#weight").val("");

            if( bmi <= 18.4 ){
                $(".tr1").addClass("bg-warning"),
                $(".tr2").removeClass("bg-success"),
                $(".tr3").removeClass("bg-warning"),
                $(".tr4").removeClass("bg-danger");
            }

            else if( bmi < 23.9 ){
                $(".tr1").removeClass("bg-warning"),
                $(".tr2").addClass("bg-success"),
                $(".tr3").removeClass("bg-warning"),
                $(".tr4").removeClass("bg-danger");
            }

            else if( bmi < 27.9 ){
                $(".tr1").removeClass("bg-warning"),
                $(".tr2").removeClass("bg-success"),
                $(".tr3").addClass("bg-warning"),
                $(".tr4").removeClass("bg-danger");
            }

            else{
                $(".tr1").removeClass("bg-warning"),
                $(".tr2").removeClass("bg-success"),
                $(".tr3").removeClass("bg-warning"),
                $(".tr4").addClass("bg-danger");
            }

            let fat = (( bmi * 1.2 ) + ( a * 0.23 - 5.4 ) - ( 10.8 * s )).toFixed(1);
            $("#fat_result").html(fat),
            $("#age").val(""),
            $("#sex").val("2");

            if( s == 1 && fat <= 13.9 ){
                $(".tr5").addClass("bg-warning"),
                $(".tr6").removeClass("bg-success"),
                $(".tr7").removeClass("bg-danger");
            }

            else if( s == 1 && fat < 23.9 ){
                $(".tr5").removeClass("bg-warning"),
                $(".tr6").addClass("bg-success"),
                $(".tr7").removeClass("bg-danger");
            }

            else if( s == 0 && fat <= 16.9 ){
                $(".tr5").addClass("bg-warning"),
                $(".tr6").removeClass("bg-success"),
                $(".tr7").removeClass("bg-danger");
            }

            else if( s == 0 && fat < 27.9 ){
                $(".tr5").removeClass("bg-warning"),
                $(".tr6").addClass("bg-success"),
                $(".tr7").removeClass("bg-danger");
            }

            else{
                $(".tr5").removeClass("bg-warning"),
                $(".tr6").removeClass("bg-success"),
                $(".tr7").addClass("bg-danger");
            } 
        }
    });
});