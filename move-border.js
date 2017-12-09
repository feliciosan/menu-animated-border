function moverBorder(list){

    // MENU - HEADER COM BORDA ANIMADA NO HOVER
    $(list+' li:not(.animated-border)').mousemove(function(){

        $(list).css('position','relative');

        // PEGA A POSIÃ‡ÃƒO RELATIVA DA ESQUERDA DA LI COMPARADO A UL PAI
        linkPosition = $(this).position().left;

        // PEGA A LARGURA DA LI PARA SETAR O TAMANHO CORRETO DA BORDA RELATIVO AO TAMANHO DO LINK
        elementWidth = $(this).outerWidth();

        $('.my-list .animated-border').css({
            'left': linkPosition, // TRAS A BORDA PRO ITEM COM HOVER
            'width': elementWidth // LARGURA DA BORDA
        });

    });

}