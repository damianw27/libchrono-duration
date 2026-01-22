import { DurationTermTail } from '$terms/duration-term-tail';
import { TermOperator } from '$terms/types/term-operator';
import { AntlrMocks } from '$test/_helpers_/antlr-mocks';

describe('DurationTermTail', () => {
	const antlrMocks = new AntlrMocks();

	describe('#of', () => {
		it('should create an instance of DurationTermTail with MUL operator', () => {
			const context = antlrMocks.durationTermTailMulContextMock;
			const result = DurationTermTail.of(context);
			expect(result.getOperator()).toBe(TermOperator.MUL);
			expect(result.apply(1000)).not.toBe(NaN);
		});

		it('should create an instance of DurationTermTail with DIV operator', () => {
			const context = antlrMocks.durationTermTailDivContextMock;
			const result = DurationTermTail.of(context);
			expect(result.getOperator()).toBe(TermOperator.DIV);
			expect(result.apply(1000)).not.toBe(NaN);
		});
	});

	describe('#apply', () => {
		it('should apply MUL operator on timestamp', () => {
			const context = antlrMocks.durationTermTailMulContextMock;
			const result = DurationTermTail.of(context);
			expect(result.apply(500)).toBe(2000);
		});

		it('should apply DIV operator on timestamp', () => {
			const context = antlrMocks.durationTermTailDivContextMock;
			const result = DurationTermTail.of(context);
			expect(result.apply(1000)).toBe(500);
		});
	});
});
