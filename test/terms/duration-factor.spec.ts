import { defaultOptions } from '$core/default-options';
import { parseOptions } from '$core/option-utils';
import { DurationExpression } from '$terms/duration-expression';
import { DurationFactor } from '$terms/duration-factor';
import { DurationStatement } from '$terms/duration-statement';
import { AntlrMocks } from '$test/_helpers_/antlr-mocks';

describe('DurationFactor', () => {
	const opt = parseOptions(defaultOptions);
	const antlrMocks = new AntlrMocks();

	describe('#of', () => {
		test('creates DurationFactor with DurationStatement child if durationStatement is defined', () => {
			const context = antlrMocks.durationFactorContextStatement1Mock;
			const result = DurationFactor.of(context);
			expect(result.content).toBeInstanceOf(DurationStatement);
		});

		test('creates DurationFactor with DurationExpression child if durationExpression is defined', () => {
			const context = antlrMocks.durationFactorContextAddMock;
			const result = DurationFactor.of(context);
			expect(result.content).toBeInstanceOf(DurationExpression);
		});

		test('throws an error if neither durationStatement nor durationExpression is defined', () => {
			const context = antlrMocks.durationFactorContextEmptyMock;

			const result = () => DurationFactor.of(context);
			expect(result).toThrowError('Duration factor needs to have child');
		});
	});

	describe('#solve', () => {
		test('returns the solve result of the content', () => {
			const context = antlrMocks.durationFactorContextStatement1Mock;
			const result = DurationFactor.of(context);
			expect(result.solve(opt)).not.toBe(NaN);
		});
	});
});
