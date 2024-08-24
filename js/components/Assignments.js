import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
  components: {
    AssignmentList,
    AssignmentCreate,
  },

  template: /*html*/`
    <section class="flex gap-10 m-w-4/5">

      <assignment-list
        title="In Progress Assignments"
        :assignments="filters.inProgress"
      >
        <assignment-create @add="add" />
      </assignment-list>

      <assignment-list
        v-if="showCompleted"
        title="Completed Assignments"
        :assignments="filters.completed"
        canHide
        @hide="showCompleted = !showCompleted"
      />

    </section>
  `,

  data() {
    return {
      assignments: [],
      showCompleted: true,
    }
  },

  computed: {
    filters() {
      return {
        inProgress: this.assignments.filter(assignment => !assignment.complete),
        completed: this.assignments.filter(assignment => assignment.complete),
      }
    }
  },

  created() {
    fetch('http://localhost:3001/assignments')
      .then(response => response.json())
      .then(data => this.assignments = data)
  },

  methods: {
    add(name) {
      this.assignments.push({
        id: this.assignments.length + 1,
        name,
        complete: false,
        tag: 'math',
      });
    }
  }

}
