type Props = {
  sm?: boolean;

};
const Header = ({sm=false}: Props) => {
  return (
    <header 
    className={`${
      sm? "md:hidden  ":"sticky top-0 z-[1] " } flex  justify-center items-center w-screen h-[6.5rem] bg-primary-100 overflow-hidden`}>
      <h1 className="text-white text-lg md:text-xl"> {sm ?"A la CartApp" : "CartApp"} </h1>
    </header>
  )
}

export default Header
