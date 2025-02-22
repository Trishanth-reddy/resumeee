import { Link } from "components/documentation";

const QAS = [
  {
    question:
      "Q1. What is a resume builder? Why resume builder is better than resume template doc?",
    answer: (
      <>
        <p>
          There are two ways to create a resume today. One option is to use a
          resume template, such as an office/google doc, and customize it
          according to your needs. The other option is to use a resume builder,
          an online tool that allows you to input your information and
          automatically generates a resume for you.
        </p>
        <p>
          Using a resume template requires manual formatting work, like copying
          and pasting text sections and adjusting spacing, which can be
          time-consuming and error-prone. It is easy to run into formatting
          issues, such as using different bullet points or font styles after
          copying and pasting. On the other hand, a resume builder like
          Resumeee saves time and prevents formatting mistakes by
          automatically formatting the resume. It also offers the convenience of
          easily changing font types or sizes with a simple click. In summary, a
          resume builder is easier to use compared to a resume template.
        </p>
      </>
    ),
  },
  {
    question:
      "Q2. What uniquely sets Resumeee apart from other resume builders and templates?",
    answer: (
      <>
        <p>
          Other than Resumeee, there are some great free resume builders out
          there, e.g. <Link href="https://rxresu.me/">Reactive Resume</Link>,{" "}
          <Link href="https://flowcv.com/">FlowCV</Link>. However, Resumeee
          stands out with 2 distinctive features:
        </p>{" "}
        <p>
        <span className="font-semibold">
  1. Resumeee is designed specifically for the U.S. job market and
  best practices, built by a team based in Hyderabad, India.
</span>
<br />
Unlike other resume builders that target a global audience and offer
many customization options, Resumeee intentionally only offers
options that are aligned with U.S. best practices. For example, it
excludes the option to add a profile picture to avoid bias and
discrimination. It offers only the core sections, e.g. profile, work
experience, education, and skills, while omitting unnecessary sections
like references. Additionally, Resumeee only offers a top-down
single-column resume design as opposed to a two-column design, because
single-column design works best for Applicant Tracking Systems (ATS).
<br />
        </p>
        <p>
          <span className="font-semibold">
            2. Resumeee is super privacy focus.
          </span>{" "}
          <br />
          While other resume builders may require email sign up and store user
data in their databases, Resumeee believes that resume data should
remain private and secure. Resumeee offers an optional sign-up feature
for users who want to save their progress across devices, but all data
is encrypted and stored securely. For users who prefer not to sign up,
Resumeee also allows you to use the app without an account, storing
all inputted data locally in your browser for maximum privacy.
        </p>
      </>
    ),
  },
  {
    question: "Q3. Who created Resumeee and why?",
    answer: (
      <p>
        Resumeee was created by{" "}
Trishanth Chandana Mokshit as a hackathon project. 
As students passionate about solving real-world problems, we noticed how many 
people struggle with creating professional resumes that stand out to employers. 
We wanted to build a tool that simplifies the resume-building process while 
incorporating best practices and modern design. During the hackathon, we 
combined our skills in development and design to create Resumeee, integrating 
features that help users craft resumes with confidence. Our hope is that 
Resumeee can empower anyone to easily create a modern, professional resume 
and take the next step in their career journey.
      </p>
    ),
  },
];

export const QuestionsAndAnswers = () => {
  return (
    <section className="mx-auto max-w-3xl divide-y divide-gray-300 lg:mt-4 lg:px-2">
      <h2 className="text-center text-3xl font-bold">Questions & Answers</h2>
      <div className="mt-6 divide-y divide-gray-300">
        {QAS.map(({ question, answer }) => (
          <div key={question} className="py-6">
            <h3 className="font-semibold leading-7">{question}</h3>
            <div className="mt-3 grid gap-2 leading-7 text-gray-600">
              {answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};