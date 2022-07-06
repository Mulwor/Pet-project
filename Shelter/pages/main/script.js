const menu_for_navigation = document.querySelector('.menu_for_navigation')       // Ищет первый элемент и останавливает поиск, путем подключения его 
const list_for_navigation = document.querySelector('.list_for_navigation')
const navigation_link = document.querySelectorAll('.navigation_link') 
const navigation = document.querySelectorAll('.navigation')                                  // Ищет список всех элементов и добавляет его

menu_for_navigation.addEventListener('click', () => {                            // Метод addEventListener позволяет добавлять несколько обработчиков на одно событие
    list_for_navigation.classList.toggle('active')                               // elem.classList – это специальный объект с методами для добавления/удаления одного класса.
    menu_for_navigation.classList.toggle('active')                               /* toggle - Если класс у элемента отсутствует - добавляет, иначе - убирает. Когда вторым параметром 
                                                                                 передано false - удаляет указанный класс, а если true - добавляет.*/
    navigation_link[0].classList.toggle('active')
    navigation_link[1].classList.toggle('active')
    navigation_link[2].classList.toggle('active')
    navigation_link[3].classList.toggle('active')
    navigation.classList.toaggle('active')
})



