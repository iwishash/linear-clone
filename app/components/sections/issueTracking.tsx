import Features from '../features';
import {
  AutomatedBacklogIcon,
  CustomViewsIcon,
  DiscussionIcon,
  IssuesIcon,
  ParentSubIcon,
  WorkflowsIcon,
} from '../icons/features';

const IssueTracking = () => {
  return (
    <div>
      <Features color='194,97,254'>
        {/* <Features.Title>
          <h2 className='leading-tight mb-4'>
            Issue tracking <br />
            you’ll enjoy using
          </h2>
        </Features.Title> */}
        <Features.Main
          text='Create tasks in seconds, discuss issues in context, and breeze through your work in views tailored to you and your team.
'
          image='/issues.avif'
          title={
            <h2 className='leading-tight mb-4'>
              Issue tracking <br />
              you’ll enjoy using
            </h2>
          }
        />
        <Features.Grid
          features={[
            {
              icon: ParentSubIcon,
              title: 'Parent and sub-issues.',
              text: 'Break larger tasks into smaller issues.',
            },
            {
              icon: AutomatedBacklogIcon,
              title: 'Automated backlog.',
              text: 'Linear will auto-close and auto-archive issues.',
            },
            {
              icon: WorkflowsIcon,
              title: 'Custom workflows.',
              text: 'Define unique issue states for each team.',
            },
            {
              icon: CustomViewsIcon,
              title: 'Filters and custom views.',
              text: 'See only what’s relevant for you.',
            },
            {
              icon: DiscussionIcon,
              title: 'Discussion',
              text: 'Collaborate on issues without losing context.',
            },
            {
              icon: IssuesIcon,
              title: 'Issue templates.',
              text: 'Guide your team to write effective issues.',
            },
          ]}
        />
        <Features.Cards
          features={[
            {
              image: '/listboard.webp',
              imageClassName: 'top-[30%] lg:top-[40%] w-[200%]',
              title: 'List and board',
              text: 'Switch between list and board layout to view work from any angle.',
            },
            {
              image: '/todolist.avif',
              imageClassName: 'top-[24%] lg:top-[34%] left-[24px] w-[110%]',
              title: 'Make it yours',
              text: 'Quickly apply filters and operators to refine your issue lists and create custom views.',
            },
          ]}
        />
      </Features>
    </div>
  );
};

export default IssueTracking;
