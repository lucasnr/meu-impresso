(function () {
  const navbar = $('#navbar');
  const nav = navbar.find('#tabs');
  navbar.mouseenter(() => {
    nav.css('display', 'block');
  });
  navbar.mouseleave(() => {
    nav.css('display', 'none');
  });

  const tabTitle = nav.find('#tab-title');
  const controls = nav.find('#tab-controls li');
  let currentActive = 0;
  controls.each((index, item) => {
    const control = $(item);
    control.mouseenter(() => {
      $(controls[currentActive]).removeClass('active');
      control.addClass('active');
      tabTitle.text(control.text());

      nav.find('.tab.active').removeClass('active');
      nav.find(`#${control.data('tab-id')}`).addClass('active');

      currentActive = index;
    });
  });
})();
