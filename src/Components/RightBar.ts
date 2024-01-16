import { BaseComponent } from "sympl";
import { IElementBuilder } from "sympl/types/Definitions/Definitions";
import { LNW, Personal, ADI} from '../Settings/Components/RightBar';

export class RightBar extends BaseComponent
{
    protected _elementBuilder: IElementBuilder;

    constructor(parent, componentID, settings)
    {
        super(parent, componentID, settings);
        this._elementBuilder = this._parent.ElementBuilder;
        this.createElements();
    }

    protected createElements()
    {
        const wrapper = this._elementBuilder.buildElement(
            {
                type: 'div',
                elementID: 'RightBarWrapper'
            }
        )
        wrapper.appendChild(this.createDescription());
        wrapper.appendChild(this.createExperienceSection());
        this._element.appendChild(wrapper);
    }

    protected createDescription()
    {
        const descSection = this._elementBuilder.buildElement(
            {
                type: 'div',
                elementID: 'description-section'
            }
        );

        const title = this._elementBuilder.buildElement(
            {
                type: 'h2',
                elementID: 'description-title'
            }
        );
        title.innerText = 'Rich Balfourth - Junior Developer'

        const description = this._elementBuilder.buildElement(
            {
                type: 'p',
                elementID: 'description-about'
            }
        );
        description.innerText = 'Determined and ambitious, with experience in web devlopment, and professional experience in web game development, including feature implementation, testing and CI/CD. Noted as being a rapid learner with a perpetal desire for knowledge. Communicative and proficient at working in teams or solo to consistently meet targets and deadlines.'

        descSection.appendChild(title);
        descSection.appendChild(description);
        return descSection;
    }

    protected createExperienceSection()
    {
        const experienceSection = this._elementBuilder.buildElement(
            {
                type: 'div',
                elementID: 'experience-section'
            }
        );

        const title = this._elementBuilder.buildElement(
            {
                type: 'h2',
                elementID: 'experience-title'
            }
        );
        title.innerText = 'PROFESSIONAL EXPERIENCE';
        
        const lnwJob = this.createExperience(LNW.title, LNW.company, LNW.description, LNW.roles, LNW.dates);
        const personalProjects = this.createExperience(Personal.title, Personal.company, Personal.description, Personal.roles);
        const adiJob = this.createExperience(ADI.title, ADI.company, ADI.description, ADI.roles, ADI.dates);

        experienceSection.appendChild(title);
        experienceSection.appendChild(lnwJob);
        experienceSection.appendChild(personalProjects);
        experienceSection.appendChild(adiJob);
        return experienceSection;
    };

    protected createExperience(jobTitle: string, company: string, jobDesc: string, jobRoles: string[], dates?: string,): HTMLElement
    {
        const jobSection = this._elementBuilder.buildElement(
            {
                type: 'div',
            }
        );
        jobSection.setAttribute('class', 'job-subsection')

        const title = this._elementBuilder.buildElement(
            {
                type: 'h3'
            }
        );
        title.innerText = jobTitle;

        const infoSection = this._elementBuilder.buildElement(
            {
                type: 'div'
            }
        );
        infoSection.setAttribute('class', 'job-info-section')

        const jobName = this._elementBuilder.buildElement(
            {
                type: 'h4'
            }
        );
        jobName.innerText = company;
        infoSection.appendChild(jobName);
        if (dates)
        {
            const jobDates = this._elementBuilder.buildElement(
                {
                    type: 'p'
                }
            )
            jobDates.innerText = dates;
            infoSection.appendChild(jobDates);
        };

        const description = this._elementBuilder.buildElement(
            {
                type: 'p'
            }
        );
        description.innerText = jobDesc;

        const roleList = this._elementBuilder.buildElement(
            {
                type: 'ul'
            }
        );
        jobRoles.forEach((role) => { 
            const li = this.createListElement(role);
            roleList.appendChild(li);
        });

        jobSection.appendChild(title);
        jobSection.appendChild(infoSection);
        jobSection.appendChild(description);
        jobSection.appendChild(roleList);

        return jobSection;
    };

    protected createListElement(text: string): HTMLElement
    {
        const li = this._elementBuilder.buildElement(
            {
                type: 'li',
            }
        )
        li.innerText = text;
        return li
    }
}