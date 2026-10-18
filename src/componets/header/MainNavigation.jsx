import "./MainNavigation.css";

const home = "https://alto-stephens.github.io/gamelibrary/";
const project = "https://alto-stephens.github.io/csce242/projects/part7/";

const navigationItems = [
    { label: "Home", href: home, current: true },
    { label: "Games", href: `${project}games.html` },
    { label: "Arcade Gallery", href: `${project}gallery.html` },
    { label: "History", href: `${project}history.html` },
    { label: "Soundtracks", href: `${project}soundtracks.html` },
    { label: "Contact", href: `${project}index.html#contact` }
];

const MainNavigation = () => (
    <nav className="main-navigation" aria-label="Main navigation">
        {navigationItems.map(({ label, href, current }) => (
            <a
                className={`main-navigation__link${current ? " main-navigation__link--current" : ""}`}
                href={href}
                aria-current={current ? "page" : undefined}
                key={label}
            >
                {label}
            </a>
        ))}
    </nav>
);

export default MainNavigation;
