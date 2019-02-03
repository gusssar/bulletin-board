# «Доска объявлений»
***
Проект представляет собой форму отправки объявления (CRUD-приложение).
### Содержит следующие поля ввода:
  * Заголовок. Не более 140 символов. Обязательное поле.
  * Текст объявления. Не более 300 символов.
  * Телефон. Формат заполнения: "+7 (xxx) xxx-xx-xx". Обязательное поле.
  * Выбор города.
  * Прикреплённое фото. *[в разработке]*

### Структура проекта
```
- public/
    - favicon.ico
    - index.html
    - manifest.json
- src/
    - components/
        - AdItem/
            - src/
                - *.png
            - index.css
            - index.js
        - AdList/
            - index.js
        - AdSubmit/
            - src/
                - *.png
            - index.css
            - index.js
        - App/
            - index.css
            - index.js
    - fonts/
        - SourceSansPro.tff
    - index.css
    - index.js
- .gitignore
- package.json
- package-lock.json 
- README.md
- yarn.lock
```
### Особенности
Приложение разработанно с использованием **React.js**. Введёные данные хранятся в localStorage. Прописана валидация для каждого ***input***:
##### Для "Заголовка":
- Выставлено огранечение в 140 символов.
- При расфокусе с пустого поля "флажок" меняется на **"Заполните поле"**.
- При расфокусе с заполненного поля "флажок" меняется на **"Заполненно"**.
- При попытке "подаче объявления" пустого поля выделяет его **красным** цветом
##### Для "Текста объявления":
- Выставлено огранечение в 300 символов.
##### Для "Телефона":
- Выставлено огранечение на ввод **только цифр**.
- При расфокусе с не полностью заполненного поля "флажок" меняется на **"Заполните поле"**.
- При расфокусе с запоненого поля "флажок" меняется на **"Заполненно"**.
- При попытке "подаче объявления" пустого поля выделяет его **красным** цветом
##### Для "Прикрепите фото":
- Выставлено огранечение выбора загрузки **только изображений**.

Объявления выводится от более новых (*сверху*) к более старым (*снизу*). Реализована возможность **удаления** каждого объявления по отдельности.

### Активация сервера

В директории программы необходимо запустить терминал и ввести `npm start`. Приложение запустится и будет доступно по адресу: [http://localhost:3000](http://localhost:3000).

>Приложение протестировано на:
>Google Chrome v.71.0.3578.98
>Microsoft Edge v.42.17134.1.0
>Firefox Quantum v.65.0
>Safari v.12.0