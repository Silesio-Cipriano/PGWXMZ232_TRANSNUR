let nav = document.getElementById('nav');
let centerNav = document.getElementById('center_nav');
let content = document.getElementById('content');
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
