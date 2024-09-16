# Smart Contracts

## Smart Contracts in General

A smart contract is a self-executing program that automates the actions required in a digital agreement. Once completed, the transactions are trackable and irreversible. Smart contracts permit trusted transactions and agreements among disparate, anonymous parties without the need for a central authority, legal system, or external enforcement mechanism.

## Casper Smart Contracts

Casper smart contracts can be implemented in any programming language that compiles to [Wasm](../concepts/glossary/W.md#webassembly), which can be installed and executed on-chain using [transactions](../concepts/glossary/T.md#transaction). Most documentation examples and the Casper system contracts are written in Rust. You can find a guide to writing a simple, smart contract in Rust [here](../developers/writing-onchain-code/simple-contract.md).

## Session Code

Session code is the simplest logic one can execute on a Casper network. It is essential because it is often used to trigger contract logic stored on-chain. Entry points in a contract provide access to the contract code installed in global state. Either [session code](../developers/writing-onchain-code/contract-vs-session.md#what-is-session-code) or another smart contract may call these entry points. Understand when you would use session code over contract code [here](../developers/writing-onchain-code/contract-vs-session.md).

## Factory Pattern

From node version 2.0, Casper networks provide host-side support for the factory implementations. When the APIs were updated to support this pattern, the focus was on seamless integration with existing Wasm on the Casper blockchain. Contracts already installed in global state will not be affected by these updates. The corresponding [Casper Enhancement Proposal](https://github.com/casper-network/ceps/pull/86/files) provides additional details. Also, you can learn to write a simple contract with factory entry points by following the [The Factory Pattern](../developers/writing-onchain-code/factory-pattern.md) developer guide.

### Further Reading

- [Writing Contracts](../developers/writing-onchain-code/simple-contract.md)
- [Sending a Transaction](../developers/cli/sending-transactions.md)
- [Installing Smart Contracts](../developers/cli/installing-contracts.md)
- [Calling Smart Contracts](../developers/writing-onchain-code/calling-contracts.md)
- [Calling Smart Contracts using the Casper Client](../developers/cli/calling-contracts.md)
- [Smart Contracts and Session Code](../developers/writing-onchain-code/contract-vs-session.md)
- [The Factory Pattern](../developers/writing-onchain-code/factory-pattern.md)
