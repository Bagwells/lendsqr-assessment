

const LoadingScreen = ({message}: {message: string}) => (
    <div className={`flex flex-col gap-8 items-center justify-center w-full bg-background`}>
        <img
            src="/LendsqrLogo.svg"
            alt="Lendsqr"
            width={200}
            height={200}
            loading="eager"
        />
        <p className="text-color">{message}</p>
    </div>
);

export default LoadingScreen;