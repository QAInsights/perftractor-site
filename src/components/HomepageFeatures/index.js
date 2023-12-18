import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';


const FeatureList = [
  {
    title: 'PerfCalculator',
    Svg: require('@site/static/img/perftractor.svg').default,
    description: (
      <>
        <p>A must-have calculator for performance engineers.</p>
        <p>
        Simulate production workload using virtual users, transactions per second, response time, think time, and more.
        </p>
      </>
    ),
    link: '/perfcalculator'
  },
  {
    title: 'PerfDemo',
    Svg: require('@site/static/img/perfdemo.svg').default,
    description: (
      <>
        <p>Collection of demo apps to learn performance concepts.</p>        
      </>
    ),
    link: '/docs/perfdemo'
  }
];

function Feature({Svg, title, description, link}) {
  return (    
    <div className={clsx('col col--12', 'text--center')}>
      <div>
        <Link to={link}>
          <Svg className={styles.featureSvg} role="img" />
        </Link>
      </div>
      <div className="padding-horiz--md">
        <Link to={link}>
          <Heading as="h3">{title}</Heading>
        </Link>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
