# 💎 DApp Template
Set up a modern decentralized web app quickly using React + Solidity.

Prerequisites: [Node](https://nodejs.org/en/download/) plus [Yarn](https://classic.yarnpkg.com/en/docs/install/) and [Git](https://git-scm.com/downloads)

# ⚡️ Quick Start

### Create a repo for your app
> Install from the command line ⚡️
 
```bash
$ gh repo create your-dapp-name --template='web3-os/dapp-template'

# Follow the prompts
> Public Y
> This will create 'your-dapp-name' in your current directory. Y
> Create a local project directory for username/your-dapp-name? Y

# Pull in the template code into your local repository that was just created
cd your-dapp-name
$ git pull origin main
```
### Start your local blockchain
> Install your packages and start your 👷‍ Hardhat chain

```bash
$ yarn install
$ yarn chain
```

### Start your Web/UI
> Open a second terminal window and start your 📱 frontend

```bash
$ yarn start
```

> Open a third terminal window and deploy your 🎨 contract

```bash
$ yarn deploy
```

# 📚 Instructions

🔏 Edit your smart contract `YourContract.sol` in `./contracts`

📝 Edit your frontend `App.jsx` in `./src/components`

💼 Edit your deployment scripts in `./scripts/deploy.js`

📱 Open http://localhost:3000 to see the app

# Workflow for making changes

🔏 Make edits to your smart contract(s) and compile the latest changes by running:

```bash
$ yarn compile
```

This will generate a new *Contract ABI* under `src/artifacts`, removing the need to update anything in your frontend.

📝 Deploy your new contract:

```bash
$ yarn deploy
```

# 🔭 Learning Solidity

📕 Read the docs: https://docs.soliditylang.org

📚 Go through each topic from [solidity by example](https://solidity-by-example.org) editing `YourContract.sol`

- [Primitive Data Types](https://solidity-by-example.org/primitives/)
- [Mappings](https://solidity-by-example.org/mapping/)
- [Structs](https://solidity-by-example.org/structs/)
- [Modifiers](https://solidity-by-example.org/function-modifier/)
- [Events](https://solidity-by-example.org/events/)
- [Inheritance](https://solidity-by-example.org/inheritance/)
- [Payable](https://solidity-by-example.org/payable/)
- [Fallback](https://solidity-by-example.org/fallback/)
