export default {
  template: /*html*/ `
    <div class="flex gap-2 justify-center">
      <button
        @click="$emit('update:currentTag', tag)"
        v-for="tag in allTags"
        class="border rounded px-1 py-px text-xs hover:bg-blue-500 hover:border-blue-600 duration-300"
        :class="{
          'bg-blue-500 border-blue-600' : currentTag === tag,
          'bg-gray-600 border-gray-500' : currentTag !== tag,
        }"
      >{{ tag }}
    </button>
  </div>
  `,

  props: {
    tags: Array,
    currentTag: String,
  },

  computed: {
    allTags() {
      // Return a new Set of tags from the assignments
      return ['all', ... new Set(this.tags) ];
    }
  }
}