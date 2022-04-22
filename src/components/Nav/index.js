import React, { useEffect } from 'react';

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory
    } = props;
    useEffect(() => {
        document.title = currentCategory.name;
    }, [currentCategory]);

    return (
        <header>
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <div className="container-fluid">
                    <a href="/" className="navbar-brand">
                        Armando's Portfolio
                    </a>
                    <div id="navbarNavAltMarkup">
                        <div className="navbar-nav me-auto mb-2 mb-lg-">
                            {categories.map((category) => (
                                <li
                                    className={`mx-1 nav-item nav-link ${currentCategory.name === category.name && 'active'
                                        }`}
                                    key={category.name}
                                >
                                    <span onClick={() => {
                                        setCurrentCategory(category);
                                    }}
                                    >
                                        {category.name}
                                    </span>
                                </li>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>

        </header>

    );
}

export default Nav;