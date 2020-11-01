import { camelCase, paramCase, pascalCase, snakeCase } from 'https://deno.land/x/case/mod.ts';

const text = "test ce code";

const camelCaseText = camelCase(text);

const pascalCaseText = pascalCase(text);

const paramCaseText = paramCase(text);

const snakeCaseText = snakeCase(text);
console.log(camelCaseText, pascalCaseText, paramCaseText, snakeCaseText);
