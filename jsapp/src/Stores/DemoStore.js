import { observable } from 'mobx';

class DemoStore {
    @observable count = 100;

    sum() {
        this.count += 20;
    }
}

const demoStore = new DemoStore();

export default demoStore;
