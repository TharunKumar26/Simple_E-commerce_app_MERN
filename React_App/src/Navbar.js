import "./styles.css";



export default function NavBar(){
    return(
        <div class="Navbar">
            <div class="logo_con">
                Logo
                </div>
            <div class="menu_center">
              <a href="/shoe2">  <div class="menu_item" >HOME</div></a>
                <div class="menu_item">THE JOURNEY</div>
                <div class="menu_item">TEAM</div>
                <div class="menu_item">STORE</div>
                <div class="menu_item">CONTACT</div>
              

            </div>
            <div class="menu_right">
                account

                <a href="/cart">View cart</a>
                </div>
            </div>    

    )
}