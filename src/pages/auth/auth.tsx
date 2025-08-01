
import { Logo } from "../../components/UI/Logo"
import { LoginForm } from "./loginForm"


const AuthScreen =()=> {

  return(
    <div className="w-screen h-svh lg:h-screen Avenir">
      <div className="bg-white flex flex-col lg:flex-row w-full h-full">
          <div className="pos-absolute w-full top-10 lg:top-[100px] flex justify-start px-6 md:px-20 lg:px-[100px] ">
            <Logo width={145} height={30}/>
          </div>
        <div className="lg:w-half hidden lg:flex justify-center items-center p-20">
            <img src="/Illustration.svg" 
              alt="hero"
              width={600}
              height={500}
            />
        </div>
        <div className="flex flex-col p-6 items-center justify-center w-full h-screen Border lg:w-half drop-shadow-lite">
          <LoginForm/>
        </div>
      </div>
    </div>
  )
}

export default AuthScreen;