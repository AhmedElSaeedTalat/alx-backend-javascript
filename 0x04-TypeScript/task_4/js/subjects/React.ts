namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number,
  }
  export class React extends Subjects.Subject {
    getRequirements() : string {
      return 'Here is the list of requirements for React';
    }

    getAvailableTeacher() : string {
      if (this.teacher && this.teacher.experienceTeachingReact > 0) {
        return `vailable Teacher: ${this.teacher.firstName}`;
      }
	  return 'No available teacher';
    }
  }
}
