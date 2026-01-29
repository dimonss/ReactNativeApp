# 🇬🇧 English Version

---

# 📝 React Native TODO App

A test mobile application for task management, built with **React Native** using **Expo**.

---

## 🚀 Technologies

- **React Native** 0.81.5
- **Expo** ~54.0
- **React Navigation** 7.x (Native Stack)
- **AsyncStorage** for local data storage

---

## 📁 Project Structure

```
reactNative/
├── App.js                  # Entry point, navigation configuration
├── index.js                # App registration
├── package.json            # Dependencies and scripts
│
├── screens/                # Application screens
│   ├── HomeScreen.js       # Main screen with task list
│   └── TodoDetailScreen.js # Task detail view/editing
│
├── components/             # Reusable components
│   ├── AddTodo.js          # Add task form
│   ├── TodoItem.js         # Task list item
│   └── TodoList.js         # Task list
│
├── styles/                 # Styles
│   └── colors.js           # Color palette
│
├── assets/                 # Static resources (icons, images)
├── android/                # Android native code
├── ios/                    # iOS native code
└── dist/                   # Web build
```

---

## ⚙️ Installation

```bash
# Clone repository
git clone <repository-url>
cd reactNative

# Install dependencies
npm install
```

---

## 📱 Running on Platforms

### Expo Go (Development)

```bash
# Start dev server
npm start

# With dev-client
npm run dev
```

Scan the QR code in the **Expo Go** app (iOS/Android).

---

### 🤖 Android

```bash
# Emulator
npm run android

# Physical device
npm run android:device

# Release build
npm run android:release

# Generate APK
npm run android:apk
```

---

### 🍎 iOS

> ⚠️ Requires macOS and Xcode

```bash
# Simulator
npm run ios

# Physical device
npm run ios:device

# Release build
npm run ios:release
```

---

### 🌐 Web

```bash
# Run in browser
npm run web

# Production build
npm run web:build
```

---

## 🏗️ Build (EAS Build)

```bash
# Generate native code
npm run prebuild

# Clean generation (removes android/ios folders)
npm run prebuild:clean

# Build via EAS
npm run build:android    # Android
npm run build:ios        # iOS
npm run build:all        # All platforms
```

---

## 📄 License

Copyright (c) 2026 Chalysh Dmitrii

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

MIT License — See above for full license text.

<br><br><br><br>

# 📝 React Native TODO App

Тестовое мобильное приложение для управления задачами, построенное на **React Native** с использованием **Expo**.

---

## 🚀 Технологии

- **React Native** 0.81.5
- **Expo** ~54.0
- **React Navigation** 7.x (Native Stack)
- **AsyncStorage** для локального хранения данных

---

## 📁 Структура проекта

```
reactNative/
├── App.js                  # Точка входа, конфигурация навигации
├── index.js                # Регистрация приложения
├── package.json            # Зависимости и скрипты
│
├── screens/                # Экраны приложения
│   ├── HomeScreen.js       # Главный экран со списком задач
│   └── TodoDetailScreen.js # Детальный просмотр/редактирование задачи
│
├── components/             # Переиспользуемые компоненты
│   ├── AddTodo.js          # Форма добавления задачи
│   ├── TodoItem.js         # Элемент списка задач
│   └── TodoList.js         # Список задач
│
├── styles/                 # Стили
│   └── colors.js           # Цветовая палитра
│
├── assets/                 # Статические ресурсы (иконки, изображения)
├── android/                # Нативный код Android
├── ios/                    # Нативный код iOS
└── dist/                   # Web-сборка
```

---

## ⚙️ Установка

```bash
# Клонирование репозитория
git clone <repository-url>
cd reactNative

# Установка зависимостей
npm install
```

---

## 📱 Запуск на платформах

### Expo Go (разработка)

```bash
# Запуск dev-сервера
npm start

# С dev-client
npm run dev
```

Отсканируйте QR-код в приложении **Expo Go** (iOS/Android).

---

### 🤖 Android

```bash
# Эмулятор
npm run android

# Физическое устройство
npm run android:device

# Release-сборка
npm run android:release

# Генерация APK
npm run android:apk
```

---

### 🍎 iOS

> ⚠️ Требуется macOS и Xcode

```bash
# Симулятор
npm run ios

# Физическое устройство
npm run ios:device

# Release-сборка
npm run ios:release
```

---

### 🌐 Web

```bash
# Запуск в браузере
npm run web

# Сборка для продакшена
npm run web:build
```

---

## 🏗️ Сборка (EAS Build)

```bash
# Генерация нативного кода
npm run prebuild

# Чистая генерация (удаляет android/ios папки)
npm run prebuild:clean

# Сборка через EAS
npm run build:android    # Android
npm run build:ios        # iOS
npm run build:all        # Все платформы
```

---

## 📄 Лицензия
Авторские права (c) 2026 Чалыш Дмитрий

Настоящим предоставляется разрешение, бесплатно, любому лицу, получившему копию
данного программного обеспечения и связанных с ним файлов документации («Программное обеспечение»), использовать
Программное обеспечение без ограничений, включая, помимо прочего, права на
использование, копирование, модификацию, объединение, публикацию, распространение, сублицензирование и/или продажу
копий Программного обеспечения, а также разрешать лицам, которым предоставляется Программное обеспечение,
делать это при соблюдении следующих условий:

Вышеуказанное уведомление об авторских правах и данное уведомление о разрешении должны быть включены во все
копии или существенные части Программного обеспечения.

ПРОГРАММНОЕ ОБЕСПЕЧЕНИЕ ПРЕДОСТАВЛЯЕТСЯ «КАК ЕСТЬ», БЕЗ КАКИХ-ЛИБО ГАРАНТИЙ, ЯВНЫХ ИЛИ
ПОДРАЗУМЕВАЕМЫХ, ВКЛЮЧАЯ, НО НЕ ОГРАНИЧИВАЯСЬ ​​ГАРАНТИЯМИ ТОВАРНОЙ ПРИГОДНОСТИ,
ПРИГАРАНТИИ ПРИГОДНОСТИ ДЛЯ ОПРЕДЕЛЕННОЙ ЦЕЛИ И ОТСУТСТВИЯ НАРУШЕНИЯ ПРАВ. НИ ПРИ КАКИХ ОБСТОЯТЕЛЬСТВАХ АВТОРЫ ИЛИ ПРАВООБЛАДАТЕЛИ НЕ НЕСУТ ОТВЕТСТВЕННОСТИ ЗА ЛЮБЫЕ ПРЕТЕНЗИИ, УЩЕРБ ИЛИ ДРУГУЮ ОТВЕТСТВЕННОСТЬ, ВОЗНИКАЮЩИЕ В РЕЗУЛЬТАТЕ ДОГОВОРА, ДЕЛИКТА ИЛИ ИНЫМ ОБРАЗОМ, В СВЯЗИ С ПРОГРАММНЫМ ОБЕСПЕЧЕНИЕМ ИЛИ ЕГО ИСПОЛЬЗОВАНИЕМ.

Лицензия MIT — Полный текст лицензии см. выше.

---
