import React, { useState } from 'react';

import PageTransition from '../../components/PageTransition';
import H1Tag from '../../components/Tags/H1';
import Skill from './components/Skill';
import Tag from '../../components/Tag';

import { generateComponentKey } from '../../utils/ functions';

import Css3Image from '../../assets/images/css_3.webp';
import ReactImage from '../../assets/images/react.webp';
import VuejsImage from '../../assets/images/vuejs.webp';
import JsImage from '../../assets/images/js.webp';
import PhpImage from '../../assets/images/php.webp';
import GitImage from '../../assets/images/git.webp';
import GolangImage from '../../assets/images/golang.webp';
import FigmaImage from '../../assets/images/figma.webp';

import './style.scoped.sass'

const SKILLS_TYPE = [
    "Javascript",
    "Frontend",
    "Backend",
    "UX",
    "Design Tool",
];

const COMPONENT_KEY = generateComponentKey();

function SkillsPage(props) {
    const [checkedSkills, setCheckedSkills] = useState([]);

    /**
     * Change the check of a skill
     * 
     * @param {string} skill
     * @return 
     */
    const changeCheckSkill = (skill) => {
        if (isCheckedSkill(skill)) {
            setCheckedSkills((prevCheckedSkills) => {
                return prevCheckedSkills.filter((currentSkill) => currentSkill !== skill)
            });

        } else {
            setCheckedSkills((prevCheckedSkills) => {
                return [...prevCheckedSkills, skill];
            });

        }
    }

    /**
     * Check if a skill is checks
     * 
     * @param {string} skill
     * @return {boolean}
     */
    const isCheckedSkill = (skill) => {
        return checkedSkills.includes(skill);
    }

    return <PageTransition>
        <H1Tag>
            Habilidades
            <div className="skill-tags">
                {SKILLS_TYPE.map((skill, indice) => (
                    <div className="skill-tag">
                        <Tag
                            key={`${COMPONENT_KEY}_${indice}`}
                            checked={isCheckedSkill(skill)}
                            width="100%"
                            onClick={() => changeCheckSkill(skill)}
                        >
                            {skill}
                        </Tag>
                    </div>
                ))}
            </div>

            <div style={{ height: 20 }} />
        </H1Tag>

        <div className="skills">
            <div className="skill-item">
                <Skill
                    title="Javascript"
                    skillsTypes={[
                        "Lenguaje",
                        "Frontend"
                    ]}
                    progress={70}
                    image={{
                        src: JsImage,
                        alt: "Imagen de lenguaje Javascript"
                    }}
                />
            </div>

            <div className="skill-item">
                <Skill
                    title="CSS3"
                    skillsTypes={[
                        "Lenguaje",
                        "Frontend"
                    ]}
                    progress={70}
                    image={{
                        src: Css3Image,
                        alt: "Imagen de lenguaje CSS3"
                    }}
                />
            </div>

            <div className="skill-item">
                <Skill
                    title="React"
                    skillsTypes={[
                        "Frameweok",
                        "Frontend",
                    ]}
                    progress={70}
                    image={{
                        src: ReactImage,
                        alt: "Imagen de lenguaje React"
                    }}
                />
            </div>

            <div className="skill-item">
                <Skill
                    title="Vue Js"
                    skillsTypes={[
                        "Frameweok",
                        "Frontend",
                    ]}
                    progress={85}
                    image={{
                        src: VuejsImage,
                        alt: "Imagen de lenguaje Vuejs2"
                    }}
                />
            </div>

            <div className="skill-item">
                <Skill
                    title="Vue Js"
                    skillsTypes={[
                        "Lenguaje",
                        "Backend",
                    ]}
                    progress={40}
                    image={{
                        src: PhpImage,
                        alt: "Imagen de lenguaje Php"
                    }}
                />
            </div>

            <div className="skill-item">
                <Skill
                    title="Golang"
                    skillsTypes={[
                        "Lenguaje",
                        "Backend",
                    ]}
                    progress={30}
                    image={{
                        src: GolangImage,
                        alt: "Imagen de lenguaje golang"
                    }}
                />
            </div>

            <div className="skill-item">
                <Skill
                    title="Git"
                    skillsTypes={[
                        "Dev Tools",
                    ]}
                    progress={80}
                    image={{
                        src: GitImage,
                        alt: "Imagen de herramienta git"
                    }}
                />
            </div>

            <div className="skill-item">
                <Skill
                    title="Figma"
                    skillsTypes={[
                        "UX",
                        "Design Tools"
                    ]}
                    progress={75}
                    image={{
                        src: FigmaImage,
                        alt: "Imagen de herramienta figma"
                    }}
                />
            </div>
        </div>

    </PageTransition>
}

export default SkillsPage;