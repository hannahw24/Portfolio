import { Header } from "./header";

export const Home = () => {
    const header = [
        'justify-center',
        'flex',
        'w-full',
        'p-8',
        'border-solid',
        'border-y-2'
    ].join(' ');

    return (
        <div>
            <Header/>
        </div>
    )
}