$(document).ready(function () {
  ///////////////// Apartment Slide ////////////////////////
  $('.apartment-slide').slick({
    slidesToShow: 3,
    // centerMode: true,
    // centerPadding: '60px',
    infinite: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $('.apartment-arrow-right').click(function () {
    $('.apartment-slide').slick('slickNext');
  });

  $('.apartment-arrow-left').click(function () {
    $('.apartment-slide').slick('slickPrev');
  });
  /////////////////////////////////////////////////////////

  ////////////// Infrastructure Slide ////////////////////////
  $('.infra-slide').slick({
    slidesToShow: 1,
    arrows: false,
    speed: 1000,
  });

  $('.infra-arrow-right').click(function () {
    $('.infra-slide').slick('slickNext');
  });

  $('.infra-arrow-left').click(function () {
    $('.infra-slide').slick('slickPrev');
  });
  ////////////////////////////////////////////////////////

  /////////// Infra feature Slide ///////////////////
  $('.infra-feature-slide').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    infinite: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $('.infra-feature-arrow-right').click(function () {
    $('.infra-feature-slide').slick('slickNext');
  });

  $('.infra-feature-arrow-left').click(function () {
    $('.infra-feature-slide').slick('slickPrev');
  });

  ////////////////////////////////////////////////////

  ///////////// Service Slide ///////////////////////
  $('.service-slide').slick({
    slidesToShow: 1,
    speed: 500,
    infinite: true,
    arrows: false,
    fade: true,
  });

  $('.service-arrow-right').click(function () {
    $('.service-slide').slick('slickNext');
  });

  $('.service-arrow-left').click(function () {
    $('.service-slide').slick('slickPrev');
  });
  //////////////////////////////////////////////////////

  gsap.registerPlugin(ScrollTrigger);

  gsap.from('.header', { y: 200, duration: 1 });

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.info',
      start: 'top 80%',
    },
  });

  tl.fromTo(
    '.hero__line',
    { clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' },
    { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)', duration: 0.5 }
  );
  tl.from('.info__vesper', { y: 500, opacity: 0, duration: 0.5 });
  tl.from('.slr', { x: '-100%', opacity: 0 });

  gsap.from('.about__subTitle', {
    y: 200,
    duration: 1,
    scrollTrigger: {
      trigger: '.about__subTitle',
      start: 'top 80%',
    },
  });

  let aboutTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.about',
      start: 'top 90%',
    },
  });

  aboutTl.from('.about__image', { scale: 1.1, duration: 1 });
  aboutTl.from('.about__text', { y: 100, opacity: 0, duration: 1 });

  gsap.from('.location__content', {
    y: 200,
    duration: 1,
    scrollTrigger: {
      trigger: '.location__content',
      start: 'top bottom',
    },
  });

  let architectureTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.architecture-1',
      start: 'top 80%',
    },
  });

  architectureTl.from('.architecture__image-1', { scale: 1.1, duration: 1 });
  architectureTl.from('.architecture__text-1', {
    y: 200,
    opacity: 0,
    duration: 1,
  });

  let architectureTl2 = gsap.timeline({
    scrollTrigger: {
      trigger: '.architecture-2',
      start: 'top 80%',
    },
  });

  architectureTl2.from('.architecture__image-2', { opacity: 0, duration: 1 });
  architectureTl2.from('.architecture__text-2', {
    y: 200,
    opacity: 0,
    duration: 1,
  });

  gsap.from('.architecture__banner', {
    scale: 1.15,
    duration: 1,
    scrollTrigger: {
      trigger: '.architecture__banner',
      start: 'top 80%',
    },
  });

  gsap.from('.interiors__image', {
    scale: 1.1,
    duration: 1,
    scrollTrigger: { trigger: '.interior', start: 'top 80%' },
  });
  gsap.from('.interiors__text', {
    y: 200,
    opacity: 0,
    duration: 1,
    scrollTrigger: { trigger: '.interior', start: 'top 80%' },
  });

  gsap.from('.apartment__image__main', {
    scale: 1.1,
    duration: 1,
    scrollTrigger: {
      trigger: '.apartment',
      start: 'top 80%',
    },
  });

  gsap.from('.apartment__text', {
    y: 200,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.apartment',
      start: 'top 80%',
    },
  });

  gsap.from('.apartment__subheading', {
    y: 200,
    opacity: 0,
    scrollTrigger: {
      trigger: '.apartment__subheading',
      start: 'top 80%',
    },
  });

  gsap.from('.penthouse__text', {
    y: 200,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.penthouse',
      start: 'top 80%',
    },
  });
  gsap.from('.penthouse__image', {
    scale: 1.1,
    duration: 1,
    scrollTrigger: {
      trigger: '.penthouse',
      start: 'top 80%',
    },
  });

  gsap.from('.infrastructure__heading', { x: 500, opacity: 0, duration: 1 });

  gsap.from('.infrastructure__text', {
    y: 200,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.infra-slide',
      start: 'top 80%',
    },
  });

  //   gsap.from('.infra__slide', {
  //     scale: 1.1,
  //     duration: 1,
  //     scrollTrigger: {
  //       trigger: '.infra-slide',
  //       start: 'top 80%',
  //     },
  //   });

  gsap.from('.services__subtitle', {
    y: 200,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.services',
      start: 'top 80%',
    },
  });

  gsap.from('.service__banner', {
    scale: 1.15,
    duration: 1,
    scrollTrigger: {
      trigger: '.service__banner',
      start: 'top 80%',
    },
  });

  gsap.from('.project__heading', {
    x: 200,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.project',
      start: 'top 80%',
    },
  });

  gsap.from('.project__content', {
    y: 200,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.project',
      start: 'top 80%',
    },
  });

  gsap.from('.presentation__links', {
    x: 200,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.presentation',
      start: 'top 80%',
    },
  });

  gsap.from('.presentation__form', {
    x: -200,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.presentation__banner',
      start: 'top 80%',
    },
  });
});
