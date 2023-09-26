F8.component("counter-app", {
  data: () => ({
    count: 0,
    title: "counter App",
  }),
  template: `
     <h1>{{ title }}</h1>
     <h2> Đã Đếm: {{ count }} lần</h2>
     <h1>{{ title }}</h1>
     <h2> Đã Đếm: {{ count }} lần</h2>
     <button v-on:click="count--">-</button>
     <button v-on:click="count++">+</button>
     <button v-on:click="title='xin chao F9'">change</button>
      <button v-on:dblclick="title='xin chao F1'">change double click</button>
    `,
});

F8.component("header-component", {
  template: `<h1>HEADER</h1>`,
});
