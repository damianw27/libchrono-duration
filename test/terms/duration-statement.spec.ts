import { defaultOptions } from '$core/default-options';
import { parseOptions } from '$core/option-utils';
import { DurationStatement } from '$terms/duration-statement';
import { AntlrMocks } from '$test/_helpers_/antlr-mocks';

describe('DurationStatement', () => {
	const opt = parseOptions(defaultOptions);
	const antlrMocks = new AntlrMocks();

	describe('#solve', () => {
		it('should return 0 if all duration units are absent', () => {
			const context = antlrMocks.durationStatementContextEmptyMock;
			const statement = new DurationStatement(context);
			const result = statement.solve(opt);
			expect(result).toBe(0);
		});

		it('should correctly compute the duration in milliseconds', () => {
			const context = antlrMocks.durationStatementContext1Mock;
			const statement = new DurationStatement(context);
			const result = statement.solve(opt);
			expect(result).toBe(788645100);
		});

		it('should ignore unrecognized units', () => {
			const context = antlrMocks.durationStatementContextUnrecognizedMock;
			const statement = new DurationStatement(context);
			const result = statement.solve(opt);
			expect(result).toBe(173045100);
		});

		it('should return 0 if all duration units have zero value', () => {
			const context = antlrMocks.durationStatementContextZeroMock;
			const statement = new DurationStatement(context);
			const result = statement.solve(opt);
			expect(result).toBe(0);
		});
	});
});
