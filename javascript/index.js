let nav = document.getElementById('nav');
let centerNav = document.getElementById('center_nav');
let content = document.getElementById('content');
let goDown = document.getElementById('goDown');
let goUp = document.getElementById('goUp');
let showSidebar = false;

function toggleSidebar() {
  showSidebar = !showSidebar;
  if (showSidebar) {
    centerNav.style.marginLeft = '-10vw';
    centerNav.style.animationName = 'showSideBar';
    content.style.filter = 'blur(2px)';
  } else {
    centerNav.style.marginLeft = '-100vw';
    centerNav.style.animationName = 'hiddenSideBar';
    content.style.filter = '';
  }
}

function closeSidebar() {
  if (showSidebar) toggleSidebar();
}

window.addEventListener('resize', function (event) {
  if (this.window.innerWidth > 800 && showSidebar) {
    toggleSidebar();
  }
});

var lastScrollTop = 0;

window.addEventListener(
  'scroll',
  function () {
    var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    if (st > lastScrollTop) {
      goUp.style.display = 'block';
      goDown.style.display = 'none';
    } else if (st < lastScrollTop) {
      goUp.style.display = 'none';
      goDown.style.display = 'block';
    } // else was horizontal scroll
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  },
  false
);
