export interface LinkProps {
    text: string
    url: string
    alt?: string,
    external?: boolean
    icon?: string
    iconOnly?: boolean
}

const linkClasses = [
    'font-bold',
    'dark:text-sky-500',
    'text-yellow-700',
    'dark:hover:text-yellow-500',
    'hover:text-sky-700',
].join(' ')

export function Link(linkProps: LinkProps) {
    const {
        text,
        url,
        alt = "",
        external = false,
        icon,
        iconOnly = false
    } = linkProps;

    return <a
        class={linkClasses}
        href={url}
        title={iconOnly ? (alt || text) : alt}
        target={external ? "_blank" : undefined}
    >
        {icon && <i class={icon}></i>}
        {!iconOnly && text}
    </a>
}