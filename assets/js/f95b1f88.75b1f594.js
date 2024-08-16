"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[7876],{70748:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>o,frontMatter:()=>t,metadata:()=>d,toc:()=>a});var s=i(74848),l=i(28453);const t={},r="Primitives and Basic Serialization Rules",d={id:"concepts/serialization/primitives",title:"Primitives and Basic Serialization Rules",description:"CLValue",source:"@site/docs/concepts/serialization/primitives.md",sourceDirName:"concepts/serialization",slug:"/concepts/serialization/primitives",permalink:"/docs-redux/next/concepts/serialization/primitives",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"concepts",previous:{title:"Binary Serialization Standard",permalink:"/docs-redux/next/concepts/serialization/"},next:{title:"Major Structures",permalink:"/docs-redux/next/concepts/serialization/structures"}},c={},a=[{value:"<code>CLValue</code>",id:"clvalue",level:2},{value:"Boolean",id:"clvalue-boolean",level:3},{value:"Numeric",id:"clvalue-numeric",level:3},{value:"Unit",id:"clvalue-unit",level:3},{value:"String",id:"clvalue-string",level:3},{value:"Option",id:"clvalue-option",level:3},{value:"List",id:"clvalue-list",level:3},{value:"ByteArray",id:"clvalue-ByteArray",level:3},{value:"Result",id:"clvalue-result",level:3},{value:"Tuple",id:"clvalue-tuple",level:3},{value:"Map",id:"clvalue-map",level:3},{value:"URef",id:"clvalue-uref",level:3},{value:"PublicKey",id:"clvalue-publickey",level:3},{value:"Key",id:"clvalue-key",level:3},{value:"CLType",id:"clvalue-cltype",level:3},{value:"CLValue",id:"clvalue-clvalue",level:3},{value:"Contracts",id:"global-state-contracts",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"primitives-and-basic-serialization-rules",children:"Primitives and Basic Serialization Rules"})}),"\n",(0,s.jsx)(n.h2,{id:"clvalue",children:(0,s.jsx)(n.code,{children:"CLValue"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"CLValue"})," describes data that is used by smart contracts. This could be a local state variable, input argument, or return value. A ",(0,s.jsx)(n.code,{children:"CLValue"})," consists of two parts: a ",(0,s.jsx)(n.code,{children:"CLType"})," describing the type of the value and an array of bytes representing the data in our serialization format."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"CLType"})," is described by the following recursive data type:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:'enum CLType {\n   Bool, // boolean primitive\n   I32, // signed 32-bit integer primitive\n   I64, // signed 64-bit integer primitive\n   U8, // unsigned 8-bit integer primitive\n   U32, // unsigned 32-bit integer primitive\n   U64, // unsigned 64-bit integer primitive\n   U128, // unsigned 128-bit integer primitive\n   U256, // unsigned 256-bit integer primitive\n   U512, // unsigned 512-bit integer primitive\n   Unit, // singleton value without additional semantics\n   String, // e.g. "Hello, World!"\n   URef, // unforgeable reference (see above)\n   Key, // global state key (see above)\n   PublicKey // A Casper system PublicKey type\n   Option(CLType), // optional value of the given type\n   List(CLType), // list of values of the given type (e.g. Vec in rust)\n   ByteArray(CLType, u32), // same as `List` above, but number of elements\n                           // is statically known (e.g. arrays in rust)\n   Result(CLType, CLType), // co-product of the given types;\n                           // one variant meaning success, the other failure\n   Map(CLType, CLType), // key-value association where keys and values have the given types\n   Tuple1(CLType), // single value of the given type\n   Tuple2(CLType, CLType), // pair consisting of elements of the given types\n   Tuple3(CLType, CLType, CLType), // triple consisting of elements of the given types\n   Any // Indicates the type is not known\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["All data that can be assigned a (non-",(0,s.jsx)(n.code,{children:"Any"}),") ",(0,s.jsx)(n.code,{children:"CLType"})," can be serialized according to the following rules, which define the Casper serialization format:"]}),"\n",(0,s.jsx)(n.h3,{id:"clvalue-boolean",children:"Boolean"}),"\n",(0,s.jsxs)(n.p,{children:["Boolean values serialize as a single byte; ",(0,s.jsx)(n.code,{children:"true"})," maps to ",(0,s.jsx)(n.code,{children:"1"}),", while ",(0,s.jsx)(n.code,{children:"false"})," maps to ",(0,s.jsx)(n.code,{children:"0"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"clvalue-numeric",children:"Numeric"}),"\n",(0,s.jsx)(n.p,{children:"Numeric values consisting of 64 bits or less serialize in the two's complement representation with little-endian byte order, and the appropriate number of bytes for the bit-width."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["E.g. ",(0,s.jsx)(n.code,{children:"7u8"})," serializes as ",(0,s.jsx)(n.code,{children:"0x07"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["E.g. ",(0,s.jsx)(n.code,{children:"7u32"})," serializes as ",(0,s.jsx)(n.code,{children:"0x07000000"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["E.g. ",(0,s.jsx)(n.code,{children:"1024u32"})," serializes as ",(0,s.jsx)(n.code,{children:"0x00040000"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Wider numeric values (i.e. ",(0,s.jsx)(n.code,{children:"U128"}),", ",(0,s.jsx)(n.code,{children:"U256"}),", ",(0,s.jsx)(n.code,{children:"U512"}),") serialize as one byte given the length of the next number (in bytes), followed by the two's complement representation with little-endian byte order. The number of bytes should be chosen as small as possible to represent the given number. This reduces the serialization size when small numbers are represented within a wide data type."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["E.g. ",(0,s.jsx)(n.code,{children:"U512::from(7)"})," serializes as ",(0,s.jsx)(n.code,{children:"0x0107"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["E.g. ",(0,s.jsx)(n.code,{children:"U512::from(1024)"})," serializes as ",(0,s.jsx)(n.code,{children:"0x020004"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["E.g. ",(0,s.jsx)(n.code,{children:'U512::from("123456789101112131415")'})," serializes as ",(0,s.jsx)(n.code,{children:"0x0957ff1ada959f4eb106"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"clvalue-unit",children:"Unit"}),"\n",(0,s.jsx)(n.p,{children:"Unit serializes to an empty byte array."}),"\n",(0,s.jsx)(n.h3,{id:"clvalue-string",children:"String"}),"\n",(0,s.jsx)(n.p,{children:"Strings serialize as a 32-bit integer representing the length in bytes (that might be different than the number of characters since special characters, such as emojis, take more than one byte), followed by the UTF-8 encoding of the characters in the string."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["E.g. ",(0,s.jsx)(n.code,{children:'"Hello, World!"'})," serializes as ",(0,s.jsx)(n.code,{children:"0x0d00000048656c6c6f2c20576f726c6421"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"clvalue-option",children:"Option"}),"\n",(0,s.jsxs)(n.p,{children:["Optional values serialize with a single byte tag, followed by the serialization of the value itself. The tag is equal to ",(0,s.jsx)(n.code,{children:"0"})," if the value is missing, and ",(0,s.jsx)(n.code,{children:"1"})," if it is present."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["E.g. ",(0,s.jsx)(n.code,{children:"None"})," serializes as ",(0,s.jsx)(n.code,{children:"0x00"})]}),"\n",(0,s.jsxs)(n.li,{children:["E.g. ",(0,s.jsx)(n.code,{children:"Some(10u32)"})," serializes as ",(0,s.jsx)(n.code,{children:"0x010a000000"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"clvalue-list",children:"List"}),"\n",(0,s.jsxs)(n.p,{children:["A list of values serializes as a 32-bit integer representing the number of elements in the list (differing from strings where it gives the number of ",(0,s.jsx)(n.em,{children:"bytes"}),"), followed by the concatenation of each serialized element."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["E.g. ",(0,s.jsx)(n.code,{children:"List()"})," serializes as ",(0,s.jsx)(n.code,{children:"0x00000000"})]}),"\n",(0,s.jsxs)(n.li,{children:["E.g. ",(0,s.jsx)(n.code,{children:"List(1u32, 2u32, 3u32)"})," serializes as ",(0,s.jsx)(n.code,{children:"0x03000000010000000200000003000000"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"clvalue-ByteArray",children:"ByteArray"}),"\n",(0,s.jsx)(n.p,{children:"A fixed-length list of values serializes as the concatenation of the serialized elements. Unlike a variable-length list, the length is not included in the serialization because it is statically known by the type of the value."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["E.g. ",(0,s.jsx)(n.code,{children:"[1u32, 2u32, 3u32]"})," serializes as ",(0,s.jsx)(n.code,{children:"0x010000000200000003000000"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"clvalue-result",children:"Result"}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.code,{children:"Result"})," serializes as a single byte tag followed by the serialization of the contained value. The tag is equal to ",(0,s.jsx)(n.code,{children:"1"})," for the success variant and ",(0,s.jsx)(n.code,{children:"0"})," for the error variant."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'-   E.g. `Ok(314u64)` serializes as `0x013a01000000000000`\n-   E.g. `Err("Uh oh")` serializes as `0x00050000005568206f68`\n'})}),"\n",(0,s.jsx)(n.h3,{id:"clvalue-tuple",children:"Tuple"}),"\n",(0,s.jsxs)(n.p,{children:["Tuples serialize as the concatenation of their serialized elements. Similar to ",(0,s.jsx)(n.code,{children:"ByteArray"})," the number of elements is not included in the serialization because it is statically known in the type."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'-   E.g. `(1u32, "Hello, World!", true)` serializes as `0x010000000d00000048656c6c6f2c20576f726c642101`\n'})}),"\n",(0,s.jsx)(n.h3,{id:"clvalue-map",children:"Map"}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.code,{children:"Map"})," serializes as a list of key-value tuples. There must be a well-defined ordering on the keys, and in the serialization, the pairs are listed in ascending order. This is done to ensure determinism in the serialization, as ",(0,s.jsx)(n.code,{children:"Map"})," data structures can be unordered."]}),"\n",(0,s.jsx)(n.h3,{id:"clvalue-uref",children:"URef"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"URef"})," values serialize as the concatenation of their address (a fixed-length list of ",(0,s.jsx)(n.code,{children:"u8"}),") and a single byte tag representing access rights, which are converted as follows:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Access Rights"}),(0,s.jsx)(n.th,{children:"Serialization"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"NONE"})}),(0,s.jsx)(n.td,{children:"0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"READ"})}),(0,s.jsx)(n.td,{children:"1"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"WRITE"})}),(0,s.jsx)(n.td,{children:"2"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"READ_WRITE"})}),(0,s.jsx)(n.td,{children:"3"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ADD"})}),(0,s.jsx)(n.td,{children:"4"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"READ_ADD"})}),(0,s.jsx)(n.td,{children:"5"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ADD_WRITE"})}),(0,s.jsx)(n.td,{children:"6"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"READ_ADD_WRITE"})}),(0,s.jsx)(n.td,{children:"7"})]})]})]}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["When passing a URef to another entity on chain, you must ensure that the ",(0,s.jsx)(n.code,{children:"AccessRights"})," are set correctly. If the URef represents a ",(0,s.jsx)(n.a,{href:"/docs-redux/next/concepts/glossary/P#purse-purse",children:"purse"}),", ",(0,s.jsx)(n.code,{children:"AccessRights"})," impact who can deposit and withdraw CSPR."]})}),"\n",(0,s.jsxs)(n.p,{children:["If a passed URef contains ",(0,s.jsx)(n.code,{children:"ADD"})," permissions, the entity receiving the URef will then be able to deposit CSPR into the associated purse. ",(0,s.jsx)(n.code,{children:"WRITE"})," permissions allow for withdrawing CSPR. As of 1.4.5, passing a main purse URef as a runtime argument will cause the host to automatically remove ",(0,s.jsx)(n.code,{children:"WRITE"})," permissions. In this event, ",(0,s.jsx)(n.code,{children:"READ"})," and ",(0,s.jsx)(n.code,{children:"ADD"})," permissions will remain. Regardless, all due diligence should be performed to avoid passing a URef with ",(0,s.jsx)(n.code,{children:"WRITE"})," permissions unintentionally."]}),"\n",(0,s.jsx)(n.h3,{id:"clvalue-publickey",children:"PublicKey"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"PublicKey"})," serializes as a single byte tag representing the algorithm followed by 32 bytes of the ",(0,s.jsx)(n.code,{children:"PublicKey"})," itself:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If the ",(0,s.jsx)(n.code,{children:"PublicKey"})," is a ",(0,s.jsx)(n.code,{children:"System"})," key, the single tag byte is ",(0,s.jsx)(n.code,{children:"0"}),". With this variant, the single byte of ",(0,s.jsx)(n.code,{children:"0"})," is the entire key."]}),"\n",(0,s.jsxs)(n.li,{children:["If the ",(0,s.jsx)(n.code,{children:"PublicKey"})," is an ",(0,s.jsx)(n.code,{children:"Ed25519"})," key, the single tag byte is ",(0,s.jsx)(n.code,{children:"1"})," followed by the individual bytes of the serialized key."]}),"\n",(0,s.jsxs)(n.li,{children:["If the ",(0,s.jsx)(n.code,{children:"PublicKey"})," is a ",(0,s.jsx)(n.code,{children:"Secp256k1"})," key, the single tag byte is a ",(0,s.jsx)(n.code,{children:"2"})," followed by the individual bytes of the serialized key."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"clvalue-key",children:"Key"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Key"})," values serialize as a single byte tag representing the variant, followed by the serialization of the data that the variant contains. For most variants, this is simply a fixed-length 32-byte array. The exception is ",(0,s.jsx)(n.code,{children:"Key::URef"}),", which contains a ",(0,s.jsx)(n.code,{children:"URef"}),"; so its data serializes per the description above. The tags are as follows: ",(0,s.jsx)(n.code,{children:"Key::Account"})," serializes as ",(0,s.jsx)(n.code,{children:"0"}),", ",(0,s.jsx)(n.code,{children:"Key::Hash"})," as ",(0,s.jsx)(n.code,{children:"1"}),", ",(0,s.jsx)(n.code,{children:"Key::URef"})," as ",(0,s.jsx)(n.code,{children:"2"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"clvalue-cltype",children:"CLType"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"CLType"})," itself also has rules for serialization. A ",(0,s.jsx)(n.code,{children:"CLType"})," serializes as a single-byte tag, followed by the concatenation of serialized inner types, if any (e.g., lists and tuples have inner types). ",(0,s.jsx)(n.code,{children:"ByteArray"})," is a minor exception because it also includes the length in the type. However, the length is included in the serialization (as a 32-bit integer, per the serialization rules above), following the serialization of the inner type. The tags are as follows:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.code,{children:"CLType"})}),(0,s.jsx)(n.th,{children:"Serialization Tag"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Bool"})}),(0,s.jsx)(n.td,{children:"0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"I32"})}),(0,s.jsx)(n.td,{children:"1"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"I64"})}),(0,s.jsx)(n.td,{children:"2"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"U8"})}),(0,s.jsx)(n.td,{children:"3"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"U32"})}),(0,s.jsx)(n.td,{children:"4"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"U64"})}),(0,s.jsx)(n.td,{children:"5"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"U128"})}),(0,s.jsx)(n.td,{children:"6"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"U256"})}),(0,s.jsx)(n.td,{children:"7"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"U512"})}),(0,s.jsx)(n.td,{children:"8"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Unit"})}),(0,s.jsx)(n.td,{children:"9"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"String"})}),(0,s.jsx)(n.td,{children:"10"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Key"})}),(0,s.jsx)(n.td,{children:"11"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"URef"})}),(0,s.jsx)(n.td,{children:"12"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Option"})}),(0,s.jsx)(n.td,{children:"13"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"List"})}),(0,s.jsx)(n.td,{children:"14"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ByteArray"})}),(0,s.jsx)(n.td,{children:"15"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Result"})}),(0,s.jsx)(n.td,{children:"16"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Map"})}),(0,s.jsx)(n.td,{children:"17"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Tuple1"})}),(0,s.jsx)(n.td,{children:"18"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Tuple2"})}),(0,s.jsx)(n.td,{children:"19"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Tuple3"})}),(0,s.jsx)(n.td,{children:"20"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Any"})}),(0,s.jsx)(n.td,{children:"21"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"PublicKey"})}),(0,s.jsx)(n.td,{children:"22"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"clvalue-clvalue",children:"CLValue"}),"\n",(0,s.jsxs)(n.p,{children:["A complete ",(0,s.jsx)(n.code,{children:"CLValue"}),", including both the data and the type, can also be serialized (to store it in the global state). This is done by concatenating: the serialization of the length (as a 32-bit integer) of the serialized data (in bytes), the serialized data itself, and the serialization of the type."]}),"\n",(0,s.jsx)(n.h3,{id:"global-state-contracts",children:"Contracts"}),"\n",(0,s.jsxs)(n.p,{children:["Contracts are a special value type because they contain the on-chain logic of the applications running on a Casper network. A ",(0,s.jsx)(n.em,{children:"contract"})," contains the following data:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["a ",(0,s.jsx)(n.a,{href:"https://webassembly.github.io/spec/core/syntax/modules.html",children:"wasm module"})]}),"\n",(0,s.jsx)(n.li,{children:"a collection of named keys"}),"\n",(0,s.jsx)(n.li,{children:"a protocol version"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The wasm module must contain a function named ",(0,s.jsx)(n.code,{children:"call"}),", which takes no arguments and returns no values. This is the main entry point into the contract. Moreover, the module may import any of the functions supported by the ",(0,s.jsx)(n.a,{href:"/docs-redux/next/concepts/design/casper-design#execution-semantics-runtime",children:"Casper runtime"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Note: though the ",(0,s.jsx)(n.code,{children:"call"})," function signature has no arguments and no return value, within the ",(0,s.jsx)(n.code,{children:"call"})," function body, the ",(0,s.jsx)(n.code,{children:"get_named_arg"})," runtime function can be used to accept arguments (by ordinal), and the ",(0,s.jsx)(n.code,{children:"ret"})," runtime function can be used to return a single ",(0,s.jsx)(n.code,{children:"CLValue"})," to the caller."]}),"\n",(0,s.jsxs)(n.p,{children:["The named keys are used to give human-readable names to keys in the global state, which are essential to the contract. For example, the hash key of another contract it frequently calls may be stored under a meaningful name. It is also used to store the ",(0,s.jsx)(n.code,{children:"URef"}),"s, which are known to the contract (see the section on Permissions for details)."]}),"\n",(0,s.jsx)(n.p,{children:"Each contract specifies the Casper protocol version that was active when the contract was written to the global state."})]})}function o(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>d});var s=i(96540);const l={},t=s.createContext(l);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);