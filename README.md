# Style guide проекта

## Основные моменты по работе с Git

- **Порядок веток**: main -> dev <- features/xxx.
    - Разработка всех фичей, исправление багов ведется в ветках feature/<id задачи> и bug/<id задачи>
    - После создается PR в ветку dev для дальнейшего слияния
- **Коммиты**: Использовать commit lint для правильного построения
    - Разрешенные префиксы находятся в файле commitlint.config.cjs
        - пример`feat: new component`.
- **Ссылки**: всегда добавляйте ссылки на задачи в ClickUp и Deploy в ваши PR и краткое описание выполненной задачи.
- **Label**: Ставить label в зависимости от статуса PR (need a review, reviewed)


## Основные моменты по структуре проекта

- **Import**: Использование Алиасов для импортов файлов.
- **Организация файловой структуры**: (https://github.com/mkrivel/structure).
- **Interface**: использовать Interface для типизирования переданных в компонент пропсов.
- **Props**: при передаче в компонент более 3х пропсов, они деструктуризируются в самом компоненте:
    export default function CategoryCard(category: CategoryCardProps) {
          const { title, description, imgUrl, isSelected } = category;
          ...
      }
- **Стили**: для всех стилей используется единая система измерений:
    - px - для точно задания размерности
    - % - для относительного задания размерности
    - Для задания стилей MUI компонентов задается файл styled где в объектах описываются стили каждого компонента:
      - export const metaInfoTextContainer = {
            display: theme.display.flex,
            flexDirection: theme.display.flexDirection.column,
            alignItems: theme.display.align.start,
        };
    - все константы стилей находятся в файле app/styles/theme.ts
    - в коде компонента стили применяются следующим образом:
      -  <Box {...style.metaInfoTextContainer}>...</Box>
- **Магические числа**: Все магические числа выносятся в отдельный файл:
    - файл _constants.scss для констант тем
    - папка constants для констант приложения
- **Mixin**: Часто используемые стили выносим в миксины
    - файл с миксинами: _mixins.scss.
- **Export**: Все компоненты создаются и экспортируются таким образом:
    - export default function ComponentName() { ... };
    - константы и функции из служебных папок utils, helper и тд экспортируются в файл index.tsx лежащий в соответственной папке и уже оттуда экспортируется в другие файлы
