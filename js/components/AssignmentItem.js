export default {
  template: /*html*/ `
    <li>
      <label class="block cursor-pointer">
        {{ assignment.name }}
        <input type="checkbox" v-model="assignment.complete" class="cursor-pointer">
      </label>
    </li>
  `,

  props: {
    assignment: Object,
  },
}