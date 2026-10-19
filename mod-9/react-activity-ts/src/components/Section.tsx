interface SectionProps {
    title: string;
    children: React.ReactNode
}

export default function Section(props: SectionProps) {

    const style = {
        border: "3px solid red"
    }

    return (
        <section style={style}>
            <h2>{props.title}</h2>
            {props.children}
        </section>
    )
}

// X The Section component should render an HTML <section> tag.
// X Inside the <section>, render an <h2> with the title prop.
// X Below the <h2>, render the children.
// X Add some basic inline styling or a CSS class for visual distinction (e.g., a border).