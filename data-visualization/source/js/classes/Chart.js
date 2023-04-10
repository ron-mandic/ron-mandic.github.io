//@ts-check
"use strict";

class Chart {
	/**
	 * @param {Chart} chart
	 * @returns {number}
	 */
	static startOf = (chart) => chart.start;
	/**
	 * @param {Chart} chart
	 * @returns {number}
	 */
	static stopOf = (chart) => chart.stop;

	// #############################################################################

	/** @type {p5.Table} */ totalData;
	/** @type {p5.TableRow[]} */ data;
	/** @type {Bar[]} */ bars;
	/** @type {Arc[]} */ arcs;
	/** @type {Segment[]} */ segments;

	// #############################################################################

	/**
	 * @param {p5.Table} data
	 * @param {boolean} isHalved
	 * @param {"left" | "right"} side
	 */
	constructor(data, isHalved, side = LEFT) {
		this.totalData = data;
		this.data = null;

		this.bars = [];
		this.arcs = [];
		this.segments = [];

		this.isHalved = isHalved;
		this.side = side;

		// I) width = 1600 = 2(p + r + nw + ng - g)
		// II) height = 1200 = h + r + pB + pT + nw + (n - 1)g
		this.rA = CHART_INNER_RADIUS;
		this.dA = this.rA * 2;
		this.rB = CHART_OUTER_RADIUS;
		this.dB = this.rB * 2;
		this.g = CHART_BAR_GAP;

		this.p = CHART_PADDING_DEFAULT;
		this.pB = CHART_PADDING_BOTTOM_DEFAULT;

		this.totalWidth = Canvas.WIDTH - 2 * this.p;
		this.totalHeight = this.rB;

		this.originBarL = { x: this.p, y: height - this.pB };
		this.originBarR = {
			x: width / 2 + CHART_INNER_RADIUS / 2,
			y: height - this.pB,
		};
		this.originArc = { x: width / 2, y: height - this.pB };

		this.globalMin = null;
		this.globalMax = null;
		this.globalMinValue = 0;
		this.globalMaxValue = null;

		// @ts-ignore
		this.absValues = [];
		// @ts-ignore
		this.perValues = [];
		// @ts-ignore
		this.arcValues = [];

		this.showGrid = true;

		this.slider = new Slider(
			this,
			width / 2 - this.rA,
			Canvas.HEIGHT + 40 + 100,
			400,
			40,
			1990,
			2020 + 1,
			1990
		);

		this.ui = select("#rect").elt;
		this.list = select("#country-list").elt;
		this.listHeading = select("#numCountries").elt;
		this.listItems = null;
		this.template = select("#country-list-item-template").elt;

		this.loader = select(".loader").elt;

		this.listItem = null;
		this.selectedSegment = null;

		this.getOrientationLimits();
	}

	// ############################################################################# Logic

	init(amount = this.n) {
		let rA = this.rA;
		let rB = this.rA + this.w;
		let dArc = this.dA + this.w;

		for (let i = 0; i < amount; i++) {
			// ##################################### Arc
			// What the fuck?!
			if (i) {
				dArc += this.w * 2 + this.g * 2;
				rA = rB + this.g;
				rB = rA + this.w;
			}
			let arc = new Arc(
				this.originArc,
				0,
				0,
				dArc,
				dArc,
				this.w,
				rA,
				rB,
				this.start,
				this.stop,
				this.globalStart,
				this.globalStop,
				CHART_COLOR_HSL_DARKER,
				CHART_COLOR_HSL_LIGHT,
				null
			);
			this.arcs.push(arc);
		}

		// Mirror the array due to the geometrical calculations
		this.arcs.reverse();

		for (let i = 0; i < amount; i++) {
			// ##################################### Segment
			let segment = new Segment(i, this, this.arcs[i]);
			this.segments.push(segment);
		}

		this.arrayCountryNames = this.getAllCountryNames();
		this.arrayCountryCodes = this.getAllCountryCodes();
	}

	flush() {
		this.bars = [];
		this.arcs = [];
		this.segments = [];

		this.absValues = [];
		this.perValues = [];
		this.arcValues = [];

		this.globalMin = null;
		this.globalMax = null;
		this.globalMinValue = 0;
		this.globalMaxValue = null;

		this.listItem = null;
		this.listItems = null;
		this.selectedSegment = null;

		this.flushUI();
		Modal.flush();

		console.clear();
	}

	getOrientationLimits() {
		switch (this.side) {
			case LEFT: {
				this.factor = -1;

				this.start = PI;
				this.globalStart = this.start;

				if (this.isHalved) {
					this.stop = -HALF_PI;
				} else {
					this.stop = 0;
				}

				this.globalStop = this.stop;

				break;
			}
			case RIGHT: {
				this.factor = 1;

				this.stop = 0;
				this.globalStop = this.stop;

				if (this.isHalved) {
					this.start = -HALF_PI;
				} else {
					this.start = PI;
				}

				this.globalStart = this.start;

				break;
			}
			default:
				break;
		}
	}

	/**
	 * @param {string|number} year The year of which the data should be extracted
	 * @returns {p5.TableRow[]}
	 */
	getResultsFrom(year) {
		if (+year < YEAR_MIN) {
			year = YEAR_MIN;
			console.warn(
				`INFO: ${year} specified does not exist in the data set. The year has been set to ${YEAR_MIN}`
			);
		}
		if (+year > YEAR_MAX) {
			year = YEAR_MAX;
			console.warn(
				`INFO: ${year} specified does not exist in the data set. The year has been set to ${YEAR_MAX}`
			);
		}

		this.year = +year;
		return this.totalData.matchRows(year.toString(), YEAR);
	}

	/**
	 * @param {p5.TableRow[]} array
	 * @param {string} column
	 * @returns {(string | number)[]}
	 */
	getValuesFrom(array, column) {
		return array.map((row) => {
			let value = row.get(column);
			return Type.isNumber(value) ? +value : value;
		});
	}

	/**
	 * @param {string} countryCode The country name of which the data should be extracted
	 * @returns {p5.TableRow[]}
	 */
	getDataFor(countryCode) {
		if (!this.data) return;
		return this.data.filter((row) => row.get(COUNTRY) === countryCode);
	}

	/**
	 * @returns {string[]}
	 */
	getAllCountryNames() {
		if (!this.data) return;
		// @ts-ignore
		return Array.from(
			new Set(this.data.map((row) => row.get(COUNTRY_NAME)))
		);
	}

	/**
	 * @returns {string[]}
	 */
	getAllCountryCodes() {
		if (!this.data) return;
		// @ts-ignore
		return Array.from(new Set(this.data.map((row) => row.get(COUNTRY))));
	}

	fillEmptyData(rows, result) {
		for (let i = 0; i < AgeGroups.length; i++) {
			let ageGroup = AgeGroups[i];
			let row = rows.find((row) => row.get(AGE_GROUP) === ageGroup);

			if (!row) {
				// @ts-ignore
				result[ageGroup] = NOT_SPECIFIED;
			}
		}
	}

	getAbsValues() {
		let results = [];

		for (let i = 0; i < this.arrayCountryCodes.length; i++) {
			let result = {};
			let countryCode = this.arrayCountryCodes[i];
			let totalCases = 0;

			let rows = this.getDataFor(countryCode);

			result.name = this.arrayCountryNames[i];
			result.code = countryCode;

			if (rows.length < AgeGroups.length) {
				this.fillEmptyData(rows, result);
				result.flag = FLAG_INCOMPLETE;
			}

			for (let row of rows) {
				let ageGroup = row.get(AGE_GROUP);
				let cases = +row.get(VALUE);

				// @ts-ignore
				result[ageGroup] = cases;

				totalCases += cases;
			}

			result.total = totalCases;
			results.push(result);
		}

		this.absValues = results;
	}

	getPerValues() {
		let results = [];

		for (let i = 0; i < this.arrayCountryCodes.length; i++) {
			let result = {};
			let countryCode = this.arrayCountryCodes[i];
			let totalCasesPerHabitants = 0;

			let rows = this.getDataFor(countryCode);
			let population = populationOf(countryCode, `${this.year}`);

			result.name = this.arrayCountryNames[i];
			result.code = countryCode;

			if (rows.length < AgeGroups.length) {
				this.fillEmptyData(rows, result);
				result.flag = FLAG_INCOMPLETE;
			}

			for (let row of rows) {
				let ageGroup = row.get(AGE_GROUP);
				let casesPerHabitants = per(+row.get(VALUE), population);

				// Offset for dealing with values that are zero
				if (!casesPerHabitants) casesPerHabitants = 1e-2;

				// @ts-ignore
				result[ageGroup] = casesPerHabitants;

				totalCasesPerHabitants += casesPerHabitants;
			}

			this.setLimits(totalCasesPerHabitants);

			this.numSectors =
				this.globalMaxValue < 10
					? this.globalMaxValue * 2
					: this.globalMaxValue;
			// this.numSectors = Math.max(
			// 	...factors(this.globalMaxValue).filter(
			// 		(x) => x != 1 && x != this.globalMaxValue
			// 	)
			// );

			result.total = totalCasesPerHabitants;

			results.push(result);
		}

		// @ts-ignore
		this.perValues = results;
	}

	getArcFactors() {
		let startFactor, stopFactor;

		if (!this.isHalved && this.side === LEFT) {
			startFactor = 1;
			stopFactor = 1;
		} else if (!this.isHalved && this.side === RIGHT) {
			startFactor = -1;
			stopFactor = -1;
		} else if (this.isHalved && this.side === LEFT) {
			startFactor = 1;
			stopFactor = -1;
		} else if (this.isHalved && this.side === RIGHT) {
			startFactor = -1;
			stopFactor = 1;
		}

		return { startFactor, stopFactor };
	}

	/**
	 * @param {number} value
	 */
	setLimits(value) {
		if (Type.isNull(this.globalMin) || value < this.globalMin) {
			this.globalMin = value;
		}
		if (Type.isNull(this.globalMax) || value > this.globalMax) {
			this.globalMax = value;
		}

		this.globalMaxValue = Math.ceil(this.globalMax + 1);
	}

	setHalved(value) {
		if (value !== this.isHalved) {
			this.isHalved = value;
			this.getOrientationLimits();
			this.flush();
			this.rebuildFor(this.year || CHART_YEAR_DEFAULT);
		}
	}

	/**
	 * @param {Segment} segment The segment that encloses the outer arc
	 * @param {{total: number; name: string;}} perValue
	 */
	setArc(segment, perValue) {
		let tempStart, tempStop;
		let { globalStart, globalStop } = segment.arc;
		let { total, name, code } = perValue;
		let { startFactor, stopFactor } = this.getArcFactors();

		if (!this.isHalved && this.side === LEFT) {
			tempStop = -map(
				total,
				this.globalMinValue,
				this.globalMaxValue,
				startFactor * globalStart,
				stopFactor * globalStop
			);
			segment.arc.stop += tempStop;
		} else if (!this.isHalved && this.side === RIGHT) {
			tempStart = map(
				total,
				this.globalMinValue,
				this.globalMaxValue,
				startFactor * globalStart,
				stopFactor * globalStop
			);
			segment.arc.start -= tempStart;
		} else if (this.isHalved && this.side === LEFT) {
			tempStop = -map(
				total,
				this.globalMinValue,
				this.globalMaxValue,
				startFactor * globalStart,
				stopFactor * globalStop
			);
			segment.arc.stop += tempStop + HALF_PI;
		} else if (this.isHalved && this.side === RIGHT) {
			tempStart = map(
				total,
				this.globalMinValue,
				this.globalMaxValue,
				stopFactor * globalStop,
				startFactor * globalStart
			);
			segment.arc.start -= tempStart - HALF_PI;
		}

		segment.perTotalValue = total;
		segment.name = name;
		segment.code = code;
	}

	/**
	 * @param {Segment} segment The segment that encloses the outer arc
	 * @param {{total: number; name: string;}} perValue
	 */
	setSubArcs(segment, perValue) {
		let tempStart, tempStop;
		let { start, globalStart, stop, globalStop } = segment.arc;
		let { total, name } = perValue;
		let { startFactor, stopFactor } = this.getArcFactors();

		// @ts-ignore
		let _values = Object.entries(perValue).filter(([key, _]) =>
			/\d/.test(key)
		);
		let acc = 0;

		let results = { total, name, values: [] };

		for (let [key, value] of _values) {
			if (!this.isHalved && this.side === LEFT) {
				if (Type.isUndefined(tempStart)) tempStart = start;
				else tempStart = tempStop;

				acc += value;

				tempStop = -map(
					acc,
					this.globalMinValue,
					this.globalMaxValue,
					startFactor * globalStart,
					stopFactor * globalStop
				);

				results.values.push({
					key,
					value,
					start: tempStart,
					stop: tempStop,
				});
			} else if (!this.isHalved && this.side === RIGHT) {
				if (Type.isUndefined(tempStop)) tempStop = stop;
				else tempStop = tempStart;

				acc += value;

				tempStart = map(
					acc,
					this.globalMinValue,
					this.globalMaxValue,
					stopFactor * globalStop,
					startFactor * globalStart
				);

				results.values.push({
					key,
					value,
					start: tempStart,
					stop: tempStop,
				});
			} else if (this.isHalved && this.side === LEFT) {
				if (Type.isUndefined(tempStart)) tempStart = start;
				else tempStart = tempStop;

				acc += value;

				tempStop = -map(
					acc,
					this.globalMinValue,
					this.globalMaxValue,
					startFactor * globalStart,
					stopFactor * globalStop
				);

				results.values.push({
					key,
					value,
					start: tempStart,
					stop: tempStop,
				});
			} else if (this.isHalved && this.side === RIGHT) {
				if (Type.isUndefined(tempStop)) tempStop = stop;
				else tempStop = tempStart;

				acc += value;

				tempStart = -map(
					acc,
					this.globalMinValue,
					this.globalMaxValue,
					stopFactor * globalStop,
					startFactor * globalStart
				);

				results.values.push({
					key,
					value,
					start: tempStart,
					stop: tempStop,
				});
			}
		}

		// if (segment.name === "USA") console.log(results);

		if (!this.arcValues) this.arcValues = [];
		this.arcValues.push(results);
	}

	setArcValues() {
		if (!this.perValues) return;
		if (!this.segments) return;

		if (this.perValues.length !== this.segments.length)
			throw new Error(
				"ERROR: The amount of segments and perValues does not match"
			);

		for (let i = 0; i < this.segments.length; i++) {
			this.setArc(this.segments[i], this.perValues[i]);
			this.setSubArcs(this.segments[i], this.perValues[i]);
		}

		// console.log(this.perValues[this.perValues.length - 1]);
		// console.log(this.segments[this.segments.length - 1]);
	}

	/**
	 * @param {p5.TableRow[]} results The rows of data for a specific year
	 * @param {() => any} [callback] A callback function after the data has been processed
	 */
	build(results, callback) {
		this.data = results;

		this.n = !(results.length % 4)
			? results.length / 4
			: this.getAllCountryCodes().length;
		this.w = (CHART_PILLAR_WIDTH - (this.n - 1) * this.g) / this.n;

		this.pT = height - this.totalHeight - this.pB;

		this.init(this.n);

		this.getAbsValues();
		this.getPerValues();
		this.setArcValues();
		this.buildArcs();

		this.setUI();

		if (callback) callback();
	}

	buildArcs() {
		for (let i = 0; i < this.segments.length; i++) {
			let _values = this.arcValues[i].values;

			for (let j = 0; j < _values.length; j++) {
				const { key, value, start, stop } = _values[j];
				const segment = this.segments[i];
				const { arc } = segment;

				const subArc = new Arc(
					arc.origin,
					arc.x,
					arc.y,
					arc.w,
					arc.h,
					arc.strokeWidth,
					arc.rA,
					arc.rB,
					start,
					stop,
					arc.globalStart,
					arc.globalStop,
					// @ts-ignore
					AgeGroupColours[key],
					// @ts-ignore
					AgeGroupColourLighter[key],
					segment,
					true,
					OPEN
				);

				subArc.ageGroup = key;
				subArc.absValue = this.absValues[i][key];
				subArc.perValue = this.perValues[i][key];
				subArc.id = i;

				if (
					subArc.absValue === NOT_SPECIFIED ||
					subArc.perValue === NOT_SPECIFIED
				) {
					subArc.flag = FLAG_INCOMPLETE;
					if (!segment.flag) segment.flag = FLAG_INCOMPLETE;
				}

				if (segment.subArcs.length < AgeGroups.length) {
					segment.subArcs.push(subArc);
				}
			}
		}
	}

	/**
	 * @param {string|number} year
	 */
	rebuildFor(year) {
		this.flush();
		this.build(this.getResultsFrom(year), () => {
			for (let children of chartL.list.children) {
				children.addEventListener("click", () => {
					let code = children.getAttribute("code");

					chartL.selectListItem(children, code);
				});
			}
		});
		this.buildArcs();
	}

	/**
	 * @param {Segment} segment
	 * @returns {number}
	 */
	calcCol0Width(segment) {
		if (!segment) return;

		return Math.max(
			textWidth(MODAL_COLUMN_A),
			textWidth(MODAL_ROW_A),
			textWidth(MODAL_ROW_B),
			textWidth(MODAL_ROW_C),
			textWidth(MODAL_ROW_D),
			textWidth(MODAL_ROW_E)
		);
	}

	calcCol1Width(segment) {
		if (!segment) return;

		let { subArcs } = segment;
		const perValues = subArcs.map((subArc) =>
			textWidth(`${round(subArc.perValue, 2)}`)
		);

		return Math.max(
			textWidth(MODAL_COLUMN_B),
			...Array.from(perValues.map((v) => textWidth(v))),
			segment.perTotalValue
		);
	}
	calcCol2Width(segment) {
		if (!segment) return;

		let { subArcs } = segment;
		const absValues = subArcs.map((subArc) =>
			textWidth(`${subArc.absValue}`)
		);

		return Math.max(
			textWidth(MODAL_COLUMN_B),
			...absValues,
			absValues.reduce((a, b) => a + b, 0)
		);
	}

	/**
	 * @param {Segment} segment
	 * @returns {object}
	 */
	getColDimensions(segment) {
		return {
			col0Width: this.calcCol0Width(segment),
			col1Width: this.calcCol1Width(segment),
			col2Width: this.calcCol2Width(segment),
		};
	}

	setUI() {
		for (let i = 0; i < this.perValues.length; i++) {
			let clone = this.template.content.cloneNode(true);
			let country = this.perValues[i];

			let listItem = clone.querySelector("li.country");
			listItem.setAttribute("code", country.code);

			let countryName = clone.querySelector("span.name");
			countryName.innerText = `${country.name}`;

			let countryCode = clone.querySelector("span.code");
			countryCode.innerText = `${country.code}`;

			// --------------------------------------------------------

			let population = populationOf(country.code, this.year.toString());
			let num0 = `${population / 1e6}`;
			let countryPopulation = clone.querySelector("span.population");

			let cases = country.total;
			let num1 = `${cases}`;
			let countryCases = clone.querySelector("span.cases");

			let match0 = num0.match(/\d+\.\d{2}/);
			let match1 = num1.match(/\d+\.\d{2}/);

			num0 = match0 ? match0[0] : `${round(population / 1e6)}`;
			num1 = match1 ? match1[0] : `${round(cases)}`;

			countryPopulation.innerText = num0 + " Mio.";
			countryCases.innerText = num1;

			this.list.appendChild(clone);
		}

		this.listHeading.innerText = `${this.perValues.length}`;

		this.listItems = selectAll("li.country");
	}

	flushUI() {
		while (this.list.firstChild) {
			this.list.firstChild.remove();
		}
	}

	// Visual
	selectListItem(children, code) {
		if (!this.listItem) {
			this.listItem = children;
			this.listItem.classList.add("active");

			this.selectSegment(code);
			// console.log(this.selectedSegment);
			return;
		}

		if (this.listItem !== children) {
			this.listItem.classList.remove("active");
			this.listItem = children;
			this.listItem.classList.add("active");

			this.selectSegment(code);
			// console.log(this.selectedSegment);
		} else {
			this.listItem.classList.remove("active");
			this.listItem = null;
			this.selectedSegment = null;
		}
	}

	// Logic
	selectSegment(code) {
		this.selectedSegment = this.segments.find((s) => s.code === code);
	}

	showUI() {
		this.ui.style?.display === "block";
	}
	hideUI() {
		this.ui.style?.display === "none";
	}

	toggleGrid() {
		this.showGrid = !this.showGrid;
	}

	onPress(_keyCode, callback) {
		if (_keyCode === keyCode) callback();
	}

	// ############################################################################# Graphics

	grid() {
		once(() => {
			rectMode(CORNER);
			translate(this.p, this.pT);
			strokeWeight(1);
			stroke(360, 100, 50, 1);
			fill(360, 100, 50, 0.01);
			rect(0, 0, this.totalWidth, this.totalHeight);
		});
	}

	/**
	 * @param {number} n
	 * @param {number} r
	 */
	sectors(
		n = this.numSectors, // n = 2 oder n = this.numSectors
		r = this.rB,
		range = this.isHalved ? 90 : 180
	) {
		if (!n) throw new Error("No segments defined");

		switch (this.side) {
			case LEFT: {
				range *= 1;
				break;
			}
			case RIGHT: {
				range *= -1;
				break;
			}
			default:
				break;
		}

		once(() => {
			strokeWeight(1);
			stroke(360, 100, 50, 0.5);

			for (let i = 0; i <= n; i++) {
				once(() => {
					rectMode(CENTER);
					translate(this.originArc.x, this.originArc.y);
					angleMode(RADIANS);

					line(
						0,
						0,
						this.factor * cos(radians((i / n) * range)) * r,
						this.factor * sin(radians((i / n) * range)) * r
					);
				});
			}
		});

		once(() => {
			rectMode(CENTER);
			translate(width / 2, height - this.pB);

			textAlign(CENTER, CENTER);

			for (let i = 0; i <= this.numSectors; i++) {
				once(() => {
					angleMode(RADIANS);

					text(
						`${round(
							(this.globalMaxValue / this.numSectors) * i,
							this.globalMaxValue < 10 ? 1 : 0
						)}`,
						this.factor *
							cos(radians((i / n) * range)) *
							(this.rB + CHART_OUTER_RADIUS_OFFSET),
						this.factor *
							sin(radians((i / n) * range)) *
							(this.rB + CHART_OUTER_RADIUS_OFFSET)
					);
				});
			}
		});

		return this;
	}

	drawCaption() {
		once(() => {
			translate(40, 40);
			let yOffset = 0;

			textAlign(LEFT, TOP);

			textSize(24);
			textStyle(BOLD);
			textFont(INTER_BOLD);
			text("Casualities by car and age group", 0, 0);

			textSize(18);
			textStyle(NORMAL);
			textFont(INTER_MEDIUM);
			yOffset = yOffset + 24 + 5;
			text(`per 100,000 habitants`, 0, yOffset);

			textSize(16);
			noStroke();
			textFont(INTER_REGULAR);
			yOffset = yOffset + 30 + 32;
			text("0-14", 45, yOffset + 12 / 2);
			fill(`hsl(0, 67%, 58%)`);
			rect(0, yOffset, 31);

			yOffset = yOffset + 12 + 31;
			fill("black");
			text("15-24", 45, yOffset + 12 / 2);
			fill(`hsl(0, 48%, 44%)`);
			rect(0, yOffset, 31);

			yOffset = yOffset + 12 + 31;
			fill("black");
			text("25-64", 45, yOffset + 12 / 2);
			fill(`hsl(0, 48%, 29%)`);
			rect(0, yOffset, 31);

			yOffset = yOffset + 12 + 31;
			fill("black");
			text("65+", 45, yOffset + 12 / 2);
			fill(`hsl(0, 48%, 15%)`);
			rect(0, yOffset, 31);
		});
	}

	drawCursorLine() {
		once(() => {
			let mouseVector = createVector(mouseX, mouseY);
			ellipseMode(CENTER);
			translate(width / 2, height - this.pB);

			let condition = !this.isHalved
				? mouseY <= height - this.pB
				: this.side === LEFT
				? mouseY <= height - this.pB && mouseX <= width / 2
				: mouseY <= height - this.pB && mouseX >= width / 2;

			if (condition) {
				let radians = atan2(
					mouseVector.y - (height - this.pB),
					mouseVector.x - width / 2
				);

				strokeWeight(2);
				stroke("rgba(0, 0, 0, .5)");
				line(0, 0, cos(radians) * 700, sin(radians) * 700);

				noStroke();
				fill("black");
				ellipse(cos(radians) * 700, sin(radians) * 700, 10, 10);

				textSize(16);
				textStyle(BOLD);
				textAlign(CENTER, CENTER);

				let start = this.isHalved ? -HALF_PI : -PI;

				let textValue =
					this.side === RIGHT
						? map(
								radians,
								start,
								0,
								this.globalMaxValue,
								this.globalMinValue
						  )
						: !this.isHalved
						? map(
								radians,
								start,
								0,
								this.globalMinValue,
								this.globalMaxValue
						  )
						: this.globalMaxValue -
						  -map(
								radians,
								start,
								0,
								this.globalMinValue,
								this.globalMaxValue
						  );

				text(
					round(textValue, 2),
					cos(radians) * 735,
					sin(radians) * 735
				);
			}
		});
	}

	drawInfo() {
		once(() => {
			translate(chartL.p, height - 30);
			textSize(10);
			text(
				"IG2 SoSe 23/23: Emily Kühl, Olivia Regattieri and Ron Eros Mandić",
				0,
				0
			);
			text("Data: OECD, World Bank", 0, 10 + 4);
		});
	}

	draw() {
		// this.grid();

		if (!this.n) {
			throw new Error(
				"No segments defined. Please build the chart before drawing it"
			);
		}
		for (let i = 0; i < this.segments.length; i++) {
			this.segments[i].draw();
		}

		if (this.showGrid) this.sectors();
		this.drawCursorLine();
		this.drawCaption();
		this.drawInfo();
	}
}
