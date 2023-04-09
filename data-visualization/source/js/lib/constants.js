//@ts-check
"use strict";

// ############################################################################# Data
const DATA_PATH = "data/data.csv";
const DATA_PATH_ABS = "data/data-abs.min.csv";
const DATA_PATH_REL = "data/data-rel.min.csv";
const DATA_PATH_POPULATION = "data/population.csv";

const DATA_PATH_INTER_REGULAR = "source/assets/font/Inter-Regular.ttf";
const DATA_PATH_INTER_MEDIUM = "source/assets/font/Inter-Medium.ttf";
const DATA_PATH_INTER_BOLD = "source/assets/font/Inter-Bold.ttf";

const COUNTRY = "COUNTRY";
const COUNTRY_NAME = "Country";
const AGE_GROUP = "AGE_GROUP";
const TRAFFIC_PARTICIPATION = "TRAFFIC_PARTICIPATION";
const YEAR = "Year";
const UNIT = "Unit";
const VALUE = "Value";

const AGE_GROUP_0_14 = "0-14Y";
const AGE_GROUP_15_24 = "15-24Y";
const AGE_GROUP_25_64 = "25-64Y";
const AGE_GROUP_65_MORE = "65MORE";

const PER_HABITANTS = 100_000;
const SUM = "sum";
const MEAN = "mean";
const MEDIAN = "median";

// ############################################################################# p5.js

const P5_TABLE_EXTENSION = "CSV";
const P5_TABLE_HEADER = "header";

// ############################################################################# Custom
const CHART_BAR_HEIGHT = 200; // 300
const CHART_BAR_GAP = 4;
const CHART_INNER_RADIUS = 200;
const CHART_OUTER_RADIUS = 700;
const CHART_OUTER_RADIUS_OFFSET = 20;
const CHART_PILLAR_WIDTH = 500;

const CHART_COLOR_HSL_DARKER = "hsl(360, 100%, 25%)";
const CHART_COLOR_HSL_DARK = "hsl(360, 100%, 75%)";
const CHART_COLOR_HSL_LIGHT = "hsl(360, 100%, 90%)";
const CHART_COLOR_HSL_LIGHTER = "hsl(360, 100%, 99%)";
const CHART_YEAR_DEFAULT = 1990;
const YEAR_MIN = CHART_YEAR_DEFAULT;
const YEAR_MAX = 2020;

const CHART_PADDING_DEFAULT = 100;
const CHART_PADDING_BOTTOM_DEFAULT = 350;
const CHART_N_MAX = 33;
const CHART_W_MIN = 11.272727272727273;

const MODAL_COLUMN_A = "Age group";
const MODAL_COLUMN_B = "REL";
const MODAL_COLUMN_B_DESC = `per ${PER_HABITANTS} habitants`;
const MODAL_COLUMN_C = "ABS";
/**
 * @param {number} year
 * @returns {string}
 */
const MODAL_COLUMN_C_DESC = (year) => `total in ${year}`;

const MODAL_ROW_A = "0-14 years";
const MODAL_ROW_B = "15-24 years";
const MODAL_ROW_C = "25-64 years";
const MODAL_ROW_D = "65+ years";
const MODAL_ROW_E = "Σ";

const NOT_SPECIFIED = "N/A";
const FLAG_INCOMPLETE = "/";
