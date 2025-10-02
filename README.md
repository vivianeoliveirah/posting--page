# ✍️ Posting Page: Simulador de Criação de Posts

![Badge de Status](https://img.shields.io/badge/Status-Concluído-success)
![Badge de Tecnologias](https://img.shields.io/badge/Tecnologias-HTML%20|%20CSS%20|%20JavaScript-blue)
![Badge de API](https://img.shields.io/badge/API-JSONPlaceholder-informational)

---

## 📖 Sobre o Projeto

O **Posting Page** é um projeto didático que simula a experiência de criação e envio de conteúdo em uma rede social ou blog. Ele demonstra o uso prático do **JavaScript** para:

1.  Capturar dados de um formulário.
2.  Realizar uma requisição assíncrona (`POST`) usando a **Fetch API**.
3.  Tratar a resposta (`JSON`) de uma API externa (JSONPlaceholder).
4.  Renderizar a prévia do retorno na interface, atualizando o status do usuário em tempo real.

### 🎨 Destaque da Paleta de Cores

O projeto utiliza uma paleta de cores acolhedora, combinando um tom de **Marrom Café** (`#964b00`) como cor principal e um **Pastel Creme** (`#fcf7f1`) como fundo, criando uma experiência visual suave e elegante.

---

## 🚀 Como Executar

Para rodar este projeto em sua máquina local, siga os passos abaixo:

1.  **Clone o repositório** para a sua máquina:
    ```bash
    git clone [https://github.com/SEU_USUARIO/posting--page.git](https://github.com/SEU_USUARIO/posting--page.git)
    ```
2.  **Navegue até a pasta** do projeto:
    ```bash
    cd posting--page
    ```
3.  **Abra no Navegador:**
    * Simplesmente clique duas vezes no arquivo **`index.html`** para abri-lo.
    * **(Recomendado)** Se estiver usando o VS Code, utilize a extensão **Live Server** para rodar em um servidor local e obter o recarregamento automático.

---

## ⚙️ Tecnologias e API

| Recurso | Descrição |
| :--- | :--- |
| **HTML5** | Estrutura semântica do formulário e das seções de prévia. |
| **CSS3** | Estilização completa, *design* responsivo e transições (`:hover`). |
| **JavaScript (ES6+)** | Lógica principal: manipulação do DOM, tratamento do evento `submit` e controle de estado. |
| **Fetch API** | Usada para realizar a chamada `POST` assíncrona. |
| **JSONPlaceholder** | API de testes usada como *endpoint* de simulação (`/posts`). |

---

## 🎯 Desafios de Implementação

* **Requisição Assíncrona:** Gerenciar a promessa da `fetch()` usando a sintaxe `async/await`.
* **Tratamento de Erros:** Implementação do bloco `try...catch` para lidar com falhas de rede ou da API.
* **UX e Acessibilidade:** Uso de atributos `aria-live` e elementos de `role="status"` para informar o usuário sobre o resultado do envio.

---

## 👨‍💻 Autor(a)

Feito com ☕ por **Viviane Oliveira Soares**
