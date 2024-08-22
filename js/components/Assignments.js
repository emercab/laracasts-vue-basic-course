import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
  components: {
    AssignmentList,
    AssignmentCreate,
  },

  template: /*html*/`
    <assignment-list
      title="In Progress Assignments"
      :assignments="filters.inProgress"
    />

    <assignment-list
      title="Completed Assignments"
      :assignments="filters.completed"
    />

    <assignment-create @add="add" />
  `,

  data() {
    return {
      assignments: [
        { id: 1, name: 'Finish project', complete: false, tag: 'math' },
        { id: 2, name: 'Read chapter 4', complete: false, tag: 'science' },
        { id: 3, name: 'Turn in homework', complete: false, tag: 'math' },
      ],
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

  methods: {
    add(name) {
      this.assignments.push({
        id: this.assignments.length + 1,
        name,
        complete: false,
      });
    }
  }

}
