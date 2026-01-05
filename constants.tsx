
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
One of the simplest and most important tasks you can ask a computer to do is to print a message. In Python, we do this with print(). We also use Python as a calculator. To save values for later, we use variables.

2️⃣ Signal vs Noise (VERY IMPORTANT)
- Signal: The exact commands like print() and math operators (+, -, *, /).
- Noise: Forgetting quotes around text or using the wrong math symbol.
If you miss a quote, the computer hears "Noise" and crashes.

3️⃣ Variables as Containers
Variables allow you to save the result of a calculation to work with it later. Think of them as named containers. Use the = sign to assign a value to a name.

✅ Final Summary
- print() shows output.
- Variable names can't have spaces and must be descriptive.
- Python follows PEMDAS (Parentheses, Exponents, Multi/Div, Add/Sub).`,
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
Functions are reusable blocks of code that perform a specific task. You've already used print() and help(). Now you'll learn to build your own tools.

2️⃣ Signal vs Noise (VERY IMPORTANT)
- Signal: The 'def' keyword and the indented block.
- Noise: Forgetting the colon (:) or the indentation.
The colon (:) tells Python "a code block starts here".

3️⃣ Return Values
Most functions perform a calculation and 'return' the result back to you. If a function doesn't have a return statement, it returns None.

✅ Final Summary
- def function_name(parameters):
- return sends data back to the caller.`,
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
        visualId: 'dict-map',
        content: `1️⃣ Big picture: what is this lesson about?
Python needs to know if a value is a whole number (int), a decimal (float), or text (str). Booleans represent True or False.

2️⃣ Signal vs Noise (VERY IMPORTANT)
- Signal: The correct type for the task.
- Noise: Adding a number to a string without converting it.
Use type() to check what you're working with.

3️⃣ Conversion
You can convert types using int(), float(), and str().

✅ Final Summary
- int: 10, float: 10.5, str: "Hello", bool: True.
- type(x) reveals the nature of the data.`,
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
Conditionals let you control what code is run based on a Boolean condition (True or False).

2️⃣ Signal vs Noise (VERY IMPORTANT)
- Signal: == for comparison, = for assignment.
- Noise: Forgetting the difference between == and =.
Python's 'if', 'elif', and 'else' build the logic tree.

3️⃣ Truthiness
Empty sequences like "" or [] are treated as False.

✅ Final Summary
- if condition:
- elif another_condition:
- else:`,
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
Lists are ordered sequences of values. They are the most common way to store a collection of data.

2️⃣ Signal vs Noise (VERY IMPORTANT)
- Signal: The index (starts at 0).
- Noise: Trying to access an index that doesn't exist.
Negative indices count from the end (-1 is the last item).

3️⃣ Slicing
Use [start:end] to get a chunk of the list.

✅ Final Summary
- list[0] is the first item.
- .append() adds to the end.
- len(list) gives the total count.`,
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
        visualId: 'indentation',
        content: `1️⃣ Big picture: what is this lesson about?
A summary of Python's dynamic typing, variable assignment, and arithmetic. Named after Monty Python, we use "Spam" as a theme.

2️⃣ Variable Assignment
Python doesn't require "declaring" variables. You can assign a number to a variable and later reassign it to a string.

3️⃣ Arithmetic Operators
Python does "True division" (/) which always returns a float, and "Floor division" (//) which rounds down.

4️⃣ Operator Overloading
The * operator can multiply numbers OR repeat strings.

✅ Final Summary
- type() reveals if a number is an int or a float.
- Indentation defines code blocks.`,
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
Using help() to learn about functions and defining your own with docstrings.

2️⃣ Signal vs Noise (VERY IMPORTANT)
- Signal: Meaningful docstrings.
- Noise: Missing or cryptic documentation.
Help() reads the "Signal" to explain code behavior.

3️⃣ Higher-Order Functions
Functions can be passed as arguments to other functions, like the 'key' argument in max().

✅ Final Summary
- Use triple-quotes for docstrings.
- Default arguments allow flexible function calls.`,
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
Boolean values and logic control using if, elif, and else.

2️⃣ Logic Precedence
'and' is evaluated before 'or'. Use parentheses to avoid confusing results.

3️⃣ Comparison Operators
== (equal), != (not equal), <, >, <=, >=.

✅ Final Summary
- Use bool() to see the truthiness of any object.`,
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
Storing ordered sequences of items. Lists are mutable, while Tuples are immutable.

2️⃣ Mutability
You can change list items, but Tuples are locked.

3️⃣ Slicing and Indexing
Negative indexing and complex slicing [start:end:step].

✅ Final Summary
- .append() and .pop() for stack operations.
- in operator for search.`,
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
Repeatedly executing code. List comprehensions are a beloved Python feature for concise data processing.

2️⃣ List Comprehensions
The format is [expression for item in collection if condition].

3️⃣ range() and while
Use range() for fixed iterations and while loops for conditional loops.

✅ Final Summary
- Comprehensions are faster and more readable.
- for item in collection:`,
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
Strings for text processing and Dictionaries for key-value mapping.

2️⃣ String Methods
.split() to break text into lists, .join() to merge lists into text.

3️⃣ String Formatting
Use .format() to build complex strings with variables cleanly.

✅ Final Summary
- Dictionaries have unique keys.
- .items() allows iterating over keys and values.`,
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
Imports allow you to access thousands of high-quality libraries like math, numpy, and pandas.

2️⃣ Namespaces
A module is a collection of variables (a namespace). Access them using dot syntax.

3️⃣ Objects and Methods
Everything in Python is an object. Use dir() and help() to discover their attributes and methods.

✅ Final Summary
- import library as alias (e.g., import math as mt).
- Operator overloading makes libraries feel native.`,
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
Machine learning finds patterns in data to make predictions. We start with Decision Trees.

2️⃣ Fitting and Training
Capturing patterns from data is called "fitting" or "training". The result is a model.

3️⃣ Leaves and Splits
A tree splits data until it reaches a "leaf", where a final prediction is made.

✅ Final Summary
- Models learn from training data.
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
Using Pandas to load and describe data. It's the first step of any ML project.

2️⃣ DataFrames and Summary
A DataFrame is like a table. describe() provides 8 key statistics.

✅ Final Summary
- import pandas as pd.
- describe() helps spot outliers and missing data.`,
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
Building a model using sklearn. Define, Fit, Predict, Evaluate.

2️⃣ Prediction Target and Features
y is the target, X is the feature set.

✅ Final Summary
- random_state ensures reproducibility.`,
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
Measuring model quality using MAE. Testing on training data is a common mistake.

2️⃣ Mean Absolute Error
Average of |actual - predicted|.

✅ Final Summary
- Use train_test_split to validate on unseen data.`,
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
Finding the "Sweet Spot". Overfitting is memorizing, Underfitting is failing to learn.

2️⃣ max_leaf_nodes
A way to control tree depth and complexity.

✅ Final Summary
- Lowest validation error is the goal.`,
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
Averaging many trees for better accuracy and stability.

2️⃣ Random Forests
Robust models that work well with defaults.

✅ Final Summary
- Ensemble models use group wisdom.`,
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
We begin with the fundamental component of a neural network: the individual neuron. A neuron with one input performs a simple linear computation: y = wx + b.

2️⃣ Signal vs Noise (VERY IMPORTANT)
- Signal: The 'weights' (w) which determine the importance of an input.
- Noise: Random initialization before training.
A neural network "learns" by modifying its weights to isolate patterns from data.

3️⃣ Bias and Multiple Inputs
The bias (b) allows a neuron to modify output independently of inputs. For multiple inputs, we sum them all up: y = w0x0 + w1x1 + ... + b.

✅ Final Summary
- Neurons are the building blocks of Deep Learning.
- Single neuron models are simple linear models (lines, planes, hyperplanes).`,
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
Modularity is key. By stacking simpler functional units into layers, we can build complex models.

2️⃣ The Dense Layer
When we collect together linear units having a common set of inputs, we get a Dense Layer. A deep stack of layers allows the network to transform data in increasingly complex ways.

3️⃣ Activation Functions
Without activation functions, neural networks are just linear models. The Rectified Linear Unit (ReLU) function max(0, x) adds the necessary nonlinearity to fit curves.

✅ Final Summary
- Sequential models connect layers in order.
- Hidden layers are the layers between input and output.`,
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
How neural networks learn. We use an Optimizer to adjust weights based on a Loss Function.

2️⃣ Loss Functions
The Loss Function measures the disparity between true targets and model predictions. For regression, we commonly use Mean Absolute Error (MAE).

3️⃣ The Optimizer (SGD)
Stochastic Gradient Descent is an iterative algorithm that trains the network in minibatches. Adam is a great general-purpose optimizer that is self-tuning.

✅ Final Summary
- Epoch: One complete pass through the training data.
- Batch: A small sample of training data used for one weight update.`,
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
Interpreting learning curves. We want to distinguish between 'signal' (general patterns) and 'noise' (random fluctuations).

2️⃣ Signal vs Noise
Training loss decreases with both signal and noise. Validation loss only decreases when the model learns signal. A gap between the curves indicates noise/overfitting.

3️⃣ Early Stopping
To prevent overfitting, we stop training when validation loss stops decreasing. This finds the "Sweet Spot".

✅ Final Summary
- Increase Capacity (wider/deeper) to fix underfitting.
- Use Early Stopping to fix overfitting.`,
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
Advanced layers to improve model stability and generalization.

2️⃣ Dropout
Randomly "dropping out" neurons during training to break up "conspiracies" of weights. This forces the network to learn more robust, general patterns.

3️⃣ Batch Normalization
Rescaling activations within the network to stabilize training. It coordinates the scale of features and helps prevent training from getting stuck.

✅ Final Summary
- Dropout corrects overfitting.
- Batchnorm corrects slow or unstable training.`,
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
Applying neural networks to predict one of two classes (Yes/No, 0/1).

2️⃣ Cross-Entropy and Accuracy
Accuracy is intuitive but poor for SGD. We use Cross-Entropy as a loss function because it measures the distance between probability distributions.

3️⃣ The Sigmoid Function
To turn raw numbers into probabilities (0 to 1), we use the Sigmoid activation in the final layer.

✅ Final Summary
- Final layer: layers.Dense(1, activation='sigmoid').
- loss: 'binary_crossentropy', metrics: ['binary_accuracy'].`,
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
