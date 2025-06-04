# React Example Project

This repository contains React project Minitask with React Hook Form, Global State Management(Redux) example. This project implements the creation of a cigarette survey form with 2 pages, the first page contains the cigarette survey form, the second page contains the cigarette survey results.

## Preview

![Preview](Screenshot.png)
![Preview](Screenshot2.png)

## How to Run

### Manual

1. Clone this project

```bash
git clone https://github.com/yusufbahtiarr/fgo24-react-redux.git
```

2. Enter the project directory

```bash
cd fgo24-react-redux
```

3. Install the Depedencies

```bash
npm install
```

4. Run the project

```bash
npm run dev
```

5. Project will running on http://localhost:8080

### With Docker

1. Clone this project

```bash
git clone https://github.com/yusufbahtiarr/fgo24-react-redux.git
```

2. Enter the project directory

```bash
cd fgo24-react-redux
```

3. Build image

```bash
docker build . -t reactredux:latest
```

4. Run image with docker

```bash
docker run -p 8080:80 -d reactredux:latest
```

5. Visit your app in http://localhost:8080

## Dependencies

To develop this app, we are using some dependencies:

- ReactJS
- TailwindCSS
- Redux Toolkit
- React Hook Form

And frontend tooling, the one and only:

- Vite

## How to Contribute

Please open PR to contributed to this project, i will review and merge if its needed.

## License

This project following MIT License

## Copyright

&copy; 2025 Kodacademy
