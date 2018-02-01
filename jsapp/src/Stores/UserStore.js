import { computed, observable } from 'mobx';

class UserStore {
    @observable walletId = null;

    setWallet(wallet) {
        this.walletId = wallet;
    }

    @computed
    get secureWallet() {
        if (this.walletId) {
            return `${this.walletId.slice(0, 6)}...${this.walletId.slice(-6)}`;
        }

        return null;
    }

    logout() {
        this.walletId = null;
    }
}

const userStore = new UserStore();

export default userStore;
