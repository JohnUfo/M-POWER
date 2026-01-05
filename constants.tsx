
import { Course, CourseType } from './types';

export const COURSES: Course[] = [
  {
    id: 'intro',
    title: CourseType.INTRO,
    description: 'The perfect starting point for absolute beginners. No prior coding experience required.',
    icon: 'Terminal',
    lessons: [
      {
        id: 'intro-arithmetic',
        title: 'Arithmetic and Variables',
        visualId: 'arithmetic',
        content: `1️⃣ Big picture: what is this lesson about?
Python is a powerful calculator. We use print() to see results and variables to store them.
Example:
x = 10 + 5
print(x) # Output: 15

2️⃣ Signal vs Noise (VERY IMPORTANT)
- Signal: Exact operators like + and *.
- Noise: Text without quotes.
Wrong: print(Hello)
Right: print("Hello")

3️⃣ Variables as Containers
Assignment (=) is not math equality. It means "put this value into this name".
Example:
score = 0
score = score + 1 # Update score to 1

✅ Final Summary
- print() shows output.
- Variable names can't have spaces.`,
        tasks: Array.from({ length: 15 }, (_, i) => ({
          id: `task_${i + 1}`,
          description: `Task ${i + 1}`,
          instruction: [
            "Print 'Hello World'", "Print 1+1", "Print 10-5", "Print 7*8", "Print 10/2",
            "Print 2**3", "Create x = 10. Print x.", "Create y = 5. Print x + y.",
            "Create 'score' = 100. Print score.", "Update score by adding 50.",
            "Calculate (10 + 2) * 5.", "Print 'Total: ' and 100.", "Calculate 60 * 60 and save to 'seconds_per_hour'.",
            "Calculate 24 * seconds_per_hour and save to 'seconds_per_day'.",
            "Final: Print 'Daily seconds:' and seconds_per_day."
          ][i],
          initialCode: ""
        }))
      },
      {
        id: 'intro-functions',
        title: 'Functions',
        visualId: 'func-scope',
        content: `1️⃣ Big picture: what is this lesson about?
Functions are reusable code recipes.
Example:
def cook(food):
    print("Cooking " + food)

cook("Pizza") # Output: Cooking Pizza

2️⃣ Signal vs Noise (VERY IMPORTANT)
- Signal: The 'def' keyword and colons.
- Noise: Forgetting to indent the code inside the function.

3️⃣ Return Values
return gives a value back to whoever called the function.
Example:
def add(a, b):
    return a + b
result = add(5, 5) # result is 10

✅ Final Summary
- Functions avoid repeating code.
- Arguments are the inputs in the parentheses.`,
        tasks: Array.from({ length: 15 }, (_, i) => ({
          id: `task_${i + 1}`,
          description: `Task ${i + 1}`,
          instruction: [
            "Call help(round).", "Define 'add_two(x)': return x + 2.", "Call add_two(5).",
            "Define 'square(x)': return x * x.", "Call square(10).", "Define 'greet(name)': print 'Hi ' + name.",
            "Call greet('User').", "Define 'get_avg(a, b)': return (a+b)/2.", "Call get_avg(10, 20).",
            "Define 'mult(a, b, c)': return a * b * c.", "Call mult(1, 2, 3).", "Use help(abs).",
            "Define 'is_even(n)': return (n % 2) == 0.", "Call is_even(10).", "Final: Write a function with 2 args and a return."
          ][i],
          initialCode: ""
        }))
      },
      {
        id: 'intro-datatypes',
        title: 'Data Types',
        visualId: 'variables',
        content: `1️⃣ Big picture: what is this lesson about?
Python treats text (str), whole numbers (int), and decimals (float) differently.
Example:
x = 5 # int
y = 5.0 # float
z = "5" # str

2️⃣ Signal vs Noise (VERY IMPORTANT)
- Signal: Matching types for operations.
- Noise: Adding numbers and text without converting.
print(5 + "5") # ERROR
print(5 + int("5")) # 10

3️⃣ Conversion
Use str(), int(), and float() to switch between types.

✅ Final Summary
- type(x) tells you what it is.
- bool(x) tells you if it's True or False.`,
        tasks: Array.from({ length: 15 }, (_, i) => ({
          id: `task_${i + 1}`,
          description: `Task ${i + 1}`,
          instruction: [
            "Check type(10).", "Check type(10.5).", "Check type('Hi').", "Check type(True).",
            "Print 10 + float(5).", "Print str(10) + ' is a number'.", "Convert '100' to an int.",
            "Convert 10.9 to an int (see it round down).", "Check bool(1).", "Check bool(0).",
            "Check bool('').", "Multiply 'A' * 10.", "Print type(1 > 2).", "Add 5 to int('5').",
            "Final: Print your age as a string."
          ][i],
          initialCode: ""
        }))
      },
      {
        id: 'intro-conditionals',
        title: 'Conditionals',
        visualId: 'decision-tree',
        content: `1️⃣ Big picture: what is this lesson about?
Making choices. if, elif, and else control the logic flow.
Example:
if age > 18:
    print("Enter")
else:
    print("Wait")

2️⃣ Signal vs Noise (VERY IMPORTANT)
- Signal: == for comparing, = for setting values.
- Noise: Using = in an if statement.

3️⃣ Multiple Checks
Use and/or to combine conditions.
if (x > 0) and (x < 10):
    print("In range")

✅ Final Summary
- Logic depends on True/False values.`,
        tasks: Array.from({ length: 15 }, (_, i) => ({
          id: `task_${i + 1}`,
          description: `Task ${i + 1}`,
          instruction: [
            "If 5 > 2: print('Yes').", "Set x = 10. If x == 10: print('Match').",
            "If 10 < 5: print('A') else: print('B').", "Use elif to check if x is 5 or 10.",
            "Compare 'apple' == 'apple'.", "Compare 'apple' != 'orange'.", "Check if 7 is even using %.",
            "If True: print('Always').", "If 0: print('Zero') else: print('Falsey').",
            "Combine with 'and': 5 > 2 and 10 > 5.", "Combine with 'or': 5 < 2 or 10 > 5.",
            "Use 'not': not False.", "Check if 'a' is in 'apple'.", "If score > 50: print('Pass').",
            "Final: Multi-condition logic check."
          ][i],
          initialCode: ""
        }))
      },
      {
        id: 'intro-lists',
        title: 'Lists',
        visualId: 'list-indices',
        content: `1️⃣ Big picture: what is this lesson about?
Lists store items in order.
Example:
fruits = ["apple", "banana"]
print(fruits[0]) # "apple"

2️⃣ Signal vs Noise (VERY IMPORTANT)
- Signal: Indices start at 0.
- Noise: Trying to get fruits[2] when only 2 items exist.

3️⃣ Modification
Lists are mutable (changeable).
fruits.append("cherry")
fruits[0] = "pear"

✅ Final Summary
- Negative indices count backwards. fruits[-1] is the last item.`,
        tasks: Array.from({ length: 15 }, (_, i) => ({
          id: `task_${i + 1}`,
          description: `Task ${i + 1}`,
          instruction: [
            "Create list = [1, 2, 3].", "Access index 0.", "Access index -1.", "Print len(list).",
            "Append 4 to the list.", "Pop the last item.", "Slice first 2: [0:2].", "Change index 1 to 99.",
            "Check if 1 in list.", "Create list of 3 colors.", "Access the middle color.",
            "Sort the list using sorted().", "Use sum() on [10, 20].", "Access index 2 of [1, 2, 3, 4, 5].",
            "Final: Slice the last two items of a list."
          ][i],
          initialCode: ""
        }))
      }
    ]
  },
  {
    id: 'python-ds',
    title: CourseType.PYTHON,
    description: 'Master Python syntax for data analysis and scientific computing.',
    icon: 'Terminal',
    lessons: [
      {
        id: 'hello-python',
        title: 'Hello, Python!',
        visualId: 'division',
        content: `1️⃣ Big picture: what is this lesson about?
A summary of Python's arithmetic logic. Python uses different operators for division.
Example:
# True Division (returns float)
print(5 / 2) # 2.5

# Floor Division (rounds down)
print(5 // 2) # 2

# Modulo (remainder)
print(5 % 2) # 1

2️⃣ Variable Swapping
Python allows compact assignment.
a, b = 1, 2
a, b = b, a # Swapped!

3️⃣ Signal vs Noise (VERY IMPORTANT)
- Signal: // for removing decimals.
- Noise: Expecting / to return a whole number.

✅ Final Summary
- / is for exact results.
- // is for whole numbers.`,
        tasks: Array.from({ length: 15 }, (_, i) => ({
          id: `task_${i + 1}`,
          description: `Task ${i + 1}`,
          instruction: [
            "Assign 0 to 'spam_amount'.", "Print 'spam_amount'.", "Add 4 to 'spam_amount'.",
            "If spam_amount > 0: print('But I don't want ANY spam!').", "Multiply 'Spam ' by 'spam_amount'.",
            "Check type(spam_amount).", "Check type(19.95).", "Print 5 / 2.", "Print 5 // 2.",
            "Find 7 % 3.", "Calculate 2 ** 3.", "Use min(1, 2, 3).", "Use abs(-32).",
            "Convert '807' to int and add 1.", "Calculate (25 + 190) / 100."
          ][i],
          initialCode: ""
        }))
      },
      {
        id: 'functions-help',
        title: 'Functions and Getting Help',
        visualId: 'func-scope',
        content: `1️⃣ Big picture: what is this lesson about?
Using built-in documentation and creating custom functions.
Example:
help(print) # Shows manual
def mult(x, y=2): # y has a default value
    return x * y

2️⃣ Signal vs Noise (VERY IMPORTANT)
- Signal: Triple quotes for docstrings.
- Noise: Not explaining what your function does.

3️⃣ Higher Order Functions
Functions that take other functions as arguments.
Example:
def apply(f, x):
    return f(x)

✅ Final Summary
- Docstrings are help for humans.`,
        tasks: Array.from({ length: 15 }, (_, i) => ({
          id: `task_${i + 1}`,
          description: `Task ${i + 1}`,
          instruction: [
            "Call help(round).", "Define least_difference(a,b,c).", "Add a docstring.",
            "Call help(least_difference).", "Create greet(who='Colin').", "Call greet().",
            "Call greet('Kaggle').", "Define mult_by_five(x).", "Define call(fn, arg).",
            "Use call(mult_by_five, 1).", "Define mod_5(x).", "Use max(100, 51, 14, key=mod_5).",
            "Print 1, 2, 3 with sep=' < '.", "Define a function that returns None.",
            "Final: Higher-order function call."
          ][i],
          initialCode: ""
        }))
      },
      {
        id: 'booleans-conditionals',
        title: 'Booleans and Conditionals',
        visualId: 'decision-tree',
        content: `1️⃣ Big picture: what is this lesson about?
Booleans are True or False. Logic operators (and, or, not) allow complex decisions.
Example:
x = True
y = False
print(x or y) # True

2️⃣ Precedence
not happens first, then and, then or.
Example:
True or True and False # is True (and evaluated first)

3️⃣ Signal vs Noise (VERY IMPORTANT)
- Signal: Comparison operators (==, !=).
- Noise: Thinking 'not True and False' means 'not (True and False)'.

✅ Final Summary
- bool(0) is False, bool(1) is True.`,
        tasks: Array.from({ length: 15 }, (_, i) => ({
          id: `task_${i + 1}`,
          description: `Task ${i + 1}`,
          instruction: [
            "Check type(True).", "Compare 3.0 == 3.", "Compare '3' == 3.", "Define can_run(age) >= 35.",
            "Check if 100 is odd using %.", "True and False.", "True or False.",
            "Predict: True or True and False.", "Check bool(1).", "Check bool(0).",
            "Check bool('').", "Check bool('a').", "Write an if/else block.", "Check if 'a' in 'apple'.",
            "Final: Complex boolean expression."
          ][i],
          initialCode: ""
        }))
      },
      {
        id: 'lists-ds',
        title: 'Lists',
        visualId: 'list-indices',
        content: `1️⃣ Big picture: what is this lesson about?
Efficiently handling collections of data.
Example:
nums = [1, 2, 3, 4]
print(nums[1:3]) # [2, 3] (index 1 to 2)

2️⃣ Signal vs Noise (VERY IMPORTANT)
- Signal: Tuples (x, y) are immutable and used for "fixed" data.
- Noise: Trying to use .append() on a tuple.

3️⃣ List Methods
.sort(), .reverse(), .count(), .index().

✅ Final Summary
- in operator is O(n) for lists.`,
        tasks: Array.from({ length: 15 }, (_, i) => ({
          id: `task_${i + 1}`,
          description: `Task ${i + 1}`,
          instruction: [
            "Create planets list.", "Access index 0.", "Access index -1.", "Slice [0:3].",
            "Slice [3:].", "Slice [1:-1].", "Change index 3.", "len(planets).",
            "sorted(planets).", "sum([1, 2, 3]).", "max([1, 2, 3]).", "planets.append('Pluto').",
            "planets.pop().", "planets.index('Earth').", "Create a tuple (1, 2)."
          ][i],
          initialCode: ""
        }))
      },
      {
        id: 'loops-comprehensions',
        title: 'Loops and List Comprehensions',
        visualId: 'loop-iter',
        content: `1️⃣ Big picture: what is this lesson about?
Automation. List comprehensions are a faster way to build lists.
Example:
# Normal Loop
sq = []
for x in range(5):
    sq.append(x**2)

# Comprehension (Faster!)
sq = [x**2 for x in range(5)]

2️⃣ Signal vs Noise (VERY IMPORTANT)
- Signal: Comprehensions condense 4 lines into 1.
- Noise: Over-complicating comprehensions until they're unreadable.

3️⃣ Range
range(start, stop, step) is an efficient generator.

✅ Final Summary
- while loops for indefinite tasks, for loops for collections.`,
        tasks: Array.from({ length: 15 }, (_, i) => ({
          id: `task_${i + 1}`,
          description: `Task ${i + 1}`,
          instruction: [
            "For loop: print planets.", "Loop through 'Python' chars.", "range(5) print.",
            "While count < 10.", "List comp: squares 0-9.", "Filter planets < 6 chars.",
            "Loud planets: upper() + '!'.", "[32 for p in planets].", "Count negatives (loop).",
            "Count negatives (comp + len).", "Count negatives (sum + bool).", "Break loop if i > 5.",
            "Continue loop if i is even.", "Multiply all in list.", "Final: Comprehension logic."
          ][i],
          initialCode: ""
        }))
      },
      {
        id: 'strings-dicts',
        title: 'Strings and Dictionaries',
        visualId: 'dict-map',
        content: `1️⃣ Big picture: what is this lesson about?
Text and Mappings. Dictionaries allow O(1) fast lookup.
Example:
# Dictionary
ages = {"Bob": 30, "Alice": 25}
print(ages["Bob"]) # 30

# String Format
print("Hi, {}".format("User"))

2️⃣ Signal vs Noise (VERY IMPORTANT)
- Signal: Unique keys in dictionaries.
- Noise: Trying to index a dictionary with a number if it uses strings as keys.

3️⃣ String Methods
.upper(), .lower(), .split(), .join().

✅ Final Summary
- .items() iterates over key-value pairs.`,
        tasks: Array.from({ length: 15 }, (_, i) => ({
          id: `task_${i + 1}`,
          description: `Task ${i + 1}`,
          instruction: [
            "Print 'Pluto\\'s a planet'.", "Use \\n for newline.", "Triple quote string.",
            "Slice 'Pluto'[:3].", "hello.upper().", "claim.split().", "'-'.join(['1','2']).",
            "Format name and age.", "Create dict {1: 'one'}.", "Access key 1.",
            "Add key 2 to dict.", "Update value of key 1.", "Loop over dict keys.",
            "Use .items() in loop.", "Final: Dictionary comprehension."
          ][i],
          initialCode: ""
        }))
      },
      {
        id: 'external-libraries',
        title: 'Working with External Libraries',
        visualId: 'import-lib',
        content: `1️⃣ Big picture: what is this lesson about?
Using community code.
Example:
import math
print(math.sqrt(16)) # 4.0

2️⃣ Namespaces
import math as mt # Keeps code clean
mt.pi

3️⃣ Signal vs Noise (VERY IMPORTANT)
- Signal: Specific imports (from math import pi).
- Noise: Star imports (from math import *) which can overwrite your own variables.

✅ Final Summary
- dir(module) shows all available functions.`,
        tasks: Array.from({ length: 15 }, (_, i) => ({
          id: `task_${i + 1}`,
          description: `Task ${i + 1}`,
          instruction: [
            "import math.", "Print math.pi.", "Call math.log(32, 2).", "import math as mt.",
            "mt.pi.", "from math import pi, log.", "Call dir(math).", "help(math.log).",
            "import numpy (comment).", "type(math).", "Check dir(list).", "Check help(list.append).",
            "Explain star import issue.", "Access submodule (comment).", "Final: Calculate sqrt(144)."
          ][i],
          initialCode: ""
        }))
      }
    ]
  },
  {
    id: 'ml',
    title: CourseType.ML,
    description: 'Learn the fundamentals of machine learning models and evaluation.',
    icon: 'Brain',
    lessons: [
      {
        id: 'how-models-work',
        title: 'How Models Work',
        visualId: 'decision-tree',
        content: `1️⃣ Big picture: what is this lesson about?
Pattern recognition. Decision Trees split data by questions.
Example:
If (rooms > 2) -> Price = 200k
Else -> Price = 150k

2️⃣ Fitting and Training
Training is the process where the model looks at history to find the best "split" points.

3️⃣ Signal vs Noise (VERY IMPORTANT)
- Signal: True correlations (e.g., location -> price).
- Noise: Coincidences (e.g., house number -> price).

✅ Final Summary
- Deeper trees capture more detail.`,
        tasks: Array.from({ length: 15 }, (_, i) => ({
          id: `task_${i + 1}`,
          description: `Task ${i + 1}`,
          instruction: [
            "Explain fitting in comment.", "Explain leaf in comment.", "prediction = 250000.",
            "Split logic if bedrooms > 2.", "Average of [100, 200, 300].", "is_deep = True.",
            "(300k+400k)/2.", "Print 'Tracing tree...'.", "Predict function for rooms.",
            "Calc error: actual - pred.", "Identify target (Price).", "Identify feature (Rooms).",
            "Print 'Model Fitted'.", "max_depth = 5.", "Final: Tree prediction logic."
          ][i],
          initialCode: ""
        }))
      },
      {
        id: 'examine-data',
        title: 'Examine Your Data',
        visualId: 'list-indices',
        content: `1️⃣ Big picture: what is this lesson about?
Loading data with Pandas. Dataframes are the core tool.
Example:
import pandas as pd
df = pd.read_csv('data.csv')
print(df.describe()) # Statistics

2️⃣ Signal vs Noise (VERY IMPORTANT)
- Signal: Mean, Median, and Count.
- Noise: Missing values (NaN).

✅ Final Summary
- Use .head() to see the first 5 rows.`,
        tasks: Array.from({ length: 15 }, (_, i) => ({
          id: `task_${i + 1}`,
          description: `Task ${i + 1}`,
          instruction: [
            "import pandas as pd.", "Create df from dict.", "df.describe().", "Explain count.",
            "Explain std.", "Check df.columns.", "df.head().", "Select Price column.",
            "Select list of features.", "df.dropna().", "len(df).", "Find 50% value.",
            "Find max value.", "Identify features list.", "Final: Load and describe data."
          ][i],
          initialCode: ""
        }))
      },
      {
        id: 'first-model',
        title: 'Your First Model',
        visualId: 'import-lib',
        content: `1️⃣ Big picture: what is this lesson about?
Scikit-learn lifecycle: Define, Fit, Predict.
Example:
from sklearn.tree import DecisionTreeRegressor
model = DecisionTreeRegressor()
model.fit(X, y)

2️⃣ Reproducibility
Use random_state to get the same results twice.

✅ Final Summary
- y is the prediction target. X is the features.`,
        tasks: Array.from({ length: 15 }, (_, i) => ({
          id: `task_${i + 1}`,
          description: `Task ${i + 1}`,
          instruction: [
            "Import DecisionTreeRegressor.", "Define y.", "Define X features.", "Set random_state=1.",
            "Define model.", "Fit model (comment).", "Predict top 5 (comment).", "X.head().",
            "Explain fit.", "Set random_state=42.", "Predict one house.", "Explain random_state.",
            "Print 'Model Ready'.", "Compare actual vs pred.", "Final: Model building steps."
          ][i],
          initialCode: ""
        }))
      },
      {
        id: 'model-validation',
        title: 'Model Validation',
        visualId: 'loss-curves',
        content: `1️⃣ Big picture: what is this lesson about?
Measuring quality with Mean Absolute Error (MAE).
Example:
MAE = abs(actual - predicted) / count

2️⃣ Signal vs Noise (VERY IMPORTANT)
- Signal: Validation score (unseen data).
- Noise: Training score (memorized data).

✅ Final Summary
- Never test on your training data!`,
        tasks: Array.from({ length: 15 }, (_, i) => ({
          id: `task_${i + 1}`,
          description: `Task ${i + 1}`,
          instruction: [
            "Import MAE.", "Error formula.", "abs(-50).", "Average [10, 20].", "Import train_test_split.",
            "Explain in-sample error.", "Set random_state for split.", "Define train_X, val_X.",
            "Define train_y, val_y.", "Fit on train.", "Predict on val.", "Calc MAE.",
            "Compare train vs val MAE.", "Explain validation.", "Final: Split and Validate."
          ][i],
          initialCode: ""
        }))
      },
      {
        id: 'underfitting-overfitting',
        title: 'Underfitting and Overfitting',
        visualId: 'overfitting',
        content: `1️⃣ Big picture: what is this lesson about?
The "Sweet Spot".
Example:
# 5 nodes = Underfit (Too simple)
# 5000 nodes = Overfit (Too complex)

2️⃣ max_leaf_nodes
Limit nodes to force the model to generalize.

✅ Final Summary
- Look for the lowest validation error point.`,
        tasks: Array.from({ length: 15 }, (_, i) => ({
          id: `task_${i + 1}`,
          description: `Task ${i + 1}`,
          instruction: [
            "Define get_mae(nodes).", "Nodes list: [5, 50, 500].", "Loop nodes.", "Print MAE.",
            "Identify best count.", "Explain overfitting.", "Explain underfitting.", "Explain max_leaf_nodes.",
            "Check training vs val loss.", "Predict lower train loss trend.", "Predict lower val loss trend.",
            "Print 'Optimal found'.", "Compare 5 vs 50 nodes.", "MAE of nodes=5000.", "Final: Node loop."
          ][i],
          initialCode: ""
        }))
      },
      {
        id: 'random-forests',
        title: 'Random Forests',
        visualId: 'multi-var',
        content: `1️⃣ Big picture: what is this lesson about?
Ensemble Learning. Averaging many trees.
Example:
from sklearn.ensemble import RandomForestRegressor
model = RandomForestRegressor()

2️⃣ Wisdom of the Crowd
Individual trees make random errors, but the average is robust.

✅ Final Summary
- Forests work better than single trees with default settings.`,
        tasks: Array.from({ length: 15 }, (_, i) => ({
          id: `task_${i + 1}`,
          description: `Task ${i + 1}`,
          instruction: [
            "Import RandomForestRegressor.", "Explain ensemble.", "Create forest model.",
            "Fit forest.", "Predict forest.", "Calc forest MAE.", "Forest vs Tree MAE.",
            "Define n_estimators.", "Print 'Training...'.", "Why average helps.", "random_state usage.",
            "Explain defaults.", "Check 191k vs 250k.", "Explain robustness.", "Final: Full forest logic."
          ][i],
          initialCode: ""
        }))
      }
    ]
  },
  {
    id: 'dl',
    title: CourseType.DL,
    description: 'Learn the foundations of Deep Learning and Neural Networks.',
    icon: 'Cpu',
    lessons: [
      {
        id: 'dl-intro-neuron',
        title: 'The Linear Unit',
        visualId: 'neuron',
        content: `1️⃣ Big picture: what is this lesson about?
A single neuron: y = wx + b.
Example:
weight = 2
bias = 5
input = 10
y = 2 * 10 + 5 # 25

2️⃣ Weights
Weights represent how "loud" an input signal is.

✅ Final Summary
- Neurons sum weighted inputs.`,
        tasks: Array.from({ length: 15 }, (_, i) => ({
          id: `task_${i + 1}`,
          description: `Task ${i + 1}`,
          instruction: [
            "Define weight w=2.5 and bias b=90.", "Calculate y for input x=5.", "Print the value of y.",
            "Define x0=1, x1=2, x2=3.", "Define weights w0=0.5, w1=1.0, w2=1.5 and bias b=1.",
            "Calculate linear output: w0*x0 + w1*x1 + w2*x2 + b.", "Import tensorflow and keras (comment).",
            "Define input_shape=[3] in a comment.", "Explain bias in one sentence.",
            "Calculate y = 1.2 * 10 + 5.0.", "Print 'Cereals: sugars=5, cal=102.5'.",
            "Explain weights as 'slopes'.", "Define a variable 'units' = 1.",
            "Check length of input list [1, 2, 3].", "Final: Formula for 3 inputs."
          ][i],
          initialCode: ""
        }))
      },
      {
        id: 'dl-deep-networks',
        title: 'Deep Neural Networks',
        visualId: 'indentation',
        content: `1️⃣ Big picture: what is this lesson about?
Stacking layers.
Example:
model = keras.Sequential([
    layers.Dense(units=4, activation='relu', input_shape=[2]),
    layers.Dense(units=1)
])

2️⃣ ReLU
ReLU(x) = max(0, x). It lets the network fit non-linear curves.

✅ Final Summary
- Layers before the output are 'hidden'.`,
        tasks: Array.from({ length: 15 }, (_, i) => ({
          id: `task_${i + 1}`,
          description: `Task ${i + 1}`,
          instruction: [
            "Import keras.layers.", "Explain ReLU: max(0, x).", "Calculate max(0, -5).", "Calculate max(0, 10).",
            "Define 'hidden_units' = 512.", "Explain 'Dense' in a comment.", "Define units=4 for a layer.",
            "Define activation='relu'.", "Explain 'Sequential' in a comment.", "Define input_shape=[2].",
            "Calculate output of ReLU for input -10.", "Predict: 2 dense layers = 1 dense layer? (No).",
            "Identify the 'hidden' layer index in [4, 4, 1].", "Print 'Building Sequential Model...'.",
            "Final: Diagram of a 2-layer network."
          ][i],
          initialCode: ""
        }))
      },
      {
        id: 'dl-sgd',
        title: 'Stochastic Gradient Descent',
        visualId: 'loop-iter',
        content: `1️⃣ Big picture: what is this lesson about?
How weights update.
Example:
1. Load batch
2. Calculate Loss
3. Adjust Weights

2️⃣ Learning Rate
Controls how "big" of a step we take toward the solution.

✅ Final Summary
- Adam is an adaptive optimizer.`,
        tasks: Array.from({ length: 15 }, (_, i) => ({
          id: `task_${i + 1}`,
          description: `Task ${i + 1}`,
          instruction: [
            "Explain 'optimizer' in comment.", "Explain 'loss' in comment.", "Calculate MAE of [10] vs [12].",
            "Define batch_size = 256.", "Define epochs = 10.", "Explain 'minibatch'.",
            "Calculate abs(100 - 95).", "Calculate average error of [5, 10, 15].", "Explain 'learning rate'.",
            "Identify 'Adam' as an optimizer.", "Set optimizer='adam' in a comment.",
            "Set loss='mae' in a comment.", "Explain SGD acronym (comment).", "Calculate steps for 1000 items, batch 100.",
            "Final: SGD Lifecycle (Define, Compile, Fit)."
          ][i],
          initialCode: ""
        }))
      },
      {
        id: 'dl-overfitting',
        title: 'Overfitting and Underfitting',
        visualId: 'loss-curves',
        content: `1️⃣ Big picture: what is this lesson about?
Interpreting the gap between training loss and validation loss.

2️⃣ Signal vs Noise
- Signal generalizes (both curves down).
- Noise memorizes (only training curve down).

✅ Final Summary
- Use Early Stopping to halt at the minimum validation loss.`,
        tasks: Array.from({ length: 15 }, (_, i) => ({
          id: `task_${i + 1}`,
          description: `Task ${i + 1}`,
          instruction: [
            "Import EarlyStopping.", "Explain 'capacity'.", "Explain 'patience' in EarlyStopping.",
            "Explain 'min_delta'.", "Plot train vs val loss (comment).", "Identify overfitting on curve.",
            "Define wider model: Dense(32).", "Define deeper model: 2 Layers of 16.",
            "Set restore_best_weights=True.", "Calculate gap: val_loss - train_loss.",
            "Explain 'Signal'.", "Explain 'Noise'.", "Explain 'Underfitting'.",
            "Predict: larger patience = longer training?", "Final: EarlyStopping config."
          ][i],
          initialCode: ""
        }))
      },
      {
        id: 'dl-dropout-batchnorm',
        title: 'Dropout and Batch Normalization',
        visualId: 'signal-noise',
        content: `1️⃣ Big picture: what is this lesson about?
Stability.
Example:
layers.Dropout(rate=0.3) # 30% neurons turned off randomly

2️⃣ Batch Normalization
Rescaling data inside the network so SGD runs smoother.

✅ Final Summary
- Dropout breaks up "conspiracies" between neurons.`,
        tasks: Array.from({ length: 15 }, (_, i) => ({
          id: `task_${i + 1}`,
          description: `Task ${i + 1}`,
          instruction: [
            "Import Dropout and BatchNormalization.", "Define dropout rate = 0.3.",
            "Explain 'conspiracy of weights'.", "Explain batch normalization benefits.",
            "Place Dropout before a Dense layer.", "Place BatchNorm after a Dense layer.",
            "Explain why we normalize data.", "Predict: BatchNorm -> fewer epochs?",
            "Identify Dropout's role in ensemble learning.", "Set units to 1024.",
            "Combine Dropout(0.3) with Dense(1024).", "Explain 'StandardScaler' alternative.",
            "Identify if BatchNorm has neurons (No).", "Check help(layers.Dropout).",
            "Final: Architecture with Dropout and BatchNorm."
          ][i],
          initialCode: ""
        }))
      },
      {
        id: 'dl-binary-classification',
        title: 'Binary Classification',
        visualId: 'decision-tree',
        content: `1️⃣ Big picture: what is this lesson about?
Predicting classes (0 or 1).
Example:
# Final layer for classification
layers.Dense(1, activation='sigmoid')

2️⃣ Cross-Entropy
Loss function for probability-based predictions.

✅ Final Summary
- Sigmoid squashes output between 0 and 1.`,
        tasks: Array.from({ length: 15 }, (_, i) => ({
          id: `task_${i + 1}`,
          description: `Task ${i + 1}`,
          instruction: [
            "Explain 'binary classification'.", "Define activation='sigmoid'.",
            "Compare accuracy vs cross-entropy.", "Calculate rounding 0.7 to class.",
            "Calculate rounding 0.3 to class.", "Set loss='binary_crossentropy'.",
            "Set metrics=['binary_accuracy'].", "Explain why sigmoid is S-shaped.",
            "Identify threshold (usually 0.5).", "Print 'Mapping strings to labels 0 and 1'.",
            "Define a model with sigmoid output.", "Explain cross-entropy penalty.",
            "Calculate distance from 1.0 probability.", "Check type(True) as int.",
            "Final: Classification training config."
          ][i],
          initialCode: ""
        }))
      }
    ]
  }
];
