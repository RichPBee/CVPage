import { BaseComponent } from "sympl";
import { IElementBuilder } from "sympl/types/Definitions/Definitions";

export class LeftBar extends BaseComponent
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
                elementID: 'LeftBarWrapper'
            }
        )
        wrapper.appendChild(this.createDetailsSection());
        wrapper.appendChild(this.createCapabilitiesSection());
        wrapper.appendChild(this.createTechnicalsSection());
        wrapper.appendChild(this.createEducationSection());
        this._element.appendChild(wrapper);
    }

    protected createDetailsSection()
    {
        const detailSection = this._elementBuilder.buildElement(
            {
               type: 'div',
               elementID: 'details-section' 
            }
        );

        const title = this._elementBuilder.buildElement(
            {
                type: "h2",
                elementID: "detail-header",
            }
        );
        title.innerText = 'PERSONAL DETAILS';

        const details = this._elementBuilder.buildElement(
            {
                type: 'ul',
                elementID: 'detail-list'
            }
        );
        
        const emailItem = this.createListElement('ri.balfourth@gmail.com', 'email');
        const numberItem = this.createListElement('07825 828 629', 'number');
        const website = this.createListElement('github.com/RichPBee', 'website');
        const location = this.createListElement('Bristol, United Kingdom', 'location');
        const listItems = [emailItem, numberItem, website, location];
        
        listItems.forEach((item) => { 
            details.appendChild(item);
        })
        
        detailSection.appendChild(title);
        detailSection.appendChild(details);
        return detailSection;
    }

    protected createCapabilitiesSection()
    {
        const capabilitiesSection = this._elementBuilder.buildElement(
            {
                type: 'div',
                elementID: 'capabilities-section'
            }
        );

        const title = this._elementBuilder.buildElement(
            {
                type: 'h2',
                elementID: 'capabilities-header'
            }
        );
        title.innerText = 'KEY CAPABILITIES'
        
        const capabilities = this._elementBuilder.buildElement(
            {
                type: 'ul',
                elementID: 'capabilities-list'
            }
        );

        const one = this.createListElement('Game client development', 'capabilityOne');
        const two = this.createListElement('Web development', 'capabilityTwo');
        const three = this.createListElement('CI/CD', 'capabilityThree');
        const four = this.createListElement('Design implementation', 'capabilityFour');
        const five = this.createListElement('Technical writing', 'capabilityFive');
        const capabilitiesList = [one, two, three, four, five]; 
        
        capabilitiesList.forEach((item) => { 
            capabilities.appendChild(item);
        })
        
        capabilitiesSection.appendChild(title);
        capabilitiesSection.appendChild(capabilities);
        return capabilitiesSection;
    }

    protected createTechnicalsSection()
    {
        const techincalsSection = this._elementBuilder.buildElement(
            {
                type: 'div',
                elementID: 'technicals-section'
            }
        );

        const title = this._elementBuilder.buildElement(
            {
                type: 'h2',
                elementID: 'technicals-title'
            }
        );
        title.innerText = 'TECHNICAL EXPERIENCE';
        
        const languagesSection = this.createLanguagesSection();
        const toolsSection = this.createToolsSection();
        const othersSection = this.createOthersSection();

        techincalsSection.appendChild(title);
        techincalsSection.appendChild(languagesSection);
        techincalsSection.appendChild(toolsSection);
        techincalsSection.appendChild(othersSection);
        return techincalsSection;
    }

    protected createListElement(text: string, id: string): HTMLElement
    {
        const li = this._elementBuilder.buildElement(
            {
                type: 'li',
                elementID: id,
            }
        )
        li.innerText = text;
        return li
    }

    protected createLanguagesSection()
    {
        const languagesSection = this._elementBuilder.buildElement({type: 'div', elementID: 'languages-section'});
        const languages = this._elementBuilder.buildElement(
            {
                type: 'h4',
                elementID: 'languages'
            }
        );
        languages.innerText = 'Programming Languages:'
        
        const languageList = this._elementBuilder.buildElement(
            {
                type: 'p',
                elementID: 'languages-list'
            }
        );
        languageList.innerText = 'TypeScript, JavaScript, Python, C#, HTML, CSS';
        languagesSection.appendChild(languages);
        languagesSection.appendChild(languageList);

        return languagesSection;
    }

    protected createToolsSection()
    {
        const toolsSection = this._elementBuilder.buildElement(
            {
                type: 'div',
                elementID: 'tools-section'
            }
        );

        const title = this._elementBuilder.buildElement({
            type: 'h4',
            elementID: 'tools-title'
        });
        title.innerText = 'Tools and Frameworks';

        const toolsList = this._elementBuilder.buildElement({
            type: 'p',
            elementID: 'tools-list'
        });
        toolsList.innerText = 'React, Git, JIRA, Jenkins, SonarQube, Selenium, bash, ElectronJS, React, Unity, Gulp, Babel, Webpack, JSON';
    
        toolsSection.appendChild(title);
        toolsSection.appendChild(toolsList);
        return toolsSection;
    }

    protected createOthersSection()
    {
        const othersSection = this._elementBuilder.buildElement(
            {
                type: 'div',
                elementID: 'others-section'
            }
        )

        const title = this._elementBuilder.buildElement(
            {
                type: 'h4',
                elementID: 'others-title'
            }
        );
        title.innerText = 'Software & Other'

        const othersList = this._elementBuilder.buildElement(
            {
                type: 'p',
                elementID: 'others-list'
            }
        );
        othersList.innerText = 'Photoshop, After Effects, DaVinci Resolve, SAP ERP, OriginLab, Illustrator, Mathematics (Linear algebra, Calculus, Data Analysis, Formal Analysis, Geometry)';
            
        othersSection.appendChild(title);
        othersSection.appendChild(othersList);
        return othersSection;
    };

    protected createEducationSection()
    {
        const educationSection = this._elementBuilder.buildElement(
            {
                type: 'div',
                elementID: 'education-section'
            }
        );

        const title = this._elementBuilder.buildElement(
            {
                type: 'h2',
                elementID: 'education-title'
            }
        );
        title.innerText = 'EDUCATION';

        const subTitle = this._elementBuilder.buildElement(
            {
                type: 'h3',
                elementID: 'education-subtitle'
            }
        );
        subTitle.innerText = 'DIPLOMA OF HIGHER EDUCATION';

        const eduList = this._elementBuilder.buildElement(
            {
                type: 'ul',
                elementID: 'education-list'
            }
        );

        const uni = this.createListElement('University of Bristol', 'uni');
        const course = this.createListElement('Theoretical Physics (MSci)', 'course');
        const details = this.createListElement('2016-2019: Completed 2 course years', 'course-details');
        const eduListInfo = [uni, course, details];

        eduListInfo.forEach((item) => { 
            eduList.appendChild(item);
        });

        educationSection.appendChild(title);
        educationSection.appendChild(subTitle);
        educationSection.appendChild(eduList);
        return educationSection;
    }
}