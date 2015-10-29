$(document).ready(function () {
    (function Slider() {

        function previous(e) {
            e.preventDefault();

            var $slides = $(this).parent('.slides');

            var $current = $slides.find('.slide.active'),
                $prev = $current.prev('.slide');

            if (!$prev.length) {
                $prev = $slides.find('.slide:last');
            }

            $current.removeClass('active');

            $prev.addClass('active');
        }

        function next(e) {
            e.preventDefault();
            var $slides = $(this).parent('.slides');

            var $current = $slides.find('.slide.active'),
                $next = $current.next('.slide');

            if (!$next.length) {
                $next = $slides.find('.slide:first');
            }

            $current.removeClass('active');

            $next.addClass('active');
        }

        // Preload image

        $('.slides [data-illustration]').each(function() {

            var url = $(this).data('illustration');

            var image = new Image();

            image.src = url;

        });
        $('.slides .arrow-prev').on('click', previous);
        $('.slides .arrow-next').on('click', next);

    })();
})