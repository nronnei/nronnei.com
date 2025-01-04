import type {LinkData} from '../types';
import {createSignal, For} from 'solid-js';

type SocialLink = { icon: string } & LinkData

const [socialLinks] = createSignal<SocialLink[]>([
    { title: "LinkedIn", url: "https://linkedin.com/in/nronnei", icon: "fa-linkedin", external: true },
    { title: "GitHub", url: "https://github.com/nronnei", icon: "fa-github", external: true },
])

const copyrightDate = new Date().toISOString().slice(0, 4)

const linkClasses = [
    'font-bold',
    'mr-4',
    'text-black',
    "dark:text-white",
    'hover:text-yellow-500',
    'dark:hover:text-yellow-500',
].join(' ')

export function Footer() {
    return (
        <footer class='container mx-auto text-center py-8 dark:text-white flex-none'>
            <ul class='text-2xl'>
                <For each={socialLinks()}>
                    {({ title, url, external, icon }) => {

                        return (
                            <a
                                class={linkClasses}
                                href={url}
                                target={ external ? "_blank": ""}
                                aria-label={title}
                                title={title}
                            >
                                <i class={`fa-brands ${icon}`}></i>
                            </a>
                        )
                    }}
                </For>
            </ul>
            <p>© Nicholas Ronnei {copyrightDate}, All Rights Reserved </p>
        </footer>

    )
}

