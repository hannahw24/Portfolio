import { Header } from "../header";
import { Email } from "../icons/email";
import { LinkedIn } from "../icons/linkedin";

const info = [
    'flex',
    'justify-center',
    'items-center',
    'flex-col',
    'pt-20',
    'text-center',
    'space-y-2',
].join(' ');

export default function Contact() {  
    return (
        <div>
            <Header/>
            <div className={info}>
                <h1>Thanks for vising!</h1>
                <h1 className="space-y-4">Want to connect? Feel free to reach out via LinkedIn or Email!</h1>
                <div className="flex m-auto space-x-2">
                    <LinkedIn />
                    <Email/>
                </div>
            </div>
        </div>
    );
}