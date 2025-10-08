# 🧩 Task Manager API

API REST desenvolvida em **Node.js + TypeScript** utilizando **Prisma ORM** e **PostgreSQL** para gerenciamento de tarefas (Tasks) e usuários.  
O projeto foi estruturado seguindo princípios de **Clean Architecture**, **injeção de dependência** e **validação com Zod**.

---

## 🚀 Tecnologias

- **Node.js**
- **TypeScript**
- **Express**
- **Prisma ORM**
- **Zod**
- **Docker & Docker Compose**
- **PostgreSQL**

---

## 📦 Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina:

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Git](https://git-scm.com/)

---

## ⚙️ Configuração do ambiente

1. **Clone o repositório**

```bash
git clone git@github.com:willianKsouza/task-manager-api-node.git
cd task-manager-api-node
npm install

O projeto utiliza Docker Compose para criar e gerenciar o container do banco PostgreSQL.

docker compose up -d

npx prisma migrate dev

npm run dev

Você pode usar Insomnia, Postman para testar a API
