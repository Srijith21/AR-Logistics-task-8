const SideMenuBar= document.getElementById("SideMenuBar")
const MenuButton= document.getElementById("sidebar-button")


MenuButton.addEventListener('click', ()=>{
    SideMenuBar.classList.toggle("active")
})