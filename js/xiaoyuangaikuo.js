/*
 * 自己的JS脚步
 * @Author: iceStone
 * @Date:   2015-12-12 10:59:26
 * @Last Modified by:   iceStone
 * @Last Modified time: 2015-12-12 11:01:38
 */

'use strict';

var fanhui = $("header span")[0];
fanhui.onclick= function () {
    //console.log(fanhui);
    top.location = "index.html";
};





$(function () {
        $.ajax({
            type: 'post',
            url: 'json/xiaoyuangaikuo.json',
            async: false,

            dataType: 'json', //很重要!!!.预期服务器返回的数据类型 , */
            success: function (data) {



                //console.log("aa")
                $("#itemImg1 img").src = data.lunbo[0].img;
                $("#itemImg1 div").html  (data.lunbo[0].imgmiaoshu);
                $("#itemImg2 img").src = data.lunbo[1].img;
                $("#itemImg2 div").html(data.lunbo[1].imgmiaoshu);
                $("#itemImg3 img").src = data.lunbo[2].img;
                $("#itemImg3 div").html(data.lunbo[2].imgmiaoshu);
                $("#itemImg4 img").src =data.lunbo[3].img;
                $("#itemImg4 div").html(data.lunbo[3].imgmiaoshu);
                $("#itemImg5 img").src = data.lunbo[4].img;
                $("#itemImg5 div").html(data.lunbo[4].imgmiaoshu);
                $("#itemImg6 img").src = data.lunbo[5].img;
                $("#itemImg6 div").html(data.lunbo[5].imgmiaoshu);


























                $(data.shizirenyuan).each(function (index, value) {


                    var divrenyuan = $("<div>" +
                        '        <div class="col-md-4 col-sm-6 col-xs-12 ">'+
                        '        <article class="material-card '+this.color+'">'+
                        '        <h2>'+
                        '        <span>'+this.name+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+this.zhicheng+'</span>'+
                        '    <strong>'+
                        '    <i class="fa fa-fw fa-star"></i>'+
                        '        '+this.zhiwu+''+
                        '        </strong>'+
                        '        </h2>'+
                        '        <div class="mc-content">'+
                        '        <div class="img-container">'+
                        '        <img class="img-responsive" src="'+this.img+'">'+
                        '        </div>'+
                        '        <div class="mc-description">'+
                        this.gerenjiaoshao+
                        '    </div>'+
                        '    </div>'+
                        '    <a class="mc-btn-action">'+
                        '        <i class="fa fa-bars"></i>'+
                        '        </a>'+
                        '        <div class="mc-footer">'+
                        '        <h4>'+
                        '        Social'+
                        '        </h4>'+
                        '        <a class="fa fa-fw fa-facebook"></a>'+
                        '        <a class="fa fa-fw fa-twitter"></a>'+
                        '        <a class="fa fa-fw fa-linkedin"></a>'+
                        '        <a class="fa fa-fw fa-google-plus"></a>'+
                        '        </div>'+
                        '        </article>'+
                        '        </div>'+


                        "</div>");


                    $("#shizidiv").append(divrenyuan);

                })


                $(data.xueshengtupian).each(function (index, value) {

                   var aImg = $('<a href="'+this.img+'" data-caption="Goldensss Gate Bridge"><img src="'+this.img+'"></a>') ;

                    $("#jiatupian").append(aImg);

                })


                baguetteBox.run('.baguetteBoxOne', {
                    animation: 'fadeIn'
                });

            },
            error: function () {
                alert("error occured!!!");
            }

        });



    }
)

