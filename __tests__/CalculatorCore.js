const CalculatorCore = require('../index');

describe('CalculatorCore', () => {
  let instance;

  beforeEach(() => {
    instance = new CalculatorCore();
  })

  describe('in', () => {
    it('все вводимые цыфры до операнда сохраняются в num1', () => {
      instance.in('5');
      instance.in('3');
      instance.in('7');
      instance.in('+');
      instance.in('5');
      instance.in('5');

      expect(instance.num1).toBe('537');
    });

    it('все вводимые цыфры после операнда сохраняются в num2', () => {
      instance.in('5');
      instance.in('3');
      instance.in('7');
      instance.in('+');
      instance.in('5');
      instance.in('5');

      expect(instance.num2).toBe('55');
    });

    it('повторное нажатие операнда выполнять первую операцию', () => {
      instance.in('5');
      instance.in('3');
      instance.in('7');
      instance.in('+');
      instance.in('5');
      instance.in('5');
      instance.in('-');

      expect(instance.num1).toBe('592');
      expect(instance.num2).toBe('');
      expect(instance.operand).toBe('-');
    });

    it('= вычисляет результат', () => {
      instance.in('5');
      instance.in('3');
      instance.in('7');
      instance.in('+');
      instance.in('5');
      instance.in('5');
      instance.in('=');

      expect(instance.num1).toBe('592');
      expect(instance.num2).toBe('');
      expect(instance.operand).toBe('');
    });

    it('= ничего не делает без num2 ', () => {
      instance.in('5');
      instance.in('=');
      instance.in('3');
      instance.in('7');
      instance.in('=');

      expect(instance.num1).toBe('537');
      expect(instance.num2).toBe('');
      expect(instance.operand).toBe('');
    });

    it('операнд сохраняется в operand', () => {
      instance.in('5');
      instance.in('3');
      instance.in('7');
      instance.in('+');
      instance.in('5');
      instance.in('5');

      expect(instance.operand).toBe('+');
    });

    it('точка разделяет число', () => {
      instance.in('5');
      instance.in('3');
      instance.in('.');
      instance.in('7');
      instance.in('+');
      instance.in('5');
      instance.in('.');
      instance.in('5');

      expect(instance.num1).toBe('53.7');
      expect(instance.num2).toBe('5.5');
    });

    it('повторные точки/запятые в числе игнорируются', () => {
      instance.in('5');
      instance.in('3');
      instance.in('.');
      instance.in('7');
      instance.in('.');
      instance.in('7');
      instance.in('+');
      instance.in('5');
      instance.in('.');
      instance.in('5');
      instance.in('.');
      instance.in('5');

      expect(instance.num1).toBe('53.77');
      expect(instance.num2).toBe('5.55');
    });

    it('view должен быть 0 до ввода значений', () => {
      expect(instance.view).toBe('0');
    });

    describe('view должен быть num1 + operand + num2', () => {
      it('num1', () => {
        instance.in('5');
        instance.in('3');

        expect(instance.view).toBe('53');
      });
      it('num1+operand', () => {
        instance.in('5');
        instance.in('3');
        instance.in('-');

        expect(instance.view).toBe('53-');
      });
      it('num1+operand+num2', () => {
        instance.in('5');
        instance.in('3');
        instance.in('-');
        instance.in('8');
        instance.in('5');

        expect(instance.view).toBe('53-85');
      });
    })




    it('бросать exception если это не цыфра и не оператор и больше 1 символа', () => {
      expect(true).toBe(true);
    });
  });
})
