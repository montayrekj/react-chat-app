import GoogleSignIn from "./GoogleSignIn";

export default function Welcome() {
  return (
    <div className="max-w-screen-md flex flex-col items-center justify-center mx-auto py-16 gap-16 text-center px-8">
      <div>
        <h2 className="text-3xl mb-4">Are you bored? Come on,</h2>
        <h1 className="text-5xl ">Let's chat!</h1>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-xl">
          Sign in with Google to start chatting with people!
        </p>
        <div className="flex justify-center h-10">
          <GoogleSignIn isMobileMinimal={false} />
        </div>
      </div>
    </div>
  );
}
