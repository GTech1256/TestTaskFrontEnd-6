# Тестовое &middot; [![Build Status](https://travis-ci.com/GTech1256/TestTaskFrontEnd-6.svg?branch=master)](https://travis-ci.com/GTech1256/TestTaskFrontEnd-6)



``` notepad
Проверочное задание на Full Stack

Вывести график изменения погоды по дням для двух городов, соответственно должен быть выбор города и периода. Данные нужно самостоятельно сгенерировать. Период времени на ваш выбор.
Достаточно параметра: градус Цельсия.

Использовать стэк:
Бэкенд - Node.js, PostgreSQL, Sequelize, Express
Фронтенд - Vue.js, Chart.js (vue-chart.js), Axios

Результат:
- работающее приложение для демонстрации
- проект в Git c настроенным CI процессом на сервер и внятным описанием

```

## Временно

В проекте есть недочеты, которые возможно будут устранены.
- [ ] Вынести настройки БД в `.env`
- [ ] Поправить подключение к БД в тестах
- [ ] Поправить тесты на фронтэнде
- [x] Разобраться с развертыванием на *Heroku*
- [ ] Подружить миграции с TS
- [ ] Написать больше тестов

## Обязательно иметь

- [Node v7.6+](https://nodejs.org/en/download/current/)
- [Yarn](https://yarnpkg.com/en/docs/install)

## Инстукции

### Установка зависимостей

```bash
yarn
```

#### Установка переменных окружения

```bash
cp .env.example .env
```

## Локальный запуск

- Сервера

```bash
yarn dev:server
```

- Клиентской части

```bash
yarn dev:front
```

## Запуск продакшн сервера

```bash
yarn start
```

## Lint

```bash
# lint code with ESLint
yarn lint

# try to fix ESLint errors
yarn lint:fix

# lint and watch for changes
yarn lint:watch
```

## Тестирования

```bash
# run all tests with Mocha
yarn test

# run unit tests
yarn test:unit

# run integration tests
yarn test:integration

# run all tests and watch for changes
yarn test:watch

# open nyc test coverage reports
yarn coverage
```

## Validate

```bash
# run lint and tests
yarn validate
```

## Logs

```bash
# show logs in production
pm2 logs
```

## Documentation

```bash
# generate and open api documentation
yarn docs
```
