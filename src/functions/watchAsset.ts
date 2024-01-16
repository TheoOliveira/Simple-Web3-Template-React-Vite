const tokenAddress = "0x00e1656e45f18ec6747F5a8496Fd39B50b38396D";
const tokenSymbol = "BCOIN";
const tokenDecimals = 18;
const tokenImage = "https://bscscan.com/token/images/bombcrypto_32.png";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare let window: any;

async function watchAsset() {
  if (window.ethereum) {
    try {
      // 'wasAdded' is a boolean. Like any RPC method, an error can be thrown.
      const wasAdded = await window.ethereum.request({
        method: "wallet_watchAsset",
        params: {
          type: "ERC20",
          options: {
            address: tokenAddress, // The address of the token.
            symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 characters.
            decimals: tokenDecimals, // The number of decimals in the token.
            image: tokenImage, // A string URL of the token logo.
          },
        },
      });

      if (wasAdded) {
        console.log("Thanks for your interest!");
      } else {
        console.log("Your loss!");
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export default watchAsset;
