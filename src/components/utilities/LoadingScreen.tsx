

const LoadingScreen = ({message}: {message: string}) => (
    <div className={`flex flex-col gap-4 items-center justify-center w-screen h-screen z-[90] bg-background`}>
        <img
            src="/LendsqrLogo.svg"
            alt="Lendsqr"
            width={200}
            height={200}
            loading="eager"
        />
        <p className="text-color text-semibold work-sans text-4">{message}</p>
    </div>
);

export default LoadingScreen;