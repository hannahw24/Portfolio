export const Header = () => {
    const header = [
        'flex',
        'w-full',
        'p-4',
        'border-solid',
        'border-y-2',
        'justify-between'
    ].join(' ');

    const nameDiv = [
        'flex', 
        'justify-left',
        'align-middle',
        'pl-4',
    ].join(' ');

    const name = ['text-3xl', 'font-bold', 'pr-4'].join(' ');
    const description = ['text-lg', 'font-light', 'pt-2'].join(' ');

    const optionsDiv = [
        'flex', 
        'justify-right',
        'align-right',
        'pr-4',
    ].join(' ');

    return (
        <div className={header}>
            <div className={nameDiv}>
                <h1 className={name}>Hannah Wong</h1>
                <h1 className={description}>Software Engineer | UX Design Researcher</h1>
            </div>
            <div className={optionsDiv}>
                <a href="#about" className='pt-2'>About</a>
                <a href="#about" className='pt-2 pl-4'>Portfolio</a>
                <a href="#about" className='pt-2 pl-4'>Resume</a>
                <a href="#about" className='pt-2 pl-4'>Contact</a>
            </div>
        </div>
    )
}