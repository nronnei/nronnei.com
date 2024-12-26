import type {LinkData} from '../types';
import {createSignal, For} from 'solid-js';

export interface LinkListProps {
    links: LinkData[],
    containerClasses?: string [],
    linkColors?: string[],
    position?: 'right' | 'left',
}

const defaultLinkColors = [
    'text-sky-500',
    'hover:text-yellow-500',
    'dark:text-sky-500',
    'dark:hover:text-yellow-500',
];

export function LinkList(props: LinkListProps) {
    const { linkColors = defaultLinkColors, position = "left", containerClasses = ["mt-2"]} = props
    const [links, setNavItems] = createSignal<LinkData[]>(props.links)
    const linkPositions = position == "right" ? ["ml-2"] : ["mr-2", "flex-row-reverse"]
    const linkClasses = [ 
        ...linkColors,
        ...linkPositions,
        'hover:underline',
        'font-bold',
    ].join(' ')

    return (
        <div class={containerClasses.join(" ")}>
            <For each={links()}>
                { ({ title, url, external }) => (<a class={linkClasses} href={url} target={ external ? "_blank": ""} >{title}</a>) }
            </For>
        </div>
    )
}

