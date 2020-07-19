import { daysLeft } from './daysLeft'
const date = new Date();

test('Difference in Days', () => {
    expect(daysLeft(date)).toBe(-1)
})