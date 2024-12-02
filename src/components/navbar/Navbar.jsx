import "./navbar.scss";

export const Navbar = () => {
  return (
    <div className="navbar">
        {/* Sidebar */}
        <div className="wrapper">
            <span>Faizululum Dev</span>
            <div className="social">
                <a href=""><img src="/linkedin.png" alt="" /></a>
                <a href=""><img src="/github.png" alt="" /></a>
                <a href=""><img src="/facebook.png" alt="" /></a>
                <a href=""><img src="/instagram.png" alt="" /></a>
            </div>
        </div>
    </div>
  )
}
