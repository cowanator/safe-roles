import type { Contracts } from "./.lib/types";

export default {
  sepolia: {
    mevBilling: "0xF1436859a0F04A827b79F8c92736F6331ebB64A1",
  },
  mainnet: {
    mevBilling: "0x08Cd77fEB3fB28CC1606A91E0Ea2f5e3EABa1A9a",
    weth: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    uniswap: {
      positions_nft: "0xC36442b4a4522E871399CD717aBDD847Ab11FE88",
    },
  },
} satisfies Contracts;
