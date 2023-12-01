# ScheduleBlock

<span id="undefined" />

`ScheduleBlock(name=None, metadata=None, alignment_context=None)`

Bases: `object`

A `ScheduleBlock` is a time-ordered sequence of instructions and transform macro to manage their relative timing. The relative position of the instructions is managed by the `context_alignment`. This allows `ScheduleBlock` to support instructions with a parametric duration and allows the lazy scheduling of instructions, i.e. allocating the instruction time just before execution.

`ScheduleBlock` s should be initialized with one of the following alignment contexts:

*   `AlignLeft`: Align instructions in the as-soon-as-possible manner. Instructions are scheduled at the earliest possible time on the channel.
*   `AlignRight`: Align instructions in the as-late-as-possible manner. Instructions are scheduled at the latest possible time on the channel.
*   `AlignSequential`: Align instructions sequentially even though they are allocated in different channels.
*   `AlignEquispaced`: Align instructions with equal interval within a specified duration. Instructions on different channels are aligned sequentially.
*   `AlignFunc`: Align instructions with arbitrary position within the given duration. The position is specified by a callback function taking a pulse index `j` and returning a fractional coordinate in \[0, 1].

The `ScheduleBlock` defaults to the `AlignLeft` alignment. The timing overlap constraint of instructions is not immediately evaluated, and thus we can assign a parameter object to the instruction duration. Instructions are implicitly scheduled at optimum time when the program is executed.

Note that `ScheduleBlock` can contain [`Instruction`](qiskit.pulse.instructions.Instruction#qiskit.pulse.instructions.Instruction "qiskit.pulse.instructions.Instruction") and other `ScheduleBlock` to build an experimental program, but `Schedule` is not supported. This should be added as a [`Call`](qiskit.pulse.instructions.Call#qiskit.pulse.instructions.Call "qiskit.pulse.instructions.Call") instruction. This conversion is automatically performed with the pulse builder.

By using `ScheduleBlock` representation we can fully parametrize pulse waveforms. For example, Rabi schedule generator can be defined as

```python
duration = Parameter('rabi_dur')
amp = Parameter('rabi_amp')

block = ScheduleBlock()
rabi_pulse = pulse.Gaussian(duration=duration, amp=amp, sigma=duration/4)

block += Play(rabi_pulse, pulse.DriveChannel(0))
block += Call(measure_schedule)
```

Note that such waveform cannot be appended to the `Schedule` representation.

In the block representation, the interval between two instructions can be managed with the `Delay` instruction. Because the schedule block lacks an instruction start time `t0`, we cannot `insert` or `shift` the target instruction. In addition, stored instructions are not interchangable because the schedule block is sensitive to the relative position of instructions. Apart from these differences, the block representation can provide compatible functionality with `Schedule` representation.

Create an empty schedule block.

**Parameters**

*   **name** (`Optional`\[`str`]) – Name of this schedule. Defaults to an autogenerated string if not provided.
*   **metadata** (`Optional`\[`dict`]) – Arbitrary key value metadata to associate with the schedule. This gets stored as free-form data in a dict in the [`metadata`](#qiskit.pulse.ScheduleBlock.metadata "qiskit.pulse.ScheduleBlock.metadata") attribute. It will not be directly used in the schedule.
*   **alignment\_context** (*AlignmentKind*) – `AlignmentKind` instance that manages scheduling of instructions in this block.

**Raises**

**TypeError** – if metadata is not a dict.

## Methods

|                                                                                                                                                                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`append`](qiskit.pulse.ScheduleBlock.append#qiskit.pulse.ScheduleBlock.append "qiskit.pulse.ScheduleBlock.append")                                             | Return a new schedule block with `block` appended to the context block.                                                                                                                                                                                                                                                                                                                                                                                              |
| [`assign_parameters`](qiskit.pulse.ScheduleBlock.assign_parameters#qiskit.pulse.ScheduleBlock.assign_parameters "qiskit.pulse.ScheduleBlock.assign_parameters") | Assign the parameters in this schedule according to the input.                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`ch_duration`](qiskit.pulse.ScheduleBlock.ch_duration#qiskit.pulse.ScheduleBlock.ch_duration "qiskit.pulse.ScheduleBlock.ch_duration")                         | Return the time of the end of the last instruction over the supplied channels.                                                                                                                                                                                                                                                                                                                                                                                       |
| [`ch_start_time`](qiskit.pulse.ScheduleBlock.ch_start_time#qiskit.pulse.ScheduleBlock.ch_start_time "qiskit.pulse.ScheduleBlock.ch_start_time")                 | Return the time of the start of the first instruction over the supplied channels.                                                                                                                                                                                                                                                                                                                                                                                    |
| [`ch_stop_time`](qiskit.pulse.ScheduleBlock.ch_stop_time#qiskit.pulse.ScheduleBlock.ch_stop_time "qiskit.pulse.ScheduleBlock.ch_stop_time")                     | Return maximum start time over supplied channels.                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`draw`](qiskit.pulse.ScheduleBlock.draw#qiskit.pulse.ScheduleBlock.draw "qiskit.pulse.ScheduleBlock.draw")                                                     | Plot the schedule.                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`exclude`](qiskit.pulse.ScheduleBlock.exclude#qiskit.pulse.ScheduleBlock.exclude "qiskit.pulse.ScheduleBlock.exclude")                                         | Return a `Schedule` with only the instructions from this Schedule *failing* at least one of the provided filters. This method is the complement of py:meth:\~self.filter, so that::.                                                                                                                                                                                                                                                                                 |
| [`filter`](qiskit.pulse.ScheduleBlock.filter#qiskit.pulse.ScheduleBlock.filter "qiskit.pulse.ScheduleBlock.filter")                                             | Return a new `Schedule` with only the instructions from this `ScheduleBlock` which pass though the provided filters; i.e. an instruction will be retained iff every function in `filter_funcs` returns `True`, the instruction occurs on a channel type contained in `channels`, the instruction type is contained in `instruction_types`, and the period over which the instruction operates is *fully* contained in one specified in `time_ranges` or `intervals`. |
| [`get_parameters`](qiskit.pulse.ScheduleBlock.get_parameters#qiskit.pulse.ScheduleBlock.get_parameters "qiskit.pulse.ScheduleBlock.get_parameters")             | Get parameter object bound to this schedule by string name.                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`initialize_from`](qiskit.pulse.ScheduleBlock.initialize_from#qiskit.pulse.ScheduleBlock.initialize_from "qiskit.pulse.ScheduleBlock.initialize_from")         | Create new schedule object with metadata of another schedule object.                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`insert`](qiskit.pulse.ScheduleBlock.insert#qiskit.pulse.ScheduleBlock.insert "qiskit.pulse.ScheduleBlock.insert")                                             | This method will be removed.                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`is_parameterized`](qiskit.pulse.ScheduleBlock.is_parameterized#qiskit.pulse.ScheduleBlock.is_parameterized "qiskit.pulse.ScheduleBlock.is_parameterized")     | Return True iff the instruction is parameterized.                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`is_schedulable`](qiskit.pulse.ScheduleBlock.is_schedulable#qiskit.pulse.ScheduleBlock.is_schedulable "qiskit.pulse.ScheduleBlock.is_schedulable")             | Return `True` if all durations are assigned.                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`replace`](qiskit.pulse.ScheduleBlock.replace#qiskit.pulse.ScheduleBlock.replace "qiskit.pulse.ScheduleBlock.replace")                                         | Return a `ScheduleBlock` with the `old` component replaced with a `new` component.                                                                                                                                                                                                                                                                                                                                                                                   |
| [`shift`](qiskit.pulse.ScheduleBlock.shift#qiskit.pulse.ScheduleBlock.shift "qiskit.pulse.ScheduleBlock.shift")                                                 | This method will be removed.                                                                                                                                                                                                                                                                                                                                                                                                                                         |

## Attributes

<span id="undefined" />

### alignment\_context

Return alignment instance that allocates block component to generate schedule.

<span id="undefined" />

### blocks

Get the time-ordered instructions from self.

**Return type**

`Tuple`\[`Union`\[`ScheduleBlock`, `Instruction`]]

<span id="undefined" />

### channels

Returns channels that this schedule clock uses.

**Return type**

`Tuple`\[`Channel`]

<span id="undefined" />

### duration

Duration of this schedule block.

**Return type**

`int`

<span id="undefined" />

### instances\_counter

`= count(0)`

<span id="undefined" />

### instructions

Get the time-ordered instructions from self.

**Return type**

`Tuple`\[`Tuple`\[`int`, `Instruction`]]

<span id="undefined" />

### metadata

The user provided metadata associated with the schedule.

User provided `dict` of metadata for the schedule. The metadata contents do not affect the semantics of the program but are used to influence the execution of the schedule. It is expected to be passed between all transforms of the schedule and that providers will associate any schedule metadata with the results it returns from the execution of that schedule.

**Return type**

`Dict`\[`str`, `Any`]

<span id="undefined" />

### name

Name of this Schedule

**Return type**

`str`

<span id="undefined" />

### parameters

Parameters which determine the schedule behavior.

**Return type**

`Set`

<span id="undefined" />

### prefix

`= 'block'`

<span id="undefined" />

### start\_time

Starting time of this schedule block.

**Return type**

`int`

<span id="undefined" />

### stop\_time

Stopping time of this schedule block.

**Return type**

`int`

<span id="undefined" />

### timeslots

Time keeping attribute.

**Return type**

`Dict`\[`Channel`, `List`\[`Tuple`\[`int`, `int`]]]