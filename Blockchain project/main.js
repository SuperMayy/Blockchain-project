class Block{
  constructor(index, timestamp, data, previousHash = ''){
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.hash = this.calculateHash();
  }

  calculateHash(){
    return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
  }
}

class Blockchain{
  constructor(){
    this.chain = [this.createGenesisBlock()];
  }
  createGenesisBlock(){
    return new Block(0, "24/10/2019", "Genesis block", "0");
  }
  getLatestBlock(){
    return this.chain[this.chain.lenght -1];
  }
  addBlock(newBlock){
    newBlock.previousHash = this.getLatestBlock().hash;
    newBlock.previousHash = newBlock.calculateHash();
    this.chain.push (newBlock);
  }
  isChainValid(){
    for(let i=1; 1<this.chain.lenght; i++){
      const currentBlock = this.chain(1);
      const previousBlock = this.chain(i-1);

      if(currentBlock.hash !== currentBlock.calculateHash()){
        return false;
      }
      if(currentBlock.previousHash !== previousBlock.hash){
        return false;
      }
    }
    return true;

    let mayCoin = new Blockchain();
    mayCoin.addBlock(new Block (1, "10/07/2017"{amount: 4}));
    mayCoin.addBlock(new Block (2, "12/07/2017"{amount: 10}));
  }
}
