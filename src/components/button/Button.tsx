// jshint esversion:6

interface ButtonProp {
    dark?: boolean,
    size?: string,
    custom?: string,
    spacing?: string,
    children: string | JSX.Element | JSX.Element[] | (() => JSX.Element)
}

let buttonSize: string;

function Button({ dark, size, spacing, children }: ButtonProp) {

    if (size) buttonSize = `w-[${size}]`;

    return (<button className={`${dark ? 'bg-black text-[#00df9a]' : 'bg-[#00df9a] text-[#000300]'} ${size ? buttonSize : ''} ${spacing ? spacing : 'py-2.5 px-12 mt-4'}  font-bold cursor-pointer rounded-md`}><>{children}</></button>);
}

export { Button };