$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
	$(this)
		.addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
		.closest('div.catalog__container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
});
$('.catalog-item__link').on('click', function(event){
	$(this)
		.parents('.catalog-item').find('.catalog-item__wrapper').toggleClass('catalog-item__wrapper_active');
})