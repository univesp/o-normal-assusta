$(document).ready(function(){

  // 1. POPOVERS

    $('.popover-dismiss').popover({
      trigger: 'focus'
    })


	// 2. NAVEGAÇÃO

	$(".btnResultado").on("click", function(){

		$(".titulo").appendTo(".cabecalho");
		$("body").removeClass("inicial");
		$("#inicial").addClass("d-none");
		

	});

	$(".btnVoltar").on("click", function(){

		$(".titulo").prependTo("#inicial");
		$("body").addClass("inicial");
		$("#inicial").removeClass("d-none");
		$("#resultado").addClass("d-none");

	});

	$(".btnResultado").on("click", function(){

		$(window).scrollTop($('html').offset().top);

	});

  // 3. TABELA

    // Determina largura da célula da tabela normal no clique do botão 'Encontrar Z na tabela' ou no redimensionamento da página.

    function newCellWidth(){

      var wTabela = $(".tabela-normal").width();
      $(".tabela-normal td, .tabela-normal th").css("min-width", wTabela/6);

    }

    $(".btnResultado").on("click", newCellWidth);
    $(window).resize(newCellWidth);

})
