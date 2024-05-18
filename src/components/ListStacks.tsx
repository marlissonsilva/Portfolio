import { IconBrandCss3, IconBrandGit, IconBrandHtml5, IconBrandJavascript, IconBrandNextjs, IconBrandNodejs, IconBrandReact, IconBrandSass, IconBrandTailwind } from "@tabler/icons-react";
import Stack from "./Stack";


interface ListStacksProps {
    className?: string
}

export default function ListStacks(props: ListStacksProps) {
    const sizeIcons = 60
    return (
        <div className={`container flex flex-wrap  justify-around sm:justify-start gap-9 overflow-hidden p-2 mt-4 sm:h-24 w-fit`}>
            <Stack icon={<IconBrandReact size={sizeIcons} stroke={1.2} />} title="react" />
            <Stack icon={<IconBrandNextjs size={sizeIcons} stroke={1.2} />} title="next" />
            <Stack icon={<IconBrandTailwind size={sizeIcons} stroke={1.2} />} title="tailwind" />
            <Stack icon={<IconBrandJavascript size={sizeIcons} stroke={1.2} />} title="javascrip" />
            <Stack icon={<IconBrandNodejs size={sizeIcons} stroke={1.2} />} title="node" />
            <Stack icon={<IconBrandGit size={sizeIcons} stroke={1.2} />} title="git" />
        </div>
    )
}