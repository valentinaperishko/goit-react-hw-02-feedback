import React, { Component } from 'react';
import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section/';
import Statistics from './components/Statistics/';
import styles from './index.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = event => {
    this.setState(prevState => ({
      [event.target.textContent]: prevState[event.target.textContent] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedback = () => {
    const { good, neutral } = this.state;
    const result = parseInt(
      ((good + neutral) * 100) / this.countTotalFeedback(),
    );
    return ` ${result}%`;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    return (
      <div className={styles.container}>
        <h2>Please leave your feedback</h2>
        <Section className={styles.feedbackSection}>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.leaveFeedback}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedback()}
          />
        </Section>
      </div>
    );
  }
}

export default App;
