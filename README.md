# 🏢 Sistema de Gestão Empresarial - Umbrella Corporation

<div align="center">

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-ISC-blue?style=for-the-badge)

**Sistema completo de gestão empresarial via CLI para controle de dados cadastrais, funcionários e cálculos trabalhistas**

[Sobre](#-sobre) • [Funcionalidades](#-funcionalidades) • [Instalação](#-instalação) • [Como Usar](#-como-usar) • [Estrutura](#-estrutura-do-projeto) • [Tecnologias](#-tecnologias) • [Autor](#-autor)

</div>

---

## 📋 Sobre

O **Sistema de Gestão Empresarial** é uma aplicação CLI (Command Line Interface) desenvolvida em Node.js que permite gerenciar de forma completa e intuitiva todos os aspectos de uma empresa, incluindo:

- 📊 Gestão de dados cadastrais da empresa
- 👥 Controle de funcionários e departamentos
- 💰 Cálculos trabalhistas (INSS, IRRF, FGTS, Salário Líquido)
- 📈 Metas anuais e áreas de atuação
- 📋 Folha de pagamento detalhada

O sistema foi desenvolvido como projeto educacional para o **Módulo 5** do curso Full Stack do SENAI/SC, demonstrando conceitos de:

- Modularização de código
- Manipulação de dados estruturados
- Validação de entrada de usuário
- Lógica de negócio complexa
- Interface de linha de comando interativa

---

## ✨ Funcionalidades

### 1️⃣ Informações do Software

Exibe detalhes completos sobre o sistema, funcionalidades disponíveis e informações do autor.

### 2️⃣ Calculadora de Salário Líquido

Calculadora completa que processa:

- **INSS** - Cálculo progressivo com faixas e deduções
- **IRRF** - Imposto de Renda Retido na Fonte
- **Salário Líquido** - Valor final após descontos
- **FGTS** - Fundo de Garantia (8% sobre salário bruto)

Fornece demonstrativo detalhado com fórmulas e valores.

### 3️⃣ Edição de Dados Básicos da Empresa

Permite atualizar:

- Nome Fantasia
- Razão Social
- CNPJ
- Inscrição Estadual
- Data de Fundação

### 4️⃣ Edição de Endereço

Gerenciamento completo do endereço empresarial:

- Logradouro, Número, Complemento
- Bairro, Cidade, Estado
- CEP

### 5️⃣ Edição de Dados de Contato

Atualização de informações de contato:

- E-mail corporativo
- Telefone fixo
- Celular corporativo

### 6️⃣ Edição de Metas Anuais

Definição e acompanhamento de metas financeiras mensais (Janeiro a Dezembro) com:

- Valores individuais por mês
- Cálculo automático do total anual

### 7️⃣ Edição de Áreas de Atuação

Cadastro das principais áreas de negócio da empresa.

### 8️⃣ Exibir Informações da Empresa

Visualização completa e formatada de todos os dados cadastrais:

- Dados básicos
- Áreas de atuação
- Metas anuais com totalizador
- Endereço completo
- Informações de contato

### 9️⃣ Cadastrar Novo Funcionário

Registro completo de funcionários com:

- Dados pessoais (Nome, Cargo, Data de Admissão)
- Departamento
- Salário bruto
- **Cálculo automático** de INSS, IRRF, Salário Líquido e FGTS

### 🔟 Exibir Quadro de Funcionários

Lista completa de todos os colaboradores cadastrados com:

- Informações detalhadas de cada funcionário
- Destaque para primeiro e último funcionário
- Total de colaboradores

### 1️⃣1️⃣ Exibir Folha de Pagamento

Relatório completo da folha de pagamento contendo:

- **Detalhamento por funcionário:**

  - ID, Nome, Cargo
  - Salário Bruto
  - Descontos (INSS e IRRF)
  - Salário Líquido
  - FGTS

- **Resumo Consolidado:**
  - Total de Salários Brutos
  - Total de Descontos (INSS e IRRF)
  - Total Líquido a Pagar
  - Total de FGTS Depositado

### 0️⃣ Sair

Encerra o sistema de forma segura.

---

## 🚀 Instalação

### Pré-requisitos

- **Node.js** (versão 14 ou superior)
- **npm** (gerenciador de pacotes do Node.js)

### Passo a passo

1. **Clone o repositório:**

```bash
git clone https://github.com/icaroregis/projeto-final-senai-modulo-1.git
cd projeto-web-fullstack-modulo-05
```

2. **Instale as dependências:**

```bash
npm install
```

3. **Execute a aplicação:**

```bash
node main.js
```

---

## 💻 Como Usar

### Navegação no Sistema

1. Ao iniciar, você verá a mensagem de boas-vindas e o menu principal
2. Digite o número da opção desejada (0 a 11)
3. O sistema valida automaticamente sua entrada
4. Após cada operação, você pode retornar ao menu principal
5. Para sair, digite `0`

### Exemplo de Uso - Calculadora de Salário

```
============ Menu de Opções ============
1. Informações do Software
2. Calculadora de Salário Líquido
...
Escolha uma opção (0 a 11): 2

Digite o salário bruto: R$ 5000

=======================================================
�� Demonstrativo de pagamento 🧮
=======================================================

💰 Salário bruto:        R$ 5000.00
🔻 INSS descontado:      R$ 606.59
🔻 IRRF descontado:      R$ 356.47
--------------------------------------------------------
💵 Salário líquido:      R$ 4036.94
🏦 FGTS depositado:      R$ 400.00
=======================================================
```

### Exemplo de Uso - Cadastro de Funcionário

```
Escolha uma opção (0 a 11): 9

Digite o nome do funcionário: Carlos Oliveira
Digite o cargo do funcionário: Analista de Dados
Digite o salário do funcionário: R$ 7000
Digite a data de admissão do funcionário (DD/MM/AAAA): 15/11/2025
Digite o departamento do funcionário: TI

Funcionário Cadastrado com sucesso!
```

O sistema calcula **automaticamente** INSS, IRRF, Salário Líquido e FGTS para o novo funcionário.

---

## 📁 Estrutura do Projeto

```
projeto-web-fullstack-modulo-05/
│
├── main.js                          # Arquivo principal - Loop do menu e navegação
├── package.json                     # Configurações e dependências do projeto
├── debug.js                         # Arquivo auxiliar para debugging
│
├── types/                           # Tipos e estruturas de dados
│   └── empresa.js                   # Objeto central com dados da empresa
│
└── utils/                           # Módulos utilitários (funções)
    ├── boasVindas.js               # Mensagem de boas-vindas
    ├── exibirMenu.js               # Exibição do menu principal
    ├── validarOpcoes.js            # Validação de entrada do usuário
    ├── sobreSoftware.js            # Informações sobre o software
    │
    ├── calcularInss.js             # Cálculo do INSS (faixas progressivas)
    ├── impostoRenda.js             # Cálculo do IRRF
    ├── calcularFgts.js             # Cálculo do FGTS (8%)
    ├── salarioLiquido.js           # Cálculo do salário líquido
    ├── calculadoraSalario.js       # Demonstrativo completo de pagamento
    │
    ├── mostrarInformacoesEmpresa.js    # Exibição de dados da empresa
    ├── quadroDeFuncionarios.js         # Lista de funcionários
    └── folhaPagementoPorFuncionario.js # Folha de pagamento detalhada
```

### Descrição dos Módulos Principais

#### 📌 `main.js`

Arquivo principal que contém:

- Loop de menu interativo
- Sistema de navegação com `switch-case`
- Integração de todos os módulos
- Controle de fluxo do aplicativo

#### 📌 `types/empresa.js`

Objeto centralizado contendo:

- Dados cadastrais da empresa
- Endereço e contato
- Áreas de atuação
- Metas anuais (12 meses)
- Array de funcionários com todos os cálculos

#### 📌 Módulos de Cálculo (`utils/`)

**`calcularInss.js`**

- Implementa cálculo progressivo do INSS
- Utiliza faixas salariais e deduções
- Valor máximo limitado para salários altos

**`impostoRenda.js`**

- Cálculo do IRRF com 5 faixas
- Alíquotas progressivas e deduções
- Isenção para salários abaixo de R$ 2.428,80

**`calcularFgts.js`**

- Cálculo simples: 8% do salário bruto
- Valor depositado pelo empregador

**`salarioLiquido.js`**

- Integra INSS e IRRF
- Fórmula: Salário Bruto - INSS - IRRF

**`calculadoraSalario.js`**

- Demonstrativo visual completo
- Exibe todos os valores calculados
- Inclui fórmula explicativa

#### 📌 Módulos de Interface (`utils/`)

**`validarOpcoes.js`**

- Validação robusta com regex
- Loop até entrada válida
- Mensagens de erro personalizadas

**`quadroDeFuncionarios.js`**

- Lista formatada de todos os colaboradores
- Destaque para primeiro e último
- Total de funcionários

**`folhaPagementoPorFuncionario.js`**

- Detalhamento individual por funcionário
- Resumo consolidado com totalizadores
- Uso de `reduce()` para agregações

**`mostrarInformacoesEmpresa.js`**

- Template formatado com emojis
- Exibição de todas as seções
- Cálculo automático de total anual de metas

---

## 🛠 Tecnologias

| Tecnologia                                                                                               | Descrição                                     |
| -------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)        | Runtime JavaScript para execução do sistema   |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) | Linguagem de programação principal (ES6+)     |
| ![readline-sync](https://img.shields.io/badge/readline--sync-1.4.10-blue?style=flat)                     | Biblioteca para entrada de dados via terminal |

### Conceitos Aplicados

- ✅ **ES6 Modules** - Importação/exportação de módulos
- ✅ **Arrow Functions** - Sintaxe moderna de funções
- ✅ **Template Literals** - Strings multilinha e interpolação
- ✅ **Destructuring** - Desestruturação de objetos
- ✅ **Array Methods** - `forEach()`, `reduce()`, `map()`
- ✅ **Switch-Case** - Estrutura de decisão múltipla
- ✅ **Regular Expressions** - Validação de entrada
- ✅ **Higher-Order Functions** - Funções de alta ordem
- ✅ **Modularização** - Separação de responsabilidades

---

## 📊 Regras de Negócio

### Cálculo do INSS (2024)

| Faixa Salarial            | Alíquota        | Dedução   |
| ------------------------- | --------------- | --------- |
| Até R$ 1.518,00           | 7,5%            | R$ 0,00   |
| R$ 1.518,01 a R$ 2.793,88 | 9%              | R$ 22,77  |
| R$ 2.793,89 a R$ 4.190,83 | 12%             | R$ 106,59 |
| R$ 4.190,84 a R$ 8.157,41 | 14%             | R$ 190,40 |
| Acima de R$ 8.157,41      | Teto: R$ 951,62 | -         |

### Cálculo do IRRF (2024)

| Faixa Salarial            | Alíquota | Dedução   |
| ------------------------- | -------- | --------- |
| Até R$ 2.428,80           | Isento   | R$ 0,00   |
| R$ 2.428,81 a R$ 2.826,65 | 7,5%     | R$ 182,16 |
| R$ 2.826,66 a R$ 3.751,05 | 15%      | R$ 394,16 |
| R$ 3.751,06 a R$ 4.664,68 | 22,5%    | R$ 675,49 |
| Acima de R$ 4.664,68      | 27,5%    | R$ 908,73 |

### FGTS

- **Alíquota fixa:** 8% do salário bruto
- **Depositado pelo empregador** (não descontado do funcionário)

### Salário Líquido

```
Salário Líquido = Salário Bruto - INSS - IRRF
```

---

## 🎯 Casos de Uso

### 1. Onboarding de Novo Funcionário

```
Menu → Opção 9 (Cadastrar Funcionário)
→ Preencher dados
→ Sistema calcula automaticamente todos os valores trabalhistas
→ Funcionário aparece em Opção 10 e 11
```

### 2. Cálculo Rápido de Salário

```
Menu → Opção 2 (Calculadora)
→ Informar salário bruto
→ Recebe demonstrativo completo com todos os descontos
```

### 3. Atualização de Dados da Empresa

```
Menu → Opções 3 a 7
→ Escolher categoria (Básicos, Endereço, Contato, Metas, Áreas)
→ Atualizar informações
→ Verificar em Opção 8 (Exibir Informações)
```

### 4. Geração de Folha de Pagamento

```
Menu → Opção 11
→ Visualizar detalhamento por funcionário
→ Conferir resumo consolidado
→ Total líquido a pagar + FGTS
```

---

## 🔄 Fluxo de Dados

```
main.js (Loop Principal)
    ↓
boasVindas() → exibirMenu() → validarOpcoes()
    ↓
Switch-Case (Opção escolhida)
    ↓
┌─────────────────────────────────────────────────┐
│  Opções 3-7: Edição de Dados                   │
│  → Atualiza objeto 'empresa'                    │
└─────────────────────────────────────────────────┘
    ↓
┌─────────────────────────────────────────────────┐
│  Opção 9: Cadastro de Funcionário              │
│  → calcularInss()                               │
│  → calcularImpostoRenda()                       │
│  → calcularSalarioLiquido()                     │
│  → calcularFgts()                               │
│  → Push no array empresa.funcionarios           │
└─────────────────────────────────────────────────┘
    ↓
┌─────────────────────────────────────────────────┐
│  Opção 11: Folha de Pagamento                  │
│  → Itera empresa.funcionarios                   │
│  → Reduce para totalizadores                    │
│  → Exibe demonstrativo completo                 │
└─────────────────────────────────────────────────┘
```

---

## 🧪 Exemplos de Dados

### Empresa Padrão (Umbrella Corporation)

```javascript
{
  nome: 'Umbrella Corporation',
  razaoSocial: 'Umbrella Corporation Ltda',
  cnpj: '12.345.678/0001-90',
  inscricaoEstadual: '123.456.789.123',
  dataFundacao: '1998-03-15',

  areasAtuacao: [
    'Desenvolvimento de Software',
    'Consultoria em TI',
    'Serviços de Nuvem',
    'Cibersegurança',
    'Inteligência Artificial',
    'Pesquisa e Desenvolvimento'
  ],

  funcionarios: [
    {
      nome: 'Alice Silva',
      cargo: 'Desenvolvedora Fullstack',
      salarioBruto: 8500,
      departamento: 'TI'
    },
    {
      nome: 'Bruno Costa',
      cargo: 'Analista de Segurança',
      salarioBruto: 6500,
      departamento: 'Segurança'
    }
  ]
}
```

---

## 📝 Validações Implementadas

### Entrada de Opções do Menu

- ✅ Aceita apenas números de 0 a 11
- ✅ Rejeita letras, caracteres especiais
- ✅ Loop até entrada válida
- ✅ Mensagens de erro descritivas

### Entrada de Valores Monetários

- ✅ Conversão automática para número com `parseFloat()`
- ✅ Formatação com 2 casas decimais em exibições

### Confirmação de Ações

- ✅ Uso de `keyInYNStrict()` para confirmações Sim/Não
- ✅ Retorno ao menu após cada operação

---

## 🎨 Interface Visual

O sistema utiliza emojis e formatação para melhorar a experiência do usuário:

- 🏢 Empresa
- 👥 Funcionários
- 💰 Valores monetários
- 🧮 Cálculos
- 📊 Relatórios
- ✅ Sucesso
- ❌ Erro
- 📋 Listas
- 📞 Contato
- 📍 Localização

---

## 🚧 Possíveis Melhorias Futuras

- [ ] Persistência de dados (banco de dados ou arquivos JSON)
- [ ] Exportação de relatórios em PDF/Excel
- [ ] Sistema de login e permissões
- [ ] Interface web (React/Vue)
- [ ] API REST para integração
- [ ] Gráficos e dashboards
- [ ] Histórico de alterações
- [ ] Backup automático
- [ ] Cálculo de férias e 13º salário
- [ ] Gestão de ponto eletrônico

---

## 👨‍💻 Autor

**Ícaro Régis de Almeida**

- GitHub: [@icaroregis](https://github.com/icaroregis)
- Projeto: [projeto-final-senai-modulo-1](https://github.com/icaroregis/projeto-final-senai-modulo-1)

---

## 📄 Licença

Este projeto está sob a licença **ISC**.

---

## 🙏 Agradecimentos

- **SENAI** - Formação Full Stack
- **Comunidade Node.js** - Ferramentas e recursos
- **readline-sync** - Biblioteca essencial para CLI

---

<div align="center">

**Desenvolvido com ❤️ por Ícaro Régis de Almeida para fins educacionais e de estudo**

[⬆ Voltar ao topo](#-sistema-de-gestão-empresarial---umbrella-corporation)

</div>
