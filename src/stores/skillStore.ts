import { ISkill } from '@/interfaces/ISkill';
import { ISkillType } from '@/interfaces/ISkillType';
import { makeAutoObservable } from 'mobx';

class SkillStore {
  skills: ISkill[] = [];
  skillTypes: ISkillType[] = [];
  selectedSkillTypes: Set<number> = new Set();

  constructor() {
    makeAutoObservable(this);
  }

  setSkills(skills: ISkill[]) {
    const skillTypeMap = skills.reduce((map, skill) => {
      const type = skill.skill_type;
      if (type && !map.has(type.id)) {
        map.set(type.id, type);
      }
      return map;
    }, new Map<number, ISkillType>());

    this.skills = skills;
    this.skillTypes = Array.from(skillTypeMap.values());
  }

  toggleSkillTypeFilter(skillTypeId: number) {
    if (this.selectedSkillTypes.has(skillTypeId)) {
      this.selectedSkillTypes.delete(skillTypeId);
    } else {
      this.selectedSkillTypes.add(skillTypeId);
    }
  }

  get filteredSkills(): ISkill[] {
    return this.skills.filter((skill) => this.selectedSkillTypes.has(skill.skill_type.id));
  }
}

const skillStore = new SkillStore();
export default skillStore;
