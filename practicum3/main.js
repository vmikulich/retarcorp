Vue.component('app-countries', {
  template: `
    <div class="app-country">
      <a class="country-title" href="item.path" @click="loadChains">{{ item.country }}</a>
    </div>
  `,
  props: ['item'],
  methods: {
    loadChains(e) {
      e.preventDefault();
      this.$emit('country-click', this.item);
    }
  }
});

Vue.component('app-chains', {
  template: `
    <li class="app-chain">
      <a class="chain-title" href="item.stores" @click="loadShops">{{ item.company }}</a>
    </li>
  `,
  props: ['item'],
  methods: {
    loadShops(e) {
      e.preventDefault();
      this.$emit('chain-click', this.item);
    }
  }
})

Vue.component('app-stores', {
  template: `
    <li class="app-store clearfix">
      <a class="store-title" href="item.employees" @click="loadEmployees">{{ item.store }}</a>
      <button>Show info</button>
    </li>
  `,
  props: ['item'],
  methods: {
    loadEmployees(e) {
      e.preventDefault();
      this.$emit('employe-click', this.item);
    }
  }
})

Vue.component('app-employees', {
  template: `
    <div class="empl-container">
      <p>Positoin: <span>{{ item.position }}</span></p>
      <p>Name: <span>{{ item.Name }}</span></p>
      <p>Salary: <span>{{ item.salary }}</span></p>
    </div>
  `,
  props: ['item'],
})



new Vue({
  el: '#app',
  data: {
    countries: [],
    chains: [],
    stores: [],
    employees: [],
  },
  created() {
    this.loadCountries('countries.json');
  },
  methods: {
    loadCountries(path) {
      axios.get(`http://localhost:8080/data?path=./json/${path}`).then(res => {
                this.countries = res.data;
              });
    },
    loadChains(item) {
      axios.get(`http://localhost:8080/data?path=./json/${item.path}`).then(res => {
                this.chains = res.data;
              });
      this.stores = [];
      this.employees = [];
    },
    loadShops(item) {
      axios.get(`http://localhost:8080/data?path=./json/${item.stores}`).then(res => {
                this.stores = res.data;
              });
      this.employees = [];
    },
    loadEmployees(item) {
      axios.get(`http://localhost:8080/data?path=./json/${item.employees}`).then(res => {
                this.employees = res.data;
              });
    }
  }
});