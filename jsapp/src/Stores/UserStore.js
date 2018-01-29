import { observable } from 'mobx';

class UserStore {
    @observable walletId = null;

    setWallet(wallet) {
        this.walletId = wallet;
    }
}

const userStore = new UserStore();

export default userStore;
