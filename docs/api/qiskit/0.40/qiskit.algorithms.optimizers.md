<span id="qiskit-algorithms-optimizers" />

# qiskit.algorithms.optimizers[¶](#module-qiskit.algorithms.optimizers "Permalink to this headline")

## Optimizers ([`qiskit.algorithms.optimizers`](#module-qiskit.algorithms.optimizers "qiskit.algorithms.optimizers"))[¶](#optimizers-qiskit-algorithms-optimizers "Permalink to this headline")

It contains a variety of classical optimizers for use by quantum variational algorithms, such as [`VQE`](qiskit.algorithms.VQE "qiskit.algorithms.VQE"). Logically, these optimizers can be divided into two categories:

## [Local Optimizers](#local-optimizers)

Given an optimization problem, a **local optimizer** is a function that attempts to find an optimal value within the neighboring set of a candidate solution.

## [Global Optimizers](#global-optimizers)

Given an optimization problem, a **global optimizer** is a function that attempts to find an optimal value among all possible solutions.

## Optimizer Base Class[¶](#optimizer-base-class "Permalink to this headline")

|                                                                                                                                    |                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| [`OptimizerResult`](qiskit.algorithms.optimizers.OptimizerResult "qiskit.algorithms.optimizers.OptimizerResult")                   | The result of an optimization routine.                                     |
| [`OptimizerSupportLevel`](qiskit.algorithms.optimizers.OptimizerSupportLevel "qiskit.algorithms.optimizers.OptimizerSupportLevel") | Support Level enum for features such as bounds, gradient and initial point |
| [`Optimizer`](qiskit.algorithms.optimizers.Optimizer "qiskit.algorithms.optimizers.Optimizer")                                     | Base class for optimization algorithm.                                     |
| [`Minimizer`](qiskit.algorithms.optimizers.Minimizer "qiskit.algorithms.optimizers.Minimizer")                                     | Callable Protocol for minimizer.                                           |

## Steppable Optimizer Base Class[¶](#steppable-optimizer-base-class "Permalink to this headline")

|                                                                                                                                                                      |                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| [`optimizer_utils`](qiskit.algorithms.optimizers.optimizer_utils#module-qiskit.algorithms.optimizers.optimizer_utils "qiskit.algorithms.optimizers.optimizer_utils") | Utils for optimizers |

|                                                                                                                           |                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`SteppableOptimizer`](qiskit.algorithms.optimizers.SteppableOptimizer "qiskit.algorithms.optimizers.SteppableOptimizer") | Base class for a steppable optimizer.                                                                                                                    |
| [`AskData`](qiskit.algorithms.optimizers.AskData "qiskit.algorithms.optimizers.AskData")                                  | Base class for return type of [`ask()`](qiskit.algorithms.optimizers.SteppableOptimizer#ask "qiskit.algorithms.optimizers.SteppableOptimizer.ask").      |
| [`TellData`](qiskit.algorithms.optimizers.TellData "qiskit.algorithms.optimizers.TellData")                               | Base class for argument type of [`tell()`](qiskit.algorithms.optimizers.SteppableOptimizer#tell "qiskit.algorithms.optimizers.SteppableOptimizer.tell"). |
| [`OptimizerState`](qiskit.algorithms.optimizers.OptimizerState "qiskit.algorithms.optimizers.OptimizerState")             | Base class representing the state of the optimizer.                                                                                                      |

## Local Optimizers[¶](#local-optimizers "Permalink to this headline")

|                                                                                                                                 |                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| [`ADAM`](qiskit.algorithms.optimizers.ADAM "qiskit.algorithms.optimizers.ADAM")                                                 | Adam and AMSGRAD optimizers.                                                                                               |
| [`AQGD`](qiskit.algorithms.optimizers.AQGD "qiskit.algorithms.optimizers.AQGD")                                                 | Analytic Quantum Gradient Descent (AQGD) with Epochs optimizer.                                                            |
| [`CG`](qiskit.algorithms.optimizers.CG "qiskit.algorithms.optimizers.CG")                                                       | Conjugate Gradient optimizer.                                                                                              |
| [`COBYLA`](qiskit.algorithms.optimizers.COBYLA "qiskit.algorithms.optimizers.COBYLA")                                           | Constrained Optimization By Linear Approximation optimizer.                                                                |
| [`L_BFGS_B`](qiskit.algorithms.optimizers.L_BFGS_B "qiskit.algorithms.optimizers.L_BFGS_B")                                     | Limited-memory BFGS Bound optimizer.                                                                                       |
| [`GSLS`](qiskit.algorithms.optimizers.GSLS "qiskit.algorithms.optimizers.GSLS")                                                 | Gaussian-smoothed Line Search.                                                                                             |
| [`GradientDescent`](qiskit.algorithms.optimizers.GradientDescent "qiskit.algorithms.optimizers.GradientDescent")                | The gradient descent minimization routine.                                                                                 |
| [`GradientDescentState`](qiskit.algorithms.optimizers.GradientDescentState "qiskit.algorithms.optimizers.GradientDescentState") | State of [`GradientDescent`](qiskit.algorithms.optimizers.GradientDescent "qiskit.algorithms.optimizers.GradientDescent"). |
| [`NELDER_MEAD`](qiskit.algorithms.optimizers.NELDER_MEAD "qiskit.algorithms.optimizers.NELDER_MEAD")                            | Nelder-Mead optimizer.                                                                                                     |
| [`NFT`](qiskit.algorithms.optimizers.NFT "qiskit.algorithms.optimizers.NFT")                                                    | Nakanishi-Fujii-Todo algorithm.                                                                                            |
| [`P_BFGS`](qiskit.algorithms.optimizers.P_BFGS "qiskit.algorithms.optimizers.P_BFGS")                                           | Parallelized Limited-memory BFGS optimizer.                                                                                |
| [`POWELL`](qiskit.algorithms.optimizers.POWELL "qiskit.algorithms.optimizers.POWELL")                                           | Powell optimizer.                                                                                                          |
| [`SLSQP`](qiskit.algorithms.optimizers.SLSQP "qiskit.algorithms.optimizers.SLSQP")                                              | Sequential Least SQuares Programming optimizer.                                                                            |
| [`SPSA`](qiskit.algorithms.optimizers.SPSA "qiskit.algorithms.optimizers.SPSA")                                                 | Simultaneous Perturbation Stochastic Approximation (SPSA) optimizer.                                                       |
| [`QNSPSA`](qiskit.algorithms.optimizers.QNSPSA "qiskit.algorithms.optimizers.QNSPSA")                                           | The Quantum Natural SPSA (QN-SPSA) optimizer.                                                                              |
| [`TNC`](qiskit.algorithms.optimizers.TNC "qiskit.algorithms.optimizers.TNC")                                                    | Truncated Newton (TNC) optimizer.                                                                                          |
| [`SciPyOptimizer`](qiskit.algorithms.optimizers.SciPyOptimizer "qiskit.algorithms.optimizers.SciPyOptimizer")                   | A general Qiskit Optimizer wrapping scipy.optimize.minimize.                                                               |
| [`UMDA`](qiskit.algorithms.optimizers.UMDA "qiskit.algorithms.optimizers.UMDA")                                                 | Continuous Univariate Marginal Distribution Algorithm (UMDA).                                                              |

Qiskit also provides the following optimizers, which are built-out using the optimizers from the scikit-quant package. The scikit-quant package is not installed by default but must be explicitly installed, if desired, by the user - the optimizers therein are provided under various licenses so it has been made an optional install for the end user to choose whether to do so or not. To install the scikit-quant dependent package you can use pip install scikit-quant.

|                                                                                          |                                                          |
| ---------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| [`BOBYQA`](qiskit.algorithms.optimizers.BOBYQA "qiskit.algorithms.optimizers.BOBYQA")    | Bound Optimization BY Quadratic Approximation algorithm. |
| [`IMFIL`](qiskit.algorithms.optimizers.IMFIL "qiskit.algorithms.optimizers.IMFIL")       | IMplicit FILtering algorithm.                            |
| [`SNOBFIT`](qiskit.algorithms.optimizers.SNOBFIT "qiskit.algorithms.optimizers.SNOBFIT") | Stable Noisy Optimization by Branch and FIT algorithm.   |

## Global Optimizers[¶](#global-optimizers "Permalink to this headline")

The global optimizers here all use NLopt for their core function and can only be used if their dependent NLopt package is manually installed.

|                                                                                                            |                                                               |
| ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| [`CRS`](qiskit.algorithms.optimizers.CRS "qiskit.algorithms.optimizers.CRS")                               | Controlled Random Search (CRS) with local mutation optimizer. |
| [`DIRECT_L`](qiskit.algorithms.optimizers.DIRECT_L "qiskit.algorithms.optimizers.DIRECT_L")                | DIviding RECTangles Locally-biased optimizer.                 |
| [`DIRECT_L_RAND`](qiskit.algorithms.optimizers.DIRECT_L_RAND "qiskit.algorithms.optimizers.DIRECT_L_RAND") | DIviding RECTangles Locally-biased Randomized optimizer.      |
| [`ESCH`](qiskit.algorithms.optimizers.ESCH "qiskit.algorithms.optimizers.ESCH")                            | ESCH evolutionary optimizer.                                  |
| [`ISRES`](qiskit.algorithms.optimizers.ISRES "qiskit.algorithms.optimizers.ISRES")                         | Improved Stochastic Ranking Evolution Strategy optimizer.     |