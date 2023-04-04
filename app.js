const tooglebtn = document.querySelector(".toggle-btn")
    const togglebtnicon = document.querySelector(".fa-solid")
    const dropdownmenu = document.querySelector(".dropdown-menu")

   
    tooglebtn.onclick=function(){
        dropdownmenu.classList.toggle("open")

        const isopen =dropdownmenu.classList.contains("open")

        togglebtnicon.classList =isopen

        ? "fa-solid fa-xmark"
        : "fa-solid fa-bars"}
