const tabs = (headerSelector, tabSelector, contentSelector, activeClass, showClass = 'show') => {
    const header = document.querySelector(headerSelector),
          tab = document.querySelectorAll(tabSelector),
          content = document.querySelectorAll(contentSelector);

    content.forEach(item => {
        item.classList.add('showAnim');
    });

    function hideTabContent() {
        content.forEach(item => {
            item.classList.remove(showClass);
            item.classList.add('hide');
        });

        tab.forEach(item => {
            item.classList.remove(activeClass);
        });
    }

    function showTabContent(i = 0) {
        content[i].classList.remove('hide');
        content[i].classList.add(showClass);
        tab[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();

    header.addEventListener('click', (e) => { //delegation of the tabs
        const target = e.target;
        if (target && (target.classList.contains(tabSelector.replace(/\./, "")) || 
        target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
            tab.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
};

export default tabs;