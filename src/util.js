import Web3 from 'web3'
const telegram = 'https://t.me/TreasuryBSC'
const twitter = 'https://twitter.com/Treasurbsc'
const contact = 'https://bscscan.com/address/0x84dc6ac4b68a34cfd1ae9ff9c6e133f4a8681c24'
const github = 'https://github.com/TreasuryToken/Treasury '

export const openTelegram = function() {
    window.open(telegram, '_blank')
}
export const openTwitter = function() {
    window.open(twitter, '_blank')
}
export const openContact = function() {
    window.open(contact, '_blank')
}
export const openGithub = function() {
    window.open(github, '_blank')
}

export const getWeb3 = async function() {
    // return new Promise(async (resolve, reject) => {
        // window.addEventListener('load', async () => {
            if (window.ethereum) {
                const web3 = new Web3(window.ethereum)
                try {
                    await window.ethereum.enable()
                    // resolve(web3)
                    return web3
                } catch (error) {
                    // reject(error)
                    console.error('getweb3 error', error)
                }
            } else if (window.web3) {
                const web3 = window.web3
                console.log('injected web3 detected.')
                // resolve(web3)
                return web3
            }
        // })
    // })
}

export const InitWallet = function() {
    return new Promise((resolve, reject) => {
        //判断用户是否安装MetaMask钱包插件
        if (typeof window.ethereum === "undefined") {
            //没安装MetaMask钱包进行弹框提示
            console.warn("请安装MetaMask")
            reject('请安装MetaMask')
        } else {
            getWeb3().then(async res => {
                const web3 = res
                const account = await web3.eth.getAccounts()
                console.log('account', account[0]);
                resolve(account[0])
            })
        }
    })
    
}

export const transfer = function(web3, fromAddress, toAddress) {
    let value = web3.utils.toWei('1', 'ether')
    const message = { from: fromAddress, to: toAddress, value: value}
    web3.eth.sendTransaction(message, (err, res) => {
        let output = ''
        if (!err) {
            output += res
        } else {
            output = "Error " + err
        }
        return output
    })
}
