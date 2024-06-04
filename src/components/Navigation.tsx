import type {LinkData} from '../types';
import {createSignal, For} from 'solid-js';


const [navItems, setNavItems] = createSignal<LinkData[]>([
    { title: "Home", url: "/"},
    { title: "About", url: "/about"},
    { title: "Projects", url: "/projects"},
    { title: "Blog", url: "/blog"},
])

const linkClasses = [
    'font-bold',
    'mr-4',
    'hover:underline',
    'text-sky-500',
    'hover:text-yellow-500',
    'dark:text-sky-500',
    'dark:hover:text-yellow-500',
].join(' ')

export function MainNav() {
    return (
        <nav class="main-nav">
            <For each={navItems()}>
                { ({ title, url, external }) => (<a class={linkClasses} href={url} target={ external ? "_blank": ""} >{title}</a>) }
            </For>
        </nav>
    )
}

