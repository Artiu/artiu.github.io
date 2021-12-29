import AppearingText from "./AppearingText";

export default function HomeComponent({ scroll }) {
    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-center gap-5 bg-black/90 text-white">
            <h1 className="text-3xl text-center px-2">
                <AppearingText>{"Hi!\nI'm Artur Oborski and I'm frontend developer"}</AppearingText>
            </h1>
            <button
                className="py-2 px-6 bg-gradient-to-r from-indigo-500 to-purple-700 rounded-lg hover:from-indigo-600 hover:to-purple-800"
                onClick={scroll}
            >
                Get started
            </button>
        </div>
    );
}
