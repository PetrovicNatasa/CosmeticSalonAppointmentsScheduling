$(document).ready(() => {
    
    let servicesArray = JSON.parse(localStorage.getItem('services'));

    let tableHtml = '';
    for (const service of servicesArray) {

        tableHtml += 
        `<tr id="${(service.category).replace(' ', '')}">
            <th colspan="4" class="text-center text-light textShadow">
                ${service.category}
            </th>
        </tr>`;
        let count = 0;
        for (const specificService of service.items) {
            tableHtml += 
            `<tr class="text-muted font-weight-bold">
                <td>${++count}.</td>
                <td>${specificService.name}</td>
                <td>
                    <a href="#" data-toggle="modal" data-target="#bookNow" class="text-light text-truncate font-weight-bold book">
                        BOOK NOW
                    </a>
                </td>
                <td>${specificService.price}</td>
            </tr>`;
        }
        
    }
    $('#tblPrice').append(tableHtml);

    function scrollToItem() {
        if(window.location.hash) {
            $('html, body').animate({
                scrollTop: $(window.location.hash).offset().top - 50
            }, 1000);
        }
    };

    scrollToItem();

    $('.navbarLink').click(function(e){
        e.stopPropagation();        
    });

    $(window).on('hashchange', function(e){
        scrollToItem();
        e.stopPropagation();        
    });

    
});
