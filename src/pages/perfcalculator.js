import clsx from 'clsx';
import { useState } from 'react';
import Link from '@docusaurus/Link';
import Alert from 'react-bootstrap/Alert';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
            PerfCalculator
        </Heading>
        <p className="hero__subtitle">Accurately simulate production workload with proper performance testing planning.</p>        
      </div>
    </header>
  );
}

function LittlesLaw() {
    return (
        <div className='container'>
            <h1>⚖️ Little's Law</h1>
            <p>
            Simply put, here is the formula N = Z * (R + T) where
            <ul>
                <li>N = Number of Users</li>
                <li>Z = Number of Transactions per seconds</li>
                <li>R = Average Response Time in seconds</li>
                <li>T = Think Time in seconds</li>
            </ul>
            </p>
        </div>
    );
}
function VirtualUsers() {
    const [transactionsPerSecond, setTransactionsPerSecond] = useState('10');
    const [responseTime, setResponseTime] = useState('2');
    const [thinkTime, setThinkTime] = useState('3');
    return (
    <>
    <div className='container'>
        <h1>👨‍👩‍👧‍👦 Virtual Users</h1>
        <p>
            Virtual Users are the number of users that are simulated by the performance testing tool. 
        </p>
        <label style={{ display: 'flex', flexDirection: 'column' }}>
            Transactions Per Second:
            <input
                value={transactionsPerSecond}
                style={{ width: '200px' }}
                onChange={e => setTransactionsPerSecond(e.target.value)}
                type="number"
            />           
        </label>
        <br />
        <label style={{ display: 'flex', flexDirection: 'column' }}>
            Average Response Time (seconds):
            <input
                style={{ width: '200px' }}
                value={responseTime}
                onChange={e => setResponseTime(e.target.value)}
            />
        </label>
        <br />
        <label style={{ display: 'flex', flexDirection: 'column' }}>
            Think Time (seconds):
            <input
                value={thinkTime}
                style={{ width: '200px' }}
                onChange={e => setThinkTime(e.target.value)}
                type="number"
            />
        </label>
        <br />
        {
            <p>Number of virtual users required is {parseInt(parseInt(transactionsPerSecond) * (parseFloat(responseTime) + parseFloat(thinkTime)))}.</p>
        }
    </div>
    </>
    );

}
function Pacing() {
    const [transactionsPerHour, setTransactionsPerHour] = useState('36000');
    const [virtualUsers, setVirtualUsers] = useState('100');
    return (
    <>
    <div className='container'>
        <h1>⌛ Pacing</h1>
        <p>
            Pacing is the time between two consecutive transactions.
        </p>
        <label style={{ display: 'flex', flexDirection: 'column' }}>
            Transactions Per Hour:
            <input
                value={transactionsPerHour}
                style={{ width: '200px' }}
                onChange={e => setTransactionsPerHour(e.target.value)}
                type="number"
            />           
        </label>
        <br />
        <label style={{ display: 'flex', flexDirection: 'column' }}>
            Number of Virtual Users:
            <input
                style={{ width: '200px' }}
                value={virtualUsers}
                onChange={e => setVirtualUsers(e.target.value)}
            />
        </label>        
        <br />
        {
            <p>Pacing time required is {parseFloat((parseInt(virtualUsers)*3600) / parseInt(transactionsPerHour))} seconds.</p>
        }
    </div>
    </>
    );

}

function TestData() {
    const [virtualUsersTestData, setVirtualUsersTestData] = useState('10');
    const [vUserDurationMinutes, setVUserDurationMinutes] = useState('2');
    const [testDurationHour, setTestDurationHour] = useState('3');
    return (
    <>
    <div className='container'>
        <h1>🧪 Test Data</h1>
        <p>
            Unique data is required for each virtual user.
        </p>
        <label style={{ display: 'flex', flexDirection: 'column' }}>
            Number of virtual users:
            <input
                value={virtualUsersTestData}
                style={{ width: '200px' }}
                onChange={e => setVirtualUsersTestData(e.target.value)}
                type="number"
            />           
        </label>
        <br />
        <label style={{ display: 'flex', flexDirection: 'column' }}>
            Each Vuser duration (minutes):
            <input
                style={{ width: '200px' }}
                value={vUserDurationMinutes}
                onChange={e => setVUserDurationMinutes(e.target.value)}
            />
        </label>
        <br />
        <label style={{ display: 'flex', flexDirection: 'column' }}>
            Test duration (hours):
            <input
                value={testDurationHour}
                style={{ width: '200px' }}
                onChange={e => setTestDurationHour(e.target.value)}
                type="number"
            />
        </label>
        <br />
        {
            <p>Total Test Data required is {parseInt((parseInt(virtualUsersTestData) * (parseFloat(testDurationHour)) * (60/parseFloat(vUserDurationMinutes))))}.</p>
        }
    </div>
    </>
    );

}

function LoadGenerator() {
    const [lgRAM, setLGRAM] = useState('4024');
    const [firstVUserMemoryMB, setFirstVUserMemoryMB] = useState('200');
    const [additionalVUserMemoryMB, setAdditionalVUserMemoryMB] = useState('100');
    const [osRAM, setOSRAM] = useState('1024');
    const [totalVUsers, setTotalVUsers] = useState('0'); 

    return (
    <>
    <div className='container'>
        <h1>🔋 Load Generators</h1>
        <p>
            How many Load Generators do you need?
        </p>
        <label style={{ display: 'flex', flexDirection: 'column' }}>
            Total LG RAM (MB):
            <input
                value={lgRAM}
                style={{ width: '200px' }}
                onChange={e => setLGRAM(e.target.value)}
                type="number"
            />           
        </label>
        <br />
        <label style={{ display: 'flex', flexDirection: 'column' }}>
            First VUser Memory (MB):
            <input
                style={{ width: '200px' }}
                value={firstVUserMemoryMB}
                onChange={e => setFirstVUserMemoryMB(e.target.value)}
            />
        </label>
        <br />
        <label style={{ display: 'flex', flexDirection: 'column' }}>
            Each Additional VUser Memory (MB):
            <input
                value={additionalVUserMemoryMB}
                style={{ width: '200px' }}
                onChange={e => setAdditionalVUserMemoryMB(e.target.value)}
                type="number"
            />
        </label>
        <br />
        <label style={{ display: 'flex', flexDirection: 'column' }}>
            OS RAM - typically it would be around 700-750 MB:
            <input
                value={osRAM}
                style={{ width: '200px' }}
                onChange={e => {                    
                    setOSRAM(e.target.value)
                }                    
                }
                type="number"
            />
        </label>
        <ToastContainer />
        <br />
        {/*((((inputs.lgram - inputs.osRAM) * 0.75) - (inputs.fVuserMemory)) / (inputs.additionalVUserMemory))+1 */}
        {
            <p>
                <label style={{ display: 'flex', flexDirection: 'column' }}>
                    Total Virtual Users that can run on that Load Generator is
                </label>
                {
                    parseInt(((parseInt(lgRAM) - parseInt(osRAM)) * 0.75 - parseInt(firstVUserMemoryMB)) / parseInt(additionalVUserMemoryMB)) + 1 < 0 ?
                        toast.error("OS RAM is too high. Please reduce it.") :
                    parseInt(((parseInt(lgRAM) - parseInt(osRAM)) * 0.75 - parseInt(firstVUserMemoryMB)) / parseInt(additionalVUserMemoryMB)) + 1
                }                
                .
            </p>
        }
    </div>
    </>
    );

}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Performance Testing Calculators - calculate think time, pacing, load generators, test data, and more.">
      <HomepageHeader />
      <br/>
      <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ flex: 1 }}>
            <LittlesLaw /><br />
        </div>
      </main>

      <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ display: 'flex' }}>            
            <div style={{ flex: 1 }}>
                <VirtualUsers /><br /><br />
                <Pacing />
            </div>
            <div style={{ flex: 1 }}>
                <TestData /><br /><br />
                <LoadGenerator />
            </div>
        </div>
    </main>      
    </Layout>
  );
}
