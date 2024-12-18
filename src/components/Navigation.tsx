import type {LinkData} from '../types';
import {createSignal, For} from 'solid-js';

export interface MainNavProps {
    linkColors?: string[],
    position?: 'right' | 'left',
}

const defaultLinkColors = [
    'text-sky-500',
    'hover:text-yellow-500',
    'dark:text-sky-500',
    'dark:hover:text-yellow-500',
];

export function MainNav(props: MainNavProps) {
    const { linkColors = defaultLinkColors, position = "right" } = props
    const [navItems, setNavItems] = createSignal<LinkData[]>([
        { title: "Home", url: "/"},
        { title: "About", url: "/about"},
        { title: "Projects", url: "/projects"},
        { title: "Blog", url: "/posts"},
    ])
    
    const linkPositions = position == "right" ? ["ml-4"] : ["mr-4", "flex-row-reverse"]
    const linkClasses = [ 
        ...linkColors,
        ...linkPositions,
        'hover:underline',
        'font-bold',
    ].join(' ')

    return (
        <nav class="md:container mx-auto flex justify-between items-center">
            <div class="w-12 h-12 rounded-full bg-emerald-700 flex justify-center items-center mr-4">
                <p class="text-lg font-bold text-white">NR</p>
            </div>
            <div>
                <For each={navItems()}>
                    { ({ title, url, external }) => (<a class={linkClasses} href={url} target={ external ? "_blank": ""} >{title}</a>) }
                </For>
            </div>
        </nav>
    )
}

