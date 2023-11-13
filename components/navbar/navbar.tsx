
const Navbar: React.FC = () => {
  return (
    <nav className="w-screen h-[4.5rem] bg-color3">
      <div className="flex justify-between items-center">
        <img src='http://localhost:3000/images/invoice-icon.svg' alt="" />
        <div className="flex">
          <img className="mr-[1rem] mb-[1rem]" src='http://localhost:3000/images/combined-shape.svg' alt="" />
          <img src='http://localhost:3000/images/image-avatar.jpg' className="w-[2rem] h-[2rem] mx-[.5rem] rounded-full" alt=""/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
