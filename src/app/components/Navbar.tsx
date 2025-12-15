import BrandAccent from "./BrandAccent";

function Navbar() {
  return (
    <nav>
      <div className="max-w-7xl mx-auto px-10 py-10">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-semibold tracking-tight">Spend<BrandAccent>Clear</BrandAccent></div>
          <div>
            <ul className="flex gap-5">
                <li><a href="">Log In</a></li>
                <li><a href="">Create Account</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
