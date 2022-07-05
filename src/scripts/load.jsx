

window.addEventListener( "load", function() {

    var drawer = document.querySelector( "drawer" );
    var drawerSwitch = document.querySelector( "appbar-left" );
    var displayDrawer = document.querySelector( "appbar-right" );
    

    drawerSwitch.addEventListener( "click", function() {
        switch( drawer.style.width ) {
            case "": drawer.style.width = "350px";
            break;
            case "68px": drawer.style.width = "350px";
            break;
            case "350px": drawer.style.width = "68px";
            break;
        }
    } );

    displayDrawer.addEventListener( "click", function() {
        switch( drawer.style.display ) {
            case "": drawer.style.display = "block";
            break;
            case "block": drawer.style.display = "none";
            break;
            case "none": drawer.style.display = "block";
        }
    } );

} );

 