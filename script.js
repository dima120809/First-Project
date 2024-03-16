const imgElements = document.querySelectorAll('.info-coffe-item-img');
    const blockElements = document.querySelectorAll('.info-coffe-item-block');

    imgElements.forEach((imgElement, index) => {
        imgElement.addEventListener('click', function () {
            blockElements.forEach((block, i) => {
                if (i !== index) {
                    block.style.display = 'none';
                    imgElements[i].style.transform = 'rotate(0deg)';
                }
            });

            blockElements[index].style.display = (blockElements[index].style.display === 'none' || blockElements[index].style.display === '') ? 'flex' : 'none';
            imgElement.style.transform = imgElement.style.transform === 'rotate(180deg)' ? 'rotate(0deg)' : 'rotate(180deg)';
        });
    });

    const infoCoffeItems = document.querySelectorAll('.info-coffe-item-p');

    infoCoffeItems.forEach((item) => {
        item.addEventListener('click', function () {
            infoCoffeItems.forEach((otherItem) => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    otherItem.style.backgroundColor = '#f4f1eb';
                    otherItem.style.color = '#333d4b';
                }
            });

            item.classList.toggle('active');

            const isActive = item.classList.contains('active');

            item.style.backgroundColor = isActive ? '#0e8784' : '#f4f1eb';
            item.style.color = isActive ? 'white !important' : '#333d4b';
        });
    });




    




