export default {
  template: /*html*/ `
    <li class="">
      <label class="flex justify-between items-center cursor-pointer px-2 py-1">
        {{ assignment.name }}
        <input type="checkbox" v-model="assignment.complete" class="cursor-pointer mr-2">
      </label>
    </li>
  `,

  props: {
    assignment: Object,
  },
}