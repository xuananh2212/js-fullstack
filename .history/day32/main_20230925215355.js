F8.component("counter-app", {
  data: () => ({
    count: 0,
    title: "counter App",
  }),
  template: `
     <h1>{{ title }}</h1>
     <h2> Đã Đếm : {{ count }} lần</h2>
     <button v-on:click="count--">-</button>
     <button v-on:click="count++">+</button>
    `,
});
