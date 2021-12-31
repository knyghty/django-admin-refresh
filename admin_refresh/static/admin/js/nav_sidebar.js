'use strict';
{
    const toggleNavSidebar = document.getElementById('toggle-nav-sidebar');
    if (toggleNavSidebar !== null) {
        const overlay = document.getElementById('overlay');
        const navLinks = document.querySelectorAll('#nav-sidebar a');
        const mainLinks = document.querySelectorAll('#main-container a');
        function disableNavLinkTabbing() {
            for (const navLink of navLinks) {
                navLink.tabIndex = -1;
            }
        }
        function enableNavLinkTabbing() {
            for (const navLink of navLinks) {
                navLink.tabIndex = 0;
            }
        }
        function enableMainLinkTabbing() {
            for (const mainLink of mainLinks) {
                mainLink.tabIndex = 0;
            }
        }
        function disableMainLinkTabbing() {
            for (const mainLink of mainLinks) {
                mainLink.tabIndex = -1;
            }
        }

        toggleNavSidebar.addEventListener('click', function() {
            const navSidebar = document.getElementById('nav-sidebar');
            navSidebar.classList.toggle('opened');
            overlay.classList.toggle('active');
            if (navSidebar.classList.contains('opened')) {
                enableNavLinkTabbing();
                disableMainLinkTabbing();
            } else {
                disableNavLinkTabbing();
                enableMainLinkTabbing();
            }
        });
        overlay.addEventListener('click', function() {
            const navSidebar = document.getElementById('nav-sidebar');
            navSidebar.classList.remove('opened');
            overlay.classList.remove('active');
        });

    }

    function initSidebarQuickFilter() {
        const options = [];
        const navSidebar = document.getElementById('nav-sidebar');
        if (!navSidebar) {
            return;
        }
        navSidebar.querySelectorAll('li a:first-of-type').forEach((container) => {
            options.push({title: container.innerHTML, node: container});
        });

        function checkValue(event) {
            let filterValue = event.target.value;
            if (filterValue) {
                filterValue = filterValue.toLowerCase();
            }
            if (event.key === 'Escape') {
                filterValue = '';
                event.target.value = ''; // clear input
            }
            let matches = false;
            for (const o of options) {
                let displayValue = '';
                if (filterValue) {
                    if (o.title.toLowerCase().indexOf(filterValue) === -1) {
                        displayValue = 'none';
                    } else {
                        matches = true;
                    }
                }
                // show/hide parent <li>
                o.node.parentNode.style.display = displayValue;
            }
            if (!filterValue || matches) {
                event.target.classList.remove('no-results');
            } else {
                event.target.classList.add('no-results');
            }
            sessionStorage.setItem('django.admin.navSidebarFilterValue', filterValue);
        }

        const nav = document.getElementById('nav-filter');
        nav.addEventListener('change', checkValue, false);
        nav.addEventListener('input', checkValue, false);
        nav.addEventListener('keyup', checkValue, false);

        const storedValue = sessionStorage.getItem('django.admin.navSidebarFilterValue');
        if (storedValue) {
            nav.value = storedValue;
            checkValue({target: nav, key: ''});
        }
    }
    window.initSidebarQuickFilter = initSidebarQuickFilter;
    initSidebarQuickFilter();
}
