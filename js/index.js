$(window).scroll(function () {
  var scrolled = $(document).scrollTop(); // 目前 y 軸滾動多少值
  var winh = $(window).height(); // window 視窗的高度

  //nav-bar ==========================================
  // lying-ani ani
  var navOffsetTop = $('#navbar').offset().top;
  // console.log('navOffsetTop', navOffsetTop);
  if (scrolled > navOffsetTop) {
    $('#navbar').addClass('fix-top');
  }

  //ch1 ==========================================
  // lying-ani ani
  // var lyingImgOffsetTop = $('#lying-ani').offset().top;
  // console.log('lyingImgOffsetTop', lyingImgOffsetTop);
  // if (scrolled > lyingImgOffsetTop - winh / 2) {
  //   $('#lying-ani').addClass('fade-in-from-bottom');
  // }

  //date ani
  var dateImgOffsetTop = $('#date').offset().top;
  if (scrolled > dateImgOffsetTop - winh / 2) {
    $('#date').addClass('fade-in-from-top');
  }

  //clock ani
  var clockImgOffsetTop = $('#clock').offset().top;
  if (scrolled > clockImgOffsetTop - winh / 2) {
    $('#clock').addClass('fade-in-from-bottom');
  }

  //oifrag ani
  var oifragImgOffsetTop = $('#oifrag').offset().top;
  if (scrolled > oifragImgOffsetTop - winh / 2) {
    $('#oifrag').addClass('fade-in-from-right');
  }

  //oioi ani
  var oioiImgOffsetTop = $('#oioi').offset().top;
  if (scrolled > oioiImgOffsetTop - winh / 2) {
    $('#oioi').addClass('car-from-right');
  }

  //nervous ani

  var doctorOffsetTop = $('#doctor').offset().top;
  if (scrolled > doctorOffsetTop - winh) {
    $('#doctor').addClass('fade-in-from-bottom');
  }
  var words1OffsetTop = $('#words1').offset().top;
  if (scrolled > words1OffsetTop - winh) {
    $('#words1').addClass('fade-in-from-bottom');
  }
  var words2OffsetTop = $('#words2').offset().top;
  if (scrolled > words2OffsetTop - winh) {
    $('#words2').addClass('fade-in-from-bottom');
  }
  var words3OffsetTop = $('#words3').offset().top;
  if (scrolled > words3OffsetTop - winh) {
    $('#words3').addClass('fade-in-from-bottom');
  }
  var words4OffsetTop = $('#words4').offset().top;
  if (scrolled > words4OffsetTop - winh) {
    $('#words4').addClass('fade-in-from-bottom');
  }

  // family ani
  var familySectionOffsetTop = $('#family-section').offset().top;
  if (scrolled > familySectionOffsetTop - winh / 2) {
    $('#family1').addClass('fade-in-from-bottom');
    $('#family2').addClass('fade-in-from-top');
    $('#family3').addClass('fade-in-from-bottom');
    $('#family4').addClass('fade-in-from-top');
  }

  //giveup ani
  var giveupOffsetTop = $('#giveup').offset().top;
  if (scrolled > giveupOffsetTop - winh) {
    $('#giveup').addClass('fade-in-from-bottom');
  }

  //lotus ani
  var lotus3OffsetTop = $('#lotus3').offset().top;
  if (scrolled > lotus3OffsetTop - winh) {
    $('#lotus3').addClass('fadein1');
  }

  var lotus4OffsetTop = $('#lotus4').offset().top;
  if (scrolled > lotus4OffsetTop - winh) {
    $('#lotus4').addClass('fadein2');
  }

  // ch2 =======================================

  // tie ani
  var tieOffsetTop = $('#tie').offset().top;
  if (scrolled > tieOffsetTop - winh / 2) {
    $('#tie').addClass('fade-in-from-bottom');
  }

  //wf wordframe ani
  var wf1OffsetTop = $('#wf1').offset().top;
  if (scrolled > wf1OffsetTop - winh / 2) {
    $('#wf1').addClass('fade-in-from-bottom');
  }

  var wf2OffsetTop = $('#wf2').offset().top;
  if (scrolled > wf2OffsetTop - winh / 2) {
    $('#wf2').addClass('fade-in-from-bottom');
  }

  var wf3OffsetTop = $('#wf3').offset().top;
  if (scrolled > wf3OffsetTop - winh / 2) {
    $('#wf3').addClass('fade-in-from-bottom');
  }

  // reasons wf ani
  var wfmedalOffsetTop = $('#wfmedal').offset().top;
  if (scrolled > wfmedalOffsetTop - winh / 2) {
    $('#wfmedal').addClass('fade-in-from-bottom');
  }

  var wftimeOffsetTop = $('#wftime').offset().top;
  if (scrolled > wftimeOffsetTop - winh / 2) {
    $('#wftime').addClass('fade-in-from-bottom');
  }

  var wfcoffinOffsetTop = $('#wfcoffin').offset().top;
  if (scrolled > wfcoffinOffsetTop - winh / 2) {
    $('#wfcoffin').addClass('fade-in-from-bottom');
  }

  // ch3 =======================================

  //funeral ani
  var worshipOffsetTop = $('#worship').offset().top;
  if (scrolled > worshipOffsetTop - winh / 2) {
    $('#worship').addClass('fade-in-from-bottom');
  }

  var kowtowOffsetTop = $('#kowtow').offset().top;
  if (scrolled > kowtowOffsetTop - winh / 2) {
    $('#kowtow').addClass('fade-in-from-bottom');
  }

  var tearOffsetTop = $('#tear').offset().top;
  if (scrolled > tearOffsetTop - winh / 2) {
    $('#tear').addClass('fade-in-from-bottom');
  }

  // ch4 ============================================

  //mountain ani
  var mountainOffsetTop = $('#mountain').offset().top;
  if (scrolled > mountainOffsetTop - winh / 2) {
    $('#mountain').addClass('fade-in-from-bottom');
  }

  //road12 ani
  var road12OffsetTop = $('#road12').offset().top;
  if (scrolled > road12OffsetTop - winh / 2) {
    $('#road12').addClass('fade-in-from-bottom');
  }

  //road3 ani
  var road3OffsetTop = $('#road3').offset().top;
  if (scrolled > road3OffsetTop - winh / 2) {
    $('#road3').addClass('fade-in-from-bottom');
  }

  //tower ani
  var towerOffsetTop = $('#tower').offset().top;
  if (scrolled > towerOffsetTop - winh / 2) {
    $('#tower').addClass('fade-in-from-bottom');
  }

  //uniontable ani
  var uniontableOffsetTop = $('#uniontable').offset().top;
  if (scrolled > uniontableOffsetTop - winh / 2) {
    $('#uniontable').addClass('fade-in-from-bottom');
  }

  //hotmilk ani
  var hotmilkOffsetTop = $('#hotmilk').offset().top;
  if (scrolled > hotmilkOffsetTop - winh) {
    $('#hotmilk').addClass('fade-in-from-bottom');
  }

  //bowl ani
  var bowlOffsetTop = $('#bowl').offset().top;
  if (scrolled > bowlOffsetTop - winh) {
    $('#bowl').addClass('fade-in-from-bottom');
  }

  // ch5 ==========================================

  //memorywords ani
  var memorywords1OffsetTop = $('#memorywords1').offset().top;
  if (scrolled > memorywords1OffsetTop - winh / 2) {
    $('#memorywords1').addClass('fade-in-from-bottom');
  }

  var memorywords2OffsetTop = $('#memorywords2').offset().top;
  if (scrolled > memorywords2OffsetTop - winh / 2) {
    $('#memorywords2').addClass('fade-in-from-bottom');
  }

  //classroom ani
  var classroomOffsetTop = $('#classroom').offset().top;
  if (scrolled > classroomOffsetTop - winh / 2) {
    $('#classroom').addClass('fade-in-from-bottom');
  }

  //coffin ani
  var coffin1OffsetTop = $('#coffin1').offset().top;
  if (scrolled > coffin1OffsetTop - winh / 2) {
    $('#coffin1').addClass('fade-in-from-bottom');
  }

  var coffin2OffsetTop = $('#coffin2').offset().top;
  if (scrolled > coffin2OffsetTop - winh / 2) {
    $('#coffin2').addClass('fade-in-from-bottom');
  }

  var cardhandOffsetTop = $('#cardhand').offset().top;
  if (scrolled > cardhandOffsetTop - winh / 2) {
    $('#cardhand').addClass('fade-in-from-left');
  }

// shock ani============================
// var shockOffsetTop = $('#shock').offset().top;
//   var scrolledShock = scrolled - shockOffsetTop;
//   $('.opa-s').each(function () {
//     var opRange = $(this).parent().height() / 6;
//     $(this).css({
//       opacity: ($(this).data('seq') * opRange - scrolledShock) / opRange,
//       // opacity: 1 - (($(this).data('seq') * opRange - scrolled) / opRange),
//     });
//   });


  // paintex wineparty Animation =========================
  var paintOffsetTop = $('#paint').offset().top;
  var scrolledPaint = scrolled - paintOffsetTop;
  $('.opa-p').each(function () {
    var opRange = $(this).parent().height() / 7;
    $(this).css({
      opacity: ($(this).data('seq') * opRange - scrolledPaint) / opRange,
      // opacity: 1 - (($(this).data('seq') * opRange - scrolled) / opRange),
    });
  });

  // Ending Animation =========================
  var endingOffsetTop = $('#ending').offset().top;
  var scrolledEnding = scrolled - endingOffsetTop;
  $('.opa').each(function () {
    var opRange = $(this).parent().height() / 7;
    $(this).css({
      opacity: ($(this).data('seq') * opRange - scrolledEnding) / opRange,
      // opacity: 1 - (($(this).data('seq') * opRange - scrolled) / opRange),
    });
  });
});
