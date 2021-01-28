export default function Footer()
{
    return (
        <div className="footer">
            <footer>
                <div className="d-flex footer-info justify-content-between">
                    <p> material taken from cite <a href="https://www.thecocktaildb.com/api.php" target="_blank"> https://www.thecocktaildb.com/api.php </a> </p>

                    <ul className='contact'>
                        <li> 
                            <i className="fa fa-telegram"></i>
                            <a href="https://t.me/AH911UA" target="_blank"> Telegram  </a>
                        </li>

                        <li> 
                            <i class="fa fa-instagram"></i>
                            <a href="https://www.instagram.com/hap.bb/" target="_blank"> Instagram  </a>
                        </li>
                    </ul>
                </div>
                <p> &copy; Hryhorenko Aleksandr </p>
            </footer>
        </div>
    );
}