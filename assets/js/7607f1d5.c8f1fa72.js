"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[793],{7843:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var s=t(4848),r=t(8453);const o={title:"Front-end in React"},i="Front-end Template with React",a={id:"developers/dapps/template-frontend",title:"Front-end in React",description:"For building web applications, it is most common to use the Casper JS SDK with React. This is a popular solution among developers, but you may use any front-end library or framework, including none at all, to interact with a Casper network via the Casper JS SDK.",source:"@site/docs/developers/dapps/template-frontend.md",sourceDirName:"developers/dapps",slug:"/developers/dapps/template-frontend",permalink:"/developers/dapps/template-frontend",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Front-end in React"},sidebar:"developers",previous:{title:"dApp Technology Stack",permalink:"/developers/dapps/technology-stack"},next:{title:"URef Access Rights",permalink:"/developers/dapps/uref-security"}},c={},l=[{value:"Get Started",id:"get-started",level:2},{value:"Casper Wallet Integration",id:"casper-wallet-integration",level:2},{value:"Disconnect the Casper Wallet",id:"disconnect-the-casper-wallet",level:3},{value:"Call a Smart Contract",id:"call-a-smart-contract",level:2},{value:"Query a Smart Contract",id:"query-a-smart-contract",level:2},{value:"Test Application",id:"test-application",level:2},{value:"Build for Production",id:"build-for-production",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';"}),"\n",(0,s.jsx)(n.h1,{id:"front-end-template-with-react",children:"Front-end Template with React"}),"\n",(0,s.jsxs)(n.p,{children:["For building web applications, it is most common to use the Casper JS SDK with React. This is a popular solution among developers, but you may use any front-end library or framework, including none at all, to interact with a Casper network via the ",(0,s.jsx)(n.a,{href:"https://github.com/casper-ecosystem/casper-js-sdk",children:"Casper JS SDK"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["This guide will walk you through setting up and developing a React application with ",(0,s.jsx)(n.a,{href:"https://vitejs.dev/",children:"Vite"})," that communicates with a Casper network. Experience with Vite is not required; however, if you have never built a React app, you should begin by ",(0,s.jsx)(n.a,{href:"https://reactjs.org/docs/getting-started.html",children:"reading the React documentation"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"get-started",children:"Get Started"}),"\n",(0,s.jsx)(n.p,{children:"Begin by opening a terminal and running:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"node -v\n"})}),"\n",(0,s.jsx)(n.p,{children:"To get your Node.js version."}),"\n",(0,s.jsxs)(n.p,{children:["To ensure compatibility, you should be running Node.js version 18 or above. Upgrade to version 18 using the ",(0,s.jsx)(n.a,{href:"https://github.com/nvm-sh/nvm",children:"Node Version Manager"})," or another tool if you are running an earlier version."]}),"\n",(0,s.jsxs)(n.p,{children:["Using ",(0,s.jsx)(n.a,{href:"https://www.npmjs.com/",children:"npm"}),", create a new Vite project by running:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm install -g vite\nnpm create vite@latest\n"})}),"\n",(0,s.jsx)(n.p,{children:'Name your project, select "React", then choose your preferred language. In this example, we will use JavaScript.'}),"\n",(0,s.jsxs)(n.p,{children:["Head into your new project directory, replacing ",(0,s.jsx)(n.code,{children:"vite-project"})," with your project name:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd vite-project/\n"})}),"\n",(0,s.jsx)(n.p,{children:"Run the following command to test the server:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm install\nvite dev\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Quit the server by pressing ",(0,s.jsx)(n.code,{children:"q"}),". Install the Casper JS SDK by running the following:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm install casper-js-sdk\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This guide will use ",(0,s.jsx)(n.a,{href:"https://axios-http.com/",children:"axios"})," to communicate with the backend; install it by running:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm install axios\n"})}),"\n",(0,s.jsx)(n.h2,{id:"casper-wallet-integration",children:"Casper Wallet Integration"}),"\n",(0,s.jsxs)(n.p,{children:["The Casper Wallet extension content script injects the SDK into your website's global scope. Provider class and event types can be accessed with ",(0,s.jsx)(n.code,{children:"window.CasperWalletProvider"})," and ",(0,s.jsx)(n.code,{children:"window.CasperWalletEventTypes"}),". If the value of these variables is ",(0,s.jsx)(n.code,{children:"undefined"})," the Casper Wallet is not installed."]}),"\n",(0,s.jsx)(n.p,{children:"Start with a helper for getting the provider instance:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"touch src/casper-wallet.js\n"})}),"\n",(0,s.jsx)(n.p,{children:"Fill the file with the following content:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'// Timeout (in ms) for requests to the extension [DEFAULT: 30 min]\nconst REQUESTS_TIMEOUT_MS = 30 * 60 * 1000;\n\nexport const getProvider = () => {\n    let providerConstructor = window.CasperWalletProvider;\n    if (providerConstructor === undefined) {\n        alert("Casper Wallet extension is not installed!");\n        return;\n    }\n    let provider = providerConstructor({\n        timeout: REQUESTS_TIMEOUT_MS\n    });\n    return provider;\n}\n\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["For complete integration details, refer to ",(0,s.jsx)(n.a,{href:"https://github.com/make-software/casper-wallet-sdk/#readme",children:"README of Casper Wallet SDK"}),"."]})}),"\n",(0,s.jsxs)(n.p,{children:["To ensure that a user's public key will be available to all necessary components, create a React state variable in ",(0,s.jsx)(n.em,{children:"src/App.jsx"})," or another parent component that encapsulates the components that should have access to this public key:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'import React from "react";\nimport Connect from "./Connect";\nimport \'./App.css\'\n\nfunction App() {\n    const [publicKey, setPublicKey] = React.useState(null);\n    return (\n        <>\n            <Connect setPublicKey={ setPublicKey } />\n            <div>\n                {publicKey !== null && (<>\n                    Wallet connected: {publicKey}<br/>\n                </>)}\n            </div>\n        </>\n    );\n}\n\nexport default App;\n'})}),"\n",(0,s.jsxs)(n.p,{children:["This is an example of ",(0,s.jsx)(n.em,{children:"src/App.jsx"})," that imports and displays the ",(0,s.jsx)(n.code,{children:"Connect"})," component that is described next. The ",(0,s.jsx)(n.code,{children:"setPublicKey"})," function is passed to the ",(0,s.jsx)(n.code,{children:"Connect"})," component as a ",(0,s.jsx)(n.a,{href:"https://legacy.reactjs.org/docs/components-and-props.html",children:"prop"})," so that it may set the public key and make it available to all of ",(0,s.jsx)(n.em,{children:"src/App.jsx"}),". This way, when more components are added to ",(0,s.jsx)(n.em,{children:"src/App.jsx"}),", they may utilize the ",(0,s.jsx)(n.code,{children:"publicKey"})," variable."]}),"\n",(0,s.jsxs)(n.p,{children:["To connect to the Casper Wallet within your React app, create the ",(0,s.jsx)(n.code,{children:"Connect"})," component and import the ",(0,s.jsx)(n.code,{children:"getProvider"})," helper."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"touch src/Connect.jsx\n"})}),"\n",(0,s.jsx)(n.p,{children:"Open the file and write:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'import { getProvider } from "./casper-wallet";\n\nconst provider = getProvider();\n\nconst Connect = (props) => {\n    return (\n        <>\n            <button onClick={ () => connectToWallet(props) }>Connect Wallet</button>\n            {/* Place for disconnect button */}\n        </>\n    );\n}\n\nexport default Connect;\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Notice that ",(0,s.jsx)(n.code,{children:"Connect"})," accepts props, and forwards them to the ",(0,s.jsx)(n.code,{children:"connectToWallet"})," function described below. This function is called when the button is clicked, allowing it to set the public key within ",(0,s.jsx)(n.em,{children:"src/App.jsx"})," using ",(0,s.jsx)(n.code,{children:"props.setPublicKey()"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Write the ",(0,s.jsx)(n.code,{children:"connectToWallet"})," function under the ",(0,s.jsx)(n.code,{children:"Connect"})," function component:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'const connectToWallet = (props) => {\n    provider.requestConnection().then(connected => {\n        if (!connected) {\n            alert("Couldn\'t connect to wallet");\n        } else {\n            provider.getActivePublicKey().then(publicKey => {\n                props.setPublicKey(publicKey);\n            }).catch(error => {\n                alert(error.message);\n            });\n        }\n    })\n    .catch(error => {\n        alert(error.message);\n    });\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"connectToWallet()"})," function calls ",(0,s.jsx)(n.code,{children:"provider.isConnected()"})," to check if the Casper Wallet is already connected. If it is, it gets the public key of the selected account; if it's not, it opens up a connection request within the Wallet. ",(0,s.jsx)(n.code,{children:"provider.isConnected()"})," will throw an error if the Wallet is not installed as an extension or if it is locked."]}),"\n",(0,s.jsx)(n.h3,{id:"disconnect-the-casper-wallet",children:"Disconnect the Casper Wallet"}),"\n",(0,s.jsxs)(n.p,{children:["To request that the Casper Wallet disconnect from a website, add the following function call to ",(0,s.jsx)(n.em,{children:"src/Connect.jsx"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'const disconnect = (props) => {\n    provider.disconnectFromSite().then(disconnected => {\n        if (disconnected) {\n            props.setPublicKey(null);\n            alert("Disconnected");\n        } \n    }).catch(error => {\n        alert(error.message);\n    });\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Then connect it to a button:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"const Connect = (props) => {\n    return (\n        <>\n            <button onClick={ () => connectToWallet(props) }>Connect Wallet</button>\n            // highlight-next-line-green\n            <button onClick={ () => disconnect(props) }>Disconnect</button>\n        </>\n    );\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"call-a-smart-contract",children:"Call a Smart Contract"}),"\n",(0,s.jsxs)(n.p,{children:['For this example, we\'ll call a hypothetical "hello world" contract containing a single entrypoint "update_message". We\'ll call the "update_message" entrypoint with text entered by the user in an HTML ',(0,s.jsx)(n.code,{children:"input"})," field."]}),"\n",(0,s.jsxs)(n.p,{children:["When calling smart contracts from React, you'll need to implement the logic within a function accessible from a React component. You can obtain user-entered data from the DOM using elements like ",(0,s.jsx)(n.code,{children:"input"}),", then grab the value within the smart-contract-calling function."]}),"\n",(0,s.jsx)(n.p,{children:"Create a new component:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"touch src/UpdateMessage.jsx\n"})}),"\n",(0,s.jsx)(n.p,{children:"Open the file and write:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'import { useState } from \'react\';\nimport { Contracts, CasperClient, RuntimeArgs, CLValueBuilder, CLPublicKey, DeployUtil } from "casper-js-sdk";\nimport axios from "axios";\nimport { getProvider } from "./casper-wallet";\n\nconst provider = getProvider();\n\nconst UpdateMessage = (props) => {\n    const [message, setMessage] = useState("");\n\n    return (\n        <>\n            <input id="message" type="text" value={message} onChange={(e) => {setMessage(e.target.value)}} />\n            <button onClick={ () => updateMessage(props, message) }>Update Message</button>\n        </>\n    );\n}\n\nexport default UpdateMessage;\n'})}),"\n",(0,s.jsxs)(n.p,{children:["On the front-end you'll need to build the deploy and forward it to the Casper Wallet to be signed. In most cases, you will be calling smart contract entrypoints. This example deploy shows the calling of entrypoint \"update_message\" which will update the chain's global state to reflect the new data. You'll need the user's active public key to prepare the deploy, and you may retrieve this from the ",(0,s.jsx)(n.code,{children:"publicKey"})," variable passed in as a prop from ",(0,s.jsx)(n.code,{children:"src/App.jsx"}),". Write this function under your ",(0,s.jsx)(n.code,{children:"UpdateMessage"})," component function."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'const NODE_URL = "http://65.108.127.242:7777/rpc";\nconst NETWORK_NAME = "casper-test"; // "casper" for mainnet\nconst CONTRACT_HASH = "hash-75143aa708275b7dead20ac2cc06c1c3eccff4ffcf1eb9aebb8cce7c35cea041";\n\nconst updateMessage = (props, message) => {\n    const casperClient = new CasperClient(NODE_URL);\n    const contract = new Contracts.Contract(casperClient);\n    contract.setContractHash(CONTRACT_HASH);\n    const runtimeArguments = RuntimeArgs.fromMap({\n        "message": CLValueBuilder.string(message)\n    });\n    const deploy = contract.callEntrypoint(\n        "update_message",\n        runtimeArguments,\n        CLPublicKey.fromHex(props.publicKey),\n        NETWORK_NAME,\n        "1000000000", // 1 CSPR (10^9 Motes)\n    );\n    const deployJSON = DeployUtil.deployToJson(deploy);\n    provider.sign(JSON.stringify(deployJSON), props.publicKey).then((signedDeploy) => { // Initiates sign request\n        axios.post("/sendDeploy", signedDeploy, {\n            headers: {\n                \'Content-Type\': \'application/json\'\n            }\n        }).then((response) => {\n            alert(response.data);\n        }).catch((error) => {\n            console.error(error.message);\n        });\n    }).catch((error) => {\n        console.error(error.message);\n    });\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["In this example, ",(0,s.jsx)(n.code,{children:"updateMessage"})," builds a deploy and forwards it to the Casper Wallet to be signed by the user. Once it's been signed, ",(0,s.jsx)(n.code,{children:"signedDeploy"})," is forwarded to the backend at the ",(0,s.jsx)(n.code,{children:"/sendDeploy"})," endpoint using ",(0,s.jsx)(n.code,{children:"axios.post"})," before being sent off to a Casper node. If an error occurs, or the user rejects the signature request, it will be logged to ",(0,s.jsx)(n.code,{children:"stderr"}),". In this particular example, the result of this deployment will be presented to the user in the form of a JavaScript ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/alert",children:"alert"}),"; however, you may do with the response data as you wish."]}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsxs)(n.p,{children:["The backend endpoint ",(0,s.jsx)(n.code,{children:"/sendDeploy"})," should handle signed deployment by simply passing it to a Casper node."]}),(0,s.jsxs)(n.p,{children:["In Casper node ",(0,s.jsx)(n.code,{children:"v1.5.0"}),", which sets up appropriate CORS headers, it will also be possible to send deployments directly from the browser, without relying on a backend server. This is useful for prototyping, however it is advised that you operate your own node."]})]}),"\n",(0,s.jsxs)(n.p,{children:["Now that this component is created, render it to the user interface in ",(0,s.jsx)(n.em,{children:"src/App.jsx"}),", passing along the ",(0,s.jsx)(n.code,{children:"publicKey"})," as a prop:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'import React from "react";\nimport Connect from "./Connect";\n// highlight-next-line-green\nimport UpdateMessage from "./UpdateMessage";\nimport \'./App.css\'\n\nfunction App() {\n    const [publicKey, setPublicKey] = React.useState(null);\n    return (\n        <>\n            <Connect setPublicKey={ setPublicKey } />\n            <div>\n                {publicKey !== null && (<>\n                    Wallet connected: {publicKey}<br/>\n                    // highlight-next-line-green\n                    <UpdateMessage publicKey={ publicKey } />\n                </>)}\n            </div>\n        </>\n    );\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"query-a-smart-contract",children:"Query a Smart Contract"}),"\n",(0,s.jsxs)(n.p,{children:["Consider that the message written to the chain during the ",(0,s.jsx)(n.code,{children:"update_message"})," entrypoint invocation is stored in the ",(0,s.jsx)(n.a,{href:"/concepts/glossary/D#dictionary",children:"dictionary"})," ",(0,s.jsx)(n.code,{children:"messages"})," in the contract. Further consider that each account may write its own message and that the messages are stored under the account's ",(0,s.jsx)(n.a,{href:"/concepts/glossary/A#account-hash",children:"account hash"})," as the dictionary key. Querying this kind of data is essential in any dApp; here is how to communicate contract data to and from the front-end."]}),"\n",(0,s.jsx)(n.p,{children:"Create a new component:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"touch src/Query.jsx\n"})}),"\n",(0,s.jsx)(n.p,{children:"Open the file and write:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'import axios from "axios";\nimport { CLPublicKey } from "casper-js-sdk";\n\nconst Query = (props) => {\n  return <button onClick={ () => query(props) }>Query</button>;\n}\n\nconst query = (props) => {\n  const accountHash = CLPublicKey.fromHex(props.publicKey).toAccountHashStr().substring(13);\n  axios.get("/queryMessage?accountHash=" + accountHash).then((response) => {\n    alert(response.data)\n  }).catch((error) => {\n    console.error(error.message);\n  });\n}\n\nexport default Query;\n'})}),"\n",(0,s.jsxs)(n.p,{children:["All this component does is render an HTML ",(0,s.jsx)(n.code,{children:"button"})," element that, when pressed, performs a ",(0,s.jsx)(n.code,{children:"GET"})," request to the backend that includes the user's active account hash. The account hash is derived from the active public key, and is used to look up the message stored by the current user."]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"toAccountHashStr"}),' method produces a string that is prepended by the text "account-hash-". In this case, this text is not needed, so it is discarded by chaining on the ',(0,s.jsx)(n.code,{children:"substring(13)"})," method."]})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["This functionality relies on the ",(0,s.jsx)(n.code,{children:"/queryMessage"})," endpoint, which should be implemented in your backend."]})}),"\n",(0,s.jsxs)(n.p,{children:["Now add this component to ",(0,s.jsx)(n.em,{children:"src/App.jsx"}),", making available the ",(0,s.jsx)(n.code,{children:"publicKey"})," state variable via a prop:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'import React from "react";\nimport Connect from "./Connect";\nimport UpdateMessage from "./UpdateMessage";\n// highlight-next-line-green\nimport Query from "./Query";\nimport \'./App.css\'\n\nfunction App() {\n    const [publicKey, setPublicKey] = React.useState(null);\n    return (\n        <>\n            <Connect setPublicKey={ setPublicKey } />\n            <div>\n                {publicKey !== null && (<>\n                    Wallet connected: {publicKey}<br/>\n                    <UpdateMessage publicKey={ publicKey } />\n                    // highlight-next-line-green\n                    <Query publicKey={ publicKey } />\n                </>)}\n            </div>\n        </>\n    );\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"test-application",children:"Test Application"}),"\n",(0,s.jsx)(n.p,{children:"Test your application by running the following:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"vite dev\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Your application will start locally, and a URL will be shown where you can visit your application. Alternatively, press ",(0,s.jsx)(n.code,{children:"h"}),", then ",(0,s.jsx)(n.code,{children:"o"})," to open the app in a browser."]}),"\n",(0,s.jsx)(n.h2,{id:"build-for-production",children:"Build for Production"}),"\n",(0,s.jsx)(n.p,{children:"When you're ready to release your application, you'll want to compile it to pure JavaScript and serve it from a web server. Do so by running:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"vite build\n"})}),"\n",(0,s.jsx)(n.p,{children:"Once this is complete, you can preview your production build by running:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"vite preview\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var s=t(6540);const r={},o=s.createContext(r);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);