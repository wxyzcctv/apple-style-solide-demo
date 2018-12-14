var allImages = $('#images>img')
var allMenus = $('#menu > input')
for(let i=0;i<allMenus.length;i++){
    $(allMenus[i]).on('click',function(x){
        
        $(x.currentTarget).addClass('active')
        $(x.currentTarget).siblings().removeClass('active')
        var index = $(x.currentTarget).index()

        var p = index * -500
        $(images).css({
            transform:'translate(' + p + 'px)'
        })
    })
    $(allMenus[i]).on('mouseenter',function(x){
        $(x.currentTarget).addClass('hover')
        $(allMenus[i]).on('mouseleave',function(){
            $(x.currentTarget).removeClass('hover')
        })
    })
}

$(allMenus).on('click',function(e){
    e.stopPropagation()
})
$(document).on('click',function(){
    $(allMenus).removeClass('active')
})
