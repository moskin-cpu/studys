window.QUIZ_SET = {
  id: "ap-stats-u6",
  title: "AP Stats Unit 6 Review",
  description: "Inference for Proportions - Confidence Intervals and Significance Tests",
  questions: [
    {
      id: 1,
      question: "What is the correct interpretation of a 95% confidence interval?",
      options: [
        "There is a 95% chance that the true parameter is in this interval",
        "If we repeated this procedure many times, 95% of the intervals would contain the true parameter",
        "95% of the data falls within this interval",
        "We are 95% confident that the sample proportion is correct"
      ],
      correct: 1,
      explanation: "A 95% confidence interval means that if we repeated the sampling procedure many times, 95% of the resulting intervals would contain the true population parameter."
    },
    {
      id: 2,
      question: "Which condition is NOT required for a one-sample z-interval for a proportion?",
      options: [
        "Random sample",
        "10% condition (n ≤ 10% of population)",
        "Large Counts condition (np ≥ 10 and n(1-p) ≥ 10)",
        "Population must be normally distributed"
      ],
      correct: 3,
      explanation: "For proportions, we don't need the population to be normally distributed. The sampling distribution of p-hat becomes approximately normal due to the Central Limit Theorem when the Large Counts condition is met."
    },
    {
      id: 3,
      question: "A researcher wants to estimate the proportion of voters who support a candidate with a margin of error of 3% at 95% confidence. What sample size is needed if no prior estimate is available?",
      options: [
        "752",
        "1068",
        "1849",
        "2401"
      ],
      correct: 1,
      explanation: "Using p* = 0.5 (most conservative), n = (z*/ME)² × p*(1-p*) = (1.96/0.03)² × 0.5 × 0.5 = 1067.11, rounded up to 1068."
    },
    {
      id: 4,
      question: "In a hypothesis test, what does the p-value represent?",
      options: [
        "The probability that the null hypothesis is true",
        "The probability that the alternative hypothesis is true",
        "The probability of observing data as extreme as ours, assuming the null hypothesis is true",
        "The probability of making a Type I error"
      ],
      correct: 2,
      explanation: "The p-value is the probability of obtaining results as extreme as (or more extreme than) the observed results, assuming the null hypothesis is true."
    },
    {
      id: 5,
      question: "A 90% confidence interval for a proportion is (0.42, 0.58). What can we conclude about a hypothesis test of H₀: p = 0.50 vs Hₐ: p ≠ 0.50 at α = 0.10?",
      options: [
        "Reject H₀ - 0.50 is not in the interval",
        "Fail to reject H₀ - 0.50 is in the interval",
        "Reject H₀ - the interval is too wide",
        "Cannot determine from the confidence interval"
      ],
      correct: 1,
      explanation: "Since 0.50 is within the 90% confidence interval (0.42, 0.58), we fail to reject H₀ at α = 0.10. The confidence interval and hypothesis test are equivalent when the confidence level equals 1 - α."
    },
    {
      id: 6,
      question: "What happens to the width of a confidence interval when the sample size increases?",
      options: [
        "It increases",
        "It decreases",
        "It stays the same",
        "It depends on the confidence level"
      ],
      correct: 1,
      explanation: "As sample size increases, the standard error decreases (SE = √(p(1-p)/n)), which makes the margin of error smaller and the confidence interval narrower."
    },
    {
      id: 7,
      question: "Which of the following would result in a wider confidence interval?",
      options: [
        "Increasing the sample size",
        "Decreasing the confidence level",
        "Increasing the confidence level",
        "Using a point estimate closer to 0.5"
      ],
      correct: 2,
      explanation: "Increasing the confidence level increases the critical value (z*), which increases the margin of error and makes the interval wider."
    },
    {
      id: 8,
      question: "A Type I error occurs when:",
      options: [
        "We reject H₀ when H₀ is true",
        "We fail to reject H₀ when H₀ is false",
        "We reject Hₐ when Hₐ is true",
        "We fail to reject Hₐ when Hₐ is false"
      ],
      correct: 0,
      explanation: "A Type I error is rejecting the null hypothesis when it is actually true. The probability of a Type I error is α, the significance level."
    },
    {
      id: 9,
      question: "A Type II error occurs when:",
      options: [
        "We reject H₀ when H₀ is true",
        "We fail to reject H₀ when H₀ is false",
        "We reject Hₐ when Hₐ is true",
        "We fail to reject Hₐ when Hₐ is false"
      ],
      correct: 1,
      explanation: "A Type II error is failing to reject the null hypothesis when it is actually false. The probability of a Type II error is β."
    },
    {
      id: 10,
      question: "The power of a test is:",
      options: [
        "The probability of making a Type I error",
        "The probability of making a Type II error",
        "The probability of correctly rejecting H₀ when H₀ is false",
        "The probability of correctly failing to reject H₀ when H₀ is true"
      ],
      correct: 2,
      explanation: "Power = 1 - β = the probability of correctly rejecting the null hypothesis when the alternative hypothesis is true."
    }
  ]
};
