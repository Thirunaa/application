import React, { useState } from "react";
// eslint-disable-next-line
import { TextField, Button, Card } from "@material-ui/core";
import { useStyles } from "../styles/ApplicationFormStyles";

function ApplicationForm() {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    resume: "",
    linkedIn: "",
    github: "",
    gender: "",
    race: "",
    veteranStatus: "",
    disablity: "",
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const updatedValue = type === "checkbox" ? checked : value;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: updatedValue }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle form submission here or pass the formData to a parent component via a callback.
    console.log(formData);
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card style={{ height: "50%", width: "50%" }}>
          <form onSubmit={handleSubmit}>
            <label>
              First Name:
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
            </label>
            <br />
            <label>
              Last Name:
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
            </label>
            <br />
            <label>
              Email ID:
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </label>
            <br />
            <label>
              Phone Number:
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
            </label>
            <br />
            <label>
              Resume Upload:
              <input type="file" name="resume" onChange={handleChange} accept=".pdf,.doc,.docx" required />
            </label>
            <br />
            <label>
              LinkedIn Profile Link:
              <input type="text" name="linkedIn" value={formData.linkedIn} onChange={handleChange} />
            </label>
            <br />
            <label>
              GitHub Profile Link:
              <input type="text" name="github" value={formData.github} onChange={handleChange} />
            </label>
            <br />
            <label>
              Gender Identification:
              <select name="gender" value={formData.gender} onChange={handleChange} required>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="prefer-not-to-say">Prefer Not to say</option>
                <option value="other">Other</option>
              </select>
            </label>
            <br />
            <p>
              Voluntary Self-Identification For government reporting purposes, we ask candidates to respond to the below
              self-identification survey. Completion of the form is entirely voluntary. Whatever your decision, it will
              not be considered in the hiring process or thereafter. Any information that you do provide will be
              recorded and maintained in a confidential file. As set forth in OpenTeams’s Equal Employment Opportunity
              policy, we do not discriminate on the basis of any protected group status under any applicable law.
            </p>
            <label>
              Race Identification:
              <select name="race" value={formData.race} onChange={handleChange} required>
                <option value=""> Please select</option>
                <option value="hispanic">Hispanic or Latino</option>
                <option value="white">White</option>
                <option value="black">Black or African American</option>
                <option value="native">American Indian or Alaska Native</option>
                <option value="asian">Asian</option>
                <option value="native-hawaiian">Native Hawaiian or Other Pacific Islander</option>
                <option value="other">Other</option>
                <option value="prefer-not-to-say">Prefer Not to say</option>
              </select>
            </label>
            <br />
            <p>
              If you believe you belong to any of the categories of protected veterans listed below, please indicate by
              making the appropriate selection. As a government contractor subject to the Vietnam Era Veterans
              Readjustment Assistance Act (VEVRAA), we request this information in order to measure the effectiveness of
              the outreach and positive recruitment efforts we undertake pursuant to VEVRAA. Classification of protected
              categories is as follows: A "disabled veteran" is one of the following: a veteran of the U.S. military,
              ground, naval or air service who is entitled to compensation (or who but for the receipt of military
              retired pay would be entitled to compensation) under laws administered by the Secretary of Veterans
              Affairs; or a person who was discharged or released from active duty because of a service-connected
              disability. A "recently separated veteran" means any veteran during the three-year period beginning on the
              date of such veteran's discharge or release from active duty in the U.S. military, ground, naval, or air
              service. An "active duty wartime or campaign badge veteran" means a veteran who served on active duty in
              the U.S. military, ground, naval or air service during a war, or in a campaign or expedition for which a
              campaign badge has been authorized under the laws administered by the Department of Defense. An "Armed
              forces service medal veteran" means a veteran who, while serving on active duty in the U.S. military,
              ground, naval or air service, participated in a United States military operation for which an Armed Forces
              service medal was awarded pursuant to Executive Order 12985.
            </p>
            <label>
              Veteran Status:
              <select name="veteran-status" value={formData.veteranStatus} onChange={handleChange} required>
                <option value="">Please Select</option>
                <option value="not-a-protected-veteran">Not a Protected Veteran</option>
                <option value="protected-veteran">Protected Veteran</option>
                <option value="dont-wish-to-say">I don not wish to say</option>
              </select>
            </label>
            <br />
            <p>
              Voluntary Self-Identification of Disability Form CC-305 OMB Control Number 1250-0005 Expires 5/31/2023 Why
              are you being asked to complete this form? We are a federal contractor or subcontractor. The law requires
              us to provide equal employment opportunity to qualified people with disabilities. We have a goal of having
              at least 7% of our workers as people with disabilities. The law says we must measure our progress towards
              this goal. To do this, we must ask applicants and employees if they have a disability or have ever had
              one. People can become disabled, so we need to ask this question at least every five years. Completing
              this form is voluntary, and we hope that you will choose to do so. Your answer is confidential. No one who
              makes hiring decisions will see it. Your decision to complete the form and your answer will not harm you
              in any way. If you want to learn more about the law or this form, visit the U.S. Department of Labor’s
              Office of Federal Contract Compliance Programs (OFCCP) website at www.dol.gov/ofccp. How do you know if
              you have a disability? A disability is a condition that substantially limits one or more of your “major
              life activities.” If you have or have ever had such a condition, you are a person with a disability.
              Disabilities include, but are not limited to: Alcohol or other substance use disorder (not currently using
              drugs illegally) Autoimmune disorder, for example, lupus, fibromyalgia, rheumatoid arthritis, HIV/AIDS
              Blind or low vision Cancer (past or present) Cardiovascular or heart disease Celiac disease Cerebral palsy
              Deaf or serious difficulty hearing Diabetes Disfigurement, for example, disfigurement caused by burns,
              wounds, accidents, or congenital disorders Epilepsy or other seizure disorder Gastrointestinal disorders,
              for example, Crohn's Disease, irritable bowel syndrome Intellectual or developmental disability Mental
              health conditions, for example, depression, bipolar disorder, anxiety disorder, schizophrenia, PTSD
              Missing limbs or partially missing limbs Mobility impairment, benefiting from the use of a wheelchair,
              scooter, walker, leg brace(s) and/or other supports Nervous system condition, for example, migraine
              headaches, Parkinson’s disease, multiple sclerosis (MS) Neurodivergence, for example,
              attention-deficit/hyperactivity disorder (ADHD), autism spectrum disorder, dyslexia, dyspraxia, other
              learning disabilities Partial or complete paralysis (any cause) Pulmonary or respiratory conditions, for
              example, tuberculosis, asthma, emphysema Short stature (dwarfism) Traumatic brain injury
            </p>
            <label>
              Disability Status:
              <select name="disablity" value={formData.disablity} onChange={handleChange} required>
                <option value="">Please Select</option>
                <option value="yes-i-have-a-disability-or-previously-had-a-disability">
                  Yes, I have a disability (or previously had a disability)
                </option>
                <option value="no-i-dont-have-a-disability">No, I don't have a disability</option>
                <option value="i-dont-wish-to-answer">I don't wish to answer</option>
              </select>
            </label>
            <br />
            <br />
            <br />
            <Button className={classes.custom_btn} id="submitButton" name="submitButton" type="submit">
              Submit Application
            </Button>
            <br />
            <br />
          </form>
        </Card>
      </div>
    </div>
  );
}

export default ApplicationForm;
