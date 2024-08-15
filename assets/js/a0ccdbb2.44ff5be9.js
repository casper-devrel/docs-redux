"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[9460],{2407:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>a,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var n=s(4848),r=s(8453);const i={title:"The Chainspec"},d="The Blockchain Specification {#the-chain-specification}",c={id:"operators/setup-network/chain-spec",title:"The Chainspec",description:"the-chain-specification}",source:"@site/docs/operators/setup-network/chain-spec.md",sourceDirName:"operators/setup-network",slug:"/operators/setup-network/chain-spec",permalink:"/docs-redux/operators/setup-network/chain-spec",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"The Chainspec"},sidebar:"operators",previous:{title:"Genesis",permalink:"/docs-redux/operators/setup-network/genesis"},next:{title:"Private Network Setup",permalink:"/docs-redux/operators/setup-network/create-private"}},l={},o=[{value:"protocol",id:"protocol",level:2},{value:"network",id:"network",level:2},{value:"core",id:"core",level:2},{value:"highway",id:"highway",level:2},{value:"deploys",id:"deploys",level:2},{value:"wasm",id:"wasm",level:2},{value:"wasm.storage_costs",id:"wasmstorage_costs",level:3},{value:"wasm.opcode_costs",id:"wasmopcode_costs",level:3},{value:"wasm.opcode_costs.control_flow",id:"wasmopcode_costscontrol_flow",level:3},{value:"wasm.opcode_costs.control_flow.br_table",id:"wasmopcode_costscontrol_flowbr_table",level:3},{value:"wasm.host_function_costs",id:"wasmhost_function_costs",level:3},{value:"system_costs",id:"system_costs",level:2},{value:"system_costs.auction_costs",id:"system_costsauction_costs",level:3},{value:"system_costs.mint_costs",id:"system_costsmint_costs",level:3},{value:"system_costs.handle_payment_costs",id:"system_costshandle_payment_costs",level:3},{value:"system_costs.standard_payment_costs",id:"system_costsstandard_payment_costs",level:3}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"the-chain-specification",children:"The Blockchain Specification"})}),"\n",(0,n.jsxs)(t.p,{children:["The blockchain specification, or ",(0,n.jsx)(t.code,{children:"chainspec"}),", is a collection of configuration settings describing the network state at genesis and upgrades to basic system functionality (including system contracts and gas costs) occurring after genesis. This page describes each field in the chainspec, based on ",(0,n.jsx)(t.a,{href:"https://github.com/casper-network/casper-node/blob/release-1.5.2/resources/production/chainspec.toml",children:"version 1.5.2"})," of the Casper node. The chainspec can and should be customized for private networks. The chainspec attributes are divided into categories based on what they are configuring."]}),"\n",(0,n.jsx)(t.h2,{id:"protocol",children:"protocol"}),"\n",(0,n.jsx)(t.p,{children:"These settings describe the active protocol version."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Attribute"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Mainnet Setting"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"version"}),(0,n.jsx)(t.td,{children:"The Casper node protocol version."}),(0,n.jsx)(t.td,{children:"'1.5.2'"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"hard_reset"}),(0,n.jsx)(t.td,{children:"When set to true, clear blocks and deploys back to the switch block (the end of the last era) just before the activation point. Used during the upgrade process to reset the network progress. In most cases, this setting should be true."}),(0,n.jsx)(t.td,{children:"true"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"activation_point"}),(0,n.jsxs)(t.td,{children:["The protocol version that should become active. ",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"If it is a timestamp string, it represents the timestamp for the genesis block. This is the beginning of Era 0. By this time, a sufficient majority (> 50% + F/2 \u2014 see the ",(0,n.jsx)(t.code,{children:"finality_threshold_fraction"})," below) of validator nodes must be running to start the blockchain. This timestamp is also used in seeding the pseudo-random number generator used in the contract runtime for computing the genesis post-state hash. ",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"If it is an integer, it represents an era ID, meaning the protocol version becomes active at the start of this era."]}),(0,n.jsx)(t.td,{children:"9100"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"network",children:"network"}),"\n",(0,n.jsx)(t.p,{children:"The following settings configure the networking layer."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Attribute"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Mainnet Setting"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"name"}),(0,n.jsx)(t.td,{children:"Human readable network name for convenience. The state_root_hash of the genesis block is the true identifier. The name influences the genesis hash by contributing to seeding the pseudo-random number generator used in the contract runtime for computing the genesis post-state hash."}),(0,n.jsx)(t.td,{children:"'casper'"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"maximum_net_message_size"}),(0,n.jsx)(t.td,{children:"The maximum size of an acceptable networking message in bytes. Any message larger than this will be rejected at the networking level."}),(0,n.jsx)(t.td,{children:"25_165_824"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"core",children:"core"}),"\n",(0,n.jsx)(t.p,{children:"These settings manage the core protocol behavior."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Attribute"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Mainnet Setting"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"era_duration"}),(0,n.jsx)(t.td,{children:"Era duration."}),(0,n.jsx)(t.td,{children:"'120min'"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"minimum_era_height"}),(0,n.jsxs)(t.td,{children:["Minimum number of blocks per era. An era will take longer than ",(0,n.jsx)(t.code,{children:"era_duration"})," if that is necessary to reach the minimum height."]}),(0,n.jsx)(t.td,{children:"20"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"minimum_block_time"}),(0,n.jsx)(t.td,{children:"Minimum difference between a block's and its child's timestamp."}),(0,n.jsx)(t.td,{children:"'16384ms'"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"validator_slots"}),(0,n.jsx)(t.td,{children:"Number of slots available in the validator auction."}),(0,n.jsx)(t.td,{children:"100"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"finality_threshold_fraction"}),(0,n.jsxs)(t.td,{children:["A number between 0 and 1 representing the fault tolerance threshold as a fraction used by the internal finalizer.",(0,n.jsx)("br",{}),"It is the fraction of validators that would need to equivocate to make two honest nodes see two conflicting blocks as finalized.",(0,n.jsx)("br",{}),"Let's say this value is F. A higher value F makes it safer to rely on finalized blocks. It also makes it more difficult to finalize blocks, however, and requires strictly more than (F + 1)/2 validators to be working correctly."]}),(0,n.jsx)(t.td,{children:"[1, 3]"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["start_protocol_version_with_strict",(0,n.jsx)("br",{}),"_finality_signatures_required"]}),(0,n.jsx)(t.td,{children:"Protocol version from which nodes are required to hold strict finality signatures."}),(0,n.jsx)(t.td,{children:"'1.5.0'"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"legacy_required_finality"}),(0,n.jsxs)(t.td,{children:["The finality required for legacy blocks. Options are 'Strict', 'Weak', and 'Any'. ",(0,n.jsx)("br",{}),"Used to determine finality sufficiency for new joiners syncing blocks created in a protocol version before the start protocol version with strict finality signatures."]}),(0,n.jsx)(t.td,{children:"'Strict'"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"auction_delay"}),(0,n.jsx)(t.td,{children:"Number of eras before an auction defines the set of validators. If a validator bonds with a sufficient bid in era N, it will be a validator in era N + auction_delay + 1."}),(0,n.jsx)(t.td,{children:"1"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"locked_funds_period"}),(0,n.jsx)(t.td,{children:"The period after genesis during which a genesis validator's bid is locked."}),(0,n.jsx)(t.td,{children:"'90days'"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"vesting_schedule_period"}),(0,n.jsx)(t.td,{children:"The period in which the genesis validator's bid is released over time after it is unlocked."}),(0,n.jsx)(t.td,{children:"'13 weeks'"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"unbonding_delay"}),(0,n.jsx)(t.td,{children:"Default number of eras that need to pass to be able to withdraw unbonded funds."}),(0,n.jsx)(t.td,{children:"7"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"round_seigniorage_rate"}),(0,n.jsxs)(t.td,{children:["Round seigniorage rate represented as a fraction of the total supply.",(0,n.jsx)("br",{}),"- Annual issuance: 8%.",(0,n.jsx)("br",{}),"- Minimum block time: 2^15 milliseconds.",(0,n.jsx)("br",{}),"- Ticks per year: 31536000000.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"(1+0.08)^((2^15)/31536000000)-1 is expressed as a fractional number below in Python:",(0,n.jsx)("br",{}),(0,n.jsx)(t.code,{children:"Fraction((1 + 0.08)**((2**15)/31536000000) - 1).limit_denominator(1000000000)"})]}),(0,n.jsx)(t.td,{children:"[7, 87535408]"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"max_associated_keys"}),(0,n.jsx)(t.td,{children:"Maximum number of associated keys for a single account."}),(0,n.jsx)(t.td,{children:"100"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"max_runtime_call_stack_height"}),(0,n.jsx)(t.td,{children:"Maximum height of the contract runtime call stack."}),(0,n.jsx)(t.td,{children:"12"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"minimum_delegation_amount"}),(0,n.jsx)(t.td,{children:"Minimum allowed delegation amount in motes."}),(0,n.jsx)(t.td,{children:"500_000_000_000"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"prune_batch_size"}),(0,n.jsxs)(t.td,{children:["Global state prune batch size for tip pruning in version 1.4.15. Possible values:",(0,n.jsx)("br",{}),"- 0 when the feature is OFF",(0,n.jsx)("br",{}),"- Integer if the feature is ON, representing the number of eras to process per block."]}),(0,n.jsx)(t.td,{children:"0"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"strict_argument_checking"}),(0,n.jsxs)(t.td,{children:["Enables strict arguments checking when calling a contract; i.e., all non-optional args are provided and they are of the correct ",(0,n.jsx)(t.code,{children:"CLType"}),"."]}),(0,n.jsx)(t.td,{children:"false"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"simultaneous_peer_requests"}),(0,n.jsx)(t.td,{children:"Number of simultaneous peer requests."}),(0,n.jsx)(t.td,{children:"5"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"consensus_protocol"}),(0,n.jsx)(t.td,{children:"The consensus protocol to use. Options are 'Zug' or 'Highway'."}),(0,n.jsx)(t.td,{children:"'Highway'"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"max_delegators_per_validator"}),(0,n.jsx)(t.td,{children:"The maximum amount of delegators per validator. If the value is 0, there is no maximum capacity."}),(0,n.jsx)(t.td,{children:"1200"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"highway",children:"highway"}),"\n",(0,n.jsx)(t.p,{children:"These settings configure the Highway Consensus protocol."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Attribute"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Mainnet Setting"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"maximum_round_length"}),(0,n.jsxs)(t.td,{children:["Highway dynamically chooses its round length between ",(0,n.jsx)(t.code,{children:"minimum_block_time"})," and ",(0,n.jsx)(t.code,{children:"maximum_round_length"}),"."]}),(0,n.jsx)(t.td,{children:"'132seconds'"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"reduced_reward_multiplier"}),(0,n.jsx)(t.td,{children:"The factor by which rewards for a round are multiplied if the greatest summit has \u226450% quorum, i.e., no finality. Expressed as a fraction (1/5 by default on Mainnet)."}),(0,n.jsx)(t.td,{children:"[1, 5]"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"deploys",children:"deploys"}),"\n",(0,n.jsx)(t.p,{children:"These settings manage deploys and their lifecycle."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Attribute"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Mainnet Setting"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"max_payment_cost"}),(0,n.jsx)(t.td,{children:"The maximum number of motes allowed to be spent during payment. 0 means unlimited."}),(0,n.jsx)(t.td,{children:"'0'"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"max_ttl"}),(0,n.jsx)(t.td,{children:"The duration after the deploy timestamp during which the deploy can be included in a block."}),(0,n.jsx)(t.td,{children:"'18hours'"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"max_dependencies"}),(0,n.jsx)(t.td,{children:"The maximum number of other deploys a deploy can depend on (requiring them to have been executed before it can execute)."}),(0,n.jsx)(t.td,{children:"10"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"max_block_size"}),(0,n.jsx)(t.td,{children:"Maximum block size in bytes, including deploys contained by the block. 0 means unlimited."}),(0,n.jsx)(t.td,{children:"10_485_760"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"max_deploy_size"}),(0,n.jsx)(t.td,{children:"Maximum deploy size in bytes. Size is of the deploy when serialized via ToBytes."}),(0,n.jsx)(t.td,{children:"1_048_576"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"block_max_deploy_count"}),(0,n.jsx)(t.td,{children:"The maximum number of non-transfer deploys permitted in a single block."}),(0,n.jsx)(t.td,{children:"50"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"block_max_transfer_count"}),(0,n.jsx)(t.td,{children:"The maximum number of Wasm-less transfer deploys permitted in a single block."}),(0,n.jsx)(t.td,{children:"1250"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"block_max_approval_count"}),(0,n.jsx)(t.td,{children:"The maximum number of approvals permitted in a single block."}),(0,n.jsx)(t.td,{children:"2600"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"block_gas_limit"}),(0,n.jsx)(t.td,{children:"The upper limit of the total gas of all deploys in a block."}),(0,n.jsx)(t.td,{children:"4_000_000_000_000"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"payment_args_max_length"}),(0,n.jsx)(t.td,{children:"The limit of length of serialized payment code arguments."}),(0,n.jsx)(t.td,{children:"1024"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"session_args_max_length"}),(0,n.jsx)(t.td,{children:"The limit of length of serialized session code arguments."}),(0,n.jsx)(t.td,{children:"1024"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"native_transfer_minimum_motes"}),(0,n.jsx)(t.td,{children:"The minimum amount in motes for a valid native transfer."}),(0,n.jsx)(t.td,{children:"2_500_000_000"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"wasm",children:"wasm"}),"\n",(0,n.jsx)(t.p,{children:"The following are Wasm-related settings."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Attribute"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Mainnet Setting"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"max_memory"}),(0,n.jsx)(t.td,{children:"Amount of free memory (in 64 kB pages) each contract can use for its stack."}),(0,n.jsx)(t.td,{children:"64"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"max_stack_height"}),(0,n.jsx)(t.td,{children:"Max stack height (native WebAssembly stack limiter)."}),(0,n.jsx)(t.td,{children:"500"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"wasmstorage_costs",children:"wasm.storage_costs"}),"\n",(0,n.jsx)(t.p,{children:"These settings manage Wasm storage costs."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Attribute"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Mainnet Setting"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"gas_per_byte"}),(0,n.jsx)(t.td,{children:"Gas charged per byte stored in global state."}),(0,n.jsx)(t.td,{children:"630_000"})]})})]}),"\n",(0,n.jsx)(t.h3,{id:"wasmopcode_costs",children:"wasm.opcode_costs"}),"\n",(0,n.jsx)(t.p,{children:"The following settings manage the cost table for Wasm opcodes."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Attribute"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Mainnet Setting"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"bit"}),(0,n.jsx)(t.td,{children:"Bit operations multiplier."}),(0,n.jsx)(t.td,{children:"300"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"add"}),(0,n.jsx)(t.td,{children:"Arithmetic add operations multiplier."}),(0,n.jsx)(t.td,{children:"210"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"mul"}),(0,n.jsx)(t.td,{children:"Mul operations multiplier."}),(0,n.jsx)(t.td,{children:"240"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"div"}),(0,n.jsx)(t.td,{children:"Div operations multiplier."}),(0,n.jsx)(t.td,{children:"320"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"load"}),(0,n.jsx)(t.td,{children:"Memory load operation multiplier."}),(0,n.jsx)(t.td,{children:"2_500"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"store"}),(0,n.jsx)(t.td,{children:"Memory store operation multiplier."}),(0,n.jsx)(t.td,{children:"4_700"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"const"}),(0,n.jsx)(t.td,{children:"Const store operation multiplier."}),(0,n.jsx)(t.td,{children:"110"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"local"}),(0,n.jsx)(t.td,{children:"Local operations multiplier."}),(0,n.jsx)(t.td,{children:"390"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"global"}),(0,n.jsx)(t.td,{children:"Global operations multiplier."}),(0,n.jsx)(t.td,{children:"390"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"integer_comparison"}),(0,n.jsx)(t.td,{children:"Integer operations multiplier."}),(0,n.jsx)(t.td,{children:"250"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"conversion"}),(0,n.jsx)(t.td,{children:"Conversion operations multiplier."}),(0,n.jsx)(t.td,{children:"420"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"unreachable"}),(0,n.jsx)(t.td,{children:"Unreachable operation multiplier."}),(0,n.jsx)(t.td,{children:"270"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"nop"}),(0,n.jsx)(t.td,{children:"Nop operation multiplier."}),(0,n.jsx)(t.td,{children:"200"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"current_memory"}),(0,n.jsx)(t.td,{children:"Get the current memory operation multiplier."}),(0,n.jsx)(t.td,{children:"290"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"grow_memory"}),(0,n.jsx)(t.td,{children:"Grow memory cost per page (64 kB)."}),(0,n.jsx)(t.td,{children:"240_000"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"wasmopcode_costscontrol_flow",children:"wasm.opcode_costs.control_flow"}),"\n",(0,n.jsx)(t.p,{children:"These settings manage costs for control flow operations."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Attribute"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Mainnet Setting"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"block"}),(0,n.jsxs)(t.td,{children:["Cost for ",(0,n.jsx)(t.code,{children:"block"})," opcode."]}),(0,n.jsx)(t.td,{children:"440"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"loop"}),(0,n.jsxs)(t.td,{children:["Cost for ",(0,n.jsx)(t.code,{children:"loop"})," opcode."]}),(0,n.jsx)(t.td,{children:"440"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"if"}),(0,n.jsxs)(t.td,{children:["Cost for ",(0,n.jsx)(t.code,{children:"if"})," opcode."]}),(0,n.jsx)(t.td,{children:"440"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"else"}),(0,n.jsxs)(t.td,{children:["Cost for ",(0,n.jsx)(t.code,{children:"else"})," opcode."]}),(0,n.jsx)(t.td,{children:"440"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"end"}),(0,n.jsxs)(t.td,{children:["Cost for ",(0,n.jsx)(t.code,{children:"end"})," opcode."]}),(0,n.jsx)(t.td,{children:"440"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"br"}),(0,n.jsxs)(t.td,{children:["Cost for ",(0,n.jsx)(t.code,{children:"br"})," opcode."]}),(0,n.jsx)(t.td,{children:"35_000"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"br_if"}),(0,n.jsxs)(t.td,{children:["Cost for ",(0,n.jsx)(t.code,{children:"br_if"})," opcode."]}),(0,n.jsx)(t.td,{children:"35_000"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"return"}),(0,n.jsxs)(t.td,{children:["Cost for ",(0,n.jsx)(t.code,{children:"return"})," opcode."]}),(0,n.jsx)(t.td,{children:"440"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"select"}),(0,n.jsxs)(t.td,{children:["Cost for ",(0,n.jsx)(t.code,{children:"select"})," opcode."]}),(0,n.jsx)(t.td,{children:"440"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"call"}),(0,n.jsxs)(t.td,{children:["Cost for ",(0,n.jsx)(t.code,{children:"call"})," opcode."]}),(0,n.jsx)(t.td,{children:"68_000"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"call_indirect"}),(0,n.jsxs)(t.td,{children:["Cost for ",(0,n.jsx)(t.code,{children:"call_indirect"})," opcode."]}),(0,n.jsx)(t.td,{children:"68_000"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"drop"}),(0,n.jsxs)(t.td,{children:["Cost for ",(0,n.jsx)(t.code,{children:"drop"})," opcode."]}),(0,n.jsx)(t.td,{children:"440"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"wasmopcode_costscontrol_flowbr_table",children:"wasm.opcode_costs.control_flow.br_table"}),"\n",(0,n.jsxs)(t.p,{children:["The following settings manage ",(0,n.jsx)(t.code,{children:"br_table"})," Wasm opcodes."]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Attribute"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Mainnet Setting"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"cost"}),(0,n.jsxs)(t.td,{children:["Fixed cost per ",(0,n.jsx)(t.code,{children:"br_table"})," opcode."]}),(0,n.jsx)(t.td,{children:"35_000"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"size_multiplier"}),(0,n.jsxs)(t.td,{children:["Size of target labels in the ",(0,n.jsx)(t.code,{children:"br_table"})," opcode will be multiplied by ",(0,n.jsx)(t.code,{children:"size_multiplier"}),"."]}),(0,n.jsx)(t.td,{children:"100"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"wasmhost_function_costs",children:"wasm.host_function_costs"}),"\n",(0,n.jsxs)(t.p,{children:['The following settings specify costs for low-level bindings for host-side ("external") functions. More documentation and host function declarations are located in ',(0,n.jsx)(t.a,{href:"https://github.com/casper-network/casper-node/blob/release-1.5.2/smart_contracts/contract/src/ext_ffi.rs",children:"smart_contracts/contract/src/ext_ffi.rs"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"- add = { cost = 5_800, arguments = [0, 0, 0, 0] }\n- add_associated_key = { cost = 9_000, arguments = [0, 0, 0] }\n- add_contract_version = { cost = 200, arguments = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }\n- blake2b = { cost = 200, arguments = [0, 0, 0, 0] }\n- call_contract = { cost = 4_500, arguments = [0, 0, 0, 0, 0, 420, 0] }\n- call_versioned_contract = { cost = 4_500, arguments = [0, 0, 0, 0, 0, 0, 0, 420, 0] }\n- create_contract_package_at_hash = { cost = 200, arguments = [0, 0] }\n- create_contract_user_group = { cost = 200, arguments = [0, 0, 0, 0, 0, 0, 0, 0] }\n- create_purse = { cost = 2_500_000_000, arguments = [0, 0] }\n- disable_contract_version = { cost = 200, arguments = [0, 0, 0, 0] }\n- get_balance = { cost = 3_800, arguments = [0, 0, 0] }\n- get_blocktime = { cost = 330, arguments = [0] }\n- get_caller = { cost = 380, arguments = [0] }\n- get_key = { cost = 2_000, arguments = [0, 440, 0, 0, 0] }\n- get_main_purse = { cost = 1_300, arguments = [0] }\n- get_named_arg = { cost = 200, arguments = [0, 0, 0, 0] }\n- get_named_arg_size = { cost = 200, arguments = [0, 0, 0] }\n- get_phase = { cost = 710, arguments = [0] }\n- get_system_contract = { cost = 1_100, arguments = [0, 0, 0] }\n- has_key = { cost = 1_500, arguments = [0, 840] }\n- is_valid_uref = { cost = 760, arguments = [0, 0] }\n- load_named_keys = { cost = 42_000, arguments = [0, 0] }\n- new_uref = { cost = 17_000, arguments = [0, 0, 590] }\n- random_bytes = { cost = 200, arguments = [0, 0] }\n- print = { cost = 20_000, arguments = [0, 4_600] }\n- provision_contract_user_group_uref = { cost = 200, arguments = [0, 0, 0, 0, 0] }\n- put_key = { cost = 38_000, arguments = [0, 1_100, 0, 0] }\n- read_host_buffer = { cost = 3_500, arguments = [0, 310, 0] }\n- read_value = { cost = 6_000, arguments = [0, 0, 0] }\n- read_value_local = { cost = 5_500, arguments = [0, 590, 0] }\n- remove_associated_key = { cost = 4_200, arguments = [0, 0] }\n- remove_contract_user_group = { cost = 200, arguments = [0, 0, 0, 0] }\n- remove_contract_user_group_urefs = { cost = 200, arguments = [0, 0, 0, 0, 0, 0] }\n- remove_key = { cost = 61_000, arguments = [0, 3_200] }\n- ret = { cost = 23_000, arguments = [0, 420_000] }\n- revert = { cost = 500, arguments = [0] }\n- set_action_threshold = { cost = 74_000, arguments = [0, 0] }\n- transfer_from_purse_to_account = { cost = 2_500_000_000, arguments = [0, 0, 0, 0, 0, 0, 0, 0, 0] }\n- transfer_from_purse_to_purse = { cost = 82_000, arguments = [0, 0, 0, 0, 0, 0, 0, 0] }\n- transfer_to_account = { cost = 2_500_000_000, arguments = [0, 0, 0, 0, 0, 0, 0] }\n- update_associated_key = { cost = 4_200, arguments = [0, 0, 0] }\n- write = { cost = 14_000, arguments = [0, 0, 0, 980] }\n- write_local = { cost = 9_500, arguments = [0, 1_800, 0, 520] }\n"})}),"\n",(0,n.jsx)(t.h2,{id:"system_costs",children:"system_costs"}),"\n",(0,n.jsx)(t.p,{children:"The following settings manage protocol operating costs."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Attribute"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Mainnet Setting"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"wasmless_transfer_cost"}),(0,n.jsx)(t.td,{children:"Default gas cost for a wasmless transfer."}),(0,n.jsx)(t.td,{children:"100_000_000"})]})})]}),"\n",(0,n.jsx)(t.h3,{id:"system_costsauction_costs",children:"system_costs.auction_costs"}),"\n",(0,n.jsxs)(t.p,{children:["These settings manage the costs of calling the ",(0,n.jsx)(t.code,{children:"auction"})," system contract entrypoints."]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Attribute"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Mainnet Setting"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"get_era_validators"}),(0,n.jsxs)(t.td,{children:["Cost of calling the ",(0,n.jsx)(t.code,{children:"get_era_validators"})," entrypoint."]}),(0,n.jsx)(t.td,{children:"10_000"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"read_seigniorage_recipients"}),(0,n.jsxs)(t.td,{children:["Cost of calling the ",(0,n.jsx)(t.code,{children:"read_seigniorage_recipients"})," entrypoint."]}),(0,n.jsx)(t.td,{children:"10_000"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"add_bid"}),(0,n.jsxs)(t.td,{children:["Cost of calling the ",(0,n.jsx)(t.code,{children:"add_bid"})," entrypoint."]}),(0,n.jsx)(t.td,{children:"2_500_000_000"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"withdraw_bid"}),(0,n.jsxs)(t.td,{children:["Cost of calling the ",(0,n.jsx)(t.code,{children:"withdraw_bid"})," entrypoint."]}),(0,n.jsx)(t.td,{children:"2_500_000_000"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"delegate"}),(0,n.jsxs)(t.td,{children:["Cost of calling the ",(0,n.jsx)(t.code,{children:"delegate"})," entrypoint."]}),(0,n.jsx)(t.td,{children:"2_500_000_000"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"undelegate"}),(0,n.jsxs)(t.td,{children:["Cost of calling the ",(0,n.jsx)(t.code,{children:"undelegate"})," entrypoint."]}),(0,n.jsx)(t.td,{children:"2_500_000_000"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"run_auction"}),(0,n.jsxs)(t.td,{children:["Cost of calling the ",(0,n.jsx)(t.code,{children:"run_auction"})," entrypoint."]}),(0,n.jsx)(t.td,{children:"10_000"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"slash"}),(0,n.jsxs)(t.td,{children:["Cost of calling the ",(0,n.jsx)(t.code,{children:"slash"})," entrypoint."]}),(0,n.jsx)(t.td,{children:"10_000"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"distribute"}),(0,n.jsxs)(t.td,{children:["Cost of calling the ",(0,n.jsx)(t.code,{children:"distribute"})," entrypoint."]}),(0,n.jsx)(t.td,{children:"10_000"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"withdraw_delegator_reward"}),(0,n.jsxs)(t.td,{children:["Cost of calling the ",(0,n.jsx)(t.code,{children:"withdraw_delegator_reward"})," entrypoint."]}),(0,n.jsx)(t.td,{children:"10_000"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"withdraw_validator_reward"}),(0,n.jsxs)(t.td,{children:["Cost of calling the ",(0,n.jsx)(t.code,{children:"withdraw_validator_reward"})," entrypoint."]}),(0,n.jsx)(t.td,{children:"10_000"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"read_era_id"}),(0,n.jsxs)(t.td,{children:["Cost of calling the ",(0,n.jsx)(t.code,{children:"read_era_id"})," entrypoint."]}),(0,n.jsx)(t.td,{children:"10_000"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"activate_bid"}),(0,n.jsxs)(t.td,{children:["Cost of calling the ",(0,n.jsx)(t.code,{children:"activate_bid"})," entrypoint."]}),(0,n.jsx)(t.td,{children:"10_000"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"redelegate"}),(0,n.jsxs)(t.td,{children:["Cost of calling the ",(0,n.jsx)(t.code,{children:"redelegate"})," entrypoint."]}),(0,n.jsx)(t.td,{children:"2_500_000_000"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"system_costsmint_costs",children:"system_costs.mint_costs"}),"\n",(0,n.jsxs)(t.p,{children:["These settings manage the costs of calling the ",(0,n.jsx)(t.code,{children:"mint"})," system contract entrypoints."]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Attribute"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Mainnet Setting"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"mint"}),(0,n.jsxs)(t.td,{children:["Cost of calling the ",(0,n.jsx)(t.code,{children:"mint"})," entrypoint."]}),(0,n.jsx)(t.td,{children:"2_500_000_000"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"reduce_total_supply"}),(0,n.jsxs)(t.td,{children:["Cost of calling the ",(0,n.jsx)(t.code,{children:"reduce_total_supply"})," entrypoint."]}),(0,n.jsx)(t.td,{children:"10_000"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"create"}),(0,n.jsxs)(t.td,{children:["Cost of calling the ",(0,n.jsx)(t.code,{children:"create"})," entrypoint."]}),(0,n.jsx)(t.td,{children:"2_500_000_000"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"balance"}),(0,n.jsxs)(t.td,{children:["Cost of calling the ",(0,n.jsx)(t.code,{children:"balance"})," entrypoint."]}),(0,n.jsx)(t.td,{children:"10_000"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"transfer"}),(0,n.jsxs)(t.td,{children:["Cost of calling the ",(0,n.jsx)(t.code,{children:"transfer"})," entrypoint."]}),(0,n.jsx)(t.td,{children:"10_000"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"read_base_round_reward"}),(0,n.jsxs)(t.td,{children:["Cost of calling the ",(0,n.jsx)(t.code,{children:"read_base_round_reward"})," entrypoint."]}),(0,n.jsx)(t.td,{children:"10_000"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"mint_into_existing_purse"}),(0,n.jsxs)(t.td,{children:["Cost of calling the ",(0,n.jsx)(t.code,{children:"mint_into_existing_purse"})," entrypoint."]}),(0,n.jsx)(t.td,{children:"2_500_000_000"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"system_costshandle_payment_costs",children:"system_costs.handle_payment_costs"}),"\n",(0,n.jsxs)(t.p,{children:["These settings manage the costs of calling entrypoints on the ",(0,n.jsx)(t.code,{children:"handle_payment"})," system contract."]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Attribute"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Mainnet Setting"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"get_payment_purse"}),(0,n.jsxs)(t.td,{children:["Cost of calling the ",(0,n.jsx)(t.code,{children:"get_payment_purse"})," entrypoint."]}),(0,n.jsx)(t.td,{children:"10_000"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"set_refund_purse"}),(0,n.jsxs)(t.td,{children:["Cost of calling the ",(0,n.jsx)(t.code,{children:"set_refund_purse"})," entrypoint."]}),(0,n.jsx)(t.td,{children:"10_000"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"get_refund_purse"}),(0,n.jsxs)(t.td,{children:["Cost of calling the ",(0,n.jsx)(t.code,{children:"get_refund_purse"})," entrypoint."]}),(0,n.jsx)(t.td,{children:"10_000"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"finalize_payment"}),(0,n.jsxs)(t.td,{children:["Cost of calling the ",(0,n.jsx)(t.code,{children:"finalize_payment"})," entrypoint."]}),(0,n.jsx)(t.td,{children:"10_000"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"system_costsstandard_payment_costs",children:"system_costs.standard_payment_costs"}),"\n",(0,n.jsxs)(t.p,{children:["These settings manage the costs of calling entrypoints on the ",(0,n.jsx)(t.code,{children:"standard_payment"})," system contract."]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Attribute"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Mainnet Setting"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"pay"}),(0,n.jsxs)(t.td,{children:["Cost of calling the ",(0,n.jsx)(t.code,{children:"pay"})," entrypoint and sending an amount to a payment purse."]}),(0,n.jsx)(t.td,{children:"10_000"})]})})]})]})}function a(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>d,x:()=>c});var n=s(6540);const r={},i=n.createContext(r);function d(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);